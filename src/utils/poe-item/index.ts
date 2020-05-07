import itemTypes from "./itemTypes.json"

/**
 * Based on https://github.com/fikal/PoeTradeItemCopy
 */
export default class Index {
  private itemName: string = "";

  private itemType: string = "";

  private readonly regex: RegExp = /.*\w$/ug;

  private readonly htmlDiv: HTMLElement;

  // Taken from poe.trade source
  private itemRarities: string[] = ["Normal", "Magic", "Rare", "Unique", "Gem", "Currency", "", "", "", "Relic"];

  constructor(div: HTMLElement) {
    this.htmlDiv = div;
    // Taken from poe.trade source
    this.itemRarities = ["Normal", "Magic", "Rare", "Unique", "Gem", "Currency", "", "", "", "Relic"];
  }


  each(selector: string, cb: (a: HTMLElement) => void) {
    [].forEach.call(this.htmlDiv.querySelectorAll(selector), cb);
  }

  returnItemQuality () {
    return this.htmlDiv.querySelector("td[data-name='q']")!.getAttribute("data-value");
  }

  returnImplicitCount () {
    let modCount = this.htmlDiv.querySelectorAll(".withline li").length || 0;
    this.each("ul .mods:not(.withline) li", (that) => {
      if (that.innerText.indexOf('enchanted') !== -1) {
        modCount += 1;
      }
      if (that.innerText.indexOf('crafted') !== -1) {
        modCount += 1;
      }
      return modCount;
    });
    return modCount;
  }

  returnItemNameAndType() {
    let fullTitle = this.htmlDiv.querySelector(".title")!.textContent!.trim();
    for (let i = 0; i < itemTypes.length; ++i) {
      let currentItemType = itemTypes[i];
      if (fullTitle.indexOf(currentItemType) !== -1) {
        this.itemName = fullTitle.replace(currentItemType, "");
        this.itemType = currentItemType;
        return;
      }
    }
    this.itemName = fullTitle;
    this.itemType = 'Unknown';
  }

  returnItemSockets() {
    var sockets = "";

    this.htmlDiv.querySelectorAll(".sockets .sockets-inner div").forEach( a=> {
    var classes = a.className.split(' ');
      if (classes.indexOf('socketLink') >= 0) {
        sockets += "-";
      } else {
        if (this.regex.exec(sockets)) {
          sockets += " "
        }
        if (classes.indexOf('socketI') >= 0) {
          sockets += "B";
        } else if (classes.indexOf('socketD') >= 0) {
          sockets += "G";
        } else if (classes.indexOf('socketS') >= 0) {
          sockets += "R";
        }
      }

    });
    return sockets;
  };

  returnLevelRequirement() {
    return this.htmlDiv.querySelector(".first-line li")!.textContent!.replace("Level:", "").trim();
  };

  returnItemLevel() {
    return this.htmlDiv.querySelector("span[data-name='ilvl']")!.textContent!.replace("ilvl:", "").trim();
  };

  returnRarity () {
    let rarityIndex = this.htmlDiv.querySelector(".title")!.getAttribute("class")!.match(/[0-9]/);
    return this.itemRarities[Number(rarityIndex)];
  };

  returnImplicit () {
    let enchanted = this.returnEnchantedMods();

    if (enchanted !== "") {
      return enchanted.trim();
    } else {
      return this.returnImplicitMods();
    }
  };

  returnImplicitMods () {
    let itemMods = "";
    this.each(".withline li", that => {
      itemMods += that.innerText + '\r\n';
    });
    return itemMods.trim();
  };

  returnEnchantedMods () {
    let itemMods = "";
    this.each("ul .mods:not(.withline) li", that => {
      if (that.innerText.indexOf('enchanted') !== -1) {
        itemMods += '{crafted}' + that.innerText.replace("enchanted", "").trim() + '\r\n';
      }
    });
    return itemMods;
  };

  returnCraftedMods () {
    let craftedItems = "";
    this.each("ul .mods:not(.withline) li", that => {
      if (that.innerText.indexOf('crafted') !== -1) {
        craftedItems += '{crafted}' + that.innerText.replace("crafted", "").trim() + '\r\n';
      }
    });
    return craftedItems;
  };


  returnItemMods () {
    let itemMods = "";
    this.each("ul .mods:not(.withline) li", that => {
      if (that.innerText.indexOf('enchanted') === -1 &&
          that.innerText.indexOf('crafted') === -1 &&
          that.innerText.indexOf('pseudo') === -1) {
        let l = '';
        that.childNodes.forEach((e: ChildNode) => {
          if ((e  as HTMLElement).tagName !== 'SPAN') {l += e.textContent}
        });
        itemMods += l.trim() + '\r\n';
      }
    });
    return itemMods;
  };

  buildItem() {

    let itemMods = this.returnItemMods();
    let implicit = this.returnImplicit();

    this.returnItemNameAndType();

    let item = "";

    let rarity = this.returnRarity();
    if (rarity !== "")
      item += "Rarity: " + rarity + '\r\n';

    item += this.itemName + '\r\n';
    item += this.itemType + '\r\n';
    item += 'Item Level: ' + this.returnItemLevel() + '\r\n';

    let quality = this.returnItemQuality();
    if (quality !== "")
      item += "Quality: " + quality + '\r\n';

    let sockets = this.returnItemSockets();
    if (sockets !== "")
      item += "Sockets: " + sockets + '\r\n';

    item += 'Implicits: ' + this.returnImplicitCount() + '\r\n';

    if (implicit !== "")
      item += implicit + '\r\n';

    item += itemMods;

    let crafted = this.returnCraftedMods();
    if (crafted !== "") {
      item += crafted;
    }

    return item.trim();
  }
}
