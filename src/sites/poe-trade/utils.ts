import FileSaver from "file-saver";
import PoeItem from "@/utils/poe-item";

import notable from "@/utils/cluster-jewels/notable.json";
import minor from "@/utils/cluster-jewels/minor.json";
import keystones from "@/utils/cluster-jewels/keystones.json";
import {Blocker, saveToFile} from "@/utils/helpers";

const clusterJewels: { [id: string]: string } = {...notable,
  ...minor,
  ...keystones};

function getDefaultOffer(userText: string) {
  return function(element: HTMLElement) {
    return `${whisperMessage(element)} ${userText}`;
  };
}

function whisperMessage(o: HTMLElement) {
  const getData = (function() {
    const item: HTMLElement = o.closest(".item") as HTMLElement;
    return function(attr: string): string | null {
      return item.getAttribute(`data-${attr}`);
    };
  }());
  const bo = getData("buyout") ? ` listed for ${getData("buyout")}` : "";
  let prefix = "";
  if (getData("level")) {
    prefix += `level ${getData("level")} `;
  }
  if (getData("quality")) {
    prefix += `${getData("quality")}% `;
  }
  let message = `@${getData("ign")} Hi, I would like to buy your ${prefix}${getData("name")}${bo} in ${getData("league")}`;
  const tab = getData("tab");
  if (tab) {
    const x = parseInt(getData("x")!),
      y = parseInt(getData("y")!);
    message += ` (stash tab "${tab}"`;
    if (x >= 0 && y >= 0) {
      message += `; position: left ${x + 1}, top ${y + 1}`;
    }
    message += ")";
  }
  return message;
}

function getCalcOffer(paramNames: string[], paramMap: { [id: string]: string }) {
  return function(element: HTMLElement) {
    let summ = 0;
    paramNames.forEach((p) => {
      const v: string = getAttr(element, p)!;
      if (isNaN(v as unknown as number)) {
        console.warn(element, `${v} is nan`);
      } else {
        summ += parseInt(v);
      }
    });
    if (paramMap[summ]) {
      return getDefaultOffer(`My offer is ${paramMap[summ]}`)(element);
    }
    console.warn(element, `Sum "${summ}"  missmatch`);
    return "";
  };
}


export function saveCurrentData(block: string, offer: string) {
  const offerStr = getDefaultOffer(offer);
  // Offer = getCalcOffer(request.attributes.paramNames, request.attributes.paramMap);
  const result = parsePage(block, offerStr);
  saveToFile(result);
}


function appendAccount() {
  [].forEach.call(document.querySelectorAll("[data-seller]"), (e: HTMLElement) => e.querySelector("h5")!.innerHTML += e.getAttribute("data-seller"));
}


export function getBlockName() {
  let innerHTML2 = document.querySelector("#base_chosen a span")!.innerHTML;
  if (innerHTML2 === "any") {
    innerHTML2 = "";
  }
  return (document.getElementById("name") as HTMLInputElement).value || innerHTML2;
}


export function getMods() {
  const modDivs = document.querySelectorAll(".mods [data-name]");
  const modNames: string[] = [].map.call(modDivs, (a: HTMLElement) => a.getAttribute("data-name")) as string[];
  const excludeMods = (item: string) => !item.includes("#(enchant)");
  return modNames.filter((item, pos) => modNames.indexOf(item) === pos && excludeMods(item));
}


function copyTextToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";

  /*
   * Ensure it has a small width and height. Setting to 1px / 1em
   * doesn't work as this gives a negative w/h on some browsers.
   */
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = "0";
  // Clean up any borders.
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = "transparent";
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  let success = false;
  try {
    success = document.execCommand("copy");
  } catch (err) {
    console.log("Oops, unable to copy");
  }
  document.body.removeChild(textArea);
  return success;
}


function poeClip() {
  [].forEach.call(document.querySelectorAll("*[id^=\"item-container-\"]"), (e: HTMLElement) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.appendChild(a);
    e.querySelector(".requirements .proplist")!.appendChild(li);
    const clusterMods = e.querySelectorAll("li[data-name*=\"Added Passive Skill is\"]");
    clusterMods.forEach((clusterModeRaw) => {
      const clusterMode: HTMLElement = clusterModeRaw as HTMLElement;
      const match = (/#\w Added Passive Skill is (.*)/).exec(clusterMode.getAttribute("data-name")!);
      if (match && clusterJewels[match[1]]) {
        clusterMode.title = clusterJewels[match[1]];
      }
    });
    a.innerText = "Copy";
    a.onclick = () => {
      const poeObject = new PoeItem(e);
      const succ = copyTextToClipboard(poeObject.buildItem());
      a.innerText = succ ? "Copied" : "Error";
    };
  });
}


export function init() {
  appendAccount();
  poeClip();
}

function getAttr(element: HTMLElement, atr: string) {
  return element.closest(".item")!.querySelector(`[data-name="${atr}"]`)!.getAttribute("data-value");
}


function parsePage(blockName: string, getOffer: Function) {
  let ls: Blocker;
  if (blockName) {
    ls = new Blocker(blockName);
  }
  let outStr = "";
  const getParent = function(el: HTMLElement) {
    return el.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.parentElement;
  };
  const uniqueIgn: { [id: string]: string } = {};
  const ign = document.querySelectorAll(".whisper-btn");
  [].forEach.call(ign, (btn) => {
    const el = getParent(btn);
    const name: string = el!.getAttribute("data-ign")!;
    if (blockName) {
      if (ls.isAvailable(name)) {
        ls.blockToday(name);
        uniqueIgn[name] = btn;
      }
    } else {
      uniqueIgn[name] = btn;
    }
  });
  for (const name in uniqueIgn) {
    if (!uniqueIgn.hasOwnProperty(name)) {
      continue;
    }
    const offer = getOffer(uniqueIgn[name]);
    if (offer) {
      outStr += `${offer}\n`;
    }
  }
  return outStr;
}
