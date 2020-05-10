import itemTypes from "./itemTypes.json";

/**
 * Based on https://github.com/fikal/PoeTradeItemCopy
 */
export default class Index {
  private itemName: string = "";

  private itemType: string = "";

  private readonly regex: RegExp = /.*\w$/ug;

  private readonly htmlDiv: HTMLElement;

  // Taken from poe.trade source
  private readonly itemRarities: string[] = ["Normal", "Magic", "Rare", "Unique", "Gem", "Currency", "", "", "", "Relic"];

  constructor(div: HTMLElement) {
    this.htmlDiv = div;
    // Taken from poe.trade source
    this.itemRarities = ["Normal", "Magic", "Rare", "Unique", "Gem", "Currency", "", "", "", "Relic"];
  }


  each(selector: string, cb: (a: HTMLElement) => void) {
    [].forEach.call(this.htmlDiv.querySelectorAll(selector), cb);
  }

  returnItemQuality() {
    return this.htmlDiv.querySelector("td[data-name='q']")!.getAttribute("data-value");
  }

  returnImplicitCount() {
    let modCount = this.htmlDiv.querySelectorAll(".withline li").length || 0;
    this.each("ul .mods:not(.withline) li", (that) => {
      if (that.innerText.includes("enchanted")) {
        modCount += 1;
      }
      if (that.innerText.includes("crafted")) {
        modCount += 1;
      }
      return modCount;
    });
    return modCount;
  }

  returnItemNameAndType() {
    const fullTitle = this.htmlDiv.querySelector(".title")!.textContent!.trim();
    for (let i = 0; i < itemTypes.length; ++i) {
      const currentItemType = itemTypes[i];
      if (fullTitle.includes(currentItemType)) {
        this.itemName = fullTitle.replace(currentItemType, "");
        this.itemType = currentItemType;
        return;
      }
    }
    this.itemName = fullTitle;
    this.itemType = "Unknown";
  }

  returnItemSockets() {
    let sockets = "";

    this.htmlDiv.querySelectorAll(".sockets .sockets-inner div").forEach((a) => {
      const classes = a.className.split(" ");
      if (classes.includes("socketLink")) {
        sockets += "-";
      } else {
        if (this.regex.exec(sockets)) {
          sockets += " ";
        }
        if (classes.includes("socketI")) {
          sockets += "B";
        } else if (classes.includes("socketD")) {
          sockets += "G";
        } else if (classes.includes("socketS")) {
          sockets += "R";
        }
      }
    });
    return sockets;
  }

  returnLevelRequirement() {
    return this.htmlDiv.querySelector(".first-line li")!.textContent!.replace("Level:", "").trim();
  }

  returnItemLevel() {
    return this.htmlDiv.querySelector("span[data-name='ilvl']")!.textContent!.replace("ilvl:", "").trim();
  }

  returnRarity() {
    const rarityIndex = this.htmlDiv.querySelector(".title")!.getAttribute("class")!.match(/[0-9]/);
    return this.itemRarities[Number(rarityIndex)];
  }

  returnImplicit() {
    const enchanted = this.returnEnchantedMods();

    if (enchanted !== "") {
      return enchanted.trim();
    }
    return this.returnImplicitMods();
  }

  returnImplicitMods() {
    let itemMods = "";
    this.each(".withline li", (that) => {
      itemMods += `${that.innerText}\r\n`;
    });
    return itemMods.trim();
  }

  returnEnchantedMods() {
    let itemMods = "";
    this.each("ul .mods:not(.withline) li", (that) => {
      if (that.innerText.includes("enchanted")) {
        itemMods += `{crafted}${that.innerText.replace("enchanted", "").trim()}\r\n`;
      }
    });
    return itemMods;
  }

  returnCraftedMods() {
    let craftedItems = "";
    this.each("ul .mods:not(.withline) li", (that) => {
      if (that.innerText.includes("crafted")) {
        craftedItems += `{crafted}${that.innerText.replace("crafted", "").trim()}\r\n`;
      }
    });
    return craftedItems;
  }


  returnItemMods() {
    let itemMods = "";
    this.each("ul .mods:not(.withline) li", (that) => {
      if (!that.innerText.includes("enchanted") &&
          !that.innerText.includes("crafted") &&
          !that.innerText.includes("pseudo")) {
        let l = "";
        that.childNodes.forEach((e: ChildNode) => {
          if ((e as HTMLElement).tagName !== "SPAN") {
            l += e.textContent;
          }
        });
        itemMods += `${l.trim()}\r\n`;
      }
    });
    return itemMods;
  }

  buildItem() {
    const itemMods = this.returnItemMods();
    const implicit = this.returnImplicit();

    this.returnItemNameAndType();

    let item = "";

    const rarity = this.returnRarity();
    if (rarity !== "") {
      item += `Rarity: ${rarity}\r\n`;
    }

    item += `${this.itemName}\r\n`;
    item += `${this.itemType}\r\n`;
    item += `Item Level: ${this.returnItemLevel()}\r\n`;

    const quality = this.returnItemQuality();
    if (quality !== "") {
      item += `Quality: ${quality}\r\n`;
    }

    const sockets = this.returnItemSockets();
    if (sockets !== "") {
      item += `Sockets: ${sockets}\r\n`;
    }

    item += `Implicits: ${this.returnImplicitCount()}\r\n`;

    if (implicit !== "") {
      item += `${implicit}\r\n`;
    }

    item += itemMods;

    const crafted = this.returnCraftedMods();
    if (crafted !== "") {
      item += crafted;
    }

    return item.trim();
  }
}
