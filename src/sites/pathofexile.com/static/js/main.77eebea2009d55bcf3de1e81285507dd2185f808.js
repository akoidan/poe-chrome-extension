function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, i)
  }
  return n
}

function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(n), !0).forEach(function (t) {
      _defineProperty(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, i)
  }
  return n
}

function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(n), !0).forEach(function (t) {
      _defineProperty(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

define("PoE/Environment/Font", ["require", "jquery", "webfont"], function (e) {
  for (var t = e("jquery"), n = e("webfont"), i = ["FontinRegular"], o = {}, r = 0, s = i.length; r < s; ++r) o[i[r]] = t.Deferred();
  return {
    waitLoad: function (e) {
      if (o[e]) return o[e].promise();
      console.warn("Font not found: " + e);
      var n = t.Deferred();
      return n.reject(), n.promise()
    }, loadFonts: function () {
      n.load({
        custom: {families: i}, loading: function () {
        }, active: function () {
        }, inactive: function () {
        }, fontloading: function (e, t) {
        }, fontactive: function (e, t) {
          o[e] && o[e].resolve()
        }, fontinactive: function (e, t) {
          o[e] && o[e].reject()
        }
      })
    }
  }
}), define("PoE/Loader", ["require", "nprogress"], function (e) {
  var t = e("nprogress");
  return {
    start: function () {
      t.start()
    }, done: function () {
      t.done()
    }, abort: function () {
      t.done()
    }, follow: function (e) {
      var t = this;
      this.start(), e.then(function () {
        t.done()
      }, function () {
        t.abort()
      })
    }
  }
}), define("PoE/Item/DisplayProperty/ValueStyle", [], function () {
  return {
    Default: 0,
    Augmented: 1,
    Unmet: 2,
    PhysicalDamage: 3,
    FireDamage: 4,
    ColdDamage: 5,
    LightningDamage: 6,
    ChaosDamage: 7,
    MagicItem: 8,
    RareItem: 9,
    UniqueItem: 10
  }
}), define("PoE/Item/DisplayProperty/DisplayMode", [], function () {
  return {NameValue: 0, ValueName: 1, Progress: 2, Inject: 3}
}), define("PoE/Item/FrameType", [], function () {
  return {
    Normal: 0,
    Magic: 1,
    Rare: 2,
    Unique: 3,
    Gem: 4,
    Currency: 5,
    DivinationCard: 6,
    Quest: 7,
    Prophecy: 8,
    Relic: 9
  }
}), define("PoE/Item/Popup/Constants", [], function () {
  return {
    MinWidth: 262.88032454361,
    Padding: 6.0851926977688,
    MaxWidth: 742.39350912779,
    MaxDescriptionWidth: 365.11156186613
  }
}), define("PoE/Item/Markup", ["Handlebars", "jquery"], function (e, t) {
  return {
    PoEMarkup: function (e, n) {
      n || (n = .5);
      var i = function (e) {
        var n = t(t(e).parent()).css("font-size");
        return n = n.substr(0, n.length - 2), Math.round(n)
      };
      e.find(".PoEMarkup").each(function () {
        var e = this, o = t(e).data("markup"), r = !1;
        if (o && o.indexOf("size") >= 0) (s = o.substr(o.indexOf(":") + 1, o.length)).indexOf("+") >= 0 ? s = i(e) + s.substr(1, s.length) : s.indexOf("-") >= 0 && (s = i(e) - s.substr(1, s.length)), r = {"font-size": (s *= n) + "px"}; else if (o && o.indexOf("bigger") >= 0) {
          r = {"font-size": (s = i(e) + 3) + "px"}
        } else if (o && o.indexOf("smaller") >= 0) {
          var s;
          r = {"font-size": (s = i(e) - 3) + "px"}
        }
        r && t(e).css(r)
      })
    }, splitTags: function (e) {
      for (var t = {items: [], lastIndex: 0, pre: []}, n = !0; e.indexOf("<") >= 0 || e.indexOf(">") >= 0;) {
        var i = 1, o = {tag: "", pre: "", content: "", post: ""};
        "<" == e.charAt(e.indexOf("<") + 1) ? i = 2 : n = !1;
        var r = e.indexOf("<"), s = e.indexOf("<");
        n || (o.pre = e.substr(0, r), o.pre.length > 0 && (0 === o.pre.indexOf("{") && (o.pre = o.pre.substr(1)), t.pre.push(o.pre))), o.tag = e.substr(r + i, e.indexOf(">") - i - s), t.lastIndex += e.indexOf(">") + i, 0 == (e = e.substr(e.indexOf(">") + i)).indexOf("{") && e.indexOf("}") > 0 && (e.indexOf("}") < e.indexOf("<") || -1 == e.indexOf("<")) && (t.lastIndex += e.indexOf("}") + 1, o.content = e.substr(1, e.indexOf("}") - 1), (e = e.substr(e.indexOf("}") + 1)).indexOf("<") >= 0 && (t.lastIndex += e.indexOf("<"), o.post = e.substr(0, e.indexOf("<")), e = e.substr(e.indexOf("<")))), t.items.push(o)
      }
      return t
    }, convertTags: function (e, n) {
      if (console.warn("deprecated: convertTags"), e && "string" == typeof e) {
        var i = "", o = "", r = !(!n || !n.tags) && n.tags;
        return r && !t.isEmptyObject(r) && (o = r.join(", ")), i += e.replace(/{/g, '<span class="PoEMarkup" data-markup="' + o + '">').replace(/}/g, "</span>")
      }
      return e
    }, markupToObj: function (e, t) {
      var n = {pre: "", content: "", post: "", tags: {}};
      if (e.indexOf("<") >= 0) {
        n.pre += e.substr(0, e.indexOf("<"));
        var i = 0;
        (e = e.substr(e.indexOf("<"))).lastIndexOf("}") > 0 && (i = e.lastIndexOf("}")), e.lastIndexOf(">") > 0 && e.lastIndexOf(">") > i && (i = e.lastIndexOf(">")), i > 0 && (n.post = e.substr(i + 1), e = e.substr(0, i + 1)), e.indexOf("{") >= 0 ? (n.tags = this.splitTags(e), e = e.substr(n.tags.lastIndex), n.content = this.markupToObj(e, n), e = "") : (n.tags = this.splitTags(e), n.content = e.substr(n.tags.lastIndex), e = "")
      } else n.content = e;
      if (n.tags.pre) for (var o in n.tags.pre) n.tags.pre.hasOwnProperty(o) && (n.pre += this.markupObjToHTML(this.markupToObj(n.tags.pre[o])));
      return n
    }, markupObjToHTML: function (t) {
      "object" == _typeof(t.content) && (t.content = this.markupObjToHTML(t.content));
      var n = t.pre;
      if (t.tags && t.tags.items && t.tags.items.length > 0) {
        var i = [], o = [], r = [], s = 0;
        for (var a in t.tags.items) {
          0 == (h = (d = t.tags.items[a]).tag).indexOf("set:") ? i.push(h.substr(h.indexOf("set:") + 4)) : 0 === h.indexOf("if:") ? (o[++s] = o[s] || [], o[s].push(d)) : 0 === h.indexOf("elif:") || 0 === h.indexOf("else:") ? o[s].push(d) : (r[s] = r[s] || [], r[s].push(d))
        }
        if (o.length > 0) {
          for (var l = [], c = [], u = 1; u <= s; u++) for (var a in o[u]) {
            var d, h, f = (h = (d = o[u][a]).tag).substr(0, h.indexOf(":")), p = h.substr(h.indexOf(":") + 1);
            for (var v in i) if (o[u].hasOwnProperty(a) && i.hasOwnProperty(v)) {
              var g = i[v];
              h.pre && (n += h.pre), "if" == f && g == p ? l[u] = d : ("elif" != f || g != p || l && l[u]) && ("else" != f || l && l[u]) ? "MS" == p && (!(!1)[u] || (!1)[u].length) : l[u] = d
            }
            d.post && (c[u] || (c[u] = ""), c[u] += d.post)
          }
          for (u = 1; u <= s; u++) for (var a in l && l[u] ? n += l[u].content + l[u].post : !l && (!1)[u] && (n += (!1)[u].content + (!1)[u].post), c[u]) n += c[u][a]
        }
        for (var u in r) if (r.hasOwnProperty(u)) for (var a in r[u]) r[u].hasOwnProperty(a) && (n += '<span class="PoEMarkup ' + r[u][a].tag.replace(":", "_") + '" data-markup="' + r[u][a].tag + '">' + r[u][a].content + "</span>")
      } else n += t.content;
      return (n += t.post).length > 0 && (n = new e.SafeString(n.replace(/\r/g, "<br />"))), n
    }, recMarkup: function (e) {
      if (e && e.flavourText && (e.flavourText = e.flavourText.join("\n")), e && e.toHTML) return e;
      if ("string" == typeof e) {
        var t = this.markupToObj(e);
        return this.markupObjToHTML(t)
      }
      if ("object" == _typeof(e)) {
        for (var n in e) e.hasOwnProperty(n) && "note" != n && (e[n] = this.recMarkup(e[n]));
        return e
      }
      return e
    }
  }
}), define("PoE/Environment", [], function () {
  var e = "undefined" != typeof process && process.versions && process.versions.node, t = null, n = null;
  return {
    isNode: function () {
      return e
    }, isBrowser: function () {
      return !e
    }, getAppRoot: function () {
      return t
    }, getJsDir: function () {
      return n
    }, config: function (e) {
      e && (e.appRoot && (t = e.appRoot), e.jsDir && (n = e.jsDir))
    }
  }
}), define("PoE/Handlebars/TemplateCollection", ["jquery", "Handlebars", "PoE/Environment"], function (e, t, n) {
  var i = {};
  return {
    load: function (n, o) {
      return n = n.replace(/^\/*/, ""), e.Deferred(function (e) {
        void 0 === i[n] ? require(["text!" + n], function (o) {
          i[n] = t.compile(o), e.resolve(i[n])
        }) : e.resolve(i[n])
      }).promise()
    }
  }
}), define("text!PoE/Item/DivinationCard.hbt", [], function () {
  return '<div class="cardFace">\r\n    <img src="{{cardFace}}" />\r\n</div>\r\n<div class="itemBoxContent">\r\n    <div class="itemHeader {{#if headerTwoLine}}doubleLine{{/if}}">\r\n        <span class="l"></span>\r\n        {{#if typeLine}}\r\n        <div class="itemName typeLine">\r\n            <span class="lc">{{typeLine}}</span>\r\n        </div>\r\n        {{/if}}\r\n        <span class="r"></span>\r\n    </div>\r\n    {{#if stackSize}}\r\n    <div class="stackSize">{{stackSize}}/{{maxStackSize}}</div>\r\n    {{/if}}\r\n    {{#if explicitMods}}\r\n    <div class="explicitModsWrapper">\r\n        <div class="explicitModsContainer">\r\n            {{#each explicitMods}}\r\n                {{#each this}}\r\n                    <div class="explicitMod"><span class="lc">{{{this}}}</span></div>\r\n                {{/each}}\r\n            {{/each}}\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n    {{#if flavourText}}\r\n    <div class="flavourTextWrapper">\r\n        <div class="flavourTextContainer">\r\n            <div class="flavourText"><span class="lc">{{flavourText}}</span></div>\r\n        </div>\r\n    </div>\r\n    {{/if}}\r\n\r\n    {{#if flavourTextParsed}}\r\n        <div class="flavourTextWrapper">\r\n            <div class="flavourTextContainer">\r\n                {{#each (parsedMarkupDisplay flavourTextParsed)}}<div class="flavourText"><span class="lc">{{{this}}}</span></div>{{/each}}\r\n            </div>\r\n        </div>\r\n    {{/if}}\r\n\r\n\r\n</div>\r\n'
}), define("PoE/Item/DivinationCard", ["Handlebars", "Backbone", "jquery", "./DisplayProperty/ValueStyle", "./DisplayProperty/DisplayMode", "./FrameType", "./Popup/Constants", "PoE/Helpers", "PoE/Handlebars/TemplateCollection", "text!PoE/Item/DivinationCard.hbt"], function (e, t, n, i, o, r, s, a, l) {
  return t.View.extend({
    initialize: function (e) {
      this.context = e, this.prepare()
    }, prepare: function () {
      var e = this.context;
      if (e.artFilename) {
        var t = e.overrideFolder ? e.overrideFolder : "/image/divination-card/";
        e.cardFace = a.distUrl(t + e.artFilename + (e.panelLayout ? "_panel.png" : ".png"))
      }
    }, render: function () {
      var e = new n.Deferred, t = this;
      return l.load("PoE/Item/DivinationCard.hbt").done(function (n) {
        e.resolve(n(t.context))
      }), e.promise()
    }
  })
}), define("text!PoE/Item/Popup.hbt", [], function () {
  return '<div class="itemBoxContent">\n    {{#with content.[0]}}\n    <div class="itemHeader{{#if headerTwoLine}} doubleLine{{/if}}">\n        <span class="l {{symbol this \'left\'}}"></span>\n        {{#if name}}\n        <div class="itemName">\n            <span class="lc">{{name}}</span>\n        </div>\n        {{/if}}\n        {{#if typeLine}}\n        <div class="itemName typeLine">\n            <span class="lc">{{typeLine}}</span>\n        </div>\n        {{/if}}\n        <span class="r {{symbol this \'right\'}}"></span>\n    </div>\n    {{/with}}\n    {{#if content.[0].hasContent}}\n    <div class="content">\n        {{separator this}}\n        {{#if content.[0].nextSockets}}\n            <div class="sockets">\n                {{#each content.[0].nextSockets}}\n                    <div class="socket {{socketColor this}}"></div>\n                {{/each}}\n            </div>\n            <div class="separator"></div>\n        {{/if}}\n    {{#each content}}\n        {{#if hybrid}}\n        <div class="separator"></div>\n        <div class="{{#if isVaalGem}}vaalHeader{{else}}hybridHeader{{/if}}">\n            {{#if typeLine}}\n            <div class="itemName typeLine">\n                <span class="lc">{{typeLine}}</span>\n            </div>\n            {{/if}}\n        </div>\n        <div class="separator"></div>\n        {{/if}}\n        {{#if properties}}\n            {{#each properties}}\n            <div class="displayProperty"><span class="lc{{#if ../advanced}}{{typeToField this}}{{/if}}">{{itemDisplayProperty this ": "}}</span></div>\n            {{/each}}\n        {{/if}}\n        {{#if utilityMods}}\n            {{#each utilityMods}}<div class="utilityMod"><span class="lc">{{{this}}}</span></div>{{/each}}\n        {{/if}}\n        {{#if sep1}}<div class="separator"></div>{{/if}}\n        {{#if itemLevel}}\n            <div class="displayProperty"><span class="lc{{#if advanced}} s" data-field="ilvl{{/if}}">{{translate "Item Level"}}: <span class="colourDefault">{{itemLevel}}</span></span></div>\n        {{/if}}\n        {{#if talismanTier}}\n            <div class="displayProperty"><span class="lc{{#if advanced}} s" data-field="talisman_tier{{/if}}">{{translate "Talisman Tier:"}} <span class="colourDefault">{{talismanTier}}</span></span></div>\n        {{/if}}\n        {{#if requirements}}\n            <div class="requirements"><span class="lc">\n            {{#each requirements}}{{#if first}}{{translate "Requires"}} {{else}}, {{/if}}{{itemDisplayProperty this " "}}{{/each}}\n            </span></div>\n        {{/if}}\n        {{#if sep2}}<div class="separator"></div>{{/if}}\n        {{#if secDescrText}}\n            <div class="secDescrText"><span>{{secDescrText}}</span></div>\n        {{/if}}\n        {{#if sep14}}<div class="separator"></div>{{/if}}\n        {{#if enchantMods}}\n            {{#each enchantMods}}<div class="enchantMod"><span class="lc">{{#each this}}{{#if @index}}<br>{{/if}}{{this}}{{/each}}</span></div>{{/each}}\n        {{/if}}\n        {{#if sep3}}<div class="separator"></div>{{/if}}\n        {{#if implicitMods}}\n            {{#each implicitMods}}<div class="implicitMod"><span class="lc">{{#each this}}{{#if @index}}<br>{{/if}}{{this}}{{/each}}</span></div>{{/each}}\n        {{/if}}\n        {{#if sep4}}<div class="separator"></div>{{/if}}\n        {{#if fracturedMods}}\n            {{#each fracturedMods}}<div class="fracturedMod"><span class="lc">{{#each this}}{{#if @index}}<br>{{/if}}{{this}}{{/each}}</span></div>{{/each}}\n        {{/if}}\n        {{#if explicitMods}}\n            {{#each explicitMods}}<div class="explicitMod"><span class="lc">{{#each this}}{{#if @index}}<br>{{/if}}{{this}}{{/each}}</span></div>{{/each}}\n        {{/if}}\n        {{#if craftedMods}}\n            {{#each craftedMods}}<div class="craftedMod"><span class="lc">{{#each this}}{{#if @index}}<br>{{/if}}{{this}}{{/each}}</span></div>{{/each}}\n        {{/if}}\n        {{#if veiledMods}}\n            {{#each veiledMods}}<div class="veiledMod">{{itemVeiledMod this}}</div>{{/each}}\n        {{/if}}\n        {{#if pseudoMods}}\n            {{#each pseudoMods}}<div class="pseudoMod"><span class="lc">{{#each this}}{{#if @index}}<br>{{/if}}{{this}}{{/each}}</span></div>{{/each}}\n        {{/if}}\n        {{#if sep8}}<div class="separator"></div>{{/if}}\n        {{#if unidentifiedText}}<div class="unmet"><span class="lc">{{unidentifiedText}}</span></div>{{/if}}\n        {{#if duplicatedText}}<div class="augmented"><span class="lc">{{duplicatedText}}</span></div>{{/if}}\n        {{#if corruptedText}}<div class="unmet"><span class="lc">{{corruptedText}}</span></div>{{/if}}\n        {{#if sepNotable}}<div class="separator"></div>{{/if}}\n        {{#if notableProperties}}\n            {{#each notableProperties}}\n            <div class="notableProperty"><span class="lc{{#if ../advanced}}{{typeToField this}}{{/if}}">{{itemNotableProperty this}}</span></div>\n            {{/each}}\n        {{/if}}\n        {{#if sep5}}<div class="separator"></div>{{/if}}\n        {{#if cosmeticMods}}\n            {{#each cosmeticMods}}<div class="cosmeticMod"><span class="lc">{{this}}</span></div>{{/each}}\n        {{/if}}\n        {{#if sep6}}<div class="separator"></div>{{/if}}\n        {{#if additionalProperties}}\n            {{#each additionalProperties}}\n            <div class="additionalProperty"><span class="lc{{#if ../advanced}}{{typeToField this}}{{/if}}">{{itemDisplayProperty this ": "}}</span></div>\n            {{/each}}\n        {{/if}}\n        {{#if sep7}}<div class="separator"></div>{{/if}}\n        {{#if nextLevelRequirements}}\n        <div class="nextLevelRequirements"><span class="lc">{{translate "Next Level"}}:</span><br /><span class="lc">\n            {{#each nextLevelRequirements}}{{#if first}}{{translate "Requires"}} {{else}}, {{/if}}{{itemDisplayProperty this " "}}{{/each}}\n        </span></div>\n        {{/if}}\n        {{#if sep11}}<div class="separator"></div>{{/if}}\n        {{#if lockedToCharacterText}}<div class="unmet"><span class="lc">{{lockedToCharacterText}}</span></div>{{/if}}\n        {{#if sep12}}<div class="separator"></div>{{/if}}\n        {{#if flavourTextParsed}}\n            {{#each (parsedMarkupDisplay flavourTextParsed)}}<div class="flavourText"><span class="lc">{{{this}}}</span></div>{{/each}}\n        {{/if}}\n        {{#if flavourText}}\n            {{#each flavourText}}<div class="flavourText"><span class="lc">{{{this}}}</span></div>{{/each}}\n        {{/if}}\n        {{#if sepProphecy}}<div class="separator"></div>{{/if}}\n        {{#if prophecyText}}\n            <div class="prophecyText colourDefault"><span class="lc">{{prophecyText}}</span></div>\n        {{/if}}\n        {{#if sep13}}<div class="separator"></div>{{/if}}\n        {{#if descrText}}\n        <div class="descrText"><span>{{descrText}}</span></div>\n        {{/if}}\n        {{#if incubatedItem}}\n        <div class="separator"></div>\n        <div class="incubated">\n            <div class="text"><span>{{translate "Incubating {ITEM}" ITEM=incubatedItem.name}}</span></div>\n            <span class="experienceBar"><span class="fill"><span style="width: {{incubatedItem.percent}}%;"></span></span></span>\n            <div class="descrText"><span><span class="progress">{{ numFormat incubatedItem.progress }}/{{ numFormat incubatedItem.total }}</span> {{ translate "Level {LEVEL}+ Monster Kills" LEVEL=incubatedItem.level }}</span></div>\n        </div>\n        {{/if}}\n        {{#if sepLockedAccount}}<div class="separator"></div>{{/if}}\n        {{#if lockedToAccountText}}<div class="unmet"><span class="lc">{{lockedToAccountText}}</span></div>{{/if}}\n        {{#if sep15}}<div class="separator"></div>{{/if}}\n        {{#if note}}\n            <div class="textCurrency itemNote">{{note}}</div>\n        {{/if}}\n    {{/each}}\n    </div>\n    {{/if}}\n</div>\n'
}), define("PoE/Item/Popup", ["require", "Handlebars", "Backbone", "jquery", "./DisplayProperty/ValueStyle", "./DisplayProperty/DisplayMode", "./FrameType", "./Popup/Constants", "PoE/Helpers", "./Markup", "./DivinationCard", "text!PoE/Item/Popup.hbt"], function (e) {
  var t = e("Handlebars"), n = e("Backbone"), i = e("jquery"), o = e("./DisplayProperty/ValueStyle"),
    r = e("./DisplayProperty/DisplayMode"), s = e("./FrameType"), a = e("./Popup/Constants"), l = e("PoE/Helpers"),
    c = e("./Markup"), u = e("./DivinationCard"), d = e("text!PoE/Item/Popup.hbt"), h = function (e) {
      var n;
      switch (e[1]) {
        default:
        case o.Default:
          n = "Default";
          break;
        case o.Augmented:
          n = "Augmented";
          break;
        case o.Unmet:
          n = "Unmet";
          break;
        case o.PhysicalDamage:
          n = "PhysicalDamage";
          break;
        case o.FireDamage:
          n = "FireDamage";
          break;
        case o.ColdDamage:
          n = "ColdDamage";
          break;
        case o.LightningDamage:
          n = "LightningDamage";
          break;
        case o.ChaosDamage:
          n = "ChaosDamage"
      }
      return '<span class="colour' + n + '">' + t.Utils.escapeExpression(e[0]) + "</span>"
    };
  t.registerHelper("parsedMarkupDisplay", function (e) {
    for (var n = "", i = 0; i < e.length; i++) if (e[i] instanceof t.SafeString) n += e[i].toHTML(); else if ("object" === _typeof(e[i]) && e[i].type) switch (e[i].type.toHTML()) {
      case"class":
        n += '<span class="PoEMarkup ' + e[i].class.toHTML() + " " + e[i].id.toHTML() + '"></span>'
    }
    n += "<br>";
    var o = [];
    for (var i in n = n.split("\n")) o.push(new t.SafeString(n[i]));
    return o
  }), t.registerHelper("itemNotableProperty", function (e) {
    for (var n = '<span class="colourAugmented">' + t.Utils.escapeExpression(e.name) + "</span>", i = 0, r = e.values.length; i < r; ++i) {
      var s = e.values[i], a = (s[0] instanceof t.SafeString ? s[0].string : s[0]).split("\n");
      for (var l in a) {
        var c = t.Utils.escapeExpression(a[l]);
        s[1] == o.Augmented && (c = "<em>" + c + "</em>"), n += "<br>" + c
      }
    }
    return new t.SafeString(n)
  }), t.registerHelper("itemDisplayProperty", function (e, n) {
    var i = "", o = e.name;
    o = "" == o ? "" : "<span>" + t.Utils.escapeExpression(o) + "</span>";
    var s = e.displayMode instanceof t.SafeString ? e.displayMode.toHTML() : e.displayMode;
    switch (s != r.Progress && "Progress" != s || (i = '<span class="experienceBar"><span class="fill"><span style="width: ' + Math.round(100 * e.progress) + '%;"></span></span></span>'), s) {
      case r.NameValue:
      case r.ValueName:
      case r.Progress:
      case"NameValue":
      case"ValueName":
      case"Progress":
        for (var a = "", l = 0, c = e.values.length; l < c; ++l) a += (l > 0 ? ", " : "") + h(e.values[l]);
        s != r.Progress && "Progress" != s || (o = ""), n = "" == o || "" == a ? "" : n, i += s == r.ValueName || "ValueName" == s ? a + n + o : o + n + a;
        break;
      case r.Inject:
      case"Inject":
        for (l = 0, c = e.values.length; l < c; ++l) o = o.replace("%" + l, h(e.values[l]));
        i += o
    }
    return new t.SafeString(i)
  }), t.registerHelper("itemVeiledMod", function (e) {
    var n = null;
    if ((n = /\/([A-Za-z]+)_(0[0-9])\.mp4$/.exec(e)) && (n.shift(), n[0] = "Preffix" == n[0] ? "prefix" : "suffix"), !n) {
      (n = /([A-Za-z]+)(\d+)/.exec(e)).shift(), n[0] = String(n[0]).toLowerCase()
    }
    var i = "prefix" == n[0] ? l.translate("Veiled Prefix") : l.translate("Veiled Suffix");
    return new t.SafeString('<span class="lc ' + n[0] + " " + n.join("") + '">' + i + "</span>")
  }), t.registerHelper("typeToField", function (e) {
    var n = [null, "map_tier", "map_iiq", "map_iir", "map_packsize", "gem_level", "quality", null, null, "pdamage", "edamage", "cdamage", "crit", "aps", null, "block", "ar", "ev", "es", null, "gem_level_progress", null, null, null, null, null, null, null, null][e.type];
    return null == n ? "" : new t.SafeString(' s" data-field="' + n)
  }), t.registerHelper("separator", function (e) {
    return ""
  }), t.registerHelper("symbol", function (e, t) {
    var n = [];
    if (e.fractured || e.synthesised) n.push(e.fractured ? "fractured" : "synthetic"); else if (e.influences) {
      var i = Object.keys(e.influences);
      "left" == t ? n.push(i[0]) : "right" == t && n.push(i[i.length > 1 ? 1 : 0])
    } else e.veiled && n.push("veiled");
    return n.length ? (n.unshift("symbol"), n.join(" ")) : ""
  }), t.registerHelper("socketColor", function (e) {
    if (!e || !e.sColour) return "";
    var n = "";
    switch (e.sColour.string) {
      case"R":
        n = "socketStr";
        break;
      case"G":
        n = "socketDex";
        break;
      case"B":
        n = "socketInt";
        break;
      case"GR":
        n = "socketStrDex";
        break;
      case"RB":
        n = "socketStrInt";
        break;
      case"BG":
        n = "socketDexInt"
    }
    return new t.SafeString(n)
  });
  var f = n.View.extend({
    initialize: function () {
      this.divinationCard = this.model.get("frameType") === s.DivinationCard || "DivinationCard" === this.model.get("frameType"), null === f.template && (f.template = t.compile(this.tpl)), this.divinationCard || (this.template = f.template)
    }, processContext: function (e) {
      var n = !1, i = function (t, i) {
        e[t] && (n && (e[i] = !0), n = !0)
      }, o = function (n) {
        if (e[n]) {
          for (var i = e[n], o = []; i.length > 0;) {
            var r = i.shift();
            r instanceof t.SafeString && (r = r.string);
            var s = r.split("\n");
            for (var a in s) s[a] = s[a].replace(/(?:\r\n|\r|\n)/g, "");
            o.push(s)
          }
          e[n] = o
        }
      };
      return e.influences || !e.shaper && !e.elder || (e.influences = {
        shaper: e.shaper || null,
        elder: e.elder || null
      }), e.identified || (e.unidentifiedText = l.translate("Unidentified")), e.corrupted && (e.corruptedText = l.translate("Corrupted")), e.lockedToCharacter && (e.lockedToCharacterText = l.translate("Cannot be traded or modified")), e.duplicated && (e.duplicatedText = l.translate("Mirrored")), e.lockedToAccount && (e.lockedToAccountText = l.translate("Account-bound")), e.synthetic && (e.synthesised = !0), e.raceRewardText = !1, e.cisRaceReward && (e.raceRewardText = l.translate("CIS Race Season Reward")), e.seaRaceReward && (e.raceRewardText = l.translate("SG Race Season Reward")), e.thRaceReward && (e.raceRewardText = l.translate("TH Race Season Reward")), !1 !== e.raceRewardText && (e.flavourText ? (e.flavourText.push("\r"), e.flavourText.push("\r")) : e.flavourText = [], e.flavourText.push(e.raceRewardText)), e.incubatedItem && (e.incubatedItem.percent = e.incubatedItem.total ? Math.round(e.incubatedItem.progress / e.incubatedItem.total * 100) : 0), e.advanced && (e.itemLevel = e.ilvl || e.itemLevel || null), o("enchantMods"), o("implicitMods"), o("fracturedMods"), o("explicitMods"), o("craftedMods"), o("pseudoMods"), i("properties"), i("requirements", "sep1"), i("talismanTier"), e.itemLevel && i("itemLevel"), e.sep1 = e.sep1 || (e.talismanTier || e.itemLevel) && e.properties, i("secDescrText", "sep2"), i("enchantMods", "sep14"), i("implicitMods", "sep3"), i("explicitMods", "sep4"), i("craftedMods", "sep4"), i("fracturedMods", "sepFractured"), i("cosmeticMods", "sep5"), e.sep4 = e.sep4 || e.sepFractured, i("notableProperties", "sepNotable"), i("additionalProperties", "sep6"), i("nextLevelRequirements", "sep7"), i("unidentifiedText", "sep8"), i("corruptedText", "sep9"), i("duplicatedText", "sep10"), e.sep8 = (e.sep8 || e.sep9 || e.sep10) && !e.sep4, i("lockedToCharacterText", "sep11"), i("flavourText", "sep12"), e.sep12 = e.sep12 || e.flavourTextParsed, i("descrText", "sep13"), i("prophecyText", "sepProphecy"), i("note", "sep15"), i("lockedToAccountText", "sepLockedAccount"), (e = c.recMarkup(e)).name && e.typeLine && (e.headerTwoLine = !0), n && (e.hasContent = !0), e.requirements && e.requirements.length > 0 && (e.requirements[0].first = !0), e.nextLevelRequirements && e.nextLevelRequirements.length > 0 && (e.nextLevelRequirements[0].first = !0), e
    }, render: function () {
      var e = this.model.toJSON(), t = this.model.has("hybrid");
      if (t) {
        t = this.model.get("hybrid");
        var n = e.typeLine;
        e.typeLine = t.baseTypeName, t.typeLine = n, t.corrupted = e.corrupted, e.corrupted = !1, t.descrText = e.descrText, e.descrText = void 0, t.additionalProperties = e.additionalProperties, e.additionalProperties = void 0, t.note = e.note, e.note = void 0, e.hybrid = !1, t.hybrid = !0, t.identified = e.identified, t.advanced = e.advanced, t = this.processContext(t)
      }
      e = this.processContext(e), this.$el.addClass("itemPopupContainer").addClass("newItemPopup");
      var i = this, o = "";
      switch (this.model.get("frameType")) {
        default:
        case s.Normal:
        case"Normal":
          o = "normalPopup";
          break;
        case s.Magic:
        case"Magic":
          o = "magicPopup";
          break;
        case s.Rare:
        case"Rare":
          o = "rarePopup";
          break;
        case s.Unique:
        case"Unique":
          o = "uniquePopup";
          break;
        case s.Gem:
        case"Gem":
          o = "gemPopup";
          break;
        case s.Currency:
        case"Currency":
          o = "currencyPopup";
          break;
        case s.Quest:
        case"Quest":
          o = "questPopup";
          break;
        case s.DivinationCard:
        case"DivinationCard":
          o = "divinationCard";
          break;
        case s.Prophecy:
        case"Prophecy":
          o = "prophecyPopup";
          break;
        case s.Relic:
        case"Relic":
          o = "relicPopup"
      }
      (this.$el.addClass(o), this.divinationCard) ? new u(e).render().done(function (e) {
        i.$el.empty().html(e), c.PoEMarkup(i.$el, .5)
      }) : t ? this.$el.empty().html(this.template({content: [e, t]})) : this.$el.empty().html(this.template({content: [e]}))
    }, updatePopupWidth: function () {
      this.$el.css("position", "relative"), this.$el.css("top", "0px"), this.$el.css("left", "0px"), this.$el.css("width", "auto");
      this.$el.find(".itemName:first");
      var e = 0;
      this.$el.find(".lc").each(function () {
        var t = i(this).outerWidth(!0) + 2;
        t > e && (e = t)
      }), this.$el.find(".descrText span, .secDescrText span").each(function () {
        var t = i(this).outerWidth(!0);
        t > a.MaxDescriptionWidth && (t = a.MaxDescriptionWidth), t > e && (e = t)
      }), this.$el.width(e + this.$el.outerWidth(!0) - this.$el.outerWidth(!0))
    }, close: function () {
      this.remove(), this.off()
    }
  });
  return f.template = null, f.prototype.tpl = d, f
}), define("PoE/Geom/Point", [], function () {
  var e = function (e, t) {
    this.x = void 0 === e ? 0 : e, this.y = void 0 === t ? 0 : t
  };
  return e.prototype.scale = function (e) {
    this.x *= e, this.y *= e
  }, e.prototype.inverseTranslate = function (e) {
    this.x -= e.x, this.y -= e.y
  }, e.prototype.translateX = function (e) {
    return this.x += e, this
  }, e.prototype.translateY = function (e) {
    return this.y += e, this
  }, e.prototype.distTo = function (e) {
    return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2))
  }, e.prototype.angleTo = function (e) {
    return Math.atan2(e.y - this.y, e.x - this.x)
  }, e.prototype.clone = function () {
    return new e(this.x, this.y)
  }, e.prototype.toString = function () {
    return "(" + this.x + "," + this.y + ")"
  }, e.prototype.eq = function (e) {
    return this.x === e.x && this.y === e.y
  }, e.prototype.neq = function (e) {
    return !this.eq(e)
  }, e
}), define("PoE/Geom/Offset", [], function () {
  var e = function (e, t, n, i) {
    this.top = e, this.left = i, this.bottom = n, this.right = t
  };
  return e.getBoundsOffset = function (t, n) {
    return new e(t.tl.y - n.tl.y, t.br.x - n.br.x, t.br.y - n.br.y, t.tl.x - n.tl.x)
  }, e
}), define("PoE/Layout/Popup", ["PoE/Geom/Point", "PoE/Geom/Offset"], function (e, t) {
  var n = {
    makePopup: function (e) {
      if (void 0 === n.popupContainerEl) {
        var t = $("#poe-popup-container");
        0 == t.length && (t = $('<div id="poe-popup-container" style="position: absolute; width: 800px; left: -1000px"></div>'), $("body").append(t)), n.popupContainerEl = t
      }
      n.popupContainerEl.append(e)
    }
  };
  return n
}), define("PoE/Geom/Bounds", ["./Point", "./Offset"], function (e, t) {
  var n = function (t, n) {
    this.tl = void 0 === t ? new e : t, this.br = void 0 === n ? new e : n
  };
  return n.prototype.top = function () {
    return this.tl.y
  }, n.prototype.bottom = function () {
    return this.br.y
  }, n.prototype.left = function () {
    return this.tl.x
  }, n.prototype.right = function () {
    return this.br.x
  }, n.prototype.centerAt = function (e) {
    var t = this.width() / 2, n = this.height() / 2;
    this.tl.x = e.x - t, this.tl.y = e.y - n, this.br.x = e.x + t, this.br.y = e.y + n
  }, n.prototype.width = function (e) {
    return void 0 !== e ? (this.br.x = this.tl.x + e, this) : this.br.x - this.tl.x
  }, n.prototype.height = function (e) {
    return void 0 !== e ? (this.br.y = this.tl.y + e, this) : this.br.y - this.tl.y
  }, n.prototype.scale = function () {
    this.tl.scale(), this.br.scale()
  }, n.prototype.contains = function (e) {
    return this.containsCoords(e.x, e.y)
  }, n.prototype.containsCoords = function (e, t) {
    return e >= this.tl.x && e <= this.br.x && t >= this.tl.y && t <= this.br.y
  }, n.prototype.containsBounds = function (e) {
    return this.contains(e.tl) && this.contains(e.br)
  }, n.prototype.translateX = function (e) {
    return this.tl.translateX(e), this.br.translateX(e), this
  }, n.prototype.translateY = function (e) {
    return this.tl.translateY(e), this.br.translateY(e), this
  }, n.prototype.grow = function (e) {
    this.tl.x -= e, this.tl.y -= e, this.br.x += e, this.br.y += e
  }, n.prototype.tr = function () {
    return new e(this.br.x, this.tl.y)
  }, n.prototype.bl = function () {
    return new e(this.tl.x, this.br.y)
  }, n.prototype.intersectionPoint = function (t, n, i) {
    var o = function (e, t) {
      var n = t.y - e.y, i = e.x - t.x;
      return {A: n, B: i, C: n * e.x + i * e.y, point1: e, point2: t}
    }, r = function (t, n) {
      var o, r, s = (r = n, (o = t).A * r.B - r.A * o.B);
      if (0 == s) return !1;
      var a = function (e, t) {
        var n = Math.min(t.point1.x, t.point2.x), o = Math.max(t.point1.x, t.point2.x),
          r = Math.min(t.point1.y, t.point2.y), s = Math.max(t.point1.y, t.point2.y);
        return e.x >= n - i && e.x <= o + i && e.y >= r - i && e.y <= s + i
      }, l = new e((n.B * t.C - t.B * n.C) / s, (t.A * n.C - n.A * t.C) / s);
      return !(!a(l, t) || !a(l, n)) && l
    }, s = this.tl, a = this.tr(), l = this.bl(), c = this.br, u = o(t, n), d = r(o(s, a), u);
    return !1 !== d ? d : !1 !== (d = r(o(a, c), u)) ? d : !1 !== (d = r(o(l, c), u)) ? d : !1 !== (d = r(o(s, l), u)) && d
  }, n.prototype.clone = function () {
    return new n(this.tl.clone(), this.br.clone())
  }, n.prototype.toString = function () {
    return "Bounds(" + this.tl + ", " + this.br + ")"
  }, n.prototype.positionAbove = function (e) {
    e instanceof n && this.translateY(e.tl.y - this.br.y)
  }, n.prototype.positionBelow = function (e) {
    e instanceof n && this.translateY(e.br.y - this.tl.y)
  }, n.prototype.positionLeft = function (e) {
    e instanceof n && this.translateX(e.tl.x - this.br.x)
  }, n.prototype.positionRight = function (e) {
    e instanceof n && this.translateX(e.br.x - this.tl.x)
  }, n.prototype.alignTop = function (e) {
    e instanceof n && this.translateY(e.tl.y - this.tl.y)
  }, n.prototype.positionTopLeftX = function (e) {
    var t = this.width();
    this.tl.x = e, this.width(t)
  }, n.prototype.positionTopLeftY = function (e) {
    var t = this.height();
    this.tl.y = e, this.height(t)
  }, n.prototype.positionAtXCenter = function (e) {
    e instanceof n && this.positionTopLeftX(e.tl.x + e.width() / 2 - this.width() / 2)
  }, n.prototype.positionAtYCenter = function (e) {
    e instanceof n && this.positionTopLeftY(e.tl.y + e.height() / 2 - this.height() / 2)
  }, n.prototype.positionAtRightEdge = function (e) {
    e instanceof n && this.positionTopLeftX(e.tl.x + e.width() - this.width())
  }, n.prototype.positionInsideLeftEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    n.left >= 0 || this.translateX(-n.left)
  }, n.prototype.positionInsideRightEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    n.right <= 0 || this.translateX(-n.right)
  }, n.prototype.positionInsideTopEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    n.top >= 0 || this.translateY(-n.top)
  }, n.prototype.positionInsideBottomEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    n.bottom >= 0 || this.translateY(-n.bottom)
  }, n.prototype.fitsAbove = function (e, n) {
    return t.getBoundsOffset(e, n).top >= this.height() && n.width() >= this.width()
  }, n.prototype.fitsRight = function (e, n) {
    return -t.getBoundsOffset(e, n).right >= this.width() && n.height() >= this.height()
  }, n.prototype.fitsLeft = function (e, n) {
    return t.getBoundsOffset(e, n).left >= this.width() && n.height() >= this.height()
  }, n.prototype.fitsBelow = function (e, n) {
    return -t.getBoundsOffset(e, n).bottom >= this.height() && n.width() >= this.width()
  }, n.prototype.draw = function (e) {
    var t = this.clone();
    setTimeout(function () {
      var e = $("<div></div>").css("position", "absolute").width(t.width()).height(t.height()).css("top", t.top()).css("left", t.left()).css("background", "#33a").css("border", "1px solid #a33").css("opacity", ".6").css("z-index", 5e3);
      $("body").append(e), setTimeout(function () {
        e.fadeOut(3e3, function () {
          $(this).remove()
        })
      }, 3e3)
    }, 500)
  }, n.prototype.eq = function (e) {
    return this.tl.eq(e.tl) && this.br.eq(e.br)
  }, n.prototype.neq = function (e) {
    return !this.eq(e)
  }, n
}), define("PoE/Layout", ["PoE/Geom/Point", "PoE/Geom/Bounds", "PoE/Layout/Popup"], function (e, t, n) {
  var i = {
    smartPositionNextTo: function (e, t) {
      var n = i.getViewportBounds();
      e.fitsAbove(t, n) ? (e.positionAbove(t), e.positionAtXCenter(t), e.positionInsideLeftEdge(n), e.positionInsideRightEdge(n)) : e.fitsRight(t, n) ? (e.positionAbove(t), e.positionRight(t), e.positionInsideTopEdge(n)) : e.fitsLeft(t, n) ? (e.positionAbove(t), e.positionLeft(t), e.positionInsideTopEdge(n)) : e.fitsBelow(t, n) ? (e.positionBelow(t), e.positionAtXCenter(t), e.positionInsideLeftEdge(n), e.positionInsideRightEdge(n)) : "pointerEvents" in document.body.style ? (e.positionInsideTopEdge(n), e.positionAtRightEdge(n)) : (e.positionBelow(t), e.positionAtXCenter(t), e.positionInsideLeftEdge(n), e.positionInsideRightEdge(n))
    }, getElementBounds: function (n) {
      var i = n.offset();
      return new t(new e(i.left, i.top), new e(i.left + n.outerWidth(!1), i.top + n.outerHeight(!1)))
    }, getViewportBounds: function () {
      var n = $(window), i = n.scrollLeft(), o = n.scrollTop();
      return new t(new e(i, o), new e(i + n.width(), o + n.height()))
    }, positionPopups: function (e, o, r) {
      var s = null, a = new t;
      r && void 0 !== r.mode && (s = r.mode);
      for (var l = i.getElementBounds(o), c = i.getElementBounds(n.popupContainerEl), u = 0, d = e.length; u < d; ++u) {
        var h = (v = e[u]).el.outerWidth(!0), f = v.el.outerHeight(!0);
        a.height(Math.max(f, a.height())), a.width(a.width() + h)
      }
      switch (s) {
        case"smart":
        default:
          i.smartPositionNextTo(a, l);
          break;
        case"below":
          a.positionBelow(l), a.positionAtXCenter(l);
          break;
        case"left":
          a.positionLeft(l), a.positionAtYCenter(l);
          break;
        case"rightTop":
          a.positionRight(l), a.alignTop(l);
          break;
        case"center":
          a.positionAtXCenter(l), a.positionAtYCenter(l)
      }
      a.translateX(-c.left()), a.translateY(-c.top());
      var p = a.left();
      for (u = 0, d = e.length; u < d; ++u) {
        var v;
        (v = e[u]).el.css("left", p).css("top", a.top()), p += v.el.outerWidth(!0)
      }
    }
  };
  return i
}), define("PoE/Layout/Popup/Popup", ["PoE/Geom/Point", "PoE/Geom/Offset", "PoE/Layout/Popup", "PoE/Layout"], function (e, t, n, i) {
  return function (e, t) {
    this.init = function () {
      this.el = e instanceof jQuery ? e : $(e), this.events = {
        prePosition: function () {
        }
      }, this.isPopup = !1, this.widthFunc = t && t.widthFunc ? t.widthFunc : null, this.visible = !1, this.lastX = null, this.lastY = null
    }, this.create = function () {
      this.isPopup || (n.makePopup(this.el), this.el.css("position", "absolute"), this.el.hide(), this.visible = !1, this.isPopup = !0)
    }, this.manualPosition = function (e) {
      this.create(), this.show(), this.events.prePosition(this);
      var t = $("#passiveSkillTree").offset(), n = $("#poe-popup-container").offset(),
        i = $("#poe-popup-container").width(), o = $("#poe-popup-container").height() + n.top, r = this.lastX;
      r = this.lastY, e && (r = this.lastX = e.x, y = this.lastY = e.y);
      var s = t.top + y - o - 50, a = t.left + r + i;
      this.el.css({top: s + "px", left: a + "px", position: "absolute"})
    }, this.positionCenterEl = function (e) {
      this.create(), this.show(), this.events.prePosition(this), i.positionPopups([this], e, {mode: "center"})
    }, this.smartPositionByEl = function (e) {
      this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), i.positionPopups([this], e, {mode: "smart"})
    }, this.positionBelowEl = function (e) {
      this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), i.positionPopups([this], e, {mode: "below"})
    }, this.positionLeftEl = function (e) {
      this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), i.positionPopups([this], e, {mode: "left"})
    }, this.positionRightTopEl = function (e) {
      this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), i.positionPopups([this], e, {mode: "rightTop"})
    }, this.isVisible = function () {
      return this.visible
    }, this.show = function () {
      this.visible = !0, this.el.show()
    }, this.hide = function () {
      this.visible = !1, this.el.hide()
    }, this.init()
  }
}), define("PoE/Layout/Popup/PopupGroup", ["PoE/Layout", "PoE/Geom/Offset"], function (e) {
  return function (t) {
    this.popups = t, this.smartPositionByEl = function (n) {
      for (var i = 0, o = this.popups.length; i < o; ++i) {
        var r = this.popups[i];
        r.el.show(), r.events.prePosition(r), r.el.css("position", "absolute")
      }
      e.positionPopups(t, n, {mode: "smart"})
    }
  }
}), define("PoE/DOM/Util", ["jquery"], function (e) {
  return {
    isNextSiblingTextNode: function (t) {
      if (t instanceof e) {
        if (0 == t.length) return !1;
        t = t[0]
      }
      var n = t.nextSibling;
      return n && 3 == n.nodeType
    }, isPrevSiblingTextNode: function (t) {
      if (t instanceof e) {
        if (0 == t.length) return !1;
        t = t[0]
      }
      var n = t.previousSibling;
      return n && 3 == n.nodeType
    }, getSelectedText: function (t) {
      if (t instanceof e && (t = t[0]), "selectionStart" in t) {
        var n = t.selectionStart, i = t.selectionEnd - n;
        return t.value.substr(n, i)
      }
      if (document.selection) {
        t.focus();
        var o = document.selection.createRange();
        return null == o ? "" : o.text
      }
      return ""
    }
  }
}), define("PoE/Item/Item", ["Handlebars", "Backbone", "jquery", "./Popup", "PoE/Layout/Popup/Popup", "PoE/Layout/Popup/PopupGroup", "PoE/Layout", "PoE/DOM/Util", "./DivinationCard", "./Markup", "PoE/Helpers"], function (e, t, n, i, o, r, s, a, l, c, u) {
  var d = t.View.extend({
    initialize: function () {
      null === d.template && (d.template = e.compile(this.tpl)), this.template = d.template, this.state = {
        itemHovered: !1,
        inSocketHover: !1,
        showSocketKeyDown: !1
      }, !0 === this.options.manualPosition && (this.manualPosition = !0), void 0 === this.options.enableVerified && (this.options.enableVerified = !1), void 0 === this.options.enableLeague && (this.options.enableLeague = !1), void 0 === this.options.showSockets && (this.options.showSockets = !1), void 0 === this.options.hiddenSlot && (this.options.hiddenSlot = !1), this.leaguePopup = null, this.options.showSockets && this.$el.addClass("showSockets"), this.options.scale = !!this.options.scale, this.divinationLayout = !!this.options.divinationLayout
    }, events: {click: "itemClick"}, itemClick: function (e) {
      this.trigger("itemClick", this.model)
    }, render: function () {
      var t = this.model.toJSON(), s = this;
      if (t.enableVerified = this.options.enableVerified, t.enableLeague = this.options.enableLeague, t.enableLeague && (t.fullLeagueName = u.translate("{{LEAGUE}} League", {"{{LEAGUE}}": u.translate(t.league)})), t.sockets = [], t.numSockets = 0, t.artFilename && t.stackSize && t.stackSize >= t.maxStackSize && (t.stackSizeFull = !0), this.model.has("sockets")) {
        var a = this.model.get("sockets");
        t.numSockets = a.length;
        for (var d = 0, h = a.length - 1; d <= h; ++d) {
          var f = a[d], p = {
            index: d,
            str: "S" == f.attr,
            dex: "D" == f.attr,
            int: "I" == f.attr,
            gen: "G" == f.attr,
            abyss: "A" == f.sColour,
            delve: "DV" == f.sColour,
            linkNext: d < h && f.group == a[d + 1].group,
            rightAlign: d >= 2 && d <= 3
          };
          t.sockets.push(p)
        }
        this.model.has("socketedItems") && this.model.get("socketedItems").forEach(function (e) {
          var n = e.get("socket");
          t.sockets[n].socketed = !0, t.sockets[n].support = e.get("support");
          var i = e.get("colour");
          switch (i) {
            case"S":
              i = "strGem";
              break;
            case"D":
              i = "dexGem";
              break;
            case"I":
              i = "intGem";
              break;
            case"G":
              i = "genGem";
              break;
            default:
              i = !1
          }
          i || (t.sockets[n].abyss && (i = "abyssJewel"), t.sockets[n].delve && (i = "delve")), t.sockets[n].gemColour = i
        })
      }
      if (this.$el.addClass("newItemContainer").addClass("iW" + this.model.get("w")).addClass("iH" + this.model.get("h")), s.options.hiddenSlot && this.$el.addClass("stashIndividualSlot"), !0 === this.divinationLayout) {
        this.$el.addClass("divinationCard"), this.$el.css("width", "172px"), this.$el.css("height", "261px");
        var v = n.extend(!0, {}, t);
        this.model.get("stackSize") >= this.model.get("maxStackSize") && this.$el.addClass("completeStack");
        v.explicitMods && function (t) {
          if (v[t]) {
            for (var n = [], i = v[t]; i.length > 0;) {
              var o = i.shift();
              o instanceof e.SafeString && (o = o.string);
              var r = o.split("\n");
              n = n.concat(r)
            }
            v[t] = n
          }
        }("explicitMods"), (v = c.recMarkup(v)).panelLayout = !0, new l(v).render().done(function (e) {
          s.$el.empty().html(e), c.PoEMarkup(s.$el, .35)
        })
      } else this.$el.empty().html(this.template(t));
      var g = new i({model: this.model});
      this.$socketsEl = this.$el.find(".sockets"), this.socketEls = this.$socketsEl.children(".socket"), this.socketPopups = [], this.options.enableLeague && (this.leaguePopup = new o(this.$el.find(".itemLeaguePopup:first")), this.leaguePopup.events.prePosition = function (e) {
        e.el.width(e.el.width())
      }), this.model.get("socketedItems").forEach(function (e, t) {
        var r = new i({model: e}), a = e.get("socket");
        r.render(), s.$el.find(".socketPopups").append(r.$el);
        var l = new o(r.$el);
        l.events.prePosition = function (e) {
          return function () {
            e.updatePopupWidth()
          }
        }(r), s.socketPopups.push({view: r, popup: l, $socketEl: n(s.socketEls.get(a))})
      }), g.render(), this.$el.find(".popupPlaceholder:first").replaceWith(g.$el), this.mainPopup = {
        view: g,
        popup: new o(g.$el)
      }, this.mainPopup.popup.events.prePosition = function () {
        s.mainPopup.view.updatePopupWidth()
      }, this.mainPopup.popup.create(), this.itemIconEl = this.$el.find(".icon:first"), this.on("displayed", function () {
        this.itemIconEl.find("img:first").load(function () {
          var e = s.model.get("w"), t = s.model.get("h");
          if (s.model.get("shaper")) {
            s.itemIconEl = s.$el.find(".icon:first");
            var n = Math.floor(s.$el.position().left) % 4096, i = Math.floor(s.$el.position().top) % 2160;
            s.itemIconEl.css("background-image", 'url("/image/inventory/ShaperBackground.png?w=' + e + "&h=" + t + "&x=" + n + "&y=" + i + '")')
          }
          s.model.get("elder") && s.itemIconEl.css("background-image", 'url("/image/inventory/ElderBackground.png?w=' + e + "&h=" + t + '")')
        })
      }), this.$el.mouseenter(function (e) {
        s.handleItemMouseover(e)
      }).mouseleave(function (e) {
        s.handleItemMouseout(e)
      }), n(document).keydown(function (e) {
        return s.handleKeyDown(e)
      }).keyup(function (e) {
        return s.handleKeyUp(e)
      });
      d = 0;
      for (var m = s.socketPopups.length; d < m; ++d) {
        var y = s.socketPopups[d];
        y.popup.create(), y.$socketEl.mouseenter(function (e) {
          return function (t) {
            s.state.inSocketHover = !0, s.state.itemHovered = !0, n(this).addClass("socketHover"), new r([s.mainPopup.popup, e.popup]).smartPositionByEl(s.$el)
          }
        }(y)), y.$socketEl.mouseleave(function (e) {
          return function (t) {
            s.state.inSocketHover = !1, s.state.itemHovered = !0, n(this).removeClass("socketHover"), e.popup.hide(), s.reposition()
          }
        }(y))
      }
      this.$el.addClass("itemRendered"), this.trigger("render")
    }, handleKeyDown: function (e) {
      if (18 == e.which) {
        if (this.state.showSocketKeyDown = !0, this.state.itemHovered) return;
        return this.hideSockets(!1), !1
      }
    }, handleKeyUp: function (e) {
      if (18 == e.which) {
        if (this.state.showSocketKeyDown = !1, this.state.itemHovered) return;
        this.hideSockets(!0)
      }
    }, reposition: function (e) {
      this.manualPosition ? this.mainPopup.popup.manualPosition(e) : this.divinationLayout ? this.mainPopup.popup.positionCenterEl(this.$el) : this.mainPopup.popup.smartPositionByEl(this.$el)
    }, handleItemMouseover: function (e) {
      this.state.inSocketHover || this.state.itemHovered || (this.hideSockets(!1), this.hoverStart(), this.reposition(e))
    }, handleItemMouseout: function () {
      this.state.inSocketHover || this.state.showSocketKeyDown || this.hideSockets(!0), this.state.itemHovered && (this.mainPopup.popup.hide(), this.hoverEnd())
    }, hoverStart: function () {
      this.state.itemHovered = !0, this.$el.addClass("hovered"), this.options.enableLeague && this.leaguePopup.positionBelowEl(this.$el)
    }, hoverEnd: function () {
      this.state.itemHovered = !1, this.$el.removeClass("hovered"), this.options.enableLeague && this.leaguePopup.hide()
    }, hideSockets: function (e) {
      e ? this.$socketsEl.hide() : this.$socketsEl.show()
    }, setPlaced: function (e, t) {
      this.$el.addClass("itemPlaced").addClass("ipW" + e).addClass("ipH" + t), this.model.get("identified") || this.$el.addClass("unidentified"), this.model.get("corrupted") && this.$el.addClass("corrupted"), this.model.get("lockedToCharacter") && this.$el.addClass("lockedToCharacter")
    }, close: function () {
      this.remove(), this.off(), this.mainPopup.view.close();
      for (var e = 0, t = this.socketPopups.length; e < t; ++e) this.socketPopups[e].view.close()
    }
  });
  return d.template = null, d.prototype.tpl = ' \t<div class="popupPlaceholder"></div> \t<div class="socketPopups"></div> \t<div class="iconContainer"> \t \t<div class="icon {{#if elder}} elder {{/if}}{{#if shaper}} shaper {{/if}}"> \t \t\t{{#if iconMp4}}\t \t\t<video class="noHeight" autoplay loop muted poster="{{icon}}">\t \t\t    {{#each iconMp4}}\t \t\t        <source src="{{this}}" type="video/{{@key}}">\t \t\t    {{/each}}\t \t\t</video> \t \t\t{{else}}\t \t\t<img src="{{icon}}" alt="" />\t \t\t{{/if}}\t\t\t<div class="sockets numSockets{{numSockets}}"> \t\t\t{{#each sockets}} \t\t\t{{#if linkNext}}<div class="socketLink socketLink{{index}}"></div>{{/if}} \t\t\t<div class="socket{{#if rightAlign}} socketRight{{/if}}{{#if socketed}} socketed{{/if}}{{#if support}} socketSupport{{/if}}{{#if gemColour}} {{gemColour}}{{/if}}{{#if str}} socketStr{{/if}}{{#if dex}} socketDex{{/if}}{{#if int}} socketInt{{/if}}{{#if gen}} socketGen{{/if}} {{#if abyss}} socketAbyss {{/if}} {{#if delve}} socketDelve {{/if}}"></div> \t\t\t{{/each}} \t\t\t</div>             {{#if stackSize}}<span class="stackSize{{#if stackSizeFull}} maxed{{/if}}">{{stackSize}}</span>{{/if}}         </div> \t\t{{#if enableVerified}}{{#if verified}}<div class="verifiedStatus">{{translate "Verified"}}</div>{{/if}}{{/if}}         {{#if enableLeague}}<div class="itemLeaguePopup">{{fullLeagueName}}</div>{{/if}}         </div>  \t', d
}), define("PoE/BetaCountdown", ["plugins"], function (e) {
  return function (t, n) {
    this.countdownContEl = e(t), this.loadingEl = this.countdownContEl.find(".loading:first"), this.activeContainerEl = this.countdownContEl.find(".activeContainer:first"), this.countdownEl = this.countdownContEl.find(".countdown:first"), this.countdownLastEl = this.countdownContEl.find(".p1Status .lastInvite:first"), this.countdownNextEl = this.countdownContEl.find(".p1Status .nextInvite:first"), this.countdownLastNameEl = this.countdownLastEl.find(".name:first"), this.countdownNextNameEl = this.countdownNextEl.find(".name:first"), this.P2countdownLastEl = this.countdownContEl.find(".p2Status .lastInvite:first"), this.P2countdownNextEl = this.countdownContEl.find(".p2Status .nextInvite:first"), this.P2countdownLastNameEl = this.P2countdownLastEl.find(".name:first"), this.P2countdownNextNameEl = this.P2countdownNextEl.find(".name:first"), this.boxContainerEl = e(n), this.id = 0, this.intervalId = null, this.XHR = null, this.hasCountdown = !1, this.latestName = "", this.nextName = "", this.upcoming = [], this.upcomingIndex = 0, this.upcomingLen = 0, this.P2latestName = "", this.P2nextName = "", this.P2upcoming = [], this.P2upcomingIndex = 0, this.P2upcomingLen = 0;
    var i = this;
    this.init = function () {
      this.loading(!0), this.next(), setInterval(this.showNextUpcoming, 1500)
    }, this.showNextUpcoming = function () {
      if (!1 !== i.upcoming) {
        var e = i.upcoming[i.upcomingIndex];
        void 0 !== e && (i.nextName != e.name && (i.countdownNextNameEl.empty().hide().append(e.name).slideDown("fast"), i.nextName = e.name), ++i.upcomingIndex, i.upcomingIndex == i.upcomingLen && (i.upcomingIndex = 0), !1 !== i.P2upcoming && void 0 !== (e = i.P2upcoming[i.P2upcomingIndex]) && (i.P2nextName != e.name && (i.P2countdownNextNameEl.empty().hide().append(e.name).slideDown("fast"), i.P2nextName = e.name), ++i.P2upcomingIndex, i.P2upcomingIndex == i.P2upcomingLen && (i.P2upcomingIndex = 0)))
      }
    }, this.loading = function (t) {
      t ? (this.loadingEl.show(), this.activeContainerEl.hide()) : (this.loadingEl.hide(), this.boxContainerEl.slideDown("fast"), e("#betaInviteTimer").css("cursor", "pointer"), e("#betaInviteTimer").click(function () {
        var t = e("#betaInviteTimer").data("url");
        document.location = t
      }), this.activeContainerEl.show())
    }, this.expiry = function () {
      this.countdownEl.fadeOut(), this.countdownEl.countdown("destroy"), this.countdownEl.fadeIn(), this.next()
    }, this.startInterval = function () {
      var e;
      null === this.intervalId && (this.intervalId = setInterval((e = this, function () {
        e.next()
      }), 3e3))
    }, this.endInterval = function () {
      null !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
    }, this.countdown = function (e, t, n) {
      var i, o = 0;
      !1 !== e && this.latestName != e.name && (this.countdownLastNameEl.empty().hide().append(e.name).fadeIn(), this.latestName = e.name), !1 === t ? ("**NONE**" != this.nextName && (this.countdownNextNameEl.empty().hide().append('<span class="none">None</span>').fadeIn(), this.nextName = "**NONE**"), this.upcoming = !1, this.upcomingIndex = 0, this.upcomingLen = 0, this.startInterval()) : (this.upcomingIndex = 0, this.upcoming = t, this.upcomingLen = t.length, o += n), o <= 0 && (o = 1), this.hasCountdown ? this.countdownEl.countdown({
        until: o,
        layout: '<div class="minutes">{mn}</div><div class="seconds">{sn}</div>',
        onExpiry: (i = this, function () {
          i.expiry()
        })
      }) : (this.countdownEl.countdown({
        until: o,
        layout: '<div class="minutes">{mn}</div><div class="seconds">{sn}</div>',
        onExpiry: function (e) {
          return function () {
            e.expiry()
          }
        }(this)
      }), this.hasCountdown = !0)
    }, this.next = function () {
      if (null === this.XHR) {
        var t = this;
        this.XHR = e.ajax({
          url: "/scripts/beta-invite-query.php?mode=next",
          async: !0,
          cache: !1,
          dataType: "json",
          data: {id: this.id},
          success: function (e) {
            switch (t.endInterval(), e.action) {
              case"end":
                t.end();
                break;
              case"update":
                t.countdown(e.p1.last, e.p1.upcoming, e.p1.next_s), t.loading(!1)
            }
            t.XHR = null
          },
          error: function (e, n, i) {
            t.endInterval(), t.end(), t.XHR = null
          }
        })
      }
    }, this.end = function () {
      this.boxContainerEl.slideUp("fast", function () {
        e(this).remove()
      })
    }, this.checkName = function () {
    }, this.serverSync = function () {
      var t = null;
      return e.ajax({
        url: "/index/beta-invite-query/mode/sync", async: !1, dataType: "json", success: function (e) {
          t = new Date(e)
        }, error: function (e, n, i) {
          t = new Date
        }
      }), t
    }, this.init()
  }
}), define("PoE/Backbone/Model/Item/SocketedItem", ["Backbone"], function (e) {
  return e.RelationalModel.extend({idAttribute: "_id", relations: [{type: e.HasOne, key: "vaal"}]})
}), define("PoE/Backbone/Collection/Item/SocketedItemCollection", ["Backbone", "PoE/Backbone/Model/Item/SocketedItem"], function (e, t) {
  return e.Collection.extend({model: t})
}), define("PoE/Backbone/Model/Item/Item", ["Backbone", "./SocketedItem", "PoE/Backbone/Collection/Item/SocketedItemCollection"], function (e, t, n) {
  return e.RelationalModel.extend({
    idAttribute: "_id",
    relations: [{type: e.HasMany, key: "socketedItems", relatedModel: t, collectionType: n}, {
      type: e.HasOne,
      key: "vaal"
    }]
  })
}), define("PoE/DOM/DeferredLoader", [], function () {
  var e = function (e) {
    this.threshold = e && e.threshold ? e.threshold : 0, this.jobs = [], this.$window = $(window), this.viewPort = {
      top: null,
      bottom: null
    };
    var t = this;
    this.updatePositions(), this.jobTimer = !1, this.$window.scroll(function () {
      this.jobTimer && clearTimeout(this.jobTimer), this.jobTimer = setTimeout(function () {
        t.processJobs()
      }, 500)
    })
  };
  return e.prototype.processJobs = function () {
    this.updatePositions();
    for (var e = this.jobs.length - 1; e >= 0; --e) {
      var t = this.jobs[e];
      this.processJob(t) && this.jobs.splice(e, 1)
    }
  }, e.prototype.updatePositions = function () {
    this.viewPort.top = this.$window.scrollTop(), this.viewPort.bottom = this.viewPort.top + this.$window.height()
  }, e.prototype.processJob = function (e) {
    if (e.acceptFunc && e.acceptFunc(e.element)) {
      var t = e.element.offset().top, n = t + e.element.height();
      if (t >= this.viewPort.top - this.threshold && n <= this.viewPort.bottom + this.threshold) return e.callback(), !0
    }
    return !1
  }, e.prototype.deferLoad = function (e, t, n) {
    var i = {element: e instanceof $ ? e : $(e), callback: t};
    n && n.acceptFunc && (i.acceptFunc = n.acceptFunc), this.processJob(i) || this.jobs.push(i)
  }, e
}), define("PoE/Util/ThrottledExecutor", [], function () {
  var e = function (e) {
    this.throttle = e && e.throttle ? e.throttle : 1, this.threads = e && e.threads ? e.threads : 1, this.jitter = e && e.jitter ? e.jitter : 0, this.jobs = [], this.numThreads = 0
  };
  return e.prototype.execute = function (e) {
    this.numThreads < this.threads ? this.runThread(e) : this.jobs.push(e)
  }, e.prototype.processNextJob = function (e) {
    this.jobs.length > 0 && this.runThread(this.jobs.shift())
  }, e.prototype.runThread = function (e) {
    ++this.numThreads;
    var t = e(), n = this, i = $.Deferred();
    i.done(function () {
      setTimeout(function () {
        --n.numThreads, n.processNextJob()
      }, n.throttle + (0 == n.jitter ? 0 : Math.floor(Math.random() * n.jitter + 1)))
    }), t && t.promise ? t.done(function () {
      i.resolve()
    }) : i.resolve()
  }, e
}), define("PoE/Item/LayoutManager", ["PoE/DOM/Util"], function (e) {
  var t = function t() {
    var n = function (n) {
      n.offset();
      var i = n.prev(), o = (n.next(), function (e) {
        return e.hasClass("newItemContainer") || e.hasClass("itemFragment") || e.hasClass("itemUnavailable")
      }), r = function (e) {
        return e.hasClass("itemRendered") || e.hasClass("itemUnavailable")
      }, s = function (e) {
        return e.hasClass("itemSmartLayoutStop")
      }, a = function (e) {
        return e.hasClass("itemSmartLayoutBreak")
      }, l = function (e, t) {
        e.attr("data-last-offset-top", t.top), e.attr("data-last-offset-left", t.left)
      }, c = function () {
        var e = $('<div class="itemSmartLayoutBreak itemSmartLayoutStop"></div>');
        return t.debug && e.css("background", "cyan").css("height", "2px"), e
      }, u = function () {
        var e = $('<div class="itemSmartLayoutBreak"></div>');
        return t.debug && e.css("background", "red").css("height", "2px"), e
      }, d = function (e) {
        for (var n, i, d, h = e; ;) {
          if (t.debug && (h.css("background", "green"), setTimeout(function (e) {
            return function () {
              e.css("background", "")
            }
          }(h), 5e3)), 0 == (n = h.next()).length) return void h.after(c());
          if (s(n)) return;
          if (a(n)) {
            var f = h.offset(), p = h.data("last-offset-top"), v = h.data("last-offset-left"), g = n;
            g.data("last-offset-top");
            if (f.top == p && f.left == v) return;
            if (f.left == v) return;
            var m = (n = g.next()).offset();
            g.remove();
            var y = n.offset();
            if (m.top == y.top && m.left == y.left) {
              l(h, f);
              var b = u();
              return n.before(b), void l(b, b.offset())
            }
            n = h
          } else {
            if (!o(n)) return void n.before(c());
            if (!r(n)) return;
            f = h.offset(), m = n.offset();
            if (i = f, (d = m).top > i.top || d.left < i.left) {
              l(h, f);
              b = u();
              n.before(b), l(b, b.offset());
              var w = n.offset();
              if (w.top == m.top && w.left == m.top) return
            }
          }
          h = n
        }
      };
      return e.isPrevSiblingTextNode(n) ? (n.before(c()), void d(n)) : e.isNextSiblingTextNode(n) ? (n.after(c()), void d(n)) : 0 != i.length ? o(i) || a(i) ? void d(i) : (n.before(c()), void d(n)) : void d(n)
    };
    this.smartLayout = function (e) {
      e.on("render", function () {
        n(e.$el)
      })
    }, this.smartLayoutEl = function (e) {
      n(e)
    }
  };
  return t.debug = !1, t
}), define("PoE/Backbone/EventBus", ["Backbone", "Underscore"], function (e, t) {
  return t.extend({}, e.Events)
}), define("PoE/Item/DeferredItemRenderer", ["PoE/Backbone/Model/Item/Item", "PoE/Item/Item", "PoE/DOM/DeferredLoader", "PoE/Util/ThrottledExecutor", "PoE/Item/LayoutManager", "PoE/Backbone/EventBus"], function (e, t, n, i, o, r) {
  var s = function (e) {
    this.config = e || []
  };
  return s.prototype.run = function () {
    var s = new n({threshold: 200}), a = new i({throttle: 4, threads: 6, jitter: 3}), l = new o;
    r.on("spoilerShow", function () {
      s.processJobs()
    });
    for (var c = 0, u = this.config.length; c < u; ++c) {
      var d = $("#item-fragment-" + this.config[c][0]), h = this.config[c][2],
        f = void 0 === h.enableSmartLayout || h.enableSmartLayout, p = new t({
          el: d,
          enableVerified: void 0 === h.enableVerified || h.enableVerified,
          enableLeague: void 0 === h.enableLeague || h.enableLeague,
          showSockets: void 0 !== h.showSockets && h.showSockets,
          model: new e(this.config[c][1])
        });
      f && l.smartLayout(p), s.deferLoad(d, function (e) {
        return function () {
          a.execute(function () {
            e.render(), e.trigger("displayed"), e.$el.removeClass("itemFragment")
          })
        }
      }(p), {
        acceptFunc: function (e) {
          return e.is(":visible")
        }
      })
    }
    f && $(".itemUnavailable").each(function () {
      l.smartLayoutEl($(this))
    })
  }, s
}), define("PoE/Forum", ["jquery", "PoE/Backbone/EventBus", "PoE/Helpers", "moment"], function (e, t, n, i) {
  window.POE = window.POE || {};
  var o = window.POE;
  o.Forum = {}, o.Forum.SpoilerClick = function (i) {
    var o = e(i), r = e(i).parent().parent(), s = r.children(".spoilerContent:first");
    return r.hasClass("spoilerHidden") ? (o.val(n.translate("Hide")), s.hide(), r.removeClass("spoilerHidden").addClass("spoilerVisible"), s.slideDown(400, function () {
      t.trigger("spoilerShow")
    })) : (o.val(n.translate("Show")), s.fadeOut("fast", function () {
      r.removeClass("spoilerVisible").addClass("spoilerHidden")
    })), !1
  }, e(".report-post a").click(function (t) {
    var n = e(t.target).parent().data();
    e('#forum-report-box #forum-report-form input[name="reported_name"]').val(n.name), e('#forum-report-box #forum-report-form input[name="forum_post_id"]').val(n.postid), e("#forum-report-box #forum-report-form .reported_name").text(n.name), e('#forum-report-box #forum-report-form textarea[name="description"]').val(""), e('#forum-report-box #forum-report-form select[name="type"]').val(""), e(this).colorbox({
      width: "650px",
      height: "380px",
      href: "#forum-report-box",
      inline: !0,
      className: "colorBoxTheme1",
      onComplete: function (t) {
        e("#forum-report-box").show()
      },
      onCleanup: function () {
        e("#forum-report-box").hide()
      }
    })
  }), e("#forum-report-form").submit(function (t) {
    var n = e(this).find('input[type="submit"]'), i = n.css("background"), o = n.css("color"),
      r = n.css("border-color"), s = n.css("padding-left"), a = n.val();
    n.prop("disabled", !0), n.css("background", "#1f202c url('/image/UI/loader/loading-1.gif?1375395152') no-repeat 3px 3px"), n.css("padding-left", "25px"), n.val("Submitting...");
    var l = e(this).serialize();
    e(this).find('select[name="type"]').val() ? e.ajax({
      url: "/api/report",
      type: "POST",
      dataType: "json",
      data: l,
      success: function (t) {
        n.css("background", "#173517"), n.css("color", "#86ff4d"), n.css("border-color", "#647a64"), n.css("padding-left", s), n.val("Submitted"), setTimeout(function () {
          e.colorbox.close(), n.css("background", i), n.css("color", o), n.css("border-color", r), n.val(a)
        }, 1500)
      },
      complete: function () {
        setTimeout(function () {
          n.prop("disabled", !1)
        }, 1500)
      }
    }) : (alert("Please select a Report Type"), n.css("background", i), n.css("color", o), n.css("border-color", r), n.css("padding-left", s), n.val(a), n.prop("disabled", !1)), t.preventDefault()
  }), e(".uiBumpButton").click(function (t) {
    t.preventDefault();
    var i = e(this).data("thread"), o = e(this).data("unbump"), r = e(this),
      s = e(this).parentsUntil(".post_info").last().find(".bump-thread-result"), a = {id: i};
    o && (a.unbump = !0), e.ajax({
      url: "/api/forum-bump",
      method: "POST",
      dataType: "json",
      data: a,
      success: function (e) {
        if (e.result) r.addClass("disabled"), s.addClass("success"), e.unbumped ? s.html(n.translate("Thread Bump removed")) : s.html(n.translate("Thread Bumped")); else {
          r.addClass("disabled"), s.addClass("error");
          var t = "Thread Already bumped";
          e.error && e.error.message && (t = e.error.message), s.html(n.translate(t))
        }
        setTimeout(function () {
          s.fadeOut(500)
        }, 1e3)
      },
      error: function (e) {
        s.html(n.translate("Failed to Bump Thread"))
      }
    })
  }), e(".forumTable .points").on("click", function (t) {
    if (e(this).hasClass("disabled") || e(this).hasClass("voted")) alert(e(this).attr("title")), e(this).hasClass("guest") && window.TencentLogin(); else {
      var i = e(this), o = e(this).data("post");
      e.ajax({
        url: "/api/forum-points", method: "POST", dataType: "json", data: {post: o}, success: function (t) {
          if (i.addClass("disabled"), t.result) {
            if (t.points && i.find(".points-value").html(t.points), t.pointsRemaining) {
              var o = n.translate("Give this post a point if you think they did a good job.");
              e(".points:not(.disabled):not(.voted)").attr("title", o)
            } else e(".points:not(.disabled):not(.voted)").addClass("disabled").attr("title", n.translate("You don't have enough points!"));
            i.removeClass("disabled").addClass("voted").attr("title", n.translate("Good job!"))
          } else alert(t.message)
        }, error: function (e) {
          i.addClass("disabled"), alert(e.message)
        }
      })
    }
    t.preventDefault()
  });
  var r = function () {
    var t = [];
    e(".forumIndexTable:has(tr.expand-category) > tbody").each(function () {
      var n = e(this).parent(".forumIndexTable"), i = 0;
      e(this).children("tr").each(function () {
        e(this).toggleClass("even", ++i % 2 == 0)
      });
      var o = e(this).sortable("toArray", {attribute: "data-id"});
      o = e.map(o, function (e, t) {
        return +e
      }), t.push({id: n.data("id"), collapsed: !n.find(".expand-category").first().data("toggled"), forums: o})
    }), e.ajax({
      url: "/api/forum/preferences?type=categories-layout",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(t)
    })
  };
  e(document).ready(function () {
    var t = !0;
    e(".forumIndexTable > thead > .expand-category").on("click", function (i) {
      var o = e(this).data("toggled");
      if (o) !function (e) {
        var t = e.parents("table:first"), i = t.find("tr:not(.heading)"), o = t.find("tr.heading");
        o.find("th:not(.forum)").find("img").hide(), i.addClass("hidden").hide(), o.find("div.view-more-button").html(n.translate("[ Expand ]"))
      }(e(this)); else {
        var s = e(this).parents("table:first"), a = (s.find("tr:not(.heading)"), s.find("tr.heading"));
        t && (a.find("img.hidden").hide().removeClass("hidden").fadeIn("slow"), t = !1), function (e) {
          var t = e.parents("table:first"), i = t.find("tr:not(.heading)"), o = t.find("tr.heading");
          o.find("th:not(.forum)").find("img").show(), i.removeClass("hidden").show(), o.find("div.view-more-button").html(n.translate("[ Collapse ]"))
        }(e(this))
      }
      e(this).data("toggled", !o), r(), i.preventDefault()
    }), e(".forumIndexTable:has(tr.expand-category) > tbody").each(function (t) {
      e(this).sortable({
        containment: e(this),
        tolerance: "pointer",
        items: "tr",
        axis: "y",
        placeholder: "ui-state-highlight",
        cancel: "a,button",
        cursor: "move",
        opacity: .8,
        delay: 150,
        start: function (e, t) {
          t.placeholder.height(t.item.height())
        },
        update: r
      })
    })
  }), e("#search-button").click(function () {
    e(".forumSearchForm form").submit()
  }), e(".clear_viewed").on("click", function () {
    var t = e(this), i = t.data("id"), o = t.data("type"), r = "";
    switch (o) {
      case"f":
        r = "/forum/clear-forum-viewed/";
        break;
      case"t":
        r = "/forum/set-thread-read/"
    }
    e.ajax({
      url: r + i, type: "GET", success: function (i) {
        var r = e("<img>"), s = e("<div></div>"), a = t.parent().children(".status"), l = "", c = "";
        if ("f" == o) l = "/image/forum/old.png", c = n.translate("No new posts"); else {
          if ("t" != o || "R" != i) return;
          l = "/image/forum/read-no-new.png", c = n.translate("No new posts since you last read this thread")
        }
        a.find("a").attr("title", c), r.attr("src", l), s.append(r).hide(), a.children("div").append(s), s.fadeIn(500, function () {
          a.find("img").attr("src", l), s.remove()
        }), t.fadeOut("slow")
      }, error: function (e) {
        alert("There was a problem processing your request. Please try again later")
      }
    })
  }), e(".mark-reviewed a").click(function (t) {
    t.preventDefault();
    var o = e(t.target).parent().data();
    o.postid || alert("No post id"), e.ajax({
      url: "/api/forum-review/" + o.postid,
      type: "1" == o.reviewed ? "DELETE" : "POST",
      dataType: "json",
      success: function (r) {
        var s = e(t.target).parents(".post_info_content");
        if (s.find(".reviewed-by, .reviewed-at").hide(), "0" == o.reviewed) {
          var a = "".concat(n.translate("Reviewed by"), ' <span class="profile-link staff support"><a href="/account/view-profile/').concat(o.reviewer, '">').concat(o.reviewer, "</a></span>"),
            l = "".concat(n.translate("On"), " ").concat(i().format("MMM D, YYYY h:m:s A"));
          if (0 == s.find(".reviewed-by").length) {
            var c = '<div class="reviewed-by">'.concat(a, "</div>");
            c += '<div class="reviewed-at">'.concat(l, "</div>"), s.find(".mark-reviewed").before(c)
          } else s.find(".reviewed-by").html(a).show(), s.find(".reviewed-at").text(l).show();
          "0" == o.canDelete && s.find(".mark-reviewed").hide()
        }
        s.find(".mark-reviewed a").text("1" == o.reviewed ? n.translate("Mark As Reviewed") : n.translate("Delete Reviewer")), s.find(".mark-reviewed").data("reviewed", "1" == o.reviewed ? "0" : "1")
      },
      error: function (e) {
        if (e && e.responseText) {
          var t = JSON.parse(e.responseText);
          alert(t.error.message)
        }
      },
      complete: function () {
      }
    })
  })
}), define("PoE/Forum/AutosaveWatcher", ["require", "jquery"], function (e) {
  var t = e("jquery");
  return function (e, n, i, o) {
    var r = this;
    this.$el = t(e), this.lastSaveCharLength = this.$el.val() ? this.$el.val().length : 0, this.currentCharLength = this.lastSaveCharLength, this.forceSaveChars = 5, this.forceSaveInterval = 1e4, this.dirty = !1, this.inputTimeout = null, this.inputSaveTimeout = 1e3, this.doSave = function () {
      r.lastSaveCharLength = r.currentCharLength, r.dirty = !1, i()
    };
    var s = this.$el.selector && "#tags" == this.$el.selector ? "change" : "input";
    this.$el.on(s, function () {
      n(), r.dirty = !0, r.currentCharLength = r.$el.val() ? r.$el.val().length : 0, null !== r.inputTimeout && clearTimeout(r.inputTimeout), r.inputTimeout = setTimeout(function () {
        Math.abs(r.currentCharLength - r.lastSaveCharLength) >= r.forceSaveChars && r.doSave(), r.inputTimeout = null
      }, r.inputSaveTimeout)
    }), setInterval(function () {
      r.dirty && r.doSave()
    }, this.forceSaveInterval)
  }
}), define("PoE/Forum/Autosave", ["require", "jquery", "moment-tz", "./AutosaveWatcher", "PoE/Helpers"], function (e) {
  var t = e("jquery"), n = e("moment-tz"), i = e("./AutosaveWatcher"), o = e("PoE/Helpers");
  return function (e, r, s, a) {
    this.$status = t(e), this.$status.addClass("forumDraftStatus");
    var l = this;
    this.saving = !1, this.repeatSave = !1, this.$savingStatus = t('<div class="savingStatus">' + o.translate("Saving draft") + '.<span class="loading-inline"></span></div>'), this.$lastSaved = t('<div class="lastSave"></div>').hide(), this.$revertible = t('<a class="revertible" href="#">' + o.translate("You are editing a saved draft. Click here to edit the original.") + "</div>"), this.$savingStatus.hide(), a.revertible && (this.$status.append(this.$revertible), this.$revertible.on("click", function (e) {
      e.preventDefault(), a.revertible() && l.$revertible.remove()
    })), this.$status.append(this.$savingStatus).append(this.$lastSaved), this.modified = !1, this.lastSaveTime = null, this.showSaving = function (e) {
    }, this.setLastSaved = function () {
    }, this.updateLastSaved = function () {
      l.$lastSaved.show(), l.$lastSaved.text(o.translate("Draft " + (this.modified ? "out of sync" : "up to date")) + "." + (null === this.lastSaveTime ? "" : o.translate(" Saved at ") + this.lastSaveTime.format("h:mm:ss a, MMMM Do YYYY")))
    }, this.save = function () {
      if (!l.saving) {
        l.modified = !1, l.showSaving(!0);
        var e = a.dataFactory();
        return l.saving = !0, t.ajax({
          url: a.url,
          type: "PUT",
          dataType: "json",
          data: JSON.stringify(e),
          contentType: "application/json",
          success: function (e) {
            l.lastSaveTime = n(), l.updateLastSaved()
          },
          error: function () {
          }
        }).always(function () {
          l.showSaving(!1), l.saving = !1, l.repeatSave && (l.repeatSave = !1, l.save())
        })
      }
      l.repeatSave = !0
    }, this.watchers = [];
    for (var c = 0, u = a.watch.length; c < u; ++c) this.watchers.push(new i(a.watch[c], function () {
      l.modified = !0, l.updateLastSaved()
    }, function () {
      l.save()
    }, {}))
  }
}), define("PoE/Forum/Thread/Autosave", ["require", "jquery", "moment-tz", "PoE/Forum/Autosave"], function (e) {
  var t = e("jquery"), n = (e("moment-tz"), e("PoE/Forum/Autosave"));
  return function (e, i, o, r, s, a) {
    var l, c, u = t(i), d = t(e), h = [u, d], f = a && a.isNewsForum,
      p = [t("input[type=checkbox][name=notify_owner]"), t("#tags"), t("input[type=checkbox][name=sticky]"), t("input[type=checkbox][name=valued]"), t("input[type=checkbox][name=locked]"), t("input[type=checkbox][name=wide_format_news]"), t("input[type=checkbox][name=front_page]"), t("#thread_start_time")];
    switch (r) {
      case"new":
        l = "forumId";
        break;
      case"edit":
        l = "threadId";
        break;
      default:
        return
    }
    c = {
      url: "/api/forum/thread/draft", watch: f ? h.concat(p) : h, dataFactory: function () {
        var e = {};
        return e.content = u.val(), e.title = d.val(), e[l] = s, f && (e.settings = {
          notify_owner: p[0].prop("checked"),
          tags: p[1].val(),
          sticky: p[2].prop("checked"),
          valued: p[3].prop("checked"),
          locked: p[4].prop("checked"),
          wide_format_news: p[5].prop("checked"),
          front_page: p[6].prop("checked"),
          start_time: p[7].val()
        }), e
      }
    }, a.revertible && (c.revertible = function () {
      return !!confirm("Revert to original thread content?") && (d.val(a.revertible.title), u.val(a.revertible.content), !0)
    }), this.autosave = new n(o, r, s, c)
  }
}), define("PoE/Forum/Thread/Tags", ["plugins"], function (e) {
  return function (t, n) {
    var i = e("select#tags");
    i.parent().addClass("bootstrap"), i.select2({
      theme: "bootstrap", language: n, tags: !0, createTag: function (e) {
        return !1
      }, maximumSelectionLength: t, tokenSeparators: [","]
    })
  }
}), define("PoE/Forum/Thread/DatePicker", ["require", "flatpickr"], function (e) {
  e("flatpickr")("#thread_start_time", {enableTime: !0, minDate: "today"})
}), define("PoE/View/Profile/Badges", ["require", "plugins", "PoE/Helpers"], function (e) {
  var t = e("plugins"), n = e("PoE/Helpers");
  return function (e, i) {
    this.updateAvailableBadges = function () {
      i && t(".badges > .showcase-badge:gt(" + (i - 1).toString() + ")").remove();
      var o = t(".badges > .showcase-badge").map(function () {
        return t(this).data("id")
      });
      t(".badge-category").each(function (e, n) {
        var i = !1, r = function (e, n) {
          n || void 0 === n ? (t(e).removeClass("disabled"), t(e).draggable("option", "disabled", !1)) : (t(e).addClass("disabled"), t(e).draggable("option", "disabled", !0))
        }, s = t(n).find(".badge");
        s.each(function (e, n) {
          var s = t(n).data("id");
          t.inArray(s, o) >= 0 ? (i = !0, r(n, !1)) : r(n, !0)
        }), i && s.each(function (e, n) {
          t(n).hasClass("custom") || r(n, !1)
        })
      });
      if (i) {
        var r = o.length >= i;
        t(".profile-badges-showcase").toggleClass("full", r);
        var s = "";
        r ? s = n.translate("limit reached!") : e && (s = n.translate("max: {MAX}", {"{MAX}": i})), t(".profile-badges-showcase > h4 > .message").html("&nbsp;(" + s + ")")
      }
    }, this.submitBadges = function () {
      var e = t(".badges").sortable("toArray", {attribute: "data-id"});
      t.ajax({
        url: "/api/badges",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({badges: e}),
        success: function (e) {
        }
      })
    }, this.render = function () {
      var n = this;
      t(document).ready(function () {
        var i = e ? "badge roleLabel" : "badge";
        t(".badges").sortable({
          items: "> .badge", placeholder: i, update: function (e, i) {
            t(i.item).removeClass("ui-draggable").removeClass("ui-draggable-handle"), t(".badges > .badge").addClass("showcase-badge").removeAttr("style"), t(this).sortable("refresh"), n.updateAvailableBadges(), n.submitBadges()
          }, start: function (e, n) {
            t(".badges").addClass("highlight")
          }, stop: function (e, n) {
            t(".badges").removeClass("highlight")
          }
        }).disableSelection(), t(".badge-category > .badge").draggable({
          connectToSortable: ".badges",
          revert: "invalid",
          revertDuration: 0,
          helper: "clone",
          appendTo: "body",
          zIndex: 100,
          drag: function (e, n) {
            t(".badges").addClass("highlight")
          },
          stop: function (e, n) {
            t(".badges").removeClass("highlight")
          }
        }).disableSelection(), t(".profile-badges-available").droppable({
          accept: ".showcase-badge",
          over: function (e, n) {
            t(".trash-overlay").show(), t(".badges").removeClass("highlight")
          },
          out: function (e, n) {
            t(".trash-overlay").hide(), t(".badges").addClass("highlight")
          },
          drop: function (e, i) {
            t(i.draggable).removeClass("showcase-badge"), t(i.draggable).remove(), t(i.helper).remove(), t(".trash-overlay").hide(), n.updateAvailableBadges()
          }
        }).disableSelection(), n.updateAvailableBadges()
      })
    }, this.render()
  }
}), define("PoE/Forum/Post/Autosave", ["require", "jquery", "moment-tz", "PoE/Forum/Autosave"], function (e) {
  var t = e("jquery"), n = (e("moment-tz"), e("PoE/Forum/Autosave"));
  return function (e, i, o, r, s) {
    var a, l, c = t(e);
    switch (o) {
      case"new":
        a = "threadId";
        break;
      case"edit":
        a = "postId";
        break;
      default:
        return
    }
    l = {
      url: "/api/forum/post/draft", watch: [c], dataFactory: function () {
        var e = {};
        return e.content = c.val(), e[a] = r, e
      }
    }, s.revertible && (l.revertible = function () {
      return !!confirm("Revert to original post content?") && (c.val(s.revertible.content), !0)
    }), this.autosave = new n(i, o, r, l)
  }
}), define("PoE/Form", ["jquery"], function (e) {
  window.POE = window.POE || {}, window.POE.Form = function (t, n, i) {
    this.formEl = t, this.submit = function () {
      this.formEl.submit()
    }, this.init = function () {
      var t = this;
      this.opts = {
        successFunc: function (e) {
        }, dataPreSubmitFunc: function (e) {
        }, url: "/"
      }, e.extend(this.opts, i), this.formEl.submit(function () {
        t.clearMessages();
        for (var i = {}, o = 0, r = n.length; o < r; ++o) {
          var s = n[o], a = t.getValue(s);
          null !== a && (i[s] = a)
        }
        return t.opts.dataPreSubmitFunc(i), e.ajax({
          url: t.opts.url,
          type: "POST",
          dataType: "json",
          data: i,
          success: function (e) {
            return function (t) {
              t.status ? e.opts.successFunc(t) : e.addMessages(t.messages)
            }
          }(t)
        }), !1
      })
    }, this.clearMessages = function () {
      this.formEl.find(".errors").remove()
    }, this.addMessages = function (t) {
      for (var i = 0, o = n.length; i < o; ++i) {
        var r = n[i], s = "";
        if (void 0 !== t[r]) {
          for (var a in t[r]) s += "<li>" + t[r][a] + "</li>";
          var l = this.formEl.find('[name="' + r + '"]'), c = e('<ul class="errors">' + s + "</ul>").hide();
          l.parents("div.form-text-l:first").after(c)
        }
      }
      this.formEl.find("ul.errors").fadeIn("fast")
    }, this.getValue = function (t) {
      var n = this.formEl.find('[name="' + t + '"]'), i = n.length, o = null;
      return i > 1 ? n.each(function (t, n) {
        (n = e(n)).is(":checkbox") ? n.is(":checked") && (null === o && (o = []), o.push(n.val())) : o.push(n.val())
      }) : o = n.val(), o
    }, this.init()
  }
}), define("PoE/Widget/YoutubeVideo", ["require", "jquery"], function (e) {
  var t = e("jquery");
  return function (e) {
    var n = e instanceof t ? e : t(e);
    if (n.length && !n.attr("src")) {
      var i = n.data("src");
      if (i && n.attr("src", i), n.hasClass("deferLoad")) {
        var o = t("<iframe>");
        o.attr("width", n.data("width")), o.attr("height", n.data("height")), o.attr("src", "//www.youtube.com/embed/" + n.data("id") + "?autoplay=false&rel=0&wmode=opaque&showinfo=false"), o.addClass("video"), n.replaceWith(o)
      }
    }
  }
}), define("PoE/Shop", ["require", "plugins", "PoE/Helpers", "PoE/Widget/YoutubeVideo"], function (e) {
  var t = e("plugins"), n = e("PoE/Helpers"), i = e("PoE/Widget/YoutubeVideo"), o = {
    toggleWatchlistItem: function (e, i) {
      var o = !i.hasClass("added");
      i.addClass("disabled"), t.ajax({
        url: "/shop/watchlist-item",
        type: "POST",
        dataType: "json",
        data: {item: e, watch: o},
        success: function (e) {
          return e ? (i.addClass("added"), i.html(n.translate("Remove from Watchlist"))) : (i.removeClass("added"), i.html(n.translate("Add to Watchlist"))), i.removeClass("disabled"), !0
        },
        error: function (e) {
          return i.removeClass("disabled"), !1
        }
      })
    }, showBuyItemModal: function (e, n) {
      if (!t("#colorbox").is(":visible") && !(n = t(n)).hasClass("buyButtonDisabled")) {
        history.replaceState(window.location.hash, "", window.location.pathname + "#microtransaction-" + e);
        var o = n.closest(".shopItemBase"), r = o.find(".shopBuyItemModal:first"), s = o.find(".video"), a = this;
        if (s.length) new i(s);
        return t(document).bind("cbox_open", function () {
          r.find(".singleOwnedIcon").length > 0 ? a.updateBuyButton(r, r.find(".singleOwnedIcon").data("owned")) : r.find(".buyButton, .totalCost").show(), r.find(".buyButtonDisabled, .purchasingInfo, .shopBackButton, .purchasedInfo, .errorInfo").hide(), r.show(), t("#colorbox").addClass("colorBoxTheme1"), t(".buy-for-friend-checkbox").prop("checked", !1), t(".shopBuyItemModal .content, .shopBuyPackageModal .content").css("right", "0px"), t(".shopBuyItemModal .buy-for-friend, .shopBuyPackageModal .buy-for-friend").css("left", "650px"), t(".buy-for-friend").show()
        }), t(document).bind("cbox_cleanup", function () {
          r.hide(), history.replaceState(window.location.hash, "", window.location.pathname), t(document).unbind("cbox_open"), t(document).unbind("cbox_cleanup")
        }), t(document).bind("cbox_close", function () {
          t("#colorbox").removeClass("colorBoxTheme1"), t(document).unbind("cbox_close")
        }), t.colorbox({inline: !0, href: r}), !1
      }
    }, buyItem: function (e, n, i) {
      (n = t(n)).closest(".purchaseOptions");
      var o = n.closest(".shopBuyItemModal"), r = o.find(".buyButton"), s = o.find(".buyButtonDisabled"),
        a = o.find(".purchasingInfo"), l = o.find(".shopBackButton"), c = o.find(".purchasedInfo"),
        u = o.find(".errorInfo"), d = u.find(".message"), h = o.find(".totalCost"), f = "";
      return c.hide(), a.hide(), n.closest(".shopBuyItemModal").find(".buy-for-friend-checkbox").prop("checked") && (f = n.closest(".shopBuyItemModal").find(".friend-selector .row.selected").html()), f && !confirm("Are you sure you want to buy this item for " + f + "?") || (r.hide(), a.show(), h.hide(), s.show(), t(".buy-for-friend").hide(), t(".buy-for-friend").prop("checked", !1), t(".shopBuyItemModal .content, .shopBuyPackageModal .content").animate({right: "0px"}, 600), t(".shopBuyItemModal .buy-for-friend, .shopBuyPackageModal .buy-for-friend").animate({left: "650px"}, 600), t.fn.colorbox.resize(), t.ajax({
        url: "/shop/buy-item",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({itemID: e, friendName: f}),
        success: function (e) {
          if (a.hide(), i ? r.show() : l.css("display", "block"), s.hide(), !1 === e) d.text("An error has occurred."), u.show(); else switch (e.status) {
            case"success":
              c.show();
              break;
            case"error":
              d.text(e.message), u.show()
          }
          POE.Shop.updatePage(), t.fn.colorbox.resize()
        },
        error: function (e, t, n) {
          return a.hide(), l.css("display", "block"), s.hide(), e.responseJSON && e.responseJSON.message ? d.text(e.responseJSON.message) : d.text("An error has occurred."), u.show(), !1
        }
      })), !1
    }, toggleFriend: function (e) {
      if (!(n = (e = t(e)).parents(".shopBuyItemModal"))) var n = e.parents(".shopBuyPackageModal");
      var i = this, o = n.find(".singleOwnedIcon").length > 0;
      if (e.prop("checked")) t(".friend-selector .row").removeClass("selected"), e.closest(".shopBuyItemModal").find(".friend-selector .row:first-child").addClass("selected"), o && this.showDisableButton(e), n.find(".content").animate({right: "200px"}, 600), n.find(".buy-for-friend").animate({left: "450px"}, 600, "swing", function () {
        o && i.checkFriendTransaction(e)
      }); else if (n.find(".content").animate({right: "0px"}, 600), n.find(".buy-for-friend").animate({left: "650px"}, 600), o) {
        var r = n.find(".singleOwnedIcon").length > 0 && n.find(".singleOwnedIcon").data("owned");
        this.updateBuyButton(n, r)
      }
    }, selectFriend: function (e) {
      e = t(e), t(".friend-selector .row").removeClass("selected"), e.addClass("selected"), this.checkFriendTransaction(e)
    }, checkFriendTransaction: function (e) {
      var i = e.parents(".shopBuyItemModal");
      if (0 != i.find(".singleOwnedIcon").length) {
        var o = i.find(".friend-selector .row.selected").data("name"),
          r = i.find(".friend-selector .row.selected").data("item-id"), s = this,
          a = '<div class="loadingText"><span class="loading-inline"></span>' + n.translate("Loading...") + "</div>";
        i.find(".buyButtonDisabled").show(), i.find(".loadingText").length > 0 ? (i.find(".singleOwnedIcon, .buyButton").hide(), i.find(".loadingText").show()) : (i.find(".singleOwnedIcon").after(a), i.find(".singleOwnedIcon, .buyButton").hide()), t.ajax({
          url: "/shop/check-friend-transaction",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify({itemID: r, friendName: o}),
          success: function (t) {
            if ("error" === t.status) s.showDisableButton(e); else {
              var n = i.find(".friend-selector .row.selected").data("name");
              i.find(".buy-for-friend-checkbox").prop("checked") && n == t.friendName && s.updateBuyButton(i, t && t.hasTransaction)
            }
          },
          error: function (t, n, i) {
            s.showDisableButton(e)
          }
        })
      }
    }, showDisableButton: function (e) {
      var t = e.parents(".shopBuyItemModal");
      t.find(".loadingText").hide(), t.find(".singleOwnedIcon").hide(), t.find(".buyButton").hide(), t.find(".buyButtonDisabled").show()
    }, updateBuyButton: function (e, t) {
      e.find(".loadingText").hide(), e.find(".buyButtonDisabled").hide(), 0 == e.find(".buyPointsButton").length && e.find(".singleOwnedIcon").length > 0 && (t ? (e.find(".singleOwnedIcon").show(), e.find(".buyButton").hide()) : (e.find(".singleOwnedIcon").hide(), e.find(".buyButton").show()))
    }, cancelBuyItem: function () {
      return t.colorbox.close(), !1
    }, redirPurchaseFromBuyItem: function (e) {
      return POE.Shop.rememberRecent(e, function () {
        window.location.href = "/purchase"
      }), !1
    }, rememberRecent: function (e, n) {
      t.ajax({
        url: "/shop/remember-recently-viewed-item",
        type: "POST",
        dataType: "json",
        data: {itemID: e},
        success: n,
        error: function (e) {
          return !1
        }
      })
    }, updatePage: function () {
      var e = {items: []}, n = t(".shopCurrentCoinValue.account"), i = t(".shopCurrentCoinValue.guild"),
        o = t(".shopHideDuringReload"), r = t(".shopShowDuringReload");
      t(".shopItemBase").each(function () {
        var n = t(this), i = n.data("item-id");
        e.items.push({id: n.attr("id"), itemID: i});
        var o = n.find(".disablingLoadingContainer:first");
        o.find(".loading").width(n.width()).height(n.height()), o.width(n.width()).height(n.height())
      }), o.hide(), r.show(), n.text("Loading..."), i.text("Loading..."), t.ajax({
        url: "/shop/xhr-update-page",
        type: "POST",
        dataType: "json",
        data: e,
        success: function (e) {
          if (!1 !== e) {
            for (var s = 0, a = e.items.length; s < a; ++s) {
              var l = t("#" + e.items[s].id);
              e.items[s].itemID;
              l.replaceWith(e.items[s].html), l = t("#" + e.items[s].id)
            }
            n.text(e.accountPoints), i.text(e.guildPoints), o.show(), r.hide()
          }
        },
        error: function (e) {
          return !1
        }
      })
    }, loadHashTag: function () {
      var e = "#microtransaction-", n = this;
      if (-1 !== window.location.hash.indexOf(e)) {
        var i = window.location.hash.substr(e.length - 1), o = null, r = i.indexOf(",");
        o = -1 === r ? i.substr(1) : i.substring(1, r);
        var s = !1;
        t(".shopItemBase").each(function (e, i) {
          if ((i = t(i)).data("item-id") === o) return s = !0, n.showBuyItemModal(o, i), !1
        }), s || (window.location.hash = "")
      } else window.location.hash = ""
    }
  };
  return t(document).on("click", ".shopItemBase a.watchlist", function (e) {
    var n = t(this).parents(".shopItemBase").data("item-id");
    o.toggleWatchlistItem(n, t(this)), e.preventDefault()
  }), o
}), define("PoE/View/Widget/Pagination", ["plugins", "Backbone", "Handlebars", "PoE/Loader", "PoE/Handlebars/Helpers"], function (e, t, n, i) {
  return t.View.extend({
    initialize: function () {
      this.collection.on("reset", this.doReset, this), this.collection.on("change", this.render, this), this.xhr = null
    }, events: {"click a.gotoPage": "gotoPage", "change .perPageOptions": "changePerPage"}, gotoPage: function (t) {
      var n = e(t.target).data("gotopage");
      this.doGoToPage(n), t.preventDefault()
    }, doGoToPage: function (e) {
      var t = this;
      this.xhr && (this.xhr.abort(), this.xhr = null), i.start(), t.trigger("loadStart");
      var n = this.collection.goTo(e);
      this.xhr = n, n.always(function () {
        t.trigger("loadEnd"), t.xhr = null
      })
    }, changePerPage: function (e) {
      i.start(), this.xhr && (this.xhr.abort(), this.xhr = null), this.trigger("loadStart"), this.collection.howManyPer(parseInt(this.$perPageOptions.find("option:selected").val(), 10))
    }, doReset: function () {
      i.done(), this.render()
    }, render: function () {
      var e = n.compile("{{pagination2}}"), t = this.collection.info(),
        i = {info: t, perPageOptions: this.collection.perPageOptions};
      t.totalRecords <= t.perPage && 0 === this.collection.perPageOptions.length ? this.$el.addClass("hidden") : this.$el.removeClass("hidden"), this.$el.html(e(i)), this.$perPageOptions = this.$el.find(".perPageOptions")
    }
  })
}), define("PoE/Backbone/Paginator", ["jquery", "Backbone"], function (e, t) {
  return t.Paginator.requestPager.extend({
    resetPaginator: function (e) {
      var t = this;
      _.defaults(t.paginator_ui, {
        firstPage: 0,
        currentPage: 1,
        perPage: 5,
        totalPages: 10
      }), _.each(t.paginator_ui, function (e, n) {
        _.isUndefined(t[n]) && (t[n] = t.paginator_ui[n])
      });
      var n = {};
      _.each(t.server_api, function (e, i) {
        _.isFunction(e) && (e = (e = _.bind(e, t))()), n[i] = e
      }), this.reset(this.parse(e))
    }, perPageOptions: []
  })
}), define("text!PoE/Profile/SelectAvatar.hbt", [], function () {
  return '<div class="links">\r\n    <div class="header">{{translate "Choose Avatar"}}<span class="separator">&raquo;</span></div>\r\n    <div class="selection{{#unless custom}} selected{{/unless}}"><a href="#public">{{translate "Public Avatars"}}</a></div>\r\n    {{#if hasCustom }}\r\n    <div class="selection{{#if custom}} selected{{/if}}"><a href="#custom">{{translate "Custom Avatars"}}</a></div>\r\n    {{/if}}\r\n    <div class="clearfix"></div>\r\n</div>\r\n<div class="clear"></div>\r\n<div class="avatars">\r\n{{#each avatars}}\r\n    <a href="#" class="avatar{{#if custom}} custom{{/if}}{{#if current}} current{{/if}}" data-id="{{ avatar_id }}">\r\n        <div class="content">\r\n            <img class="avatar-img" src="{{ image }}" />\r\n            {{#if custom }}\r\n            <strong class="bright2">{{ name }}</strong>\r\n            {{/if}}\r\n        </div>\r\n        <span class="control">{{#if current}}{{translate "Current Avatar"}}{{else}}{{translate "Use Avatar"}}{{/if}}</span>\r\n    </a>\r\n{{/each}}\r\n</div>\r\n<div class="clear"></div>\r\n<div class="pagination"></div>\r\n'
}), define("PoE/Profile/SelectAvatar", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/View/Widget/Pagination", "PoE/Backbone/Paginator", "PoE/Helpers", "text!PoE/Profile/SelectAvatar.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), i = e("PoE/Handlebars/TemplateCollection"),
    o = e("PoE/View/Widget/Pagination"), r = e("PoE/Backbone/Paginator"), s = e("PoE/Helpers");
  e("text!PoE/Profile/SelectAvatar.hbt");
  var a = n.Model.extend({}), l = r.extend({
    model: a,
    paginator_ui: {firstPage: 1, currentPage: 1, perPage: 8, totalPages: 1, custom: !1},
    firstPage: 1,
    currentPage: 1,
    perPage: 8,
    totalPages: 1,
    custom: !1,
    paginator_core: {url: "/api/account-avatar", dataType: "json"},
    perPageOptions: [],
    server_api: {
      page: function () {
        return this.currentPage
      }, perPage: function () {
        return this.perPage
      }, custom: function () {
        return this.custom
      }
    },
    parse: function (e) {
      return this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.collection
    }
  });
  return n.View.extend({
    initialize: function (e) {
      var t = this;
      this.hasCustom = e.hasCustom, this.collection = new l, this.pagination = new o({collection: this.collection}), this.collection.on("reset", function () {
        t.render()
      }), this.fetch()
    }, events: {"click .selection a": "changeType", "click .avatar": "changeAvatar"}, changeType: function (e) {
      var n = t(e.currentTarget);
      t(".selection a").removeClass("selected"), n.addClass("selected"), this.collection.currentPage = 1, this.fetch("#custom" === n.attr("href")), e.preventDefault()
    }, changeAvatar: function (e) {
      var n = t(e.currentTarget);
      if (!n.hasClass("current")) {
        var i = n.data("id"), o = n.hasClass("custom");
        this.submitChangeAvatar(n, i, o)
      }
      e.preventDefault()
    }, submitChangeAvatar: function (e, n, i) {
      var o = this, r = t(".avatar.current").first();
      t.ajax({
        url: "/api/account-avatar",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({id: n, custom: i}),
        success: function () {
          var a = function (e, t, n) {
            var i = o.collection.where(e);
            if (i.length > 0) return i[0].set(t, n), i[0]
          }, l = a({current: !0}, "current", !1), c = a({avatar_id: n, custom: i}, "current", !0);
          l && o.collection.add(l), c && o.collection.add(c), r.removeClass("current").find(".control").html(s.translate("Use Avatar")), e.addClass("current").find(".control").html(s.translate("Current Avatar"));
          var u = e.find(".avatar-img").attr("src");
          t("#avatar-image-container .avatar").toggleClass("frame1", !i), t("#avatar-image-container .avatar img").attr("src", u)
        }
      })
    }, attach: function (e) {
      var n = this;
      this.button = t(e), this.button.colorbox({
        inline: !0,
        scrolling: !1,
        className: "inventoryManagerColorbox",
        onLoad: function () {
          n.render()
        }
      })
    }, fetch: function (e) {
      var t = this;
      this.collection.custom = e, this.collection.perPage = e ? 8 : 16, this.collection.fetch().done(function () {
        t.render()
      })
    }, render: function () {
      var e = this;
      i.load("PoE/Profile/SelectAvatar.hbt").done(function (t) {
        var n = {hasCustom: e.hasCustom, custom: e.collection.custom, avatars: e.collection.toJSON()};
        e.$el.html(t(n)), e.button.colorbox.resize(), e.pagination.render(), e.$el.find(".pagination").replaceWith(e.pagination.$el), e.button.colorbox.resize(), e.pagination.delegateEvents(), e.delegateEvents()
      })
    }
  })
}), define("PoE/Ladder/Ladder", ["plugins"], function (e) {
  return function () {
    var t = e("#ladderStatusContainer"), n = e("#leagueStatus"), i = e("#leagueCountdownBox"),
      o = i.find(".countdownLabel:first"), r = i.find(".timer:first"), s = e("#leagueBeginLabel"),
      a = e("#leagueEndLabel");
    this.status = null, this.init = function () {
      switch (LADDER_STATUS.status) {
        case"waitStart":
          this.startWait();
          break;
        case"inProgress":
          this.startActive();
          break;
        case"complete":
          return void this.complete()
      }
    }, this.startWait = function () {
      var e;
      0 == LADDER_STATUS.startSecFromNow ? this.startActive() : (this.status = "waitStart", r.countdown({
        until: LADDER_STATUS.startSecFromNow,
        onExpiry: (e = this, function () {
          e.startActive()
        })
      }))
    }, this.startActive = function () {
      var e, t = (e = this, function () {
        e.complete()
      });
      "waitStart" == this.status ? (this.status = "inProgress", this.updateStatus(), r.countdown("change", {
        until: LADDER_STATUS.endSecFromStart,
        onExpiry: t
      })) : (0 == LADDER_STATUS.endSecFromNow && this.complete(), r.countdown({
        until: LADDER_STATUS.endSecFromNow,
        onExpiry: t
      }))
    }, this.updateStatus = function () {
      n.text(LADDER_STATUS[this.status].message).removeClass().addClass(LADDER_STATUS[this.status].class), s.text(LADDER_STATUS[this.status].beginLabel), a.text(LADDER_STATUS[this.status].endLabel), o.text(LADDER_STATUS[this.status].countdownLabel).removeClass([LADDER_STATUS.waitStart.class, LADDER_STATUS.inProgress.class]).addClass(LADDER_STATUS[this.status].class)
    }, this.complete = function () {
      this.status = "complete", this.updateStatus(), i.fadeOut("slow", function () {
        e(this).remove(), t.removeClass("ladderStatusCountdownActive")
      })
    }, this.init()
  }
}), define("PoE/Util/Date", ["jquery", "moment-tz"], function (e, t) {
  "use strict";
  return {
    Countdown: function (n, i, o) {
      n = t.isMoment(n) ? 1e3 * n.unix() : n.getTime();
      var r = e.Deferred(), s = setInterval(function () {
        o && o(), (new Date).getTime() > n && (clearInterval(s), r.resolve())
      }, 1e3);
      return i && r.done(i), r.promise()
    }, getTimezone: function () {
      var t, n, i, o, r = new Date, s = new Date, a = new Date;
      e("#create_account");
      if (s.setDate(1), s.setMonth(1), a.setDate(1), a.setMonth(7), t = parseInt(r.getTimezoneOffset()), (n = parseInt(s.getTimezoneOffset())) == (i = parseInt(a.getTimezoneOffset()))) o = !1; else {
        var l = n - i < 0;
        o = !!(l && t == n || !l && t == i)
      }
      return {offset: t, dst: o}
    }
  }
}), define("PoE/Model/Account/Account", ["Backbone"], function (e) {
  return e.RelationalModel.extend({relations: []})
}), define("PoE/Model/League/LadderEntry", ["Backbone", "PoE/Util/Date", "PoE/Model/Account/Account"], function (e, t, n) {
  return e.RelationalModel.extend({
    relations: [{type: e.HasOne, key: "account", relatedModel: n}],
    initialize: function () {
    }
  })
}), define("PoE/Collection/League/LadderEntries", ["jquery", "Backbone", "PoE/Model/League/LadderEntry", "PoE/Backbone/Paginator"], function (e, t, n, i) {
  return i.extend({
    model: n,
    paginator_core: {url: "/api/ladders", dataType: "json"},
    paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5, totalPages: 10},
    server_api: {
      offset: function () {
        return (this.currentPage - 1) * this.perPage
      }, limit: function () {
        return this.perPage
      }, id: function () {
        return this.id
      }, type: "league"
    },
    perPageOptions: [5, 20, 50, 100],
    parse: function (e) {
      return e.limit && (this.perPage = parseInt(e.limit, 10)), e.leagueId && (this.id = e.leagueId), e.pvpMatchId && (this.id = e.pvpMatchId), e.disableAccountNames && (this.disableAccountNames = !0), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries
    }
  })
}), define("PoE/Widget/ProfileLink/TwitchPopup", ["require", "jquery", "PoE/Layout/Popup/Popup"], function (e) {
  var t = e("jquery"), n = e("PoE/Layout/Popup/Popup");
  return function (e, i) {
    var o = this;
    if (i && i.stream) {
      e.classList.add("twitchShow");
      var r = '<a class="twitch" href="//www.twitch.tv/' + encodeURIComponent(i.name) + '" title="' + (i.stream.status ? i.stream.status : "Streaming Now!") + '" target="_blank"></a>',
        s = '<div class="twitchProfilePopup"><div class="name">' + i.stream.name + "</div><img src=" + i.stream.image + "></div>";
      new Promise(function (t, n) {
        e.insertAdjacentHTML("beforeend", r + s), t()
      }).then(function () {
        o.$twitch = e.querySelector(".twitch"), o.twitchPopup = new n(o.$twitch.nextElementSibling), e.querySelector(".twitch").addEventListener("mouseenter", function (e) {
          o.twitchPopup.smartPositionByEl(t(o.$twitch))
        }), e.querySelector(".twitch").addEventListener("mouseleave", function (e) {
          o.twitchPopup && o.twitchPopup.hide()
        })
      })
    }
  }
}), define("text!PoE/Widget/League/Ladder/LadderEntry.hbt", [], function () {
  return '<td class="onlineStatus"><img class="onlineStatus" src="/image/ladder/{{#if online}}online{{else}}offline{{/if}}.png" alt="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" title="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" /></td>\n<td class="rank">{{rank}}</td>\n{{#if account.name}}\n    <td class="account">{{profileLink account manualInit=true}}</td>\n    <td class="character">{{character.name}}{{#if dead}} (<span class="deadText">{{translate "Dead"}}</span>){{/if}} {{#if retired}} (<span class="deadText">{{translate "Retired"}}</span>) {{/if}}</td>\n{{else}}\n    <td class="character">{{profileLink account characterName=character.name garena=true}}{{#if dead}} (<span class="deadText">{{translate "Dead"}}</span>){{/if}}{{#if retired}} (<span class="deadText">{{translate "Retired"}}</span>) {{/if}}</td>\n{{/if}}\n<td class="class">{{translate character.class}}</td>\n<td class="level">{{character.level}}</td>\n<td class="experience">{{character.experience}}</td>\n{{#if delveEvent}}\n<td class="depth">{{#if character.depth}}{{character.depth.default}}{{/if}}</td>\n<td class="depth">{{#if character.depth}}{{character.depth.solo}}{{/if}}</td>\n{{/if}}\n{{#if timedEvent}}\n<td class="time">{{#if character.time}}{{elapsed character.time}}{{/if}}</td>\n{{/if}}\n{{#if scoreEvent}}\n<td class="score">{{character.score}}</td>\n{{/if}}'
}), define("text!PoE/Widget/League/Ladder/PVPLadderEntry.hbt", [], function () {
  return '<td class="rank">{{rank}}</td>\n<td class="members">\n    {{#if rating}}\n        {{#each members}}\n            {{#if account.name}}\n                {{profileLink account manualInit=true}} - {{character_name}}\n            {{else}}\n                {{profileLink account characterName=character_name garena=true}}\n            {{/if}}\n        {{/each}}\n    {{else}}\n        <ul>\n            {{#each members}}\n            <li>\n                {{#if account.name}}\n                    {{profileLink account manualInit=true}} - {{character_name}}\n                {{else}}\n                    {{profileLink account characterName=character_name garena=true}}\n                {{/if}}\n                {{#if source_league_id}}\n                    ({{source_league_id}})\n                {{/if}}\n            </li>\n            {{/each}}\n        </ul>\n    {{/if}}\n</td>\n\n{{#if rating}}\n    <td class="rating">{{rating}}</td>\n{{else}}\n    {{#ifCond style "===" "Swiss"}}\n        <td class="gamesPlayed">{{games_played}}</td>\n        <td class="points">{{points}}</td>\n    {{else}}\n        <td class="points">{{points}}</td>\n        <td class="gamesPlayed">{{games_played}}</td>\n    {{/ifCond}}\n    <td class="tiebreaker">{{cumulative_opponent_points}}</td>\n{{/if}}'
}), define("text!PoE/Widget/League/Ladder/LabyrinthLadderEntry.hbt", [], function () {
  return '<td class="onlineStatus"><img class="onlineStatus" src="/image/ladder/{{#if online}}online{{else}}offline{{/if}}.png" alt="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" title="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" /></td>\r\n<td class="rank">{{rank}}</td>\r\n{{#if account.name}}\r\n<td class="account">{{profileLink account manualInit=true}}</td>\r\n<td class="character">{{character.name}}{{#if dead}} (<span class="deadText">{{translate "Dead"}}</span>){{/if}} {{#if retired}} (<span class="deadText">{{translate "Retired"}}</span>) {{/if}}</td>\r\n{{else}}\r\n<td class="character">{{profileLink account characterName=character.name garena=true}}{{#if dead}} (<span class="deadText">{{translate "Dead"}}</span>){{/if}} {{#if retired}} (<span class="deadText">{{translate "Retired"}}</span>) {{/if}}</td>\r\n{{/if}}\r\n<td class="class">{{translate character.class}}</td>\r\n<td class="experience">{{elapsed time}}</td>\r\n'
}), define("text!PoE/Widget/League/Ladder/PathOfEnduranceLadderEntry.hbt", [], function () {
  return '<td class="onlineStatus"><img class="onlineStatus" src="/image/ladder/{{#if online}}online{{else}}offline{{/if}}.png" alt="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" title="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" /></td>\r\n<td class="rank">{{rank}}</td>\r\n<td class="account wide">{{profileLink account manualInit=true}}</td>\r\n<td class="class wide">{{translate class}}</td>\r\n<td class="score">{{score}}</td>'
}), define("PoE/Widget/League/Ladder/LadderEntry", ["plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Widget/ProfileLink/TwitchPopup", "text!PoE/Widget/League/Ladder/LadderEntry.hbt", "text!PoE/Widget/League/Ladder/PVPLadderEntry.hbt", "text!PoE/Widget/League/Ladder/LabyrinthLadderEntry.hbt", "text!PoE/Widget/League/Ladder/PathOfEnduranceLadderEntry.hbt"], function (e, t, n, i) {
  return t.View.extend({
    tagName: "tr", initialize: function () {
      this.$el.addClass("entry"), this.type = this.options.type ? this.options.type : "league", this.pvp = !!this.options.pvp, this.style = this.options.style ? this.options.style : "", this.divider = !!this.options.divider, this.timedEvent = !!this.options.timedEvent, this.delveEvent = !!this.options.delveEvent, this.scoreEvent = !!this.options.scoreEvent, this.options.altRow && this.$el.addClass("even")
    }, render: function () {
      var t = this, o = e.Deferred(), r = "PoE/Widget/League/Ladder/LadderEntry.hbt";
      return "pvp" == this.type ? r = "PoE/Widget/League/Ladder/PVPLadderEntry.hbt" : "labyrinth" == this.type ? r = "PoE/Widget/League/Ladder/LabyrinthLadderEntry.hbt" : "path-of-endurance" == this.type && (r = "PoE/Widget/League/Ladder/PathOfEnduranceLadderEntry.hbt"), n.load(r).then(function (e) {
        var n = t.model.toJSON();
        n.pvp = t.pvp, n.style = t.style, "league" == t.type && (n.timedEvent = t.timedEvent, n.delveEvent = t.delveEvent, n.scoreEvent = t.scoreEvent), (n.dead || n.retired) && t.$el.addClass("dead"), n.character && n.character.time && t.$el.addClass("finishTime"), t.divider && t.$el.addClass("newRound"), t.$el.html(e(n));
        var r = t.model.get("account");
        r.has("twitch") && new i(t.$el.find(".profile-link")[0], r.get("twitch")), o.resolve()
      }, function () {
      }), o.promise()
    }
  })
}), define("text!PoE/Widget/League/Ladder/Ladder.hbt", [], function () {
  return '{{#if options.title}}\n    <h2>{{options.title}}</h2>\n{{else}}\n    {{#unless options.hideTitle}}\n        <h2>{{translate "Ladder"}}</h2>\n    {{/unless}}\n{{/if}}\n\n<div class="controls">\n    <label for="classFilter">{{translate "Class Filter"}}:</label>\n    <select name="classFilter">\n        <option value="null" selected>{{translate "All"}}</option>\n        <option value="0">{{translate "Scion"}}</option>\n        <option value="1">{{translate "Marauder"}}</option>\n        <option value="2">{{translate "Ranger"}}</option>\n        <option value="3">{{translate "Witch"}}</option>\n        <option value="4">{{translate "Duelist"}}</option>\n        <option value="5">{{translate "Templar"}}</option>\n        <option value="6">{{translate "Shadow"}}</option>\n    </select>\n    <label for="autoRefresh">{{translate "Auto refresh"}}:</label>\n    <input type="checkbox" value="1" name="autoRefresh" />\n    <input type="button" class="refresh button1" value="{{translate "Refresh"}}" />\n    {{#if league}}\n        <a class="exportCsv button1" href="/ladder/export-csv/league/{{uc league.id}}?realm={{league.realm}}">{{translate "Export CSV"}}</a>\n    {{/if}}\n</div>\n<div class="loading"></div>\n<table>\n    <thead>\n            <tr>\n                <th></th>\n                <th>{{translate "Rank"}}</th>\n                {{#unless disableAccountNames}}<th>{{translate "Account"}}</th>{{/unless}}\n                <th>{{translate "Character"}}</th>\n                <th>{{translate "Class"}}</th>\n                <th>{{translate "Level"}}</th>\n                <th class="sortable" data-sort>{{translate "Experience"}}</th>\n                {{#if league.delveEvent}}\n                <th class="sortable{{#ifCond league.sort \'==\' \'depth\'}} sorted{{/ifCond}}" data-sort="depth">{{translate "Depth"}}</th>\n                <th class="sortable{{#ifCond league.sort \'==\' \'depthsolo\'}} sorted{{/ifCond}}" data-sort="depthsolo">{{translate "Depth (Solo)"}}</th>\n                {{/if}}\n                {{#if league.timedEvent}}\n                <th class="sortable" data-sort>{{translate "Time"}}</th>\n                {{/if}}\n                {{#if league.scoreEvent}}\n                <th class="sortable{{#ifCond league.sort \'==\' \'score\'}} sorted{{/ifCond}}" data-sort="score">{{translate "Score"}}</th>\n                {{/if}}\n            </tr>\n    </thead> \n    <tbody class="entries"></tbody>\n</table>\n<div class="pagination"></div>\n'
}), define("text!PoE/Widget/League/Ladder/PVPLadder.hbt", [], function () {
  return '{{#if options.title}}\r\n<h2>{{options.title}}</h2>\r\n{{else}}\r\n{{#unless options.hideTitle}}\r\n<h2>{{translate "Ladder"}}</h2>\r\n{{/unless}}\r\n{{/if}}\r\n\r\n<div class="controls">\r\n    <label for="autoRefresh">{{translate "Auto refresh"}}</label>\r\n    <input type="checkbox" value="1" name="autoRefresh" />\r\n    <input type="button" class="refresh button1" value="{{translate "Refresh"}}" />\r\n    {{#if league}}\r\n    <a class="exportCsv button1" href="/ladder/export-csv/league/{{uc league.id}}?realm={{league.realm}}">{{translate "Export CSV"}}</a>\r\n    {{/if}}\r\n</div>\r\n<div class="loading"></div>\r\n<table>\r\n    <thead>\r\n    <tr>\r\n        <th>{{translate "Rank"}}</th>\r\n        <th>{{translate "Members"}}</th>\r\n\r\n        {{#if league.glickoRatings}}\r\n        <th>{{translate "Rating"}}</th>\r\n        {{else}}\r\n\r\n        {{#ifCond league.style "===" "Swiss"}}\r\n        <th>{{translate "Games Played"}}</th>\r\n        <th>{{translate "Points"}}</th>\r\n        {{else}}\r\n        <th>{{translate "Points"}}</th>\r\n        <th>{{translate "Games Played"}}</th>\r\n        {{/ifCond}}\r\n        <th class="tiebreaker-hover">{{translate "Resistance"}}</th>\r\n        {{/if}}\r\n    </tr>\r\n    </thead>\r\n    <tbody class="entries"></tbody>\r\n</table>\r\n<div class="pagination"></div>\r\n'
}), define("text!PoE/Widget/League/Ladder/LabyrinthLadder.hbt", [], function () {
  return '<div class="labyrinth-ladder-controls">\r\n    <div class="poeForm">\r\n        <button id="ladder-prev" class="button1">{{translate "Prev"}}</button>\r\n        <select class="realm">\r\n            {{#each league.realmOps}}\r\n            <option value="{{@key}}" {{#ifCond @key "==" ../league.realm}} selected {{/ifCond}}>{{this}}</option>\r\n            {{/each}}\r\n        </select>\r\n        <select class="league">\r\n            {{#each league.leagueOps}}\r\n            <option value="{{this}}" {{#ifCond this "==" ../league.leagueId}} selected {{/ifCond}}>{{this}}</option>\r\n            {{/each}}\r\n        </select>\r\n        <select class="difficulty">\r\n            {{#each league.difficultyOps}}\r\n            <option value="{{@key}}" {{#ifCond @key "==" ../league.difficulty}} selected {{/ifCond}}>{{this}}</option>\r\n            {{/each}}\r\n        </select>\r\n        <button id="ladder-next" class="button1">{{translate "Next"}}</button>\r\n    </div>\r\n</div>\r\n\r\n{{#if options.title}}\r\n<h2 id="ladder-title">{{options.title}}</h2>\r\n{{else}}\r\n{{#unless options.hideTitle}}\r\n<h2>{{translate "Ladder"}}</h2>\r\n{{/unless}}\r\n{{/if}}\r\n\r\n<div class="controls">\r\n    <label for="autoRefresh">{{translate "Auto refresh"}}</label>\r\n    <input type="checkbox" value="1" name="autoRefresh" />\r\n    <input type="button" class="refresh button1" value="{{translate \'Refresh\'}}" />\r\n    {{#if false}}\r\n    <a class="exportCsv button1" href="/ladder/export-csv/league/{{uc league.id}}?realm={{league.realm}}">{{translate "Export CSV"}}</a>\r\n    {{/if}}\r\n</div>\r\n<div class="clear"></div>\r\n{{#if league.startTime}}\r\n<h2 id="ladder-time">{{translate "Start"}}: {{unixMoment league.startTime format=\'lll\'}}</h2>\r\n{{/if}}\r\n<div class="loading"></div>\r\n<table>\r\n    <thead>\r\n    <tr>\r\n        <th></th>\r\n        <th>{{translate "Rank"}}</th>\r\n        {{#unless disableAccountNames}}<th>{{translate "Account"}}</th>{{/unless}}\r\n        <th>{{translate "Character"}}</th>\r\n        <th>{{translate "Class"}}</th>\r\n        <th>{{translate "Time"}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="entries"></tbody>\r\n</table>\r\n<div class="pagination"></div>'
}), define("text!PoE/Widget/League/Ladder/PathOfEnduranceLadder.hbt", [], function () {
  return '<div class="labyrinth-ladder-controls">\r\n    <div class="poeForm">\r\n        <button id="ladder-prev" class="button1" style="display: {{#if league.prev}}inline-block{{else}}none{{/if}};">{{translate "Prev"}}</button>\r\n        <select class="league">\r\n            {{#each league.leagueOps}}\r\n            <option value="{{this}}" {{#ifCond this "==" ../league.leagueName}} selected {{/ifCond}}>{{this}}</option>\r\n            {{/each}}\r\n        </select>\r\n        <button id="ladder-next" class="button1" style="display: {{#if league.next}}inline-block{{else}}none{{/if}};">{{translate "Next"}}</button>\r\n\r\n    </div>\r\n</div>\r\n\r\n{{#if options.title}}\r\n<h2 id="ladder-title">{{options.title}}</h2>\r\n{{else}}\r\n{{#unless options.hideTitle}}\r\n<h2>{{translate "Ladder"}}</h2>\r\n{{/unless}}\r\n{{/if}}\r\n\r\n<div class="controls">\r\n    <label for="autoRefresh">{{translate "Auto refresh"}}</label>\r\n    <input type="checkbox" value="1" name="autoRefresh" />\r\n    <input type="button" class="refresh button1" value="{{translate \'Refresh\'}}" />\r\n</div>\r\n<div class="clear"></div>\r\n{{#if league.date}}\r\n<h2 id="ladder-time">{{translate "Start"}}: {{unixMoment league.startTime format=\'lll\'}}</h2>\r\n{{/if}}\r\n<div class="loading"></div>\r\n<table>\r\n    <thead>\r\n    <tr>\r\n        <th></th>\r\n        <th>{{translate "Rank"}}</th>\r\n        {{#unless disableAccountNames}}<th>{{translate "Account"}}</th>{{/unless}}\r\n        <th>{{translate "Class"}}</th>\r\n        <th>{{translate "Score"}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="entries"></tbody>\r\n</table>\r\n<div class="pagination"></div>'
}), define("PoE/Widget/League/Ladder/Ladder", ["plugins", "Backbone", "moment-tz", "PoE/Handlebars/TemplateCollection", "PoE/Collection/League/LadderEntries", "./LadderEntry", "PoE/View/Widget/Pagination", "PoE/Helpers", "text!PoE/Widget/League/Ladder/Ladder.hbt", "text!PoE/Widget/League/Ladder/PVPLadder.hbt", "text!PoE/Widget/League/Ladder/LabyrinthLadder.hbt", "text!PoE/Widget/League/Ladder/PathOfEnduranceLadder.hbt"], function (e, t, n, i, o, r, s, a) {
  return t.View.extend({
    initialize: function () {
      var e = this;
      this.$el.attr("class", "ladderView"), this.type = this.options.type, !this.collection && this.model && (this.collection = this.model.get("ladder")), "path-of-endurance" == this.type && (this.collection.server_api.id = this.model.get("id"), this.collection.server_api.leagueName = this.model.get("leagueName"), this.collection.server_api.startTime = this.model.get("startTime"), this.$el.addClass("path-of-endurance")), "labyrinth" == this.options.type && (this.model.get("difficulty") && (this.collection.server_api.difficulty = this.model.get("difficulty")), this.collection.server_api.start = this.model.get("startTime")), this.model.has("sort") && (this.collection.server_api.sort = this.model.get("sort")), this.pagination = new s({collection: this.collection}), this.pagination.render(), this.collection.on("change", function () {
        this.render()
      }), this.collection.on("reset", function () {
        e.hideLoader(), e.addAll()
      }), this.pagination.on("loadStart", function () {
        e.showLoader()
      }), this.pagination.on("loadEnd", function () {
        e.hideLoader()
      }), this.autoRefreshInterval = null, this.ladderEntries = []
    },
    showLoader: function () {
      this.$entries.css("opacity", .5), this.$loading.show(), this.$loading.css("top", this.$entries.offset().top - this.$el.offset().top), this.$loading.height(this.$entries.height() > 0 ? this.$entries.height() : 38)
    },
    hideLoader: function () {
      this.$entries.css("opacity", 1), this.$loading.hide()
    },
    initElementRefs: function () {
      this.$entries = this.$el.find(".entries"), this.$loading = this.$el.find(".loading"), this.$autoRefresh = this.$el.find('input[name="autoRefresh"]'), this.$prev = this.$el.find("#ladder-prev"), this.$next = this.$el.find("#ladder-next"), this.$classFilter = this.$el.find('select[name="classFilter"]')
    },
    events: {
      "click .refresh": "refresh",
      'change input[name="autoRefresh"]': "autoRefresh",
      'change select[class="league"]': "changeOps",
      'change select[class="difficulty"]': "changeOps",
      'change select[class="realm"]': "changeOps",
      'change select[name="classFilter"]': "changeOps",
      'click th[class="sortable"]': "sort",
      "click button#ladder-prev": "prev",
      "click button#ladder-next": "next"
    },
    autoRefresh: function (e) {
      var t = this;
      e.preventDefault(), this.$autoRefresh.is(":checked") && null === this.autoRefreshInterval ? this.autoRefreshInterval = setInterval(function () {
        t.refresh()
      }, 3e4) : null !== this.autoRefreshInterval && (clearInterval(this.autoRefreshInterval), this.autoRefreshInterval = null)
    },
    refresh: function (t) {
      var i = this;
      t && t.preventDefault(), this.showLoader(), this.collection.fetch().done(function (t) {
        if (t.title && "" != t.title && e("#ladder-title").text(t.title), t.startTime && (i.model.set("startTime", t.startTime), e("#ladder-time").text(a.translate("Start") + ": " + n.unix(t.startTime).format("lll"))), "labyrinth" == i.type) {
          if (window.history && window.history.pushState) {
            var o = i.model.get("realm");
            o = "pc" == o ? "" : "/" + o, window.history.pushState({}, "", "/ladder" + o + "/labyrinth/" + i.model.get("leagueId") + "/" + i.model.get("difficulty") + "/" + t.startTime)
          }
        } else "path-of-endurance" == i.type && (t.start && i.model.set("startTime", t.start), !1 === t.next ? e("#ladder-next").hide() : e("#ladder-next").show(), i.model.set("next", t.next), !1 === t.prev ? e("#ladder-prev").hide() : e("#ladder-prev").show(), i.model.set("prev", t.prev), window.history && window.history.pushState && window.history.pushState({}, "", "/path-of-endurance/" + i.model.get("leagueName") + "/" + t.start))
      }).fail(function (e) {
        "path-of-endurance" == i.type && (i.collection.models = {}, i.collection.totalRecords = 0, i.$el.find(".pagination").empty(), i.addAll()), e.responseJSON && e.responseJSON.error && alert(e.responseJSON.error.message)
      }).always(function () {
        i.hideLoader()
      })
    },
    sort: function (t) {
      if ("league" == this.type) {
        this.$el.find("th.sortable").removeClass("sorted");
        var n = t.target ? e(t.target).data("sort") : null;
        switch (n) {
          case"depth":
          case"depthsolo":
          case"score":
            this.model.set("sort", n), this.collection.server_api.sort = n, e(t.target).addClass("sorted");
            break;
          default:
            this.model.unset("sort"), delete this.collection.server_api.sort
        }
        this.collection.currentPage = 1
      }
      this.refresh(t)
    },
    changeOps: function (t) {
      if ("labyrinth" == this.type || "path-of-endurance" == this.type) {
        var n = e('select[class="league"]').first().val();
        this.collection.currentPage = 1, "path-of-endurance" == this.type ? (this.model.set("leagueName", n), this.collection.server_api.leagueName = n) : (this.model.set("leagueId", n), this.collection.server_api.id = n)
      }
      if ("labyrinth" == this.type) {
        var i = e('select[class="difficulty"]').first().val();
        this.model.set("difficulty", i), this.collection.server_api.difficulty = i;
        var o = e('select[class="realm"]').first().val();
        this.model.set("realm", o), this.collection.server_api.realm = o
      }
      if ("league" == this.type) {
        var r = this.$classFilter.val();
        "null" == r ? (this.model.unset("class"), delete this.collection.server_api.class) : (this.model.set("class", r), this.collection.server_api.class = r), this.collection.currentPage = 1
      }
      this.refresh(t)
    },
    prev: function (e) {
      if ("labyrinth" == this.type) {
        var t = this.model.get("startTime"), n = this.model.get("ladderOffset");
        this.collection.server_api.start = t - n
      } else "path-of-endurance" == this.type && (this.collection.server_api.startTime = this.model.get("prev"));
      this.collection.currentPage = 1, this.refresh(e)
    },
    next: function (e) {
      if ("labyrinth" == this.type) {
        var t = this.model.get("startTime"), n = this.model.get("ladderOffset");
        this.collection.server_api.start = t + n
      } else "path-of-endurance" == this.type && (this.collection.server_api.startTime = this.model.get("next"));
      this.collection.currentPage = 1, this.refresh(e)
    },
    addAll: function () {
      var t = this, n = [];
      this.$entries.empty(), this.ladderEntries = [];
      var i = !1;
      if (this.collection.each(function (e, o) {
        var s = !1, a = !1;
        t.model && "Swiss" === t.model.get("style") && "pvp" == t.type ? (s = e.get("games_played"), a = !1 !== i && s !== i) : t.model && t.model.has("timedEvent") && (s = !e.get("character").time, a = i != s);
        e = new r({
          model: e,
          altRow: o % 2 == 1,
          type: t.type,
          style: !!t.model && t.model.get("style"),
          divider: a,
          timedEvent: !!t.model && t.model.has("timedEvent"),
          delveEvent: !!t.model && t.model.has("delveEvent"),
          scoreEvent: !!t.model && t.model.has("scoreEvent")
        });
        n.push(e.render()), t.$entries.append(e.el), i = s, t.ladderEntries.push(e)
      }), 0 == this.collection.info().totalRecords || 0 == this.collection.length) {
        var o = t.$entries.parent("table").find("thead th").length;
        t.$entries.append('<tr><td colspan="' + o + '">' + a.translate("No results found") + "</td></tr>")
      }
      return e.when.apply(null, n)
    },
    render: function () {
      var e = this, t = "PoE/Widget/League/Ladder/Ladder.hbt";
      return "pvp" == this.type ? t = "PoE/Widget/League/Ladder/PVPLadder.hbt" : "labyrinth" == this.type ? t = "PoE/Widget/League/Ladder/LabyrinthLadder.hbt" : "path-of-endurance" == this.type && (t = "PoE/Widget/League/Ladder/PathOfEnduranceLadder.hbt"), i.load(t).done(function (t) {
        var n = {options: {}};
        e.model && (n.league = e.model.toJSON(), n.league.startTime && (e.collection.startTime = n.league.startTime)), e.options.hideTitle && (n.options.hideTitle = !0), e.options.title && (n.options.title = e.options.title), e.collection.disableAccountNames && (n.disableAccountNames = !0), n.type = e.type, e.$el.html(t(n)), e.initElementRefs(), e.$loading.hide(), e.$el.find(".pagination").replaceWith(e.pagination.el), e.addAll()
      })
    }
  })
}), define("PoE/Backbone/Collection/Item/ItemCollection", ["Backbone", "PoE/Backbone/Model/Item/Item"], function (e, t) {
  return e.Collection.extend({model: t})
}), define("PoE/API/Character", ["jquery", "PoE/Backbone/Collection/Item/ItemCollection"], function (e, t) {
  return {
    getItems: function (n) {
      var i = e.Deferred();
      return e.ajax({
        url: "/character-window/get-items",
        type: "POST",
        dataType: "json",
        data: {accountName: n.accountName, realm: n.realm, character: n.characterName},
        success: function (e) {
          e.items = new t(e.items), i.resolve(e)
        }
      }), i.promise()
    }
  }
}), define("PoE/Inventory/Constants", [], function () {
  return {
    gridSize: 47.464503042596355,
    inventoryWidth: .6085192697768763,
    inventory: {
      bodyArmour: {x: 247.0588, y: 124.1379},
      weapon: {x: 60.8519, y: 29.2089},
      offhand: {x: 433.2657, y: 29.2089},
      boots: {x: 363.8945, y: 230.6288},
      ring: {x: 177.6876, y: 171.6024},
      ring2: {x: 363.8945, y: 171.6024},
      amulet: {x: 363.8945, y: 112.5761},
      gloves: {x: 130.2231, y: 230.6288},
      belt: {x: 247.0588, y: 278.0933},
      helm: {x: 247.0588, y: 17.6471},
      flask: {x: 181.3387423935091, y: 336.5111561866126},
      stash: {x: 15.212981744421882, y: 97.3630831643002},
      main: {x: 9, y: 449.5679513184584}
    },
    mtxInventory: {
      Weapon1Skin: {x: 57.2008, y: 25.5578, w: 103.4483, h: 197.7688},
      Weapon1Effect: {x: 57.2008, y: 223.3266, w: 49.8986, h: 49.8986},
      Weapon1Other: {x: 108.9249, y: 223.3266, w: 49.8986, h: 49.8986},
      Weapon2Skin: {x: 428.3976, y: 25.5578, w: 103.4483, h: 197.7688},
      Weapon2Effect: {x: 428.3976, y: 223.3266, w: 49.8986, h: 49.8986},
      Weapon2Other: {x: 480.1217, y: 223.3266, w: 49.8986, h: 49.8986},
      HelmetSkin: {x: 244.0162, y: 9.7363, w: 103.4483, h: 103.4483},
      HelmetMask: {x: 191.6836, y: 63.8945, w: 51.7241, h: 51.7241},
      HelmetAttachment: {x: 191.6836, y: 12.1704, w: 51.7241, h: 51.7241},
      ArmourSkin: {x: 243.4077, y: 118.0527, w: 103.4483, h: 152.1298},
      BackAttachment: {x: 170.3854, y: 118.0527, w: 73.0223, h: 73.0223},
      GlovesSkin: {x: 129.0061, y: 289.0467, w: 103.4483, h: 103.4483},
      BootsSkin: {x: 356.5923, y: 289.0467, w: 103.4483, h: 103.4483},
      Footprints: {x: 460.0406, y: 289.0467, w: 49.8986, h: 49.8986},
      PeriodicCharacterEffect: {x: 356.5923, y: 108.3164, w: 55.9838, h: 55.9838},
      CharacterEffect: {x: 257.4037, y: 298.1744, w: 73.0223, h: 73.0223},
      CharacterPortrait: {x: 340.7708, y: 419.8783, w: 76.0649, h: 63.8945},
      CharacterFrame: {x: 258.6207, y: 419.8783, w: 76.0649, h: 63.8945},
      Pet1: {x: 68.1542, y: 410.142, w: 82.7586, h: 82.7586},
      Pet2: {x: 155.1724, y: 410.142, w: 82.7586, h: 82.7586},
      Portal: {x: 434.4828, y: 410.142, w: 82.7586, h: 82.7586}
    },
    achievementVersion: 13
  }
}), define("PoE/Inventory/MainInventoryPanel", ["plugins", "Backbone", "PoE/API/Character", "PoE/Item/Item", "PoE/Backbone/EventBus", "./Constants"], function (e, t, n, i, o, r) {
  return t.View.extend({
    initialize: function () {
      var t = this;
      this.$el.addClass("mainInventoryPanel"), this.renderedItems = [], this.activeCharacter = this.options.activeCharacter, this.equippedOnly = this.options.equippedOnly || null, this.weaponSlot = 1, this.tencent = e("body").hasClass("tencent"), o.on("activeCharacterChanged", function (e) {
        t.activeCharacter = e, t.render()
      })
    },
    events: {
      "click .weaponSwap1.left": "swapWeaponSlot",
      "click .weaponSwap2.left": "swapWeaponSlot",
      "click .weaponSwap1.right": "swapWeaponSlot",
      "click .weaponSwap2.right": "swapWeaponSlot",
      "click .weaponSwapMini.left": "swapWeaponSlot",
      "click .weaponSwapMini.right": "swapWeaponSlot"
    },
    showCharacterItems: function () {
      var e = this, t = {
        accountName: this.model.get("name"),
        realm: this.model.get("realm"),
        characterName: this.activeCharacter.get("name")
      };
      n.getItems(t).done(function (t) {
        if (e.collection = t.items, t.inventoryExpansion) {
          e.inventoryExpansion = t.inventoryExpansion;
          var n = r.gridSize * e.inventoryExpansion;
          e.$inventoryExpansion.width(n), e.$inventoryExpansion.height(5 * r.gridSize), e.$inventoryExpansion.css("margin-left", 0 - n)
        }
        e.showItems()
      })
    },
    showItems: function () {
      var e = this;
      this.clearItems(), this.weapon1 = null, this.weapon2 = null, this.offhand1 = null, this.offhand2 = null, this.collection.each(function (t) {
        var n = 0, o = 0, s = t.get("x"), a = t.get("y"), l = t.get("w"), c = t.get("h"), u = t.get("inventoryId"),
          d = new i({model: t}), h = !1;
        if ("Cursor" !== u && "Map" !== u && -1 === u.indexOf("Crafting") && (!e.equippedOnly || "MainInventory" !== u)) {
          switch (u) {
            case"MainInventory":
              if (s > 12 && e.inventoryExpansion) s = 24 - s + 1, n = r.gridSize * e.inventoryExpansion - s * r.gridSize, h = !0, o = r.gridSize * a; else n = r.inventory.main.x + r.gridSize * s, o = r.inventory.main.y + r.gridSize * a;
              break;
            case"BodyArmour":
              n = r.inventory.bodyArmour.x, o = r.inventory.bodyArmour.y, l = 2, c = 3;
              break;
            case"Weapon":
              e.weapon1 = d, n = r.inventory.weapon.x, o = r.inventory.weapon.y, l = 2, c = 4;
              break;
            case"Weapon2":
              e.weapon2 = d, n = r.inventory.weapon.x, o = r.inventory.weapon.y, l = 2, c = 4;
              break;
            case"Offhand":
              e.offhand1 = d, n = r.inventory.offhand.x, o = r.inventory.offhand.y, l = 2, c = 4;
              break;
            case"Offhand2":
              e.offhand2 = d, n = r.inventory.offhand.x, o = r.inventory.offhand.y, l = 2, c = 4;
              break;
            case"Boots":
              n = r.inventory.boots.x, o = r.inventory.boots.y, l = 2, c = 2;
              break;
            case"Ring":
              n = r.inventory.ring.x, o = r.inventory.ring.y;
              break;
            case"Ring2":
              n = r.inventory.ring2.x, o = r.inventory.ring2.y;
              break;
            case"Amulet":
              n = r.inventory.amulet.x, o = r.inventory.amulet.y;
              break;
            case"Gloves":
              n = r.inventory.gloves.x, o = r.inventory.gloves.y;
              break;
            case"Belt":
              n = r.inventory.belt.x, o = r.inventory.belt.y;
              break;
            case"Helm":
              n = r.inventory.helm.x, o = r.inventory.helm.y;
              break;
            case"Flask":
              n = r.inventory.flask.x + s * r.gridSize, o = r.inventory.flask.y
          }
          h || (n += 5, o += 82);
          var f = {character: e.activeCharacter.get("name"), item: t, inventory: u};
          e.renderedItems.push(d), d.render(), d.setPlaced(l, c), d.on("itemClick", function (t) {
            return function () {
              e.itemClicked(t)
            }
          }(f)), h ? e.$inventoryExpansion.append(d.$el) : e.$el.append(d.$el), d.$el.css("position", "absolute"), d.$el.css("left", n), d.$el.css("top", o), d.trigger("displayed")
        }
      }), this.showActiveWeaponSlots()
    },
    swapWeaponSlot: function (e) {
      1 === this.weaponSlot ? this.weaponSlot = 2 : this.weaponSlot = 1, this.showActiveWeaponSlots()
    },
    showActiveWeaponSlots: function () {
      this.$weaponSwapMiniL.empty(), this.$weaponSwapMiniR.empty(), this.showMiniSlots(!1), 1 === this.weaponSlot ? (this.weapon1 && this.weapon1.$el.show(), this.offhand1 && this.offhand1.$el.show(), this.weapon2 && (this.showMiniSlots(!0), this.populateSwapMini(this.weapon2, this.$weaponSwapMiniL), this.weapon2.$el.hide()), this.offhand2 && (this.showMiniSlots(!0), this.populateSwapMini(this.offhand2, this.$weaponSwapMiniR), this.offhand2.$el.hide()), this.$weaponSwap1.show(), this.$weaponSwap2.hide()) : (this.weapon2 && this.weapon2.$el.show(), this.offhand2 && this.offhand2.$el.show(), this.weapon1 && (this.showMiniSlots(!0), this.populateSwapMini(this.weapon1, this.$weaponSwapMiniL), this.weapon1.$el.hide()), this.offhand1 && (this.showMiniSlots(!0), this.populateSwapMini(this.offhand1, this.$weaponSwapMiniR), this.offhand1.$el.hide()), this.$weaponSwap2.show(), this.$weaponSwap1.hide())
    },
    showMiniSlots: function (e) {
      e ? (this.$weaponSwapMiniL.show(), this.$weaponSwapMiniR.show()) : (this.$weaponSwapMiniL.hide(), this.$weaponSwapMiniR.hide())
    },
    populateSwapMini: function (t, n) {
      var i = t.$el, o = (i.find(".iconContainer"), (4 - t.model.get("h")) * r.gridSize / 2), s = 2 * r.gridSize,
        a = 4 * r.gridSize, l = i.find(".icon").width(), c = a - 2 * o, u = n.width() - 12, d = n.height() - 12,
        h = i.find(".icon img").clone();
      h.width(l * (u / s)), h.height(c * (d / a)), h.css("top", (d - h.height()) / 2 + 6), h.css("left", (u - h.width()) / 2 + 6);
      var f = e('<div class="miniIconContainer"></div>');
      f.append(h), n.append(f);
      var p = t.model.get("w"), v = t.model.get("h");
      if (t.model.get("shaper")) {
        var g = Math.floor(h.position().left), m = Math.floor(h.position().top);
        f.css("background-image", 'url("/image/inventory/ShaperBackground.png?w=' + p + "&h=" + v + "&x=" + g + "&y=" + m + '")')
      }
      t.model.get("elder") && f.css("background-image", 'url("/image/inventory/ElderBackground.png?w=' + p + "&h=" + v + '")')
    },
    clearItems: function () {
      for (var e = 0, t = this.renderedItems.length; e < t; ++e) this.renderedItems[e].close();
      this.renderedItems = []
    },
    itemClicked: function (e) {
      o.trigger("inventoryItem.click", e)
    },
    show: function () {
      this.$el.show()
    },
    hide: function () {
      this.$el.hide()
    },
    close: function () {
      this.remove(), this.unbind()
    },
    render: function () {
      var t = e.Deferred(),
        n = '<div class="weaponSwap1 left"></div><div class="weaponSwap2 left"></div><div class="weaponSwap1 right"></div><div class="weaponSwap2 right"></div><div class="weaponSwapMini left"></div><div class="weaponSwapMini right"></div>';
      return this.tencent && (n += '<div class="inventoryExpansion"></div>'), this.$el.empty().append(n), this.$weaponSwap1 = this.$el.find(".weaponSwap1"), this.$weaponSwap2 = this.$el.find(".weaponSwap2"), this.$weaponSwapMiniL = this.$el.find(".weaponSwapMini.left"), this.$weaponSwapMiniR = this.$el.find(".weaponSwapMini.right"), this.tencent && (this.$inventoryExpansion = this.$el.find(".inventoryExpansion")), this.showCharacterItems(), t.resolve(), this.delegateEvents(), t.promise()
    }
  })
}), define("PoE/API/League", ["jquery", "PoE/Backbone/Collection/Item/ItemCollection"], function (e, t) {
  return {
    getStashItems: function (n) {
      var i = e.Deferred(), o = {
        accountName: n.accountName,
        realm: n.realm,
        league: n.league,
        tabs: n.tabs ? 1 : 0,
        tabIndex: n.tabIndex ? n.tabIndex : 0,
        public: n.public
      };
      return e.ajax({
        url: "/character-window/get-stash-items",
        type: "GET",
        data: o,
        dataType: "json",
        success: function (e) {
          i.resolve(new t(e.items), e)
        },
        error: function (e) {
          i.reject()
        }
      }), i.promise()
    }, getMTXStashItems: function (t) {
      var n = e.Deferred(),
        i = {accountName: t.accountName, realm: t.realm, sortOrder: t.sortOrder, equippedOnly: t.equippedOnly ? 1 : 0};
      return e.ajax({
        url: "/character-window/get-mtx-stash-items",
        type: "POST",
        dataType: "json",
        data: i,
        success: function (e) {
          n.resolve(e)
        }
      }), n.promise()
    }
  }
}), define("PoE/CharacterWindow/Tab", ["require", "PoE/Environment/Font", "plugins"], function (e) {
  var t = e("PoE/Environment/Font"), n = e("plugins");
  n.loadImage = function (e) {
    return n.Deferred(function (t) {
      var n = new Image;

      function i() {
        o(), t.reject(n)
      }

      function o() {
        n.onload = null, n.onerror = null, n.onabort = null
      }

      n.onload = function () {
        o(), t.resolve(n)
      }, n.onerror = i, n.onabort = i, n.src = e
    }).promise()
  };
  return function (e, i, o, r, s, a, l, c, u, d) {
    this.init = function () {
      this.$el = n('<div class="tab"><div class="l"></div><div class="label"></div><div class="r"></div></div>'), this.srcL = o, this.srcC = r, this.srcR = s, this.$el.find(".label").text(e), this.onclick = l && l.onclick ? l.onclick : function () {
      }, this.onload = l && l.onload ? l.onload : function () {
      }, this.$el.on("click", this.onclick), this.$el.hide(), this.width = null, this.height = null, this.loaded = !1, this.selected = !1, this.name = e, this.index = i, this.type = u, this.pubIndex = d, this.colour = a;
      var t = (299 * a.r + 587 * a.g + 114 * a.b) / 1e3 >= 128;
      this.textColour = t ? "rgb(59, 44, 27)" : "rgb(255, 192, 119)", this.textGlow = t ? "rgb(0, 0, 0)" : "rgb(118, 56, 0)", this.textOutline = "rgb(0, 0, 0)", this.hidden = c;
      var h = this;
      this.$el.click(function () {
        h.onclick()
      })
    }, this.getColour = function () {
      return this.colour
    }, this.refresh = function () {
      this.$el.children().css("background-position", "0px " + (this.selected || this.hovered ? this.height : 0) + "px")
    }, this.select = function () {
      this.selected = !0, this.refresh()
    }, this.deselect = function () {
      this.selected = !1, this.refresh()
    }, this.isLoaded = function () {
      return this.loaded
    }, this.show = function () {
      this.$el.show()
    }, this.hide = function () {
      this.$el.hide()
    }, this.init(), this.load = function () {
      var e = [], i = this;
      if (this.isLoaded()) {
        var o = n.Deferred();
        return o.resolve(), o
      }
      e.push(t.waitLoad("FontinRegular"));
      var r = n.loadImage(this.srcC).pipe(function (e) {
        i.imgC = e
      }), s = n.loadImage(this.srcL).pipe(function (e) {
        i.imgL = e
      }), a = n.loadImage(this.srcR).pipe(function (e) {
        i.imgR = e
      });
      return e.push(r), e.push(s), e.push(a), n.when.apply(n, e).done(function () {
        i.$el.show(), i.$el.find(".label").css("background-image", "url('" + i.srcC + "')").css("color", i.textColour).height(i.imgC.height / 2), i.$el.find(".l").css("background-image", "url('" + i.srcL + "')").width(i.imgL.width).height(i.imgL.height / 2), i.$el.find(".r").css("background-image", "url('" + i.srcR + "')").width(i.imgR.width).height(i.imgR.height / 2), i.width = i.$el.find(".label").width() + i.$el.find(".l").width() + i.$el.find(".r").width(), i.height = i.$el.find(".label").height(), i.$el.width(i.width), i.$el.height(i.height), i.$el.hide(), i.refresh(), i.onload(), i.loaded = !0
      }).promise()
    }
  }
}), define("PoE/CharacterWindow/TabsControl", ["PoE/CharacterWindow/Tab", "PoE/Layout/Popup/Popup", "plugins"], function (e, t, n) {
  return function (i, o) {
    this.init = function () {
      var e = this;
      this.el = n(i), this.onTabClicked = function () {
      }, this.controls = {}, this.controls.leftControlsEl = this.el.find(".leftControls"), this.controls.leftButtonEl = this.controls.leftControlsEl.find(".leftButton"), this.controls.rightControlsEl = this.el.find(".rightControls"), this.controls.rightButtonEl = this.controls.rightControlsEl.find(".rightButton"), this.controls.tabSelectButtonEl = this.controls.rightControlsEl.find(".tabSelectButton"), this.controls.tabSelectEl = this.controls.rightControlsEl.find(".stashTabSelect"), this.controls.tabSelectWrapperEl = this.controls.rightControlsEl.find(".stashTabSelectWrapper"), this.controls.visible = !1, this.controls.tabsControl = this, this.controls.leftButtonDown = !1, this.controls.rightButtonDown = !1, this.controls.tabSelectPopup = null, this.organiseInterval = null, this.doOrganise = !1, this.controls.tabSelectScroll = !1, this.controls.tabSelectScrollConfig = {
        showArrows: !0,
        scrolly: "advanced",
        scrollx: "advanced",
        ignoreMobile: !0
      }, this.controls.leftControlsWidth = function () {
        return this.leftControlsEl.width()
      }, this.controls.rightControlsWidth = function () {
        return this.rightControlsEl.width()
      }, this.controls.leftButtonOnclick = function () {
      }, this.controls.rightButtonOnclick = function () {
      }, this.controls.tabSelectButtonOnclick = function () {
      }, this.controls.leftButtonEl.on("mousedown", function () {
        e.controls.leftButtonDown = !0, setTimeout(function () {
          e.scrollTabsLeftRepeat()
        }, 50)
      }), this.controls.leftButtonEl.on("mouseup", function () {
        e.controls.leftButtonDown = !1, e.endScrollTabsLeftRepeat(), e.scrollTabsLeft()
      }), this.controls.rightButtonEl.on("mousedown", function () {
        e.controls.rightButtonDown = !0, setTimeout(function () {
          e.scrollTabsRightRepeat()
        }, 50)
      }), this.controls.rightButtonEl.on("mouseup", function () {
        e.controls.rightButtonDown = !1, e.endScrollTabsRightRepeat(), e.scrollTabsRight()
      }), this.controls.tabSelectButtonEl.on("click", function () {
        e.controls.tabSelectButtonOnclick(), null !== e.controls.tabSelectPopup && (e.controls.tabSelectPopup.isVisible() ? e.controls.tabSelectPopup.hide() : (e.controls.tabSelectPopup.positionRightTopEl(e.controls.tabSelectButtonEl), e.controls.tabSelectPopup.el.css("display", "table"), e.controls.tabSelectScroll || (e.controls.tabSelectScroll = e.controls.tabSelectEl.scrollbar(e.controls.tabSelectScrollConfig)), e.controls.tabSelectScroll || e.controls.tabSelectEl.css("overflow-y", "auto")))
      }), this.controls.show = function () {
        this.leftControlsEl.show(), this.rightControlsEl.show(), this.tabsControl.tabsEl.css("left", this.leftControlsEl.width()), this.tabsControl.tabsEl.css("right", this.rightControlsEl.width()), null === this.tabSelectPopup && (this.tabSelectEl.width(this.tabSelectEl.width() + 16), e.controls.tabSelectScroll = e.controls.tabSelectEl.scrollbar(e.controls.tabSelectScrollConfig), e.controls.tabSelectScroll || e.controls.tabSelectEl.css("overflow-y", "auto"), this.tabSelectPopup = new t(this.tabSelectWrapperEl), this.tabSelectPopup.hide()), this.visible = !0
      }, this.tabsEl = this.el.find(".tabs:first"), this.visibleTabsWidth = 0, this.visibleTabs = [], this.tabs = [], this.tabsAlign = "l", this.leftIndex = null, this.rightIndex = null, this.selectedTab = null, this.tabsOverflow = !1, this.leftIndex = 0;
      e = this;
      this.width = function () {
        return 577
      }, this.widthLessControls = this.width()
    }, this.scrollTabsLeft = function () {
      ("l" == this.tabsAlign || this.visibleTabsWidth == this.tabsEl.width()) && this.leftIndex > 0 && --this.leftIndex, this.tabsAlign = "l", this.organise(), this.controls.leftButtonOnclick()
    }, this.scrollTabsRight = function () {
      ("r" == this.tabsAlign || this.visibleTabsWidth == this.tabsEl.width()) && this.rightIndex < this.tabs.length - 1 && ++this.rightIndex, this.tabsAlign = "r", this.organise(), this.controls.rightButtonOnclick()
    }, this.scrollTabsLeftRepeatInterval = null, this.scrollTabsLeftRepeat = function () {
      if (null === this.scrollTabsLeftRepeatInterval && this.controls.leftButtonDown) {
        var e = this;
        this.scrollTabsLeftRepeatInterval = setInterval(function () {
          e.scrollTabsLeft()
        }, 100)
      }
    }, this.endScrollTabsLeftRepeat = function () {
      null !== this.scrollTabsLeftRepeatInterval && (clearInterval(this.scrollTabsLeftRepeatInterval), this.scrollTabsLeftRepeatInterval = null)
    }, this.scrollTabsRightRepeatInterval = null, this.scrollTabsRightRepeat = function () {
      if (null === this.scrollTabsRightRepeatInterval && this.controls.rightButtonDown) {
        var e = this;
        this.scrollTabsRightRepeatInterval = setInterval(function () {
          e.scrollTabsRight()
        }, 100)
      }
    }, this.endScrollTabsRightRepeat = function () {
      null !== this.scrollTabsRightRepeatInterval && (clearInterval(this.scrollTabsRightRepeatInterval), this.scrollTabsRightRepeatInterval = null)
    }, this.getSelectedTabIndex = function () {
      return null === this.selectedTab ? 0 : this.selectedTab.index
    }, this.getSelectedTab = function () {
      return this.selectedTab
    }, this.tabLoaded = function (e) {
      this.organise()
    }, this.tabClicked = function (e) {
      this.selectedTab.deselect(), e.select(), this.selectedTab = e, e.index == this.leftIndex && "r" == this.tabsAlign ? (this.tabsAlign = "l", this.organise()) : e.index == this.rightIndex && "l" == this.tabsAlign ? (this.tabsAlign = "r", this.organise()) : e.index < this.leftIndex ? (this.leftIndex = e.index, this.tabsAlign = "l", this.organise()) : e.index > this.rightIndex && (this.rightIndex = e.index, this.tabsAlign = "r", this.organise()), this.organise(), this.onTabClicked(e)
    }, this.hide = function () {
      this.el.hide(), null !== this.controls.tabSelectPopup && this.controls.tabSelectPopup.hide()
    }, this.show = function () {
      this.el.show()
    }, this.close = function () {
      null !== this.controls.tabSelectPopup && this.controls.tabSelectPopup.el.remove()
    }, this.clearTabs = function () {
      this.tabsOverflow = !1, this.tabsEl.empty(), this.tabsEl.removeClass("tabsOverflow"), this.controls.tabSelectEl.empty(), this.controls.tabSelectScroll && this.controls.tabSelectScroll.scrollbar("destroy")
    }, this.loadTabs = function (t) {
      this.clearTabs();
      var i = this;
      this.leftIndex = 0, this.tabsAlign = "l", this.tabs = [], null !== this.controls.tabSelectPopup && (this.controls.tabSelectPopup.el.remove(), this.controls.tabSelectPopup = null);
      for (var o = 0, r = t.length; o < r; ++o) {
        var s = new e(t[o].n, o, t[o].srcL, t[o].srcC, t[o].srcR, t[o].colour, null, t[o].hidden, t[o].type, t[o].pi),
          a = s.$el;
        if (s.onclick = function () {
          i.tabClicked(this)
        }, this.tabs[o] = s, this.tabsEl.append(a), !t[o].hidden) {
          var l = n('<div class="option"></div>');
          if (l.text(s.name), s.type && l.addClass(s.type), 124 !== t[o].colour.r && 84 !== t[o].colour.g && 54 !== t[o].colour.b) {
            var c = "rgb(" + t[o].colour.r + "," + t[o].colour.g + "," + t[o].colour.b + ")",
              u = "rgb(" + Math.max(t[o].colour.r - 40, 0) + "," + Math.max(t[o].colour.g - 40, 0) + "," + Math.max(t[o].colour.b - 40, 0) + ")";
            l.css("background", u);
            var d = (299 * t[o].colour.r + 587 * t[o].colour.g + 114 * t[o].colour.b) / 1e3 >= 128;
            l.css("color", d ? "rgb(59, 44, 27)" : "rgb(255, 192, 119)"), l.hover(function (e) {
              return function () {
                n(this).css("background", e)
              }
            }(c), function (e) {
              return function () {
                n(this).css("background", e)
              }
            }(u))
          }
          l.on("click", function (e) {
            return function () {
              i.tabClicked(e)
            }
          }(s)), this.controls.tabSelectEl.append(l)
        }
        t[o].selected && (this.selectedTab = this.tabs[o], this.selectedTab.select())
      }
      this.organise()
    }, this.organise = function () {
      var e = this;
      null !== this.organiseInterval && (clearInterval(this.organiseInterval), this.organiseInterval = null), this.doOrganise = !0, this.organiseInterval = setInterval(function () {
        if (e.doOrganise) {
          var t = 0, n = [], i = [], o = function (o) {
            var r = e.tabs[o];
            return r.isLoaded() ? (t += r.width, i.push(r), t > e.width() && (e.tabsOverflow = !0, !0)) : (n.push(r), !1)
          };
          if ("l" == e.tabsAlign) {
            for (var r = e.leftIndex, s = e.tabs.length - 1; r <= s; ++r) if (o(r) || r == s) {
              e.rightIndex = r;
              break
            }
          } else for (r = e.rightIndex; r >= 0; --r) if (o(r) || 0 == r) {
            e.leftIndex = r;
            break
          }
          for (r = 0, s = e.visibleTabs.length; r < s; ++r) e.visibleTabs[r].hide();
          if (e.visibleTabsWidth = 0, e.visibleTabs = [], t > e.width()) {
            e.tabsEl.css("self", e.controls.leftControlsWidth()), e.controls.show(!0), e.tabsEl.addClass("tabsOverflow");
            var a = function (n, o) {
              var r = i[n];
              return !r.hidden && (r.$el.css("position", "absolute").css(o ? "right" : "left", "").css(o ? "left" : "right", t), r.show(), e.visibleTabs.push(r), e.visibleTabsWidth += r.width, (t += r.width) >= e.widthLessControls)
            };
            if (t = 0, "l" == e.tabsAlign) {
              for (r = 0, s = i.length - 1; r <= s; ++r) if (a(r, !0) || r == s) {
                e.rightIndex = i[r].index;
                break
              }
            } else for (r = 0, s = i.length - 1; r <= s; ++r) if (a(r, !1) || r == s) {
              e.leftIndex = i[r].index;
              break
            }
          } else for (r = 0, s = i.length; r < s; ++r) {
            var l = i[r];
            l.hidden || (e.visibleTabs.push(l), e.visibleTabsWidth += l.width, l.$el.css("position", "relative").css("display", "inline-block").css("left", "").css("right", ""), l.show())
          }
          if (this.doOrganise = !1, n.length > 0) for (r = 0, s = n.length; r < s; ++r) {
            n[r].load().then(function () {
              e.doOrganise = !0
            }, function () {
              console.warn("Failed to load tab", r), clearInterval(e.organiseInterval), e.organiseInterval = null
            })
          } else clearInterval(e.organiseInterval), e.organiseInterval = null, setTimeout(function () {
            for (var t = 0; t < e.visibleTabs.length; t++) {
              var n = e.visibleTabs[t];
              n.hidden || n.show(), n.$el.find(".r").width(18)
            }
          }, 100)
        }
      }, 50)
    }, this.init()
  }
}), define("PoE/Inventory/StashPanel", ["plugins", "Backbone", "PoE/API/League", "PoE/Item/Item", "PoE/Backbone/EventBus", "PoE/CharacterWindow/TabsControl", "./Constants", "PoE/Helpers", "jquery.scrollbar"], function (e, t, n, i, o, r, s, a) {
  return t.View.extend({
    initialize: function () {
      var e = this;
      this.$el.addClass("stashPanel"), this.stashType = this.options.stashType || "normal", this.renderedItems = [], this.activeLeague = this.options.activeLeague, this.tabIndex = this.options.tabIndex || null, this.pubIndex = this.options.pubIndex || !1, this.showTabs = this.options.tabs || !1, this.public = this.options.public || !1, this.currencyLayout = this.options.currencyLayout || !1, this.fragmentLayout = this.options.fragmentLayout || !1, this.divinationLayout = this.options.divinationLayout || !1, this.mapLayout = this.options.mapLayout || !1, this.delveLayout = this.options.delveLayout || !1, this.quadLayout = !!this.options.quadLayout, this.layoutType = this.options.layoutType || "default", this.currencyLayoutMap = this.options.currencyLayoutMap || !1, this.fragmentLayoutMap = this.options.fragmentLayoutMap || !1, this.divinationLayoutMap = !1, this.essenceLayoutMap = this.options.essenceLayoutMap || !1, this.mapLayoutMap = this.options.mapLayoutMap || !1, this.delveLayoutMap = this.options.delveLayoutMap || !1, this.$panelContents = !1, this.scale = 1, this.panelContents = function () {
        return e.$el.find(".stashTabContents")
      }, o.on("activeCharacterChanged", function (t) {
        e.public || e.activeLeague != t.get("league") && (e.activeLeague = t.get("league"), e.clear(), e.showStashItems(!0 === e.showTabs, 1))
      })
    },
    events: {"click div.stashTabLinkOne": "tabLinkOne", "click div.stashTabLinkAll": "tabLinkAll"},
    initElementRefs: function () {
      this.$borderTop = this.$el.find(".border.t"), this.$borderTopRight = this.$el.find(".border.tr"), this.$borderRight = this.$el.find(".border.r"), this.$borderBottomRight = this.$el.find(".border.br"), this.$borderBottom = this.$el.find(".border.b"), this.$borderBottomLeft = this.$el.find(".border.bl"), this.$borderLeft = this.$el.find(".border.l"), this.$borderTopLeft = this.$el.find(".border.tl")
    },
    initCurrencyLayout: function (e) {
      return e.currencyLayout ? (this.currencyLayout = !0, this.currencyLayoutMap = e.currencyLayout, this.$panelContents.addClass("currencyStash"), !0) : (this.removeCurrencyLayout(), !1)
    },
    removeCurrencyLayout: function () {
      this.$panelContents.removeClass("currencyStash")
    },
    initFragmentLayout: function (e) {
      return e.fragmentLayout ? (this.fragmentLayout = !0, this.fragmentLayoutMap = e.fragmentLayout, this.$panelContents.addClass("fragmentStash"), !0) : (this.removeFragmentLayout(), !1)
    },
    removeFragmentLayout: function () {
      this.$panelContents.removeClass("fragmentStash")
    },
    initDelveLayout: function (e) {
      return e.delveLayout ? (this.delveLayout = !0, this.delveLayoutMap = e.delveLayout, this.$panelContents.addClass("delveStash"), !0) : (this.removeDelveLayout(), !1)
    },
    removeDelveLayout: function () {
      this.$panelContents.removeClass("delveStash")
    },
    initMapLayout: function (e) {
      return this.removeMapLayout(), !!e.mapLayout && (this.mapLayout = !0, this.mapLayoutMap = e.mapLayout, this.$panelContents.addClass("mapStash"), !0)
    },
    removeMapLayout: function () {
      this.mapLayoutMap && (this.mapLayoutMap.tierControls && this.mapLayoutMap.tierControls.remove(), this.mapLayoutMap.typeControls && this.mapLayoutMap.typeControls.remove(), this.mapLayoutMap.itemControls && this.mapLayoutMap.itemControls.remove()), this.$panelContents.removeClass("mapStash")
    },
    initDivinationLayout: function (t) {
      new e.Deferred;
      var n = this.divinationLayoutMap;
      if (this.removeDivinationLayout(), t.divinationLayout) {
        if (this.$panelContents.addClass("divinationStash"), !n) for (var i in n = {
          offx: 62,
          offy: 131,
          cards: {}
        }, t.divinationLayout.cards) {
          var o = t.divinationLayout.cards[i].name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"\s]/g, ""),
            r = '                            <div class="stashPanelDivinationCard ' + o + '" style="width: ' + t.divinationLayout.w + "px; height: " + t.divinationLayout.h + 'px;">                              <div class="stashPanelDivinationCardName FontinSmallCaps">' + t.divinationLayout.cards[i].name + "</div>                            </div>",
            s = e(r);
          n.cards[o] = {name: t.divinationLayout.cards[i].name, $el: s}
        }
        var a = e.isEmptyObject(e.find(".stashPanelDivinationCard"));
        for (var i in n.cards) {
          var l = n.cards[i].$el;
          l.show(), a && this.$panelContents.append(l)
        }
        if (!n.scrollPane) {
          var c = this.$panelContents.scrollbar({showArrows: !0, scrolly: "advanced"});
          c || this.$el.find(".stashTabContents").css("overflow-y", "scroll"), n.scrollPane = c
        }
        return this.divinationLayoutMap = n, !0
      }
    },
    removeDivinationLayout: function () {
      if (this.divinationLayoutMap) {
        var e = this.divinationLayoutMap;
        for (var t in e.cards) e.cards[t].$el.hide();
        this.divinationLayoutMap.scrollPane && this.divinationLayoutMap.scrollPane.data("scrollbar") && this.divinationLayoutMap.scrollPane.data("scrollbar").destroy(), this.divinationLayoutMap.scrollPane = !1
      }
      this.$panelContents.removeClass("divinationStash")
    },
    initQuadLayout: function (e) {
      return e.quadLayout ? (this.quadLayout = !0, this.$panelContents.addClass("quadStash"), this.scale = .5, !0) : (this.removeQuadLayout(), !1)
    },
    removeQuadLayout: function () {
      this.quadLayout = !1, this.scale = 1, this.$panelContents.removeClass("quadStash")
    },
    initEssenceLayout: function (e) {
      this.essenceLayoutMap;
      return e.essenceLayout ? (this.essenceLayout = !0, this.$panelContents.addClass("essenceStash"), this.essenceLayoutMap = e.essenceLayout, !0) : (this.removeEssenceLayout(), !1)
    },
    removeEssenceLayout: function () {
      this.essenceLayout = !1, this.$panelContents.removeClass("essenceStash")
    },
    showStashItems: function (t, i) {
      var o = new e.Deferred, r = this, s = {
        accountName: this.model.get("name"),
        realm: this.model.get("realm"),
        league: this.activeLeague,
        tabs: !!t,
        tabIndex: i || this.tabsControl.getSelectedTabIndex(),
        public: this.public
      };
      return this.clearItems(), r.$el.find(".loading").show(), n.getStashItems(s).done(function (e, t) {
        r.collection = e, t.tabs && r.createStashTabs(t.tabs), r.currencyLayout = r.initCurrencyLayout(t), r.fragmentLayout = r.initFragmentLayout(t), r.mapLayout = r.initMapLayout(t), r.quadLayout = r.initQuadLayout(t), r.essenceLayout = r.initEssenceLayout(t), r.delveLayout = r.initDelveLayout(t), r.divinationLayout = r.initDivinationLayout(t), r.showItems().done(function () {
          r.$el.find(".loading").hide(), o.resolve()
        })
      }).fail(function () {
        o.reject()
      }), o.promise()
    },
    showItems: function () {
      var t = new e.Deferred, n = this;
      return this.clearItems(), this.collection.each(function (e, o) {
        var r, a = 0, l = 0, c = n.scale, u = e.get("x"), d = e.get("y"), h = e.get("w"), f = e.get("h"), p = h, v = f,
          g = 1, m = e.get("inventoryId"), y = !1;
        if ((a = s.gridSize * c * u, l = s.gridSize * c * d, n.currencyLayout && n.currencyLayoutMap) && (void 0 !== n.currencyLayoutMap[e.attributes.x] && (a = (r = n.currencyLayoutMap[e.attributes.x]).x, l = r.y, p = r.w, v = r.h, r.hidden))) {
          y = r.hidden;
          a -= 7, l -= 7
        }
        n.fragmentLayout && n.fragmentLayoutMap && (void 0 !== n.fragmentLayoutMap[e.attributes.x] && (a = (r = n.fragmentLayoutMap[e.attributes.x]).x, l = r.y, p = r.w, v = r.h));
        n.delveLayout && n.delveLayoutMap && (void 0 !== n.delveLayoutMap[e.attributes.x] && (a = (r = n.delveLayoutMap[e.attributes.x]).x, l = r.y, p = r.w, v = r.h, g = 26 == e.attributes.x || 27 == e.attributes.x || 29 == e.attributes.x || 32 == e.attributes.x || 33 == e.attributes.x || 35 == e.attributes.x ? 60 / 78 : 37 == e.attributes.x || 39 == e.attributes.x ? 77 / 93 : 70 / 78));
        (n.divinationLayout && n.divinationLayoutMap && (a = 0, l = 0), n.essenceLayout && n.essenceLayoutMap) && (void 0 !== n.essenceLayoutMap[e.attributes.x] && (a = (r = n.essenceLayoutMap[e.attributes.x]).x, l = r.y, p = r.w, v = r.h));
        s.gridSize, s.gridSize, clickCallbackData = {league: n.activeLeague, item: e, inventory: m};
        var b = new i({model: e, enableLeague: !1, divinationLayout: n.divinationLayout, scale: c, hiddenSlot: y});
        if (b.render(), b.setPlaced(p, v), b.on("itemClick", function (e) {
          return function () {
            n.public || n.itemClicked(e)
          }
        }(clickCallbackData)), b.$el.css("position", "absolute"), b.$el.css("left", a), b.$el.css("top", l), 1 != g && (b.$el.css("transform-origin", "top left"), b.$el.css("transform", "scale(" + g + ")")), n.divinationLayout) {
          var w = e.attributes.typeLine.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"\s]/g, "");
          n.$panelContents.find("." + w).append(b.$el)
        } else n.$el.find(".stashTabContents").append(b.$el);
        n.renderedItems.push(b), b.trigger("displayed"), o == n.collection.length - 1 && t.resolve()
      }), 0 == this.collection.length && t.resolve(), t.promise()
    },
    clearItems: function () {
      for (var e = 0, t = this.renderedItems.length; e < t; ++e) this.renderedItems[e].close();
      this.renderedItems = []
    },
    createStashTabs: function (e) {
      this.tabsControl.loadTabs(e);
      var t, n = this.tabsControl.getSelectedTab();
      n && (t = n.getColour(), this.setBorderColour(t.r, t.g, t.b))
    },
    itemClicked: function (e) {
      o.trigger("inventoryItem.click", e)
    },
    show: function () {
      this.tabsControl.show(), this.$el.show()
    },
    hide: function () {
      this.$el.hide(), this.tabsControl.hide()
    },
    clear: function () {
      this.removeCurrencyLayout(), this.removeFragmentLayout(), this.removeDelveLayout(), this.removeDivinationLayout(), this.removeMapLayout()
    },
    close: function () {
      this.tabsControl.close(), this.remove(), this.unbind()
    },
    setBorderColour: function (e, t, n) {
      this.$el.find(".stashTabContents").css("border-color", "rgb(" + e + "," + t + "," + n + ")")
    },
    tabLinkOne: function (e) {
      if (!1 !== this.pubIndex && this.pubIndex >= 0) {
        var t = {
          accountName: this.model.get("name"),
          realm: this.model.get("realm"),
          league: this.activeLeague,
          tabIndex: this.pubIndex,
          multi: !1
        };
        o.trigger("linkStash", t)
      }
    },
    tabLinkAll: function (e) {
      if (!1 !== this.pubIndex && this.pubIndex >= 0) {
        var t = {
          accountName: this.model.get("name"),
          realm: this.model.get("realm"),
          league: this.activeLeague,
          tabIndex: this.pubIndex,
          multi: !0
        };
        o.trigger("linkStash", t)
      }
    },
    render: function () {
      var t = e.Deferred();
      this.$el.html('                <div class="stashTabContainer tabControl">                    <div class="leftControls">                        <div class="leftButton"></div>                    </div>                    <div class="loading"></div>                    <div class="tabWindow">                        <div class="tabs"></div>                    </div>                    <div class="rightControls">                        <div class="rightButton"></div>                        <div class="tabSelectButton"></div>                        <div class="stashTabSelectWrapper">                            <div class="stashTabSelect poeScroll FontinRegular"></div>                        </div>                    </div>                    <div class="stashTabContents poeScroll">                    </div>                </div>            ');
      var n = this;
      this.$tabsControl = n.$el.find(".stashTabContainer"), this.$panelContents = n.$el.find(".stashTabContents");
      var i = s.inventory.stash.x, o = s.inventory.stash.y + 46;
      return this.$tabsControl.css({
        left: i,
        top: o
      }), this.tabsControl = new r(this.$tabsControl, this.options.tabControlConfig), this.tabsControl.onTabClicked = function (e) {
        n.tabIndex = e.index;
        var t = e.getColour();
        n.setBorderColour(t.r, t.g, t.b), n.showStashItems().done(function () {
          n.setBorderColour(t.r, t.g, t.b)
        })
      }, this.showStashItems(!0 === this.showTabs, this.tabIndex).done(function () {
        t.resolve(n)
      }).fail(function () {
        t.reject()
      }), this.rendered = !0, this.initElementRefs(), t.promise()
    }
  })
}), define("PoE/Backbone/Model/Item/MTXItem", ["Backbone"], function (e) {
  return e.RelationalModel.extend({})
}), define("PoE/Backbone/Collection/Item/MTXItemCollection", ["Backbone", "PoE/Backbone/Model/Item/MTXItem"], function (e, t) {
  return e.Collection.extend({model: t})
}), define("PoE/Backbone/Model/Item/MTXStashGroup", ["Backbone", "./MTXItem", "PoE/Backbone/Collection/Item/MTXItemCollection"], function (e, t, n) {
  return e.RelationalModel.extend({
    idAttribute: "groupName",
    relations: [{type: e.HasMany, key: "MTXItems", relatedModel: t, collectionType: n}]
  })
}), define("PoE/Backbone/Collection/Item/MTXStashGroupCollection", ["Backbone", "PoE/Backbone/Model/Item/MTXStashGroup"], function (e, t) {
  return e.Collection.extend({model: t})
}), define("text!PoE/Item/MTXItem.hbt", [], function () {
  return '<div class="popupPlaceholder"></div>\r\n<div class="stackSize">{{#ifCond count ">" 1}}{{count}}{{/ifCond}}</div>\r\n<img src="{{icon}}">'
}), define("PoE/Item/MTXItem", ["Handlebars", "Backbone", "jquery", "PoE/Handlebars/TemplateCollection", "./Popup", "PoE/Layout/Popup/Popup", "text!PoE/Item/MTXItem.hbt"], function (e, t, n, i, o, r) {
  return t.View.extend({
    initialize: function () {
      this.state = {itemHovered: !1}, !0 === this.options.manualPosition && (this.manualPosition = !0), this.options.showSockets && this.$el.addClass("showSockets"), this.options.scale = !!this.options.scale
    }, events: {click: "itemClick"}, itemClick: function (e) {
      this.trigger("itemClick", this.model)
    }, render: function () {
      var e = this, t = this.model.toJSON(), s = n.Deferred();
      return t.enableLeague = this.options.enableLeague, i.load("PoE/Item/MTXItem.hbt").done(function (n) {
        if (e.$el.empty().html(n(t)), e.mainPopup = {view: null, popup: null}, !0 === t.identified) {
          var i = new o({model: e.model});
          i.render(), e.mainPopup.view = i, e.mainPopup.popup = new r(i.$el), e.mainPopup.popup.events.prePosition = function () {
            e.mainPopup.view.updatePopupWidth()
          }
        } else {
          var a = document.createElement("div");
          a.textContent = t.text, a.classList.add("itemTooltip"), a.classList.add("FontinRegular"), e.mainPopup.popup = new r(a)
        }
        e.$el.find(".popupPlaceholder:first").replaceWith(e.mainPopup.popup.el), e.mainPopup.popup.create(), e.itemIconEl = e.$el.find(".icon:first"), e.$el.mouseenter(function () {
          e.handleItemMouseover()
        }).mouseleave(function () {
          e.handleItemMouseout()
        }), e.$el.addClass("mtxItem"), e.$el.addClass("itemRendered"), e.$el.addClass(2 === e.model.get("h") ? "large" : "small"), e.trigger("render"), s.resolve(e.$el)
      }), s.promise()
    }, handleItemMouseover: function (e) {
      this.hoverStart(), this.state.inSocketHover || this.mainPopup.popup.smartPositionByEl(this.$el)
    }, handleItemMouseout: function () {
      this.mainPopup.popup.hide(), this.hoverEnd()
    }, hoverStart: function () {
      this.state.itemHovered = !0, this.$el.addClass("hovered")
    }, hoverEnd: function () {
      this.state.itemHovered = !1, this.$el.removeClass("hovered")
    }, close: function () {
      this.remove(), this.off(), this.mainPopup.view && this.mainPopup.view.close()
    }
  })
}), define("text!PoE/Inventory/MTXStashGroup.hbt", [], function () {
  return '<div class="mtxGroup">\r\n    <div class="mtxGroupHeader">\r\n        <div class="tabSelectButton collapseGroup"></div>\r\n        {{groupName}}\r\n    </div>\r\n    <div class="mtxItems" style="display: none;">\r\n    </div>\r\n    <span class="clear" style="display: block;"></span>\r\n</div>'
}), define("PoE/Inventory/MTXStashGroup", ["plugins", "Backbone", "PoE/Backbone/EventBus", "PoE/Handlebars/TemplateCollection", "PoE/Item/MTXItem", "PoE/Backbone/Model/Item/MTXItem", "text!PoE/Inventory/MTXStashGroup.hbt"], function (e, t, n, i, o, r) {
  return t.View.extend({
    initialize: function () {
      this.renderedItems = []
    }, events: {"click .collapseGroup": "collapseGroup"}, collapseGroup: function (t) {
      e(t.target).parent().parent().find(".mtxItems").toggle()
    }, close: function () {
      for (var e = 0, t = this.renderedItems.length; e < t; ++e) this.renderedItems[e].close();
      this.renderedItems = [], this.$el.empty()
    }, render: function () {
      var t = e.Deferred(), n = this;
      return i.load("PoE/Inventory/MTXStashGroup.hbt").done(function (i) {
        var r = [], s = n.model.toJSON();
        n.$el.html(i(s)), n.$mtxItems = n.$el.find(".mtxItems"), n.model.get("MTXItems").each(function (t) {
          var i = e.Deferred(), s = new o({model: t});
          s.render().done(function (e) {
            n.$mtxItems.append(e), i.resolve()
          }), n.renderedItems.push(s), r.push(i.promise())
        }), e.when.apply(e, r).always(function () {
          t.resolve(n.$el)
        }), n.rendered = !0
      }), t.promise()
    }
  })
}), define("text!PoE/Inventory/MTXStashPanel.hbt", [], function () {
  return '<div id="mtxSortBox">\r\n    {{translate "Sort Items By:"}}\r\n    <select id="mtxSort">\r\n        <option value="categories" {{#ifCond sortOrder "==" "categories"}} selected {{/ifCond}}>{{translate "Categories"}}</option>\r\n        <option value="theme" {{#ifCond sortOrder "==" "theme"}} selected {{/ifCond}}>{{translate "Theme"}}</option>\r\n    </select>\r\n</div>\r\n<div id="mtxGroups" class="stashTabContainer poeScroll">\r\n</div>'
}), define("PoE/Inventory/MTXStashPanel", ["plugins", "Backbone", "PoE/API/League", "PoE/Item/Item", "PoE/Backbone/EventBus", "PoE/CharacterWindow/TabsControl", "./Constants", "PoE/Helpers", "PoE/Handlebars/TemplateCollection", "PoE/Backbone/Collection/Item/MTXStashGroupCollection", "PoE/Backbone/Model/Item/MTXStashGroup", "PoE/Inventory/MTXStashGroup", "jquery.scrollbar", "text!PoE/Inventory/MTXStashPanel.hbt"], function (e, t, n, i, o, r, s, a, l, c, u, d) {
  return t.View.extend({
    initialize: function () {
      this.$el.addClass("stashPanel").addClass("mtxStashPanel"), this.renderedGroups = [], this.activeLeague = this.options.activeLeague, this.sortOrder = "category", this.$stashTabEl = !1
    }, initElementRefs: function () {
      this.$borderTop = this.$el.find(".border.t"), this.$borderTopRight = this.$el.find(".border.tr"), this.$borderRight = this.$el.find(".border.r"), this.$borderBottomRight = this.$el.find(".border.br"), this.$borderBottom = this.$el.find(".border.b"), this.$borderBottomLeft = this.$el.find(".border.bl"), this.$borderLeft = this.$el.find(".border.l"), this.$borderTopLeft = this.$el.find(".border.tl")
    }, fetchMtxItems: function () {
      var t = e.Deferred(), i = this,
        o = {accountName: i.model.get("name"), realm: i.model.get("realm"), sortOrder: i.sortOrder};
      return i.$stashTabEl && i.$stashTabEl.addClass("loading"), n.getMTXStashItems(o).done(function (e) {
        i.groups = new c(e.groups), t.resolve(i.groups)
      }), t.promise()
    }, events: {"change #mtxSort": "changeSort"}, changeSort: function (e) {
      this.sortOrder = this.$mtxSort.val(), this.clearItems(), this.render()
    }, clearItems: function () {
      for (var e = 0, t = this.renderedGroups.length; e < t; ++e) this.renderedGroups[e].close();
      this.renderedGroups = []
    }, itemClicked: function (e) {
      o.trigger("inventoryItem.click", e)
    }, show: function () {
      this.$el.show()
    }, hide: function () {
      this.$el.hide()
    }, close: function () {
      this.remove(), this.unbind()
    }, setBorderColour: function (e, t, n) {
      this.$el.find(".stashTabContainer").css("border-color", "rgb(" + e + "," + t + "," + n + ")")
    }, render: function () {
      var t = e.Deferred(), n = this;
      return l.load("PoE/Inventory/MTXStashPanel.hbt").done(function (i) {
        n.fetchMtxItems().done(function (o) {
          var r = {};
          r.sortOrder = n.sortOrder, n.$el.html(i(r)), n.$stashTabEl = n.$el.find("#mtxGroups"), n.$mtxGroups = n.$stashTabEl;
          var s = [];
          o.each(function (t) {
            var i = e.Deferred(), o = new d({model: t});
            o.render().done(function (e) {
              n.$mtxGroups.append(e), i.resolve()
            }), n.renderedGroups.push(o), s.push(i.promise())
          }), n.$mtxSort = n.$el.find("#mtxSort"), n.initElementRefs(), n.$mtxGroups.scrollbar({
            showArrows: !0,
            scrolly: "advanced",
            ignoreMobile: !0
          }) || n.$mtxGroups.css("overflow-y", "auto"), n.delegateEvents(), n.setBorderColour(137, 100, 64), n.$stashTabEl.addClass("loading"), e.when.apply(e, s).always(function () {
            n.$stashTabEl.removeClass("loading"), n.rendered = !0, n.setBorderColour(137, 100, 64), t.resolve()
          })
        }), n.$el.find("img").attr("src", n.options.stashImageSrc)
      }), t.promise()
    }
  })
}), define("PoE/Backbone/Model/Character/Character", ["Backbone"], function (e) {
  return e.RelationalModel.extend({relations: []})
}), define("PoE/Backbone/Collection/Character/CharacterCollection", ["Backbone", "PoE/Backbone/Model/Character/Character"], function (e, t) {
  return e.Collection.extend({model: t})
}), define("PoE/API/Account", ["jquery", "PoE/Backbone/Collection/Character/CharacterCollection"], function (e, t) {
  return {
    getCharacters: function (n) {
      var i = e.Deferred();
      return e.ajax({
        url: "/character-window/get-characters",
        type: "POST",
        dataType: "json",
        data: {accountName: n.accountName, realm: n.realm},
        success: function (e) {
          i.resolve(new t(e))
        }
      }), i.promise()
    }
  }
}), define("text!PoE/Inventory/InventoryManagerMenuCharacter.hbt", [], function () {
  return '{{#with character}}\n<div class="icon {{class}}"></div>\n<div class="infoLine1">{{#if expired}}<div class="expired-character-flag">*</div>{{/if}}<span class="characterName">{{name}}</span></div>\n<div class="infoLine2">{{translate "Level"}} {{level}} {{translate class}}</div>\n<div class="infoLine3">{{fullLeagueName}}</div>\n{{/with}}\n'
}), define("PoE/Inventory/InventoryManagerMenuCharacter", ["jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Backbone/EventBus", "PoE/Helpers", "text!PoE/Inventory/InventoryManagerMenuCharacter.hbt"], function (e, t, n, i, o) {
  return t.View.extend({
    tagName: "li",
    initialize: function () {
      var e = this;
      this.$el.addClass("character"), this.active = e.options.active, this.model.get("expired") && this.$el.addClass("expired"), this.active && this.$el.addClass("active"), i.on("activeCharacterChanged", function (t) {
        t.get("name") == e.model.get("name") ? (e.active = !0, e.$el.addClass("active")) : (e.active = !1, e.$el.removeClass("active"))
      })
    },
    events: {
      "click .icon": "characterClicked",
      "click .infoLine1": "characterClicked",
      "click .infoLine2": "characterClicked"
    },
    characterClicked: function () {
      this.model.get("expired") || i.trigger("activeCharacterChanged", this.model)
    },
    render: function () {
      var e = this;
      n.load("PoE/Inventory/InventoryManagerMenuCharacter.hbt").done(function (t) {
        var n = e.model.toJSON();
        n.fullLeagueName = o.translate("{{LEAGUE}} League", {"{{LEAGUE}}": o.translate(n.league)});
        var i = {character: n};
        e.$el.html(t(i))
      })
    }
  })
}), define("text!PoE/Inventory/InventoryManagerMenu.hbt", [], function () {
  return '{{#unless equippedOnly}}\n<a href="#" class="inventoryButton showInventoryButton active"></a>\n<a href="#" class="inventoryButton showSkillTreeButton"></a>\n<a href="#" class="inventoryButton showStashButton"></a>\n<a href="#" class="inventoryButton showMTXStashButton"></a>\n{{/unless}}\n<ul class="characters poeScroll">\n</ul>\n'
}), define("PoE/Inventory/InventoryManagerMenu", ["jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/API/Account", "./InventoryManagerMenuCharacter", "PoE/Backbone/EventBus", "jquery.mousewheel", "text!PoE/Inventory/InventoryManagerMenu.hbt", "jquery.scrollbar"], function (e, t, n, i, o, r) {
  return t.View.extend({
    initialize: function () {
      var e = this;
      this.equippedOnly = this.options.equippedOnly || null;
      var t = {accountName: this.model.get("name"), realm: this.model.get("realm")};
      this.charactersLoaded = i.getCharacters(t).done(function (t) {
        e.characters = t
      }), this.activeCharacter = this.options.activeCharacter, r.on("activeCharacterChanged", function (t) {
        e.activeCharacter = t, e.updatePassiveSkillTreeLink()
      })
    },
    updatePassiveSkillTreeLink: function () {
      this.model && this.activeCharacter && e(".showSkillTreeButton").attr("href", "/character-window/view-passive-skill-tree?accountName=" + this.model.get("name") + "&realm=" + this.model.get("realm") + "&character=" + this.activeCharacter.get("name"))
    },
    initElementRefs: function () {
      this.$menu = this.$el.find("ul"), this.$characters = this.$el.find(".characters")
    },
    events: {
      "click .showInventoryButton": "showInventory",
      "click .showStashButton": "showStash",
      "click .showMTXStashButton": "showMTXStash"
    },
    showInventory: function (t) {
      this.resetMenu(), this.trigger("showInventory"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active"), t.preventDefault()
    },
    showStash: function (t) {
      this.resetMenu(), this.trigger("showStash"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active"), t.preventDefault()
    },
    showMTXStash: function (t) {
      this.resetMenu(), this.trigger("showMTXStash"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active"), t.preventDefault()
    },
    resetMenu: function () {
      this.$menu.find("input").removeClass("active")
    },
    render: function () {
      var e = this;
      n.load("PoE/Inventory/InventoryManagerMenu.hbt").done(function (t) {
        e.charactersLoaded.done(function (n) {
          var i = {equippedOnly: e.equippedOnly};
          e.$el.html(t(i)), e.initElementRefs();
          var r = 0;
          if (n.each(function (t, n) {
            var i = new o({model: t, active: t.get("name") == e.activeCharacter.get("name")});
            e.$characters.append(i.$el), i.render(), t.get("name") == e.activeCharacter.get("name") && (r = n)
          }), n.size() > 9 || null !== e.equippedOnly && n.size() > 6) {
            var s = e.$characters.find(".character").height();
            e.$characters.scrollTop(s * r), e.$characters.scrollbar({
              showArrows: !0,
              scrollx: "advanced",
              scrolly: "advanced",
              ignoreMobile: !0
            }) || e.$characters.css("overflow-y", "auto")
          }
          e.updatePassiveSkillTreeLink()
        })
      })
    }
  })
}), define("PoE/PassiveSkillTree/ByteEncoder", [], function () {
  return function () {
    this.init = function () {
      this.dataString = "", this.position = 0
    }, this.int16ToBytes = function (e) {
      return this.intToBytes(e, 2)
    }, this.intToBytes = function (e, t) {
      t = t || 4, e = parseInt(e);
      var n = [], i = t;
      do {
        n[--i] = 255 & e, e >>= 8
      } while (i > 0);
      return n
    }, this.appendInt8 = function (e) {
      this.appendInt(e, 1)
    }, this.appendInt16 = function (e) {
      this.appendInt(e, 2)
    }, this.appendInt = function (e, t) {
      t = t || 4;
      for (var n = this.intToBytes(e, t), i = 0; i < t; ++i) this.dataString += String.fromCharCode(n[i])
    }, this.getDataString = function () {
      return this.dataString
    }, this.init()
  }
}), define("PoE/PassiveSkillTree/Version", [], function () {
  return 4
}), define("PoE/PassiveSkillTree/GenerateLink", ["plugins", "PoE/PassiveSkillTree/ByteEncoder", "PoE/PassiveSkillTree/Version"], function (e, t, n) {
  return function (e, i) {
    var o = new t;
    o.appendInt(n), o.appendInt8(i.characterClass), o.appendInt8(i.ascendancyClass), o.appendInt8(e ? 1 : 0);
    for (var r = 0, s = i.hashes.length; r < s; ++r) o.appendInt16(i.hashes[r]);
    var a = Base64.btoa(o.getDataString());
    return a = a.replace(/\+/g, "-").replace(/\//g, "_"), i.version && (a = i.version + "/" + a), i.realm && "pc" != i.realm && (a = i.realm + "/" + a), (e ? "/fullscreen-passive-skill-tree/" : "/passive-skill-tree/") + a
  }
}), define("PoE/Inventory/InventoryPanelControls", ["plugins", "Backbone", "PoE/Backbone/EventBus", "./Constants"], function (e, t, n) {
  return t.View.extend({
    initialize: function () {
      this.activeTab = "inventory", this.inventoryManager = this.options.inventoryManager, this.$el = this.options.$el
    },
    events: {
      "click .inventoryPanelButton.inventory": "showInventoryPanel",
      "click .inventoryPanelButton.cosmetic": "showCosmeticPanel"
    },
    showInventoryPanel: function (e) {
      this.activeTab = "inventory", this.$inventoryButton.addClass("selected"), this.$cosmeticButton.removeClass("selected"), this.trigger("showInventory")
    },
    showCosmeticPanel: function (e) {
      this.activeTab = "cosmetic", this.$inventoryButton.removeClass("selected"), this.$cosmeticButton.addClass("selected"), this.trigger("showCosmetic")
    },
    show: function () {
      this.$el.show()
    },
    hide: function () {
      this.$el.hide()
    },
    close: function () {
      this.remove(), this.unbind()
    },
    render: function () {
      var t = e.Deferred();
      return this.$el.empty().append('<div class="inventoryPanelButton inventory left"></div><div class="inventoryPanelButton cosmetic right"></div>'), this.$inventoryButton = this.$el.find(".inventoryPanelButton.inventory"), this.$cosmeticButton = this.$el.find(".inventoryPanelButton.cosmetic"), "inventory" == this.activeTab ? this.$inventoryButton.addClass("selected") : "cosmetic" == this.activeTab && this.$cosmeticButton.addClass("selected"), t.resolve(), this.delegateEvents(), t.promise()
    }
  })
}), define("PoE/Inventory/MTXInventoryPanel", ["plugins", "Backbone", "PoE/API/League", "PoE/Item/Item", "PoE/Backbone/EventBus", "./Constants", "PoE/Backbone/Model/Item/MTXItem", "PoE/Item/MTXItem"], function (e, t, n, i, o, r, s, a) {
  return t.View.extend({
    initialize: function () {
      var e = this;
      this.mtxMap = r.mtxInventory, this.$el.addClass("MTXInventoryPanel"), this.renderedItems = [], this.activeCharacter = this.options.activeCharacter, o.on("activeCharacterChanged", function (t) {
        e.activeCharacter = t, e.render()
      })
    }, events: {}, showCharacterItems: function () {
      var e = this, t = {accountName: this.model.get("name"), realm: this.model.get("realm"), equippedOnly: !0};
      n.getMTXStashItems(t).done(function (t) {
        e.collection = t.characters, e.showItems()
      })
    }, showItems: function () {
      for (var e = this, t = 0; t < e.collection.length; t++) {
        var n = e.collection[t];
        if (n.character == e.activeCharacter.get("name")) for (var i in n.mtxInventory) if (n.mtxInventory.hasOwnProperty(i)) {
          var o = new s(n.mtxInventory[i]), r = new a({model: o});
          !function () {
            var t = e.mtxMap[i];
            r.render().done(function (e) {
              t.$el.empty().html(e)
            })
          }()
        }
      }
      this.clearItems()
    }, clearItems: function () {
      for (var e = 0, t = this.renderedItems.length; e < t; ++e) this.renderedItems[e].close();
      this.renderedItems = []
    }, itemClicked: function (e) {
      o.trigger("inventoryItem.click", e)
    }, show: function () {
      this.$el.show()
    }, hide: function () {
      this.$el.hide()
    }, close: function () {
      this.remove(), this.unbind()
    }, render: function () {
      var t = e.Deferred();
      if (this.equippedOnly) t.resolve(); else {
        for (var n in this.$el.empty(), this.mtxMap) {
          var i = this.mtxMap[n], o = e("<div>");
          o.addClass("mtxItem"), o.addClass(n), o.css("width", i.w), o.css("height", i.h), o.css("left", i.x + 5), o.css("top", i.y + 80), o.css("position", "absolute"), this.mtxMap[n].$el = o, this.$el.append(o)
        }
        this.showCharacterItems(), t.resolve(), this.delegateEvents()
      }
      return t.promise()
    }
  })
}), define("text!PoE/Inventory/InventoryManager.hbt", [], function () {
  return '<div class="inventoryManagerMenu"></div>\n<div class="inventoryPanelControls"></div>\n<div class="activePanel"></div>\n{{#if equippedOnly}}\n<div class="characterPassiveSkillTree"></div>\n{{/if}}'
}), define("PoE/Inventory/InventoryManager", ["plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "./MainInventoryPanel", "./StashPanel", "./MTXStashPanel", "./InventoryManagerMenu", "PoE/PassiveSkillTree/GenerateLink", "PoE/Backbone/EventBus", "./InventoryPanelControls", "./MTXInventoryPanel", "text!PoE/Inventory/InventoryManager.hbt"], function (e, t, n, i, o, r, s, a, l, c, u) {
  return t.View.extend({
    initialize: function () {
      var e = this;
      this.$el.addClass("inventoryManager"), this.account = this.options.account, this.activeCharacter = this.options.activeCharacter, this.equippedOnly = this.options.equippedOnly || null, l.on("activeCharacterChanged", function (t) {
        e.showPassiveSkillTree(t)
      })
    }, open: function () {
      var t = this;
      e(document).bind("cbox_open", function () {
        t.show(), e("#colorbox").addClass("colorBoxPanelTheme")
      }), e(document).bind("cbox_cleanup", function () {
        t.hide(), e(document).unbind("cbox_open"), e(document).unbind("cbox_cleanup")
      }), this.show(), e.colorbox({
        inline: !0, href: this.$el, onComplete: function () {
          var e = t.$el.find(".character"), n = e.index(t.$el.find(".character.active")), i = e.height();
          t.$el.find(".characters").scrollTop(i * n)
        }
      }), this.$colorbox || (this.$colorbox = e("#colorbox"), this.$colorbox.addClass("inventoryManagerColorbox")), setTimeout(function () {
        e.colorbox.resize()
      }, 2e3)
    }, createMainInventoryPanel: function () {
      this.mainInventoryPanel || (this.mainInventoryPanel = new i({
        model: this.account,
        inventoryImageSrc: this.options.inventoryImageSrc,
        activeCharacter: this.options.activeCharacter,
        equippedOnly: this.equippedOnly
      }))
    }, createMTXInventoryPanel: function () {
      this.MTXInventoryPanel || this.equippedOnly || (this.MTXInventoryPanel = new u({
        model: this.account,
        inventoryImageSrc: this.options.inventoryImageSrc,
        activeCharacter: this.options.activeCharacter,
        equippedOnly: this.equippedOnly
      }))
    }, createInventoryControls: function () {
      if (!this.inventoryPanelControls && !this.equippedOnly) {
        var e = this;
        this.inventoryPanelControls = new c({
          $el: this.$el.find(".inventoryPanelControls"),
          equippedOnly: this.equippedOnly,
          inventoryManager: this
        }), this.inventoryPanelControls.on("showInventory", function () {
          e.showMainInventory()
        }), this.inventoryPanelControls.on("showCosmetic", function () {
          e.showMTXInventory()
        })
      }
    }, createStashPanel: function () {
      this.stashPanel || this.equippedOnly || (this.stashPanel = new o({
        model: this.account,
        stashImageSrc: this.options.stashImageSrc,
        activeLeague: this.options.activeCharacter.get("league"),
        tabs: !0
      }))
    }, createMTXStashPanel: function () {
      this.mtxStashPanel || this.equippedOnly || (this.mtxStashPanel = new r({
        model: this.account,
        mtxStashImageSrc: this.options.mtxStashImageSrc,
        activeLeague: this.options.activeCharacter.get("league")
      }))
    }, showPassiveSkillTree: function (t) {
      var n = this;
      if (t && (this.activeCharacter = t), this.equippedOnly) {
        var i = this.activeCharacter.get("classId"), o = this.activeCharacter.get("name"),
          r = this.activeCharacter.get("ascendancyClass"),
          s = {reqData: 0, accountName: this.account.get("name"), realm: this.account.get("realm"), character: o};
        e.ajax({
          url: "/character-window/get-passive-skills", data: s, dataType: "json", success: function (e) {
            if (!1 !== e) {
              var t = "";
              s.character && (t = "?accountName=" + n.account.get("name") + "&characterName=" + s.character);
              var o = a(!0, {
                characterClass: i,
                ascendancyClass: r,
                hashes: e.hashes,
                realm: n.account ? n.account.get("realm") : void 0
              }) + t;
              n.$passiveSkillTree.html('<iframe sandbox="allow-popups allow-scripts allow-forms allow-same-origin allow-top-navigation" src="' + o + '" width="903" height="630" scrolling="yes" frameborder="0"></iframe>')
            }
          }
        })
      }
    }, createMenu: function () {
      var e = this;
      this.menu || (this.menu = new s({
        el: this.$menu,
        model: this.account,
        activeCharacter: this.options.activeCharacter,
        equippedOnly: this.equippedOnly
      }), this.menu.on("showInventory", function () {
        e.showMainInventory()
      }), this.menu.on("showStash", function () {
        e.showStash()
      }), this.menu.on("showMTXStash", function () {
        e.showMTXStash()
      }), this.menu.render())
    }, showMainInventory: function () {
      this.createMainInventoryPanel(), this.createInventoryControls(), this.closeActivePanel(), this.currentPanel = this.mainInventoryPanel, this.renderActivePanel()
    }, showMTXInventory: function () {
      this.createMTXInventoryPanel(), this.createInventoryControls(), this.closeActivePanel(), this.currentPanel = this.MTXInventoryPanel, this.renderActivePanel()
    }, showStash: function () {
      this.createStashPanel(), this.closeActivePanel(), this.currentPanel = this.stashPanel, this.renderActivePanel()
    }, showMTXStash: function () {
      this.createMTXStashPanel(), this.closeActivePanel(), this.currentPanel = this.mtxStashPanel, this.renderActivePanel()
    }, closeActivePanel: function () {
      this.currentPanel && this.currentPanel.close()
    }, renderActivePanel: function () {
      this.inventoryPanelControls && (this.currentPanel === this.mainInventoryPanel || this.currentPanel === this.MTXInventoryPanel ? (this.inventoryPanelControls.render(), this.inventoryPanelControls.show()) : this.inventoryPanelControls.hide()), this.$activePanel.empty().append(this.currentPanel.$el), this.currentPanel.render().done(function () {
        e.colorbox.resize()
      })
    }, show: function () {
      this.currentPanel && this.currentPanel.show(), this.$el.show()
    }, hide: function () {
      this.currentPanel && this.currentPanel.hide(), this.$el.hide()
    }, close: function () {
      this.closeActivePanel(), this.remove(), this.unbind()
    }, render: function () {
      var t = this;
      return n.load("PoE/Inventory/InventoryManager.hbt").done(function (n) {
        var i = {equippedOnly: t.equippedOnly};
        t.$el.html(n(i)), t.$el.find("img.inventoryImage").attr("src", t.options.inventoryImageSrc), t.$el.find("img.stashImage").attr("src", t.options.stashImageSrc), t.$activePanel = t.$el.find(".activePanel"), t.$passiveSkillTree = t.$el.find(".characterPassiveSkillTree"), t.$menu = t.$el.find(".inventoryManagerMenu"), t.currentPanel || t.showMainInventory(), t.createMenu(), t.showPassiveSkillTree(), t.$activePanel.empty().append(t.currentPanel.el), t.currentPanel.render().done(function () {
          e.colorbox.resize()
        })
      })
    }
  })
}), define("text!PoE/Inventory/InventoryControls.hbt", [], function () {
  return '{{#with activeCharacter}}\n<div class="infoLine1"><span class="characterName">{{name}}</span></div>\n<div class="infoLine2">{{translate "Level"}} {{level}} {{translate class}}</div>\n<div class="infoLine3">{{fullLeagueName}}</div>\n{{/with}}\n<div class="icon {{activeCharacter.class}}"></div>\n<a class="open" href="#">{{translate "SWITCH CHARACTER"}}</a>\n'
}), define("PoE/Inventory/InventoryControls", ["jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "./InventoryManager", "PoE/Backbone/Model/Character/Character", "PoE/Backbone/EventBus", "PoE/Helpers", "text!PoE/Inventory/InventoryControls.hbt"], function (e, t, n, i, o, r, s) {
  return t.View.extend({
    initialize: function () {
      this.initElementRefs(), this.account = this.options.account, this.activeCharacter = this.options.activeCharacter
    },
    initElementRefs: function () {
      this.$body = e("body")
    },
    events: {"click .open": "open", "click .icon": "open", "click .infoLine1": "open", "click .infoLine2": "open"},
    open: function (e) {
      e.preventDefault();
      var t = this;
      if (!this.inventoryManager) {
        var n = this.options.inventoryManager;
        n.id = "inventory-manager", n.activeCharacter = this.activeCharacter, n.account = this.account, this.inventoryManager = new i(n), this.$body.append(this.inventoryManager.$el), this.inventoryManagerRendered = this.inventoryManager.render()
      }
      this.inventoryManagerRendered.done(function () {
        t.inventoryManager.open()
      })
    },
    render: function () {
      var e = this, t = this.activeCharacter.toJSON();
      t.fullLeagueName = s.translate("{{LEAGUE}} League", {"{{LEAGUE}}": s.translate(t.league)});
      var i = {activeCharacter: t};
      n.load("PoE/Inventory/InventoryControls.hbt").done(function (t) {
        e.$el.html(t(i))
      })
    }
  })
}), define("PoE/Model/Account/Guild/PointsTransaction", ["Backbone"], function (e) {
  return e.RelationalModel.extend({url: "/api/account/guild/point-transactions", relations: []})
}), define("PoE/Model/Account/Guild/Guild", ["require", "Backbone"], function (e) {
  return e("Backbone").RelationalModel.extend({url: "/api/guild", relations: []})
}), define("PoE/Collection/Account/Guild/PointTransactions", ["require", "jquery", "Backbone", "PoE/Backbone/Paginator", "PoE/Model/Account/Guild/PointsTransaction"], function (e) {
  e("jquery"), e("Backbone");
  var t = e("PoE/Backbone/Paginator"), n = e("PoE/Model/Account/Guild/PointsTransaction");
  return t.extend({
    model: n,
    paginator_core: {url: "/api/account/guild/point-transactions", dataType: "json"},
    paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5, totalPages: 10},
    server_api: {
      offset: function () {
        return (this.currentPage - 1) * this.perPage
      }, limit: function () {
        return this.perPage
      }
    },
    perPageOptions: [5, 20, 50, 100],
    parse: function (e) {
      return e.limit && (this.perPage = parseInt(e.limit, 10)), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries
    }
  })
}), define("PoE/API/Error", ["require", "jquery"], function (e) {
  var t = e("jquery"), n = function () {
    this.message = null, this.code = null
  };
  return n.prototype.getMessage = function () {
    return this.message
  }, n.prototype.setMessage = function (e) {
    this.message = e
  }, n.prototype.setCode = function (e) {
    this.code = e
  }, n.fromResponse = function (e) {
    var i, o = new n;
    return e.responseText && (i = t.parseJSON(e.responseText), o.setMessage(i.error.message), o.setCode(i.error.code)), o
  }, n
}), define("text!PoE/Widget/Guild/AccountTransaction.hbt", [], function () {
  return '<div class="txInfo">\r\n    <div class="left">\r\n        <span class="points">{{points}}<span class="pointsIcon" title="Points"></span></span>\r\n        <span class="guild">{{translate "points transferred to"}} <a href="/guild/profile/{{guild.id}}">{{#if guild.name}}{{guild.name}}{{else}}<span class="error">{{translate "Deleted"}}</span>{{/if}}</a></span>\r\n    </div>\r\n    <div class="createdAt">{{moment createdAt format="MMMM Do YYYY, h:mm:ss a"}}</div>\r\n</div>\r\n{{#ifCond status "===" "new"}}\r\n<div class="menu">\r\n    <button class="cancel button1 important">{{translate "Cancel"}}</button>\r\n</div>\r\n{{else}}\r\n<div class="status">\r\n    {{#ifCond status "===" "cancelled"}}{{translate "Cancelled"}}{{/ifCond}}\r\n    {{#ifCond status "===" "rejected"}}{{translate "Rejected"}}{{/ifCond}}\r\n    {{#ifCond status "===" "complete"}}{{translate "Complete"}}{{/ifCond}}\r\n</div>\r\n{{/ifCond}}\r\n<div class="error"></div>'
}),define("PoE/Widget/Guild/AccountTransaction", ["require", "Backbone", "jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Loader", "PoE/API/Error", "PoE/Helpers", "text!PoE/Widget/Guild/AccountTransaction.hbt"], function (e) {
  var t = e("Backbone"), n = (e("jquery"), e("PoE/Handlebars/TemplateCollection")),
    i = (e("PoE/Model/Account/Guild/PointsTransaction"), e("PoE/Loader")), o = e("PoE/API/Error"), r = e("PoE/Helpers");
  return e("text!PoE/Widget/Guild/AccountTransaction.hbt"), t.View.extend({
    initialize: function () {
    }, events: {"click button.cancel": "cancel"}, startAction: function () {
      i.start(), this.disableButtons(), this.clearError()
    }, endAction: function () {
      i.done(), this.enableButtons()
    }, disableButtons: function () {
      this.$cancelButton.attr("disabled", !0)
    }, enableButtons: function () {
      this.$cancelButton.removeAttr("disabled")
    }, cancel: function () {
      var e = this;
      return confirm(r.translate("Cancel transaction?")) && (this.startAction(), this.model.save({method: "cancel"}, {
        type: "post",
        success: function () {
          e.render()
        },
        error: function (t, n) {
          var i = o.fromResponse(n);
          e.showError(i.getMessage())
        }
      }).always(function () {
        e.endAction()
      })), !1
    }, clearError: function () {
      this.$error.hide()
    }, showError: function (e) {
      this.$error.text(e), this.$error.show()
    }, render: function () {
      var e = this;
      n.load("PoE/Widget/Guild/AccountTransaction.hbt").done(function (t) {
        var n = e.model.toJSON();
        e.$el.html(t(n)), e.$el.removeClass().addClass("transaction").addClass(e.model.get("status")), e.$cancelButton = e.$el.find("button.cancel"), e.$error = e.$el.find(".error")
      })
    }
  })
}),define("text!PoE/Widget/Guild/Guild.hbt", [], function () {
  return '<div class="left balance">\r\n    <h2>{{translate "Guild Balance"}}</h2>\r\n    <div class="points" title="Guild Points">{{guild.points}}</div>\r\n</div>'
}),define("PoE/Widget/Guild/Guild", ["require", "Backbone", "jquery", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/Guild/Guild.hbt"], function (e) {
  var t = e("Backbone"), n = (e("jquery"), e("PoE/Handlebars/TemplateCollection"));
  return e("text!PoE/Widget/Guild/Guild.hbt"), t.View.extend({
    initialize: function () {
      var e = this;
      this.$el.addClass("guild"), this.model.on("change", function () {
        e.render()
      })
    }, render: function () {
      var e = this;
      n.load("PoE/Widget/Guild/Guild.hbt").done(function (t) {
        var n = {guild: e.model.toJSON(), identifyingMember: e.options.identifyingMember.toJSON()};
        e.$el.html(t(n))
      })
    }
  })
}),define("text!PoE/Widget/Guild/MemberPanel.hbt", [], function () {
  return '<div class="frame">\r\n    <div class="background"></div>\r\n    <div class="top"></div>\r\n    <div class="bottom"></div>\r\n    <div class="content">\r\n        <div class="guild"></div>\r\n    </div>\r\n</div>\r\n<div class="memberPanel">\r\n    <div class="frame">\r\n        <div class="background"></div>\r\n        <div class="top"></div>\r\n        <div class="bottom"></div>\r\n        <div class="content">\r\n            <div class="createTransaction">\r\n                <h2>{{translate "Give Microtransaction Points to Guild"}}</h2>\r\n                <p>{{translate "Use this form to send points to your Guild to allow your Guild Leader to purchase Microtransactions. If the Guild Leader accepts your points you can not be kicked out for three months."}}</p>\r\n                <div class="formT1">\r\n                    <div class="row points">\r\n                        <label for="points">{{translate "Points Amount"}}:</label>\r\n                        <div class="element">\r\n                            <input type="text" name="points" class="points">\r\n                            <ul></ul>\r\n                            <div class="success message"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="row"><div class="element"><button class="createTransaction button1 important">{{translate "Give Points"}}</button></div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="frame">\r\n        <div class="background"></div>\r\n        <div class="top"></div>\r\n        <div class="bottom"></div>\r\n        <div class="content">\r\n            <div class="currentTransactions">\r\n                <h2>{{translate "Transaction History"}}</h2>\r\n                <div class="entries"></div>\r\n                <div class="pagination"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
}),define("PoE/Widget/Guild/MemberPanel", ["require", "Backbone", "jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Model/Account/Guild/Guild", "PoE/Collection/Account/Guild/PointTransactions", "PoE/View/Widget/Pagination", "./AccountTransaction", "./Guild", "PoE/API/Error", "PoE/Loader", "PoE/Helpers", "text!PoE/Widget/Guild/MemberPanel.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), i = e("PoE/Handlebars/TemplateCollection"),
    o = e("PoE/Model/Account/Guild/PointsTransaction"),
    r = (e("PoE/Model/Account/Guild/Guild"), e("PoE/Collection/Account/Guild/PointTransactions")),
    s = e("PoE/View/Widget/Pagination"), a = e("./AccountTransaction"), l = e("./Guild"), c = e("PoE/API/Error"),
    u = e("PoE/Loader"), d = e("PoE/Helpers");
  return e("text!PoE/Widget/Guild/MemberPanel.hbt"), t.View.extend({
    initialize: function () {
      var e = this;
      this.accountTransactions = new r, this.fetchAccountTransactions(), this.accountTransactionsPagination = new s({collection: this.accountTransactions}), this.accountTransactions.on("reset", function () {
        e.addAccountTransactions()
      }), this.guildView = new l({
        model: this.model,
        identifyingMember: this.options.identifyingMember
      }), this.guildView.render()
    }, events: {"click button.createTransaction": "create"}, transactionCompleted: function () {
      u.start(), this.model.fetch().always(function () {
        u.done()
      })
    }, fetchAccountTransactions: function () {
      var e = this;
      this.accountTransactions.fetch().done(function () {
        e.addAccountTransactions()
      })
    }, create: function () {
      var e = parseInt(n.trim(this.$points.val()), 10), t = this;
      if (isNaN(e)) this.showPointsError(d.translate("Amount is not a number")); else if (e <= 0) this.showPointsError(d.translate("Amount must be greater than 0")); else if (confirm(d.translate("Transfer") + " " + e + " " + d.translate("point" + (e > 1 ? "s" : "") + " to your guild") + "?")) {
        this.clearPointsError(), this.$createButton.attr("disabled", !0);
        var i = new o({points: e});
        u.start(), i.save().then(function () {
          t.fetchAccountTransactions(), t.showSuccessMessage(d.translate("Transaction created"))
        }, function (e) {
          var n = c.fromResponse(e);
          t.showPointsError(n.getMessage())
        }).always(function () {
          u.done(), t.$createButton.removeAttr("disabled")
        })
      }
    }, showSuccessMessage: function (e) {
      var t = this;
      this.$successMessage.text(e), this.successTimeout && clearTimeout(this.successTimeout), this.successTimeout = setTimeout(function () {
        t.$successMessage.hide()
      }, 2e4)
    }, showPointsError: function (e) {
      this.clearPointsError(), this.$pointsRow.addClass("error");
      var t = n("<li></li>").text(e);
      this.$pointsErrors.append(t)
    }, clearPointsError: function () {
      this.$pointsRow.removeClass("error"), this.$pointsErrors.empty()
    }, addAccountTransactions: function () {
      var e = this;
      this.$accountTransactions.empty(), this.accountTransactions.each(function (t) {
        var n = new a({model: t});
        n.render(), e.$accountTransactions.append(n.el)
      })
    }, render: function () {
      var e = this;
      i.load("PoE/Widget/Guild/MemberPanel.hbt").done(function (t) {
        var n = {identifyingMember: e.options.identifyingMember.toJSON()};
        e.$el.html(t(n)), e.accountTransactionsPagination.render(), e.$el.find(".memberPanel .pagination").replaceWith(e.accountTransactionsPagination.el), e.accountTransactionsPagination.delegateEvents(), e.$accountTransactions = e.$el.find(".memberPanel .entries"), e.addAccountTransactions(), e.$pointsRow = e.$el.find(".createTransaction .row.points"), e.$points = e.$pointsRow.find("input.points"), e.$pointsErrors = e.$pointsRow.find("ul"), e.$createButton = e.$el.find("button.createTransaction"), e.$successMessage = e.$el.find(".success.message"), e.$el.find(".guild").replaceWith(e.guildView.el), e.guildView.delegateEvents(), e.delegateEvents()
      })
    }
  })
}),define("PoE/Model/Guild/PointsTransaction", ["Backbone"], function (e) {
  return e.RelationalModel.extend({url: "/api/guild/point-transactions", relations: []})
}),define("PoE/Collection/Guild/PointTransactions", ["require", "jquery", "Backbone", "PoE/Backbone/Paginator", "PoE/Model/Guild/PointsTransaction"], function (e) {
  e("jquery"), e("Backbone");
  var t = e("PoE/Backbone/Paginator"), n = e("PoE/Model/Guild/PointsTransaction");
  return t.extend({
    model: n,
    paginator_core: {url: "/api/guild/point-transactions", dataType: "json"},
    paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5, totalPages: 10},
    server_api: {
      offset: function () {
        return (this.currentPage - 1) * this.perPage
      }, limit: function () {
        return this.perPage
      }
    },
    perPageOptions: [5, 20, 50, 100],
    parse: function (e) {
      return e.limit && (this.perPage = parseInt(e.limit, 10)), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries
    }
  })
}),define("text!PoE/Widget/Guild/GuildTransaction.hbt", [], function () {
  return '<div class="txInfo">\r\n    <div class="left">\r\n        <span class="points">{{points}}<span class="pointsIcon" title="Points"></span></span>\r\n        {{#if manual}}\r\n        {{translate "Manual transfer"}}\r\n        {{else}}\r\n        {{translate "from"}} {{#if account}} {{profileLink account}} {{else}} {{translate "Deleted"}} {{/if}}\r\n        {{/if}}\r\n    </div>\r\n    <div class="createdAt">{{moment createdAt format="MMMM Do YYYY, h:mm:ss a"}}</div>\r\n</div>\r\n{{#ifCond status "===" "new"}}\r\n    <div class="menu">\r\n        <button class="accept button1 important">{{translate "Accept"}}</button>\r\n        <button class="reject button1 important">{{translate "Reject"}}</button>\r\n    </div>\r\n{{else}}\r\n    <div class="status">\r\n        {{#ifCond status "===" "cancelled"}}{{translate "Cancelled"}}{{/ifCond}}\r\n        {{#ifCond status "===" "rejected"}}{{translate "Rejected"}}{{/ifCond}}\r\n        {{#ifCond status "===" "complete"}}{{translate "Complete"}}{{/ifCond}}\r\n    </div>\r\n{{/ifCond}}\r\n<div class="error"></div>'
}),define("PoE/Widget/Guild/GuildTransaction", ["require", "Backbone", "jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Loader", "PoE/API/Error", "PoE/Helpers", "text!PoE/Widget/Guild/GuildTransaction.hbt"], function (e) {
  var t = e("Backbone"), n = (e("jquery"), e("PoE/Handlebars/TemplateCollection")),
    i = (e("PoE/Model/Account/Guild/PointsTransaction"), e("PoE/Loader")), o = e("PoE/API/Error"), r = e("PoE/Helpers");
  return e("text!PoE/Widget/Guild/GuildTransaction.hbt"), t.View.extend({
    initialize: function () {
    }, events: {"click button.accept": "accept", "click button.reject": "reject"}, startAction: function () {
      i.start(), this.disableButtons(), this.clearError()
    }, endAction: function () {
      i.done(), this.enableButtons()
    }, accept: function () {
      var e = this;
      confirm(r.translate("Accept transaction?")) && (this.startAction(), this.model.save({method: "accept"}, {
        type: "post",
        success: function () {
          e.render(), e.trigger("transactionComplete")
        },
        error: function (t, n) {
          var i = o.fromResponse(n);
          e.showError(i.getMessage())
        }
      }).always(function () {
        e.endAction()
      }))
    }, reject: function () {
      var e = this;
      confirm(r.translate("Reject transaction?")) && (this.startAction(), this.model.save({method: "reject"}, {
        type: "post",
        success: function () {
          e.render()
        },
        error: function (t, n) {
          var i = o.fromResponse(n);
          e.showError(i.getMessage())
        }
      }).always(function () {
        e.endAction()
      }))
    }, clearError: function () {
      this.$error.hide()
    }, showError: function (e) {
      this.$error.text(e), this.$error.show()
    }, disableButtons: function () {
      this.$acceptButton.attr("disabled", !0), this.$rejectButton.attr("disabled", !0)
    }, enableButtons: function () {
      this.$acceptButton.removeAttr("disabled"), this.$rejectButton.removeAttr("disabled")
    }, render: function () {
      var e = this;
      n.load("PoE/Widget/Guild/GuildTransaction.hbt").done(function (t) {
        var n = e.model.toJSON();
        e.$el.html(t(n)), e.$el.removeClass().addClass("transaction").addClass(e.model.get("status")), e.$acceptButton = e.$el.find("button.accept"), e.$rejectButton = e.$el.find("button.reject"), e.$error = e.$el.find(".error")
      })
    }
  })
}),define("text!PoE/Widget/Guild/LeaderPanel.hbt", [], function () {
  return '<div class="frame">\r\n    <div class="background"></div>\r\n    <div class="top"></div>\r\n    <div class="bottom"></div>\r\n    <div class="content">\r\n        <div class="guild"></div>\r\n    </div>\r\n</div>\r\n<div class="frame">\r\n    <div class="background"></div>\r\n    <div class="top"></div>\r\n    <div class="bottom"></div>\r\n    <div class="content">\r\n        <div class="leaderPanel">\r\n            <div class="transactions">\r\n                <h2>{{translate "Guild Transactions"}}</h2>\r\n                <p>{{translate "This is a list of points transfers from members of your Guild. Accept transactions to credit the points to your Guild. You will not be able to kick a player for three months if you accept their points."}}</p>\r\n                <div class="entries"></div>\r\n                <div class="pagination"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
}),define("PoE/Widget/Guild/LeaderPanel", ["require", "Backbone", "jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Model/Account/Guild/Guild", "PoE/Collection/Guild/PointTransactions", "PoE/View/Widget/Pagination", "./GuildTransaction", "./Guild", "PoE/API/Error", "PoE/Loader", "text!PoE/Widget/Guild/LeaderPanel.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), i = e("PoE/Handlebars/TemplateCollection"),
    o = (e("PoE/Model/Account/Guild/PointsTransaction"), e("PoE/Model/Account/Guild/Guild"), e("PoE/Collection/Guild/PointTransactions")),
    r = e("PoE/View/Widget/Pagination"), s = e("./GuildTransaction"), a = e("./Guild"),
    l = (e("PoE/API/Error"), e("PoE/Loader"));
  return e("text!PoE/Widget/Guild/LeaderPanel.hbt"), t.View.extend({
    initialize: function () {
      var e = this;
      "Leader" === this.options.identifyingMember.get("type") && (this.guildTransactions = new o, this.fetchGuildTransactions(), this.guildTransactionsPagination = new r({collection: this.guildTransactions}), this.guildTransactions.on("reset", function () {
        e.addGuildTransactions()
      })), this.guildView = new a({
        model: this.model,
        identifyingMember: this.options.identifyingMember
      }), this.guildView.render()
    }, events: {}, transactionCompleted: function () {
      l.start(), this.model.fetch().always(function () {
        l.done()
      })
    }, fetchGuildTransactions: function () {
      var e = this;
      "Leader" === this.options.identifyingMember.get("type") && this.guildTransactions.fetch().done(function () {
        e.addGuildTransactions()
      })
    }, showPointsError: function (e) {
      this.clearPointsError(), this.$pointsRow.addClass("error");
      var t = n("<li></li>").text(e);
      this.$pointsErrors.append(t)
    }, clearPointsError: function () {
      this.$pointsRow.removeClass("error"), this.$pointsErrors.empty()
    }, addGuildTransactions: function () {
      var e = this;
      this.$guildTransactions.empty(), this.guildTransactions.each(function (t) {
        var n = new s({model: t});
        n.on("transactionComplete", function () {
          e.transactionCompleted()
        }), n.render(), e.$guildTransactions.append(n.el)
      })
    }, render: function () {
      var e = this;
      i.load("PoE/Widget/Guild/LeaderPanel.hbt").done(function (t) {
        var n = {identifyingMember: e.options.identifyingMember.toJSON()};
        e.$el.html(t(n)), "Leader" === e.options.identifyingMember.get("type") && (e.guildTransactionsPagination.render(), e.$el.find(".leaderPanel .pagination").replaceWith(e.guildTransactionsPagination.el), e.guildTransactionsPagination.delegateEvents(), e.$guildTransactions = e.$el.find(".leaderPanel .entries"), e.addGuildTransactions()), e.$el.find(".guild").replaceWith(e.guildView.el), e.guildView.delegateEvents(), e.delegateEvents()
      })
    }
  })
}),define("PoE/API/Livestream/TwitchTV", ["jquery"], function (e) {
  return {
    fetch: function () {
      var t = e.Deferred();
      return e.ajax({
        url: "/api/streams", dataType: "json", cache: !0, success: function (e) {
          t.resolve(e)
        }
      }), t
    }
  }
}),define("PoE/Widget/TwitchTV", ["jquery", "PoE/API/Livestream/TwitchTV"], function (e, t) {
  var n = function (n, i, o) {
    this.$containerEl = n instanceof e ? n : e(n), this.$el = i instanceof e ? i : e(i), this.limit = o && o.limit ? o.limit : 3;
    var r = this;
    t.fetch().done(function (e) {
      r.result = e, r.draw()
    })
  };
  return n.prototype.draw = function () {
    if (this.$el.empty(), 0 != this.result.streams.length) {
      for (var t = 0; t < this.limit && this.result.streams[t]; ++t) {
        var n = this.result.streams[t],
          i = e('<div class="stream"><div><a><img/></a></div><div><a><span class="status"></span></a><div class="info"><div class="nameCont"><a><span class="name"></span></a></div><div class="viewersCont"><a><span class="viewers"></span></a></div></div></div>');
        i.find("img").attr("src", n.image), i.find("a").attr("href", n.url), i.find(".status").text(n.status), i.find(".name").text(n.name), i.find(".viewers").text(n.viewers + " viewer" + (1 == n.viewers ? "" : "s")), this.$el.append(i)
      }
      this.$el.append('<div class="clear"></div>'), this.$containerEl.show()
    }
  }, n
}),define("PoE/Widget/YoutubeModal", ["require", "jquery", "./YoutubeVideo"], function (e) {
  var t = e("jquery"), n = e("./YoutubeVideo");
  return function (e) {
    var i = e instanceof t ? e : t(e), o = i.find(".video");
    t(document).bind("cbox_open", function () {
    }), t(document).bind("cbox_cleanup", function () {
    }), this.show = function () {
      o.length && new n(o), t.colorbox({
        inline: !0, href: i, onOpen: function () {
          t("#colorbox").addClass("colorBoxTheme1 hideClose")
        }, onCleanup: function () {
          t("#colorbox").removeClass("hideClose")
        }
      })
    }
  }
}),define("PoE/Widget/OpenBetaCountdown", ["plugins", "Backbone"], function (e, t) {
  return t.View.extend({
    initialize: function () {
    }, render: function () {
      var t = this;
      e("#openBetaCountdown.fullLink").css("cursor", "pointer"), e("#openBetaCountdown.fullLink").click(function () {
        var t = e(this).data("url");
        document.location = t
      }), this.options.secs <= 0 || (this.$countdown = this.$el.find(".countdown"), this.last = [null, null, null, null, null, null, null], this.$countdown.countdown({
        until: this.options.secs,
        layout: '<div class="days">{dn}</div><div class="hours">{hn}</div><div class="minutes">{mn}</div><div class="seconds">{sn}</div>',
        onExpiry: function () {
          setTimeout(function () {
            e("body").removeClass("openBetaCountdownEnabled"), t.$el.parents(".layoutBox1:first").remove(), t.$el.remove()
          }, 1e4)
        },
        onTick: function (e) {
          var n = function (n, i) {
            e[n] !== t.last[n] && (t.last[n] = e[n], t.$countdown.find(i).addClass("start"), setTimeout(function () {
              t.$countdown.find(i).addClass("done")
            }, 0), 0 === e[n] && ".seconds" != i && t.$countdown.find(i).addClass("zero"), 0 === e[3] && (t.$countdown.find(".days").addClass("zero"), 0 == e[4] && (t.$countdown.find(".hours").addClass("zero"), 0 === e[5] && (t.$countdown.find(".minutes").addClass("zero"), 0 === e[6] && t.$countdown.find(".seconds").addClass("zero")))))
          };
          n(6, ".seconds"), n(5, ".minutes"), n(4, ".hours"), n(3, ".days")
        }
      }))
    }
  })
}),define("PoE/Widget/R16Label", ["Backbone", "PoE/Helpers"], function (e, t) {
  return e.View.extend({
    initialize: function () {
    }, render: function () {
      "Pacific/Auckland" == window.momentTimezone && (this.$el.addClass("active"), this.$el.html('<img src="' + t.imageUrl("legal/R13.png") + '" alt="Restricted to persons 16 Years and over." />'))
    }
  })
}),define("text!PoE/Widget/Season/Reward.hbt", [], function () {
  return '<div class="points">{{requiredPoints}}</div>\r\n<div class="itemDest"></div>\r\n<div class="marker"></div>'
}),define("PoE/Widget/Season/Reward", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "PoE/Item/Item", "PoE/Backbone/Model/Item/Item", "text!PoE/Widget/Season/Reward.hbt"], function (e) {
  e("plugins");
  var t = e("Backbone"), n = (e("Handlebars"), e("PoE/Handlebars/TemplateCollection")), i = e("PoE/Item/Item"),
    o = e("PoE/Backbone/Model/Item/Item");
  return e("text!PoE/Widget/Season/Reward.hbt"), t.View.extend({
    initialize: function () {
      this.$el.addClass("reward"), this.options.last && this.$el.addClass("last")
    }, initElementRefs: function () {
    }, events: {}, render: function () {
      var e = this;
      return n.load("PoE/Widget/Season/Reward.hbt").done(function (t) {
        var n = e.model.toJSON();
        e.$el.html(t(n));
        var r = e.model.get("item");
        if (r) {
          var s = new i({enableVerified: !1, enableLeague: !1, model: new o(r)});
          s.render(), e.$el.find(".itemDest").replaceWith(s.$el)
        }
      })
    }
  })
}),define("PoE/Model/Season/PlayerInfo", ["Backbone"], function (e) {
  return e.RelationalModel.extend({})
}),define("PoE/Model/Season/LifetimePlayerInfo", ["Backbone"], function (e) {
  return e.RelationalModel.extend({})
}),define("text!PoE/Widget/Season/SeasonInfo.hbt", [], function () {
  return '<div class="seasonInfo currentSeasonInfo{{#if small}} small{{/if}}{{#if garena}} garena{{/if}}{{#if region}} {{region}}{{/if}}" id="{{season.htmlId}}">\r\n    <div class="content">\r\n        <h1 class="name">{{translate season.id}}</h1>\r\n        {{#unless small}}\r\n            {{{season.htmlContent}}}\r\n        {{/unless}}\r\n    </div>\r\n    <div class="pointsBackground"></div>\r\n    <div class="pointsProgress">\r\n        <div class="barContainer"><div class="bar"></div></div>\r\n        <div class="frame"></div>\r\n    </div>\r\n    <div class="playerInfo">\r\n    {{label}}: {{playerInfo.points}}\r\n    </div>\r\n</div>\r\n\r\n<div class="seasonInfo lifetimeSeasonInfo{{#if small}} small{{/if}}">\r\n    <div class="pointsProgress">\r\n        <div class="barContainer"><div class="bar"></div></div>\r\n        <div class="frame"></div>\r\n    </div>\r\n    <div class="playerInfo">\r\n        {{translate "Lifetime Points"}}: {{lifetimePlayerInfo.points}}\r\n    </div>\r\n</div>'
}),define("PoE/Widget/Season/SeasonInfo", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "./Reward", "PoE/Model/Season/PlayerInfo", "PoE/Model/Season/LifetimePlayerInfo", "text!PoE/Widget/Season/SeasonInfo.hbt"], function (e) {
  e("plugins");
  var t = e("Backbone"), n = (e("Handlebars"), e("PoE/Handlebars/TemplateCollection")), i = e("./Reward");
  return e("PoE/Model/Season/PlayerInfo"), e("PoE/Model/Season/LifetimePlayerInfo"), e("text!PoE/Widget/Season/SeasonInfo.hbt"), t.View.extend({
    initialize: function () {
      this.playerInfo = this.options.playerInfo || null, this.small = !!this.options.small, this.garena = !!this.options.garena && this.options.garena, this.region = !!this.options.region && this.options.region, this.label = this.options.label ? this.options.label : "Season Reward Points"
    }, initElementRefs: function () {
    }, events: {}, render: function () {
      var e = this;
      return n.load("PoE/Widget/Season/SeasonInfo.hbt").done(function (t) {
        var n = {
          small: e.small,
          season: e.model.toJSON(),
          playerInfo: e.playerInfo ? e.playerInfo.toJSON() : {points: 0},
          garena: e.garena,
          region: e.region,
          label: e.label
        }, o = n.playerInfo.points, r = e.model.get("rewards").last();
        e.$el.html(t(n)), e.$bar = e.$el.find(".currentSeasonInfo .pointsProgress .bar");
        var s = e.$el.find(".currentSeasonInfo .pointsProgress");
        if (e.pointsProgressWidth = s.width(), r) {
          var a = e.model.get("rewards").first().get("requiredPoints"),
            l = (e.model.get("rewards").length, function (e) {
              return Math.log(e) / Math.log(2) - 8 * Math.log(a) / Math.log(2)
            }), c = r.get("requiredPoints"), u = (l(c), e.model.get("rewards"));
          u.each(function (t, n) {
            var a = new i({model: t, last: t === r});
            s.append(a.$el), a.render().done(function (t, n) {
              return function () {
                l(t.model.get("requiredPoints"));
                var n = t.$el.find(".newItemContainer"), i = t.model.get("itemOffsetX"), r = t.model.get("itemOffsetY");
                u.length > 12 && n.addClass("smaller"), t.$el.css("left", e.getRewardPosition(t.model) - t.$el.width()), o >= t.model.get("requiredPoints") && t.$el.addClass("achieved"), null !== i && n.css("right", i), null !== r && n.css("bottom", r)
              }
            }(a))
          });
          for (var d = 0, h = 0, f = null, p = null, v = Math.min(o, c), g = 0, m = u.length; g < m; ++g) {
            if (f = u.at(g).get("requiredPoints"), p = e.getRewardPosition(u.at(g)), v >= d && v <= f) {
              var y = (p - h) * (v - d) / (f - d) + h;
              e.$bar.css("width", y + "px");
              break
            }
            d = f, h = p
          }
        }
      })
    }, getRewardPosition: function (e) {
      var t = this.model.get("rewards"), n = t.indexOf(e);
      return this.pointsProgressWidth * ((n + 1) / t.length)
    }
  })
}),define("text!PoE/Widget/Season/Ladder/Entry.hbt", [], function () {
  return '<td class="rank">{{rank}}</td>\r\n<td class="account">\r\n{{#if account.name}}\r\n    {{profileLink account}}\r\n{{else}}\r\n    {{profileLink account characterName=account.characterName garena=true}}\r\n{{/if}}\r\n</td>\r\n<td class="points">{{points}}</td>\r\n{{#if splitPoints}}\r\n  <td class="standard_points">{{standard_points}}</td>\r\n  <td class="hardcore_points">{{hardcore_points}}</td>\r\n{{/if}}\r\n'
}),define("PoE/Widget/Season/Ladder/Entry", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/Season/Ladder/Entry.hbt"], function (e) {
  e("plugins");
  var t = e("Backbone"), n = (e("Handlebars"), e("PoE/Handlebars/TemplateCollection"));
  return e("text!PoE/Widget/Season/Ladder/Entry.hbt"), t.View.extend({
    tagName: "tr", initialize: function () {
      this.pvp = !!this.options.pvp && this.options.pvp, this.splitPoints = !!this.options.splitPoints && this.options.splitPoints
    }, render: function () {
      var e = this;
      n.load("PoE/Widget/Season/Ladder/Entry.hbt").done(function (t) {
        var n = e.model.toJSON();
        n.pvp = e.pvp, n.splitPoints = e.splitPoints, e.$el.html(t(n))
      })
    }
  })
}),define("PoEAdmin/Model/Season/Season", ["require", "Backbone"], function (e) {
  return e("Backbone").RelationalModel.extend({urlRoot: "/api/seasons", relations: []})
}),define("PoEAdmin/Collection/Season/Seasons", ["require", "Backbone", "PoEAdmin/Model/Season/Season"], function (e) {
  var t = e("Backbone"), n = e("PoEAdmin/Model/Season/Season");
  return t.Collection.extend({model: n, url: "/api/seasons"})
}),define("text!PoE/Widget/Season/Ladder/Ladder.hbt", [], function () {
  return '<h1>{{translate name}}{{#if type}} {{#ifCond type "===" "hardcore"}}{{translate "Hardcore"}}{{/ifCond}}{{#ifCond type "===" "standard"}}{{translate "Standard"}}{{/ifCond}}{{/if}} {{translate "Ladder"}}</h1>\r\n<span class="poeForm">\r\n    <select class="seasons">\r\n        {{#each seasons}}\r\n            <option value="{{#if this.configEditorId}}{{this.configEditorId}}{{else}}{{this.id}}{{/if}}"{{#ifCond this.id "===" ../name}} selected{{/ifCond}}>{{translate this.id}}</option>\r\n        {{/each}}\r\n    </select>\r\n</span>\r\n{{#if splitPoints}}\r\n<div class="ladder-types">\r\n    <a href="/seasons/pvp-ladder/season/{{seasonLink}}" class="button1{{#ifCond type "!==" "hardcore"}}{{#ifCond type "!==" "standard"}} buttonActive{{/ifCond}}{{/ifCond}}">{{translate "Overall"}}</a>\r\n    <a href="/seasons/pvp-ladder/season/{{seasonLink}}/type/standard" class="button1{{#ifCond type "===" "standard"}} buttonActive{{/ifCond}}">{{translate "Standard"}}</a>\r\n    <a href="/seasons/pvp-ladder/season/{{seasonLink}}/type/hardcore" class="button1{{#ifCond type "===" "hardcore"}} buttonActive{{/ifCond}}">{{translate "Hardcore"}}</a>\r\n</div>\r\n{{/if}}\r\n<div class="loading"></div>\r\n<table>\r\n    <thead>\r\n    <tr>\r\n        <th>{{translate "Rank"}}</th>\r\n        {{#if disableAccountNames}}\r\n        <th>{{translate "Character"}}</th>\r\n        {{else}}\r\n        <th>{{translate "Account"}}</th>\r\n        {{/if}}\r\n        {{#if splitPoints}}\r\n          <th>{{translate "Overall Points"}}</th>\r\n          <th>{{translate "Standard Points"}}\r\n          <th>{{translate "Hardcore Points"}}\r\n        {{else}}\r\n          <th>{{translate "Points"}}</th>\r\n        {{/if}}\r\n    </tr>\r\n    </thead>\r\n    <tbody class="entries"></tbody>\r\n</table>\r\n<div class="pagination"></div>\r\n'
}),define("PoE/Widget/Season/Ladder/Ladder", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "./Entry", "PoEAdmin/Collection/Season/Seasons", "PoE/View/Widget/Pagination", "text!PoE/Widget/Season/Ladder/Ladder.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), i = (e("Handlebars"), e("PoE/Handlebars/TemplateCollection")),
    o = e("./Entry"), r = e("PoEAdmin/Collection/Season/Seasons"), s = e("PoE/View/Widget/Pagination");
  return e("text!PoE/Widget/Season/Ladder/Ladder.hbt"), n.View.extend({
    initialize: function () {
      var e = this, n = t.Deferred();
      this.$el.addClass("seasonLadder"), this.pagination = new s({collection: this.collection}), this.garena = !!this.options.garena && this.options.garena, this.pvp = !!this.options.pvp && this.options.pvp, this.type = !!this.options.type && this.options.type, this.seasonLink = !!this.options.seasonLink && this.options.seasonLink, this.options.season && (this.collection.server_api.id = this.options.season), this.seasons = new r, this.pvp && (this.seasons.url += "?pvp=1"), this.deps = n.promise(), this.collection.on("change", function () {
        e.render()
      }), this.collection.on("reset", function () {
        e.hideLoader(), e.addAll()
      }), this.pagination.on("loadStart", function () {
        e.showLoader()
      }), this.pagination.on("loadEnd", function () {
        e.hideLoader()
      }), this.seasons.fetch({
        success: function () {
          if (!e.collection.server_api.id) {
            var t = e.seasons.models[e.seasons.models.length - 1];
            e.collection.server_api.id = t.id
          }
          n.resolve()
        }
      })
    }, events: {"change select.seasons": "changeSeason"}, changeSeason: function (e) {
      e.preventDefault(), document.location = "/seasons/" + (this.pvp ? "pvp-ladder" : "ladder") + "/season/" + this.$seasonsSelect.val()
    }, showLoader: function () {
      this.$entries.css("opacity", .5), this.$loading.show(), this.$loading.css("top", this.$entries.offset().top - this.$el.offset().top), this.$loading.height(this.$entries.height())
    }, hideLoader: function () {
      this.$entries.css("opacity", 1), this.$loading.hide()
    }, addAll: function () {
      var e = this;
      e.$entries.empty(), this.collection.each(function (t) {
        var n = new o({model: t, pvp: e.pvp, splitPoints: e.splitPoints()});
        n.render(), e.$entries.append(n.$el)
      })
    }, splitPoints: function () {
      return "EUPvPSeason1" == this.seasonLink || "USPvPSeason1" == this.seasonLink
    }, render: function () {
      var e = this;
      this.deps.done(function () {
        i.load("PoE/Widget/Season/Ladder/Ladder.hbt").done(function (t) {
          var n = {
            name: e.collection.server_api.id,
            seasonLink: e.seasonLink,
            seasons: e.seasons.toJSON(),
            garena: e.garena,
            pvp: e.pvp,
            type: e.type,
            splitPoints: e.splitPoints()
          };
          e.collection.disableAccountNames && (n.disableAccountNames = !0), e.$el.html(t(n)), e.$entries = e.$el.find(".entries"), e.$loading = e.$el.find(".loading"), e.$loading.hide(), e.$seasonsSelect = e.$el.find("select.seasons"), e.addAll(), e.pagination.render(), e.$el.find(".pagination").replaceWith(e.pagination.el), e.pagination.delegateEvents(), e.delegateEvents()
        })
      })
    }
  })
}),define("PoE/Model/League/Prize", ["Backbone", "PoE/Util/Date", "exports"], function (e, t, n) {
  var i = e.RelationalModel.extend({defaults: {claimed: !1}});
  return n.Prize = i, i
}),define("PoE/Collection/League/PrizeCollection", ["Backbone", "PoE/Model/League/Prize", "exports"], function (e, t, n) {
  var i = e.Collection.extend({model: t});
  return n.PrizeCollection = i, i
}),define("PoE/Model/League/Rule", ["Backbone"], function (e) {
  return e.RelationalModel.extend({
    initialize: function () {
    }
  })
}),define("PoE/Model/League/Event", ["Backbone", "moment-tz", "PoE/Util/Date", "./Prize", "PoE/Collection/League/PrizeCollection", "PoE/Model/League/Rule", "PoE/Model/League/LadderEntry", "PoE/Collection/League/LadderEntries", "exports"], function (e, t, n, i, o, r, s, a, l) {
  var c = e.RelationalModel.extend({
    relations: [{
      type: e.HasMany,
      key: "prizes",
      relatedModel: i,
      collectionType: o,
      reverseRelation: {key: "event", type: e.HasOne}
    }, {type: e.HasMany, key: "rules", relatedModel: r}, {
      type: e.HasMany,
      key: "ladder",
      relatedModel: s,
      collectionType: a,
      collectionOptions: {}
    }], initialize: function () {
      var e = t(), n = this.get("startAt"), i = this.get("endAt"), o = this.get("registerAt");
      n && i && (n = t(this.get("startAt")), (i = t(this.get("endAt"))).diff(e) < 0 ? this.set("complete", !0) : (o && (o = t(o)).diff(e) < 0 && this.set("register", !0), n.diff(e) > 0 ? this.set("upcoming", !0) : this.set("inProgress", !0))), this.bind("change", this.setTimers), this.bind("change:complete", this.finish);
      this.setTimers()
    }, setTimers: function () {
      var e = this;
      if (this.get("event") && (this.get("upcoming") ? n.Countdown(t(this.get("startAt")), function () {
        e.set("upcoming", !1), e.set("inProgress", !0), e.trigger("changeContinue")
      }, function () {
        e.trigger("upcomingTick")
      }) : this.get("inProgress") ? n.Countdown(t(this.get("endAt")), function () {
        e.set("inProgress", !1), e.set("complete", !0), e.trigger("changeContinue")
      }, function () {
        e.trigger("inProgressTick")
      }) : this.get("complete") && (this.unset("register"), this.completeTickIntervalId && clearInterval(this.completeTickIntervalId), this.completeTickIntervalId = setInterval(function () {
        e.trigger("completeTick")
      }, 1e3)), (this.get("upcoming") || this.get("inProgress")) && !this.get("register"))) {
        var i = this.get("registerAt");
        i && n.Countdown(t(i), function () {
          e.set("register", !0), e.trigger("registrationOpen")
        })
      }
    }, finish: function () {
      this.trigger("eventFinish")
    }
  });
  return l.Event = c, c
}),define("text!PoE/Widget/League/EventInfo/EventInfo.hbt", [], function () {
  return '<div class="details{{#unless complete}} hasCountdown{{/unless}}">\n    <div class="left">\n        {{#if showTimer}}\n        <div>\n            <div>\n                <span class="startInfo">{{#if upcoming}}{{translate "Starts"}}{{/if}}{{#if inProgress}}{{translate "Started"}}{{/if}}{{#if complete}}{{translate "Started"}}{{/if}}\n                    {{#unless ch}}\n                    <span class="startTimeAgo">{{startTimeAgo}}</span>\n                    {{/unless}}\n                </span>\n                {{#unless ch}}\n                {{translate "at"}}\n                {{/unless}}\n                <span class="date">{{startDate}}</span>\n            </div>\n            <div>\n                <span class="endInfo">{{#if upcoming}}{{translate "Finishes"}}{{/if}}{{#if inProgress}}{{translate "Finishes"}}{{/if}}{{#if complete}}{{translate "Finished"}}{{/if}}\n                    {{#unless ch}}\n                    <span class="endTimeAgo">{{endTimeAgo}}</span>\n                    {{/unless}}\n                </span>\n                {{#unless ch}}\n                {{translate "at"}}\n                {{/unless}}\n                <span class="date">{{endDate}}</span>\n            </div>\n            {{#if register}}<div class="registrationOpen">{{translate "Registration open"}}</div>{{/if}}        \n        </div>\n        {{/if}}\n        \n        {{#if rules}}\n        <div class="rules">\n            <h2>{{translate "Rules"}}</h2>\n            {{#each rules}}\n            <ul class="rule">\n               <li><span class="name">{{translate name}}:</span><span class="ruleDescription">{{translate description}}</span></li>\n            </ul>\n            {{/each}}\n        </div>\n        {{/if}}\n    </div>\n    \n    {{#if showTimer}}\n        {{#if complete}}\n        <div class="finishedMessage">\n            {{translate "League has finished"}}.\n        </div>\n        {{else}}\n        <div class="countdownContainer">\n            <div class="countdownDescription">{{#if upcoming}}{{translate "Starts"}}{{/if}}{{#if inProgress}}{{translate "Finishes"}}{{/if}}</div>\n            <div class="countdown"></div>\n        </div>\n        {{/if}}\n\n    {{/if}}\n</div>\n<div class="clear"></div>\n\n\n'
}),define("PoE/Widget/League/EventInfo/EventInfo", ["plugins", "Backbone", "PoE/Model/League/Event", "Handlebars", "moment-tz", "PoE/Environment", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/League/EventInfo/EventInfo.hbt"], function (e, t, n, i, o, r, s) {
  return t.View.extend({
    initialize: function () {
      this.model.bind("changeContinue", this.render, this), this.model.bind("eventFinish", this.render, this), this.model.bind("registrationOpen", this.render, this), this.startTimeAgoText = "", this.endTimeAgoText = ""
    }, initElementRefs: function () {
      this.$startTimeAgo = this.$el.find(".startTimeAgo"), this.$endTimeAgo = this.$el.find(".endTimeAgo"), this.$countdown = this.$el.find(".countdown")
    }, events: {}, render: function () {
      var e = this;
      return this.$el.html(""), s.load("PoE/Widget/League/EventInfo/EventInfo.hbt").done(function (t) {
        var n = e.model.toJSON(), i = e.model.get("startAt"), r = e.model.get("endAt");
        i && (i = o(i), n.startDate = i.format("h:mm a, MMMM Do YYYY G\\MTZ"), n.startTimeAgo = i.fromNow()), r && (r = o(r), n.endDate = r.format("h:mm a, MMMM Do YYYY G\\MTZ"), n.endTimeAgo = r.fromNow()), n.showTimer = (e.model.get("event") || "pvp" == e.model.get("type") && !e.model.get("glickoRatings")) && i && r, e.$el.empty().html(t(n)), e.initElementRefs(), e.model.get("upcoming") ? e.$countdown.countdown({until: i.toDate()}) : e.model.get("inProgress") && e.$countdown.countdown({until: r.toDate()}), e.model.off("upcomingTick"), e.model.off("inProgressTick"), e.model.off("completeTick"), e.model.on("upcomingTick inProgressTick completeTick", function () {
          var t = i.fromNow(), n = r.fromNow();
          t != e.startTimeAgoText && (e.$startTimeAgo.text(t), e.startTimeAgoText = t), n != e.endTimeAgoText && (e.$endTimeAgo.text(n), e.endTimeAgoText = n)
        })
      })
    }
  })
}),define("PoE/Widget/League/Event/Event", ["plugins", "Backbone", "PoE/Model/League/Event", "Handlebars", "PoE/Environment", "PoE/Handlebars/TemplateCollection", "PoE/Widget/League/Ladder/Ladder", "PoE/Widget/League/EventInfo/EventInfo"], function (e, t, n, i, o, r, s, a) {
  return t.View.extend({
    initialize: function () {
      this.type = this.options.type ? this.options.type : "league";
      var e = !!this.model.get("title") && this.model.get("title");
      this.ladder = new s({model: this.model, type: this.type, title: e}), this.eventInfo = new a({
        model: this.model,
        type: this.type
      }), this.$el.attr("class", "eventView")
    }, initElementRefs: function () {
    }, events: {}, render: function () {
      this.$el.html('<div class="info"></div><div class="twitch"></div><div class="ladder"></div>'), this.$el.find(".info").replaceWith(this.eventInfo.el), this.$el.find(".ladder").replaceWith(this.ladder.el), this.ladder.render(), this.eventInfo.render()
    }
  })
}),define("PoE/Shop/LogMessages", ["require"], function (e) {
  return {
    logMessages: [], logInfo: function (e) {
      this.logMessages.push(["I", (new Date).getTime(), e])
    }, logWarn: function (e) {
      this.logMessages.push(["W", (new Date).getTime(), e])
    }
  }
}),define("PoE/Shop/Helpers", ["require"], function (e) {
  return {
    formatXHRError: function (e, t, n) {
      var i = "";
      switch (t) {
        case"timeout":
          i = "Request timed out. ";
          break;
        case"abort":
          i = "Request aborted. "
      }
      return i += "Code (" + e.status + ")"
    }
  }
}),define("PoE/Shop/PaymentForm", ["require", "jquery", "./LogMessages", "PoE/Backbone/EventBus", "./Helpers"], function (e) {
  var t = e("jquery"), n = e("./LogMessages"), i = e("PoE/Backbone/EventBus"), o = e("./Helpers");
  return function (e, r) {
    this.formEl = t(e), this.formSubmitEl = this.formEl.find(".submit-button:first"), this.formLoadingEl = this.formEl.find(".loading:first"), this.formErrorsEl = this.formEl.find(".payment-errors:first"), this.formCardNumberEl = this.formEl.find(".card-number:first"), this.formCvcEl = this.formEl.find(".card-cvc:first"), this.formExpMonth = this.formEl.find(".card-expiry-month:first"), this.formExpYear = this.formEl.find(".card-expiry-year:first"), this.formNameEl = this.formEl.find(".name:first"), this.formAddressLine1El = this.formEl.find(".address_line1:first"), this.formAddressLine2El = this.formEl.find(".address_line2:first"), this.formAddressZipEl = this.formEl.find(".address_zip:first"), this.formAddressCountryEl = this.formEl.find(".address_country:first"), this.errorPrefix = "", r && r.errorPrefix && (this.errorPrefix = r.errorPrefix), this.init = function () {
      var e = this;
      this.showError = function (t) {
        e.formErrorsEl.html(e.errorPrefix + t), e.formLoadingEl.removeClass("loadingVisible"), e.formSubmitEl.removeAttr("disabled")
      }, this.formEl.submit(function (r) {
        return r.preventDefault(), n.logInfo("Submit payment form"), e.formAddressCountryEl.val() ? (e.formAddressCountryEl.css("border", "1px solid #B0CFE3"), e.formSubmitEl.attr("disabled", "disabled"), i.trigger("shop.purchaseStart"), e.formLoadingEl.height(e.formSubmitEl.height()).addClass("loadingVisible"), e.formErrorsEl.html(""), n.logInfo("Create token"), Stripe.createToken({
          number: e.formCardNumberEl.val(),
          cvc: e.formCvcEl.val(),
          exp_month: e.formExpMonth.val(),
          exp_year: "20" + e.formExpYear.val(),
          name: e.formNameEl.val(),
          address_line1: e.formAddressLine1El.val(),
          address_line2: e.formAddressLine2El.val(),
          address_zip: e.formAddressZipEl.val(),
          address_country: e.formAddressCountryEl.val()
        }, function (r, s) {
          if (s.error) n.logWarn("Got error response: " + s.error.message), e.showError(s.error.message), i.trigger("shop.purchaseEnd"); else {
            var a = s.id;
            n.logInfo("Got token: " + a.substring(0, 10) + "... Send XHR"), t.ajax({
              type: "POST",
              data: {
                source: "use-card",
                js: "1",
                saveForLater: e.formEl.find('input[name="saveForLater"]').is(":checked") ? "1" : "0",
                stripeToken: s.id,
                log: n.logMessages
              },
              dataType: "json",
              success: function (t) {
                t.error ? (e.showError(t.error.message), i.trigger("shop.purchaseEnd")) : window.location.href = t.redirect
              },
              error: function (t, n, r) {
                e.showError(o.formatXHRError(t, n, r)), i.trigger("shop.purchaseEnd")
              }
            })
          }
        }), !1) : (e.showError("Please choose your Country"), void e.formAddressCountryEl.css("border", "1px solid #ff342f"))
      }), this.formEl.closest(".optionBox").removeClass("loading")
    }, this.init()
  }
}),define("PoE/Shop/PaymentFormExistingCard", ["require", "jquery", "./LogMessages", "PoE/Backbone/EventBus", "./Helpers"], function (e) {
  var t = e("jquery"), n = (e("./LogMessages"), e("PoE/Backbone/EventBus")), i = e("./Helpers");
  return function (e, o) {
    this.formEl = t(e), this.formErrorsEl = this.formEl.find(".payment-errors:first"), this.formSubmitEl = this.formEl.find(".submit-button:first"), this.formLoadingEl = this.formEl.find(".loading:first"), this.cardIdEl = this.formEl.find('input[name="cid"]'), this.$removeButton = this.formEl.find(".remove a"), this.errorPrefix = "", o && o.errorPrefix && (this.errorPrefix = o.errorPrefix), this.init = function () {
      var e = this;
      this.showError = function (t) {
        this.formErrorsEl.html(e.errorPrefix + t), this.formLoadingEl.removeClass("loadingVisible"), this.formSubmitEl.removeAttr("disabled")
      }, this.formEl.submit(function () {
        return n.trigger("shop.purchaseStart"), e.formSubmitEl.attr("disabled", "disabled").fadeOut("fast"), e.formLoadingEl.height(e.formSubmitEl.height()).addClass("loadingVisible"), t.ajax({
          type: "POST",
          data: {source: "use-existing-card", js: "1", cid: e.cardIdEl.val()},
          dataType: "json",
          success: function (t) {
            t.error ? (e.showError(t.error.message), n.trigger("shop.purchaseEnd")) : window.location.href = t.redirect
          },
          error: function (t, o, r) {
            e.showError(i.formatXHRError(t, o, r)), n.trigger("shop.purchaseEnd")
          }
        }), !1
      }), this.$removeButton.on("click", function (i) {
        if (i.preventDefault(), !confirm("Remove card?")) return !1;
        n.trigger("shop.purchaseStart");
        var o = e.$removeButton.data("cardid"), r = e.$removeButton.closest(".shopExistingOptionContainer");
        return this.formEl = r.closest("form"), e.$removeButton.remove(), t.ajax({
          url: "/shop/remove-card",
          type: "POST",
          data: {cid: o},
          dataType: "json",
          success: function (e) {
            r.slideUp("fast", function () {
              t(this).remove()
            }), n.trigger("shop.purchaseEnd")
          },
          failure: function (e) {
            n.trigger("shop.purchaseEnd"), alert("Failed to remove card")
          }
        }), !1
      }), this.formEl.closest(".shopExistingOptionContainer").removeClass("loading")
    }, this.init()
  }
}),function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define("lib/xsolla/widget-1.0.7", [], e); else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).XPayStationWidget = e()
  }
}(function () {
  return function e(t, n, i) {
    function o(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var l = "function" == typeof require && require;
          if (!a && l) return l(s, !0);
          if (r) return r(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw c.code = "MODULE_NOT_FOUND", c
        }
        var u = n[s] = {exports: {}};
        t[s][0].call(u.exports, function (e) {
          var n = t[s][1][e];
          return o(n || e)
        }, u, u.exports, e, t, n, i)
      }
      return n[s].exports
    }

    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
    return o
  }({
    1: [function (e, t, n) {
      t.exports = function (e, t) {
        var n = t || document;
        if (n.createStyleSheet) {
          var i = n.createStyleSheet();
          return i.cssText = e, i.ownerNode
        }
        var o = n.getElementsByTagName("head")[0], r = n.createElement("style");
        return r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), o.appendChild(r), r
      }, t.exports.byUrl = function (e) {
        if (document.createStyleSheet) return document.createStyleSheet(e).ownerNode;
        var t = document.getElementsByTagName("head")[0], n = document.createElement("link");
        return n.rel = "stylesheet", n.href = e, t.appendChild(n), n
      }
    }, {}],
    2: [function (e, t, n) {
      t.exports = e("cssify")
    }, {cssify: 1}],
    3: [function (e, t, n) {
      (function (n) {
        var i = e("jquery"), o = e("lodash"), r = e("./exception"), s = e("./lightbox"), a = e("./childwindow"),
          l = e("./device");
        t.exports = function () {
          function e() {
            this.config = o.extend({}, t), this.eventObject = i({}), this.isInitiated = !1, this.postMessage = null
          }

          e.eventTypes = {
            INIT: "init",
            OPEN: "open",
            OPEN_WINDOW: "open-window",
            OPEN_LIGHTBOX: "open-lightbox",
            LOAD: "load",
            CLOSE: "close",
            CLOSE_WINDOW: "close-window",
            CLOSE_LIGHTBOX: "close-lightbox",
            STATUS: "status",
            STATUS_INVOICE: "status-invoice",
            STATUS_DELIVERING: "status-delivering",
            STATUS_TROUBLED: "status-troubled",
            STATUS_DONE: "status-done"
          };
          var t = {
            access_token: null,
            access_data: null,
            sandbox: !1,
            lightbox: {},
            childWindow: {},
            host: "secure.xsolla.com"
          }, c = ".xpaystation-widget";
          return e.prototype.config = {}, e.prototype.isInitiated = !1, e.prototype.eventObject = i({}), e.prototype.getPaystationUrl = function () {
            return this.config.sandbox ? "https://sandbox-secure.xsolla.com/paystation2/?" : "https://" + this.config.host + "/paystation2/?"
          }, e.prototype.checkConfig = function () {
            o.isEmpty(this.config.access_token) && o.isEmpty(this.config.access_data) && this.throwError("No access token given"), o.isEmpty(this.config.access_data) || o.isPlainObject(this.config.access_data) || this.throwError("Invalid access data format"), o.isEmpty(this.config.host) && this.throwError("Invalid host")
          }, e.prototype.checkApp = function () {
            o.isUndefined(this.isInitiated) && this.throwError("Initialize widget before opening")
          }, e.prototype.throwError = function (e) {
            throw new r(e)
          }, e.prototype.triggerEvent = function () {
            this.eventObject.trigger.apply(this.eventObject, arguments)
          }, e.prototype.init = function (r) {
            this.isInitiated = !0, this.config = o.extend({}, t, r);
            var s = i(n.document.body);
            s.off(c), s.on("click" + c, "[data-xpaystation-widget-open]", o.bind(function () {
              this.open()
            }, this)), this.triggerEvent(e.eventTypes.INIT)
          }, e.prototype.open = function () {
            this.checkConfig(), this.checkApp();
            var t = o.bind(function (t) {
              switch (((t || {}).paymentInfo || {}).status) {
                case"invoice":
                  this.triggerEvent(e.eventTypes.STATUS_INVOICE, t);
                  break;
                case"delivering":
                  this.triggerEvent(e.eventTypes.STATUS_DELIVERING, t);
                  break;
                case"troubled":
                  this.triggerEvent(e.eventTypes.STATUS_TROUBLED, t);
                  break;
                case"done":
                  this.triggerEvent(e.eventTypes.STATUS_DONE, t)
              }
            }, this), n = {};
            this.config.access_token ? n.access_token = this.config.access_token : n.access_data = JSON.stringify(this.config.access_data);
            var r = this.getPaystationUrl() + i.param(n);
            if (this.postMessage = null, (new l).isMobile()) {
              var c = new a;
              c.on("open", o.bind(function () {
                this.postMessage = c.getPostMessage(), this.triggerEvent(e.eventTypes.OPEN), this.triggerEvent(e.eventTypes.OPEN_WINDOW)
              }, this)), c.on("load", o.bind(function () {
                this.triggerEvent(e.eventTypes.LOAD)
              }, this)), c.on("close", o.bind(function () {
                this.triggerEvent(e.eventTypes.CLOSE), this.triggerEvent(e.eventTypes.CLOSE_WINDOW)
              }, this)), c.on("status", o.bind(function (n, i) {
                this.triggerEvent(e.eventTypes.STATUS, i), t(i)
              }, this)), c.open(r, this.config.childWindow)
            } else {
              var u = new s;
              u.on("open", o.bind(function () {
                this.postMessage = u.getPostMessage(), this.triggerEvent(e.eventTypes.OPEN), this.triggerEvent(e.eventTypes.OPEN_LIGHTBOX)
              }, this)), u.on("load", o.bind(function () {
                this.triggerEvent(e.eventTypes.LOAD)
              }, this)), u.on("close", o.bind(function () {
                this.triggerEvent(e.eventTypes.CLOSE), this.triggerEvent(e.eventTypes.CLOSE_LIGHTBOX)
              }, this)), u.on("status", o.bind(function (n, i) {
                this.triggerEvent(e.eventTypes.STATUS, i), t(i)
              }, this)), u.openFrame(r, this.config.lightbox)
            }
          }, e.prototype.on = function (e, t) {
            o.isFunction(t) && this.eventObject.on(e, t)
          }, e.prototype.off = function (e, t) {
            this.eventObject.off(e, t)
          }, e.prototype.sendMessage = function (e, t) {
            this.postMessage && this.postMessage.send.apply(this.postMessage, arguments)
          }, e.prototype.onMessage = function (e, t) {
            this.postMessage && this.postMessage.on.apply(this.postMessage, arguments)
          }, e
        }()
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./childwindow": 4, "./device": 5, "./exception": 6, "./lightbox": 7, jquery: "jquery", lodash: "lodash"}],
    4: [function (e, t, n) {
      (function (n) {
        var i = e("jquery"), o = e("lodash"), r = e("./version"), s = e("./postmessage");
        t.exports = function () {
          function e() {
            this.eventObject = i({}), this.message = null
          }

          var t = {target: "_blank"};
          return e.prototype.eventObject = null, e.prototype.childWindow = null, e.prototype.triggerEvent = function () {
            this.eventObject.trigger.apply(this.eventObject, arguments)
          }, e.prototype.open = function (e, a) {
            a = o.extend({}, t, a), this.childWindow && !this.childWindow.closed && (this.childWindow.location.href = e);
            var l = o.bind(function () {
              this.on("close", o.bind(function (e) {
                u && n.clearTimeout(u), this.childWindow && this.childWindow.close(), i(e.target).off(e)
              }, this)), this.message = new s(this.childWindow), this.message.on("dimensions widget-detection", o.bind(function (e) {
                this.triggerEvent("load"), i(e.target).off(e)
              }, this)), this.message.on("widget-detection", o.bind(function () {
                this.message.send("widget-detected", {version: r, childWindowOptions: a})
              }, this)), this.message.on("status", o.bind(function (e, t) {
                this.triggerEvent("status", t)
              }, this)), this.on("close", o.bind(function (e) {
                this.message.off(), i(e.target).off(e)
              }, this))
            }, this);
            switch (a.target) {
              case"_self":
                this.childWindow = n.window, l(), this.childWindow.location.href = e;
                break;
              case"_parent":
                this.childWindow = n.window.parent, l(), this.childWindow.location.href = e;
                break;
              case"_blank":
              default:
                this.childWindow = n.window.open(e), this.childWindow.focus(), l();
                var c = o.bind(function () {
                  this.childWindow && (this.childWindow.closed ? this.triggerEvent("close") : u = n.setTimeout(c, 100))
                }, this), u = n.setTimeout(c, 100)
            }
            this.triggerEvent("open")
          }, e.prototype.close = function () {
            this.triggerEvent("close")
          }, e.prototype.on = function () {
            this.eventObject.on.apply(this.eventObject, arguments)
          }, e.prototype.off = function () {
            this.eventObject.off.apply(this.eventObject, arguments)
          }, e.prototype.getPostMessage = function () {
            return this.message
          }, e
        }()
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./postmessage": 8, "./version": 12, jquery: "jquery", lodash: "lodash"}],
    5: [function (e, t, n) {
      var i = e("bowser");
      t.exports = function () {
        function e() {
        }

        return e.prototype.isMobile = function () {
          return i.mobile || i.tablet
        }, e
      }()
    }, {bowser: "bowser"}],
    6: [function (e, t, n) {
      var i = e("lodash");
      t.exports = function (e) {
        this.message = e, this.name = "XsollaPayStationWidgetException", this.toString = i.bind(function () {
          return this.name + ": " + this.message
        }, this)
      }
    }, {lodash: "lodash"}],
    7: [function (e, t, n) {
      (function (n) {
        var i = e("jquery"), o = e("lodash"), r = e("./version"), s = e("./postmessage");
        t.exports = function () {
          function t() {
            e("./styles/lightbox.scss"), this.eventObject = i({}), this.options = c, this.message = null
          }

          var a = "xpaystation-widget-lightbox", l = ".xpaystation-widget-lightbox", c = {
              width: null,
              height: "100%",
              zIndex: 1e3,
              overlayOpacity: ".6",
              overlayBackground: "#000000",
              contentBackground: "#ffffff",
              contentMargin: "10px",
              closeByKeyboard: !0,
              closeByClick: !0,
              modal: !1,
              spinner: "xsolla",
              spinnerColor: null,
              spinnerUrl: null,
              spinnerRotationPeriod: 0
            }, u = {xsolla: e("./spinners/xsolla.svg"), round: e("./spinners/round.svg"), none: " "},
            d = {height: 500, width: 600};
          return t.prototype.triggerEvent = function () {
            this.eventObject.trigger.apply(this.eventObject, arguments)
          }, t.prototype.measureScrollbar = function () {
            var e = i(n.document.body), t = i("<div></div>").css({
              position: "absolute",
              top: "-9999px",
              width: "50px",
              height: "50px",
              overflow: "scroll"
            });
            e.append(t);
            var o = t.get(0).offsetWidth - t.get(0).clientWidth;
            return t.remove(), o
          }, t.prototype.openFrame = function (e, t) {
            this.options = o.extend({}, this.options, t);
            var c = "custom" === (t = this.options).spinner && t.spinnerUrl ? '<img class="spinner-custom" src="' + encodeURI(t.spinnerUrl) + '" />' : u[t.spinner] || o.values(u)[0],
              h = i(n.document.body),
              f = i(o.template('<div class="<%-prefix%>"><div class="<%-prefix%>-overlay"></div><div class="<%-prefix%>-content <%-prefix%>-content__hidden"><iframe class="<%-prefix%>-content-iframe" src="<%-url%>" frameborder="0" allowfullscreen></iframe></div><div class="<%-prefix%>-spinner"><%=spinner%></div></div>')({
                prefix: a,
                url: e,
                spinner: c
              })), p = f.find("." + a + "-overlay"), v = f.find("." + a + "-content"),
              g = v.find("." + a + "-content-iframe"), m = f.find("." + a + "-spinner"),
              y = {width: "0px", height: "0px"};
            f.css({zIndex: t.zIndex}), p.css({
              background: t.overlayBackground,
              opacity: t.overlayOpacity
            }), v.css({
              margin: t.contentMargin,
              background: t.contentBackground
            }), t.spinnerColor && m.find("path").css({fill: t.spinnerColor}), "custom" === t.spinner && m.find(".spinner-custom").css({
              "-webkit-animation-duration": t.spinnerRotationPeriod + "s",
              "animation-duration": t.spinnerRotationPeriod + "s"
            }), t.closeByClick && p.on("click", o.bind(function () {
              this.closeFrame()
            }, this)), h.append(f), t.closeByKeyboard && h.on("keyup" + l, o.bind(function (e) {
              27 == e.which && this.closeFrame()
            }, this));
            var b, w = o.bind(function () {
              w = o.noop, P(t), v.removeClass(a + "-content__hidden"), this.triggerEvent("load")
            }, this), x = function () {
              v.css({top: 0, left: 0, width: t.width ? t.width : y.width, height: t.height ? t.height : y.height});
              var e = f.get(0).clientWidth, n = f.get(0).clientHeight, i = v.outerWidth(!0), o = v.outerHeight(!0),
                r = i - v.outerWidth(), s = o - v.outerHeight(), a = e - i, l = n - o;
              0 > a ? v.width(e - r) : v.css("left", Math.round(a / 2)), 0 > l ? v.height(n - s) : v.css("top", Math.round(l / 2))
            }, E = o.bind(function () {
              if (b = o.object(o.map(["overflow", "paddingRight"], function (e) {
                return [e, h.css(e)]
              })), n.window.innerWidth > h.outerWidth(!0)) {
                var e = parseInt(h.css("paddingRight") || 0, 10);
                h.css({paddingRight: e + this.measureScrollbar(), overflow: "hidden"})
              }
            }, this), P = function () {
              m.hide()
            };
            g.on("load", o.bind(function (e) {
              var o = t.width && t.height ? 1e3 : 3e4;
              n.setTimeout(function () {
                w()
              }, o), i(e.target).off(e)
            }, this));
            var C = g.get(0).contentWindow || g.get(0);
            this.message = new s(C), t.width && t.height ? this.message.on("dimensions", function () {
              w()
            }) : this.message.on("dimensions", function (e, t) {
              t.dimensions && (y = o.object(o.map(["width", "height"], function (e) {
                return [e, Math.max(d[e] || 0, t.dimensions[e] || 0) + "px"]
              })), x()), w()
            }), this.message.on("widget-detection", o.bind(function () {
              this.message.send("widget-detected", {version: r, lightBoxOptions: t})
            }, this)), this.message.on("widget-close", o.bind(function () {
              this.closeFrame()
            }, this)), this.message.on("status", o.bind(function (e, t) {
              this.triggerEvent("status", t)
            }, this)), i.event.add(n.window, "resize" + l, x), this.on("close", o.bind(function (e) {
              this.message.off(), h.off(l), i.event.remove(n.window, "resize" + l, x), f.remove(), h.css(b || {}), i(e.target).off(e)
            }, this)), t.width && t.height && x(), m.show(), E(), this.triggerEvent("open")
          }, t.prototype.closeFrame = function () {
            this.options.modal || this.triggerEvent("close")
          }, t.prototype.on = function () {
            this.eventObject.on.apply(this.eventObject, arguments)
          }, t.prototype.off = function () {
            this.eventObject.off.apply(this.eventObject, arguments)
          }, t.prototype.getPostMessage = function () {
            return this.message
          }, t
        }()
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
      "./postmessage": 8,
      "./spinners/round.svg": 9,
      "./spinners/xsolla.svg": 10,
      "./styles/lightbox.scss": 11,
      "./version": 12,
      jquery: "jquery",
      lodash: "lodash"
    }],
    8: [function (e, t, n) {
      (function (n) {
        var i = e("jquery"), o = e("lodash");
        t.exports = function () {
          function e(e) {
            this.eventObject = i({}), this.linkedWindow = e, n.window.addEventListener && n.window.addEventListener("message", o.bind(function (e) {
              if (e.source === this.linkedWindow) {
                var t = {};
                if (o.isString(e.data) && !o.isUndefined(n.JSON)) try {
                  t = n.JSON.parse(e.data)
                } catch (e) {
                }
                t.command && this.eventObject.trigger(t.command, t.data)
              }
            }, this))
          }

          return e.prototype.eventObject = null, e.prototype.linkedWindow = null, e.prototype.send = function (e, t, i) {
            if (o.isUndefined(t) && (t = {}), o.isUndefined(i) && (i = "*"), !this.linkedWindow || o.isUndefined(this.linkedWindow.postMessage) || o.isUndefined(n.window.JSON)) return !1;
            try {
              this.linkedWindow.postMessage(n.JSON.stringify({data: t, command: e}), i)
            } catch (e) {
            }
            return !0
          }, e.prototype.on = function () {
            this.eventObject.on.apply(this.eventObject, arguments)
          }, e.prototype.off = function () {
            this.eventObject.off.apply(this.eventObject, arguments)
          }, e
        }()
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {jquery: "jquery", lodash: "lodash"}],
    9: [function (e, t, n) {
      t.exports = '<svg width="47px" height="47px" class="spinner-round"><path d="M4.7852728,10.4210875 C2.94111664,13.0552197 1.63777109,16.0946106 1.03753956,19.3768556 L5.16638971,19.3768556 C5.6429615,17.187554 6.50125243,15.139164 7.66768899,13.305305 L5.95572428,11.5922705 L4.7852728,10.4210875 L4.7852728,10.4210875 Z M10.4693048,4.74565615 C13.1274873,2.8908061 16.1965976,1.58674648 19.5100161,1 L19.5100161,4.99523934 C17.2710923,5.48797782 15.1803193,6.3808529 13.3166907,7.59482153 L11.6337339,5.91081293 L10.4693048,4.74565615 L10.4693048,4.74565615 Z M42.2426309,36.5388386 C44.1112782,33.8575016 45.4206461,30.7581504 46,27.4117269 L41.9441211,27.4117269 C41.4527945,29.6618926 40.5583692,31.762911 39.3404412,33.6349356 L41.0332347,35.3287869 L42.2425306,36.5388386 L42.2426309,36.5388386 Z M36.5707441,42.2264227 C33.9167773,44.0867967 30.8509793,45.3972842 27.5398693,45.9911616 L27.5398693,41.7960549 C29.7376402,41.3202901 31.7936841,40.4593536 33.6336246,39.287568 L35.3554258,41.0104453 L36.5707441,42.2265231 L36.5707441,42.2264227 Z M4.71179965,36.4731535 C2.86744274,33.8069823 1.57463637,30.7309322 1,27.4118273 L5.16889904,27.4118273 C5.64828128,29.6073559 6.51159087,31.661069 7.68465205,33.4984432 L5.95572428,35.2284515 L4.71179965,36.4731535 L4.71179965,36.4731535 Z M10.3640133,42.180423 C13.0462854,44.0745435 16.1527345,45.40552 19.5101165,46 L19.5101165,41.7821947 C17.2817319,41.2916658 15.2000928,40.4048169 13.3430889,39.1995862 L11.6337339,40.9100094 L10.3640133,42.1805235 L10.3640133,42.180423 Z M42.1688567,10.3557038 C44.0373031,13.0048008 45.357411,16.0674929 45.9626612,19.3768556 L41.9469316,19.3768556 C41.4585158,17.1328164 40.5692095,15.0369202 39.3580065,13.1684109 L41.0335358,11.4918346 L42.168957,10.3557038 L42.1688567,10.3557038 Z M36.4651516,4.69995782 C33.8355754,2.87865336 30.8071162,1.59488179 27.5400701,1.00883836 L27.5400701,4.98117831 C29.7484805,5.45915272 31.8137587,6.3260149 33.6604242,7.50643794 L35.3555262,5.8102766 L36.4651516,4.69995782 L36.4651516,4.69995782 Z" fill="#CCCCCC"></path></svg>'
    }, {}],
    10: [function (e, t, n) {
      t.exports = '<svg class="spinner-xsolla" width="56" height="55"><path class="spinner-xsolla-x" d="M21.03 5.042l-2.112-2.156-3.657 3.695-3.657-3.695-2.112 2.156 3.659 3.673-3.659 3.696 2.112 2.157 3.657-3.697 3.657 3.697 2.112-2.157-3.648-3.696 3.648-3.673z" fill="#F2542D"></path><path class="spinner-xsolla-s" d="M41.232 6.896l2.941-2.974-2.134-2.132-2.92 2.973-.005-.008-2.134 2.135.005.008-.005.005 3.792 3.82-2.915 2.947 2.112 2.156 5.06-5.111-3.798-3.816.001-.001z" fill="#FCCA20"></path><path class="spinner-xsolla-o" d="M48.066 29.159c-1.536 0-2.761 1.263-2.761 2.79 0 1.524 1.226 2.765 2.761 2.765 1.509 0 2.736-1.242 2.736-2.765 0-1.526-1.227-2.79-2.736-2.79m0 8.593c-3.179 0-5.771-2.594-5.771-5.804 0-3.213 2.592-5.808 5.771-5.808 3.155 0 5.745 2.594 5.745 5.808 0 3.21-2.589 5.804-5.745 5.804" fill="#8C3EA4"></path><path class="spinner-xsolla-l" d="M24.389 42.323h2.99v10.437h-2.99v-10.437zm4.334 0h2.989v10.437h-2.989v-10.437z" fill="#B5DC20"></path><path class="spinner-xsolla-a" d="M7.796 31.898l1.404 2.457h-2.835l1.431-2.457h-.001zm-.001-5.757l-6.363 11.102h12.703l-6.341-11.102z" fill="#66CCDA"></path></svg>'
    }, {}],
    11: [function (e, t, n) {
      t.exports = e("sassify")(".xpaystation-widget-lightbox{position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;-webkit-animation:xpaystation-widget-lightbox-fadein 0.15s;animation:xpaystation-widget-lightbox-fadein 0.15s}.xpaystation-widget-lightbox-overlay{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}.xpaystation-widget-lightbox-content{position:relative;top:0;left:0;z-index:3}.xpaystation-widget-lightbox-content__hidden{visibility:hidden;z-index:-1}.xpaystation-widget-lightbox-content-iframe{width:100%;height:100%;border:0;background:transparent}.xpaystation-widget-lightbox-spinner{position:absolute;top:50%;left:50%;display:none;z-index:2;pointer-events:none}.xpaystation-widget-lightbox-spinner .spinner-xsolla{width:56px;height:55px;margin-top:-28px;margin-left:-26px}.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-x,.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-s,.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-o,.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-l,.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-a{-webkit-animation:xpaystation-widget-lightbox-bouncedelay 1s infinite ease-in-out;-webkit-animation-fill-mode:both;animation:xpaystation-widget-lightbox-bouncedelay 1s infinite ease-in-out;animation-fill-mode:both}.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-x{-webkit-animation-delay:0s;animation-delay:0s}.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-s{-webkit-animation-delay:.2s;animation-delay:.2s}.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-o{-webkit-animation-delay:.4s;animation-delay:.4s}.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-l{-webkit-animation-delay:.6s;animation-delay:.6s}.xpaystation-widget-lightbox-spinner .spinner-xsolla .spinner-xsolla-a{-webkit-animation-delay:.8s;animation-delay:.8s}.xpaystation-widget-lightbox-spinner .spinner-round{margin-top:-23px;margin-left:-23px;-webkit-animation:xpaystation-widget-lightbox-spin 3s infinite linear;animation:xpaystation-widget-lightbox-spin 3s infinite linear}.xpaystation-widget-lightbox-spinner .spinner-custom{-webkit-animation:xpaystation-widget-lightbox-spin infinite linear;animation:xpaystation-widget-lightbox-spin infinite linear}@-webkit-keyframes xpaystation-widget-lightbox-bouncedelay{0%,80%,100%{opacity:0}40%{opacity:1}}@keyframes xpaystation-widget-lightbox-bouncedelay{0%,80%,100%{opacity:0}40%{opacity:1}}@-webkit-keyframes xpaystation-widget-lightbox-fadein{from{opacity:0}to{opacity:1}}@keyframes xpaystation-widget-lightbox-fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes xpaystation-widget-lightbox-spin{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes xpaystation-widget-lightbox-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}  /*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAibGlnaHRib3guc2NzcyIsCgkic291cmNlcyI6IFsKCQkibGlnaHRib3guc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIiRsaWdodGJveC1wcmVmaXg6ICd4cGF5c3RhdGlvbi13aWRnZXQtbGlnaHRib3gnO1xuJGxpZ2h0Ym94LWNsYXNzOiAnLicgKyAkbGlnaHRib3gtcHJlZml4O1xuXG4jeyRsaWdodGJveC1jbGFzc30ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246ICN7JGxpZ2h0Ym94LXByZWZpeH0tZmFkZWluIC4xNXM7XG4gIGFuaW1hdGlvbjogI3skbGlnaHRib3gtcHJlZml4fS1mYWRlaW4gLjE1cztcbn1cblxuI3skbGlnaHRib3gtY2xhc3N9LW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4jeyRsaWdodGJveC1jbGFzc30tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xufVxuXG4jeyRsaWdodGJveC1jbGFzc30tY29udGVudF9faGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbn1cblxuI3skbGlnaHRib3gtY2xhc3N9LWNvbnRlbnQtaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI3skbGlnaHRib3gtY2xhc3N9LXNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIC5zcGlubmVyLXhzb2xsYSB7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiAtMjhweDtcbiAgICAgIGxlZnQ6IC0yNnB4O1xuICAgIH1cblxuICAgIC5zcGlubmVyLXhzb2xsYS14LCAuc3Bpbm5lci14c29sbGEtcywgLnNwaW5uZXIteHNvbGxhLW8sIC5zcGlubmVyLXhzb2xsYS1sLCAuc3Bpbm5lci14c29sbGEtYSB7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skbGlnaHRib3gtcHJlZml4fS1ib3VuY2VkZWxheSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgIGFuaW1hdGlvbjogI3skbGlnaHRib3gtcHJlZml4fS1ib3VuY2VkZWxheSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgfVxuXG4gICAgLnNwaW5uZXIteHNvbGxhLXgge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICB9XG5cbiAgICAuc3Bpbm5lci14c29sbGEtcyB7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjJzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7XG4gICAgfVxuXG4gICAgLnNwaW5uZXIteHNvbGxhLW8ge1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC40cztcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLjRzO1xuICAgIH1cblxuICAgIC5zcGlubmVyLXhzb2xsYS1sIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuNnM7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IC42cztcbiAgICB9XG5cbiAgICAuc3Bpbm5lci14c29sbGEtYSB7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjhzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuOHM7XG4gICAgfVxuICB9XG5cbiAgLnNwaW5uZXItcm91bmQge1xuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiAtMjNweDtcbiAgICAgIGxlZnQ6IC0yM3B4O1xuICAgIH1cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skbGlnaHRib3gtcHJlZml4fS1zcGluIDNzIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246ICN7JGxpZ2h0Ym94LXByZWZpeH0tc3BpbiAzcyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cblxuICAuc3Bpbm5lci1jdXN0b20ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAjeyRsaWdodGJveC1wcmVmaXh9LXNwaW4gaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogI3skbGlnaHRib3gtcHJlZml4fS1zcGluIGluZmluaXRlIGxpbmVhcjtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgI3skbGlnaHRib3gtcHJlZml4fS1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDEgfVxufVxuXG5Aa2V5ZnJhbWVzICN7JGxpZ2h0Ym94LXByZWZpeH0tYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyAjeyRsaWdodGJveC1wcmVmaXh9LWZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzICN7JGxpZ2h0Ym94LXByZWZpeH0tZmFkZWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyAjeyRsaWdodGJveC1wcmVmaXh9LXNwaW4ge1xuICBmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzICN7JGxpZ2h0Ym94LXByZWZpeH0tc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cbiIKCV0sCgkibWFwcGluZ3MiOiAiQUFHQSxBQUFBLDRCQUE0QixBQUE1QixDQUNFLFFBQVEsQ0FBRSxLQUFNLENBQ2hCLEdBQUcsQ0FBRSxDQUFFLENBQ1AsSUFBSSxDQUFFLENBQUUsQ0FDUixNQUFNLENBQUUsQ0FBRSxDQUNWLEtBQUssQ0FBRSxDQUFFLENBQ1QsS0FBSyxDQUFFLElBQUssQ0FDWixNQUFNLENBQUUsSUFBSyxDQUNiLGlCQUFpQixDQUFFLGtDQUEwQixDQUFRLEtBQUksQ0FDekQsU0FBUyxDQUFFLGtDQUEwQixDQUFRLEtBQUksQ0FDbEQsQUFFRCxBQUFBLG9DQUFvQyxBQUFwQyxDQUNFLFFBQVEsQ0FBRSxRQUFTLENBQ25CLEdBQUcsQ0FBQyxDQUFFLENBQ04sSUFBSSxDQUFFLENBQUUsQ0FDUixNQUFNLENBQUUsQ0FBRSxDQUNWLEtBQUssQ0FBRSxDQUFFLENBQ1QsT0FBTyxDQUFFLENBQUUsQ0FDWixBQUVELEFBQUEsb0NBQW9DLEFBQXBDLENBQ0UsUUFBUSxDQUFFLFFBQVMsQ0FDbkIsR0FBRyxDQUFFLENBQUUsQ0FDUCxJQUFJLENBQUUsQ0FBRSxDQUNSLE9BQU8sQ0FBRSxDQUFFLENBQ1osQUFFRCxBQUFBLDRDQUE0QyxBQUE1QyxDQUNFLFVBQVUsQ0FBRSxNQUFPLENBQ25CLE9BQU8sQ0FBRSxFQUFHLENBQ2IsQUFFRCxBQUFBLDJDQUEyQyxBQUEzQyxDQUNFLEtBQUssQ0FBRSxJQUFLLENBQ1osTUFBTSxDQUFFLElBQUssQ0FDYixNQUFNLENBQUUsQ0FBRSxDQUNWLFVBQVUsQ0FBRSxXQUFZLENBQ3pCLEFBRUQsQUFBQSxvQ0FBb0MsQUFBcEMsQ0FDRSxRQUFRLENBQUUsUUFBUyxDQUNuQixHQUFHLENBQUUsR0FBSSxDQUNULElBQUksQ0FBRSxHQUFJLENBQ1YsT0FBTyxDQUFFLElBQUssQ0FDZCxPQUFPLENBQUUsQ0FBRSxDQUNYLGNBQWMsQ0FBRSxJQUFLLENBd0R0QixBQTlERCxBQVFFLG9DQVJrQyxDQVFsQyxlQUFlLEFBQUMsQ0FDZCxLQUFLLENBQUUsSUFBSyxDQUNaLE1BQU0sQ0FBRSxJQUFLLENBQ2IsTUFBTSxBQUFDLENBQUMsQUFDTixHQUFHLENBQUUsS0FBTSxDQURiLE1BQU0sQUFBQyxDQUFDLEFBRU4sSUFBSSxDQUFFLEtBQU0sQ0FrQ2YsQUEvQ0gsQUFnQkksb0NBaEJnQyxDQVFsQyxlQUFlLENBUWIsaUJBQWlCLENBaEJyQixBQWdCdUIsb0NBaEJhLENBUWxDLGVBQWUsQ0FRTSxpQkFBaUIsQ0FoQnhDLEFBZ0IwQyxvQ0FoQk4sQ0FRbEMsZUFBZSxDQVF5QixpQkFBaUIsQ0FoQjNELEFBZ0I2RCxvQ0FoQnpCLENBUWxDLGVBQWUsQ0FRNEMsaUJBQWlCLENBaEI5RSxBQWdCZ0Ysb0NBaEI1QyxDQVFsQyxlQUFlLENBUStELGlCQUFpQixBQUFDLENBQzVGLGlCQUFpQixDQUFFLHVDQUErQixDQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN0RiwyQkFBMkIsQ0FBRSxJQUFLLENBQ2xDLFNBQVMsQ0FBRSx1Q0FBK0IsQ0FBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDOUUsbUJBQW1CLENBQUUsSUFBSyxDQUMzQixBQXJCTCxBQXVCSSxvQ0F2QmdDLENBUWxDLGVBQWUsQ0FlYixpQkFBaUIsQUFBQyxDQUNoQix1QkFBdUIsQ0FBRSxFQUFHLENBQzVCLGVBQWUsQ0FBRSxFQUFHLENBQ3JCLEFBMUJMLEFBNEJJLG9DQTVCZ0MsQ0FRbEMsZUFBZSxDQW9CYixpQkFBaUIsQUFBQyxDQUNoQix1QkFBdUIsQ0FBRSxHQUFJLENBQzdCLGVBQWUsQ0FBRSxHQUFJLENBQ3RCLEFBL0JMLEFBaUNJLG9DQWpDZ0MsQ0FRbEMsZUFBZSxDQXlCYixpQkFBaUIsQUFBQyxDQUNoQix1QkFBdUIsQ0FBRSxHQUFJLENBQzdCLGVBQWUsQ0FBRSxHQUFJLENBQ3RCLEFBcENMLEFBc0NJLG9DQXRDZ0MsQ0FRbEMsZUFBZSxDQThCYixpQkFBaUIsQUFBQyxDQUNoQix1QkFBdUIsQ0FBRSxHQUFJLENBQzdCLGVBQWUsQ0FBRSxHQUFJLENBQ3RCLEFBekNMLEFBMkNJLG9DQTNDZ0MsQ0FRbEMsZUFBZSxDQW1DYixpQkFBaUIsQUFBQyxDQUNoQix1QkFBdUIsQ0FBRSxHQUFJLENBQzdCLGVBQWUsQ0FBRSxHQUFJLENBQ3RCLEFBOUNMLEFBaURFLG9DQWpEa0MsQ0FpRGxDLGNBQWMsQUFBQyxDQUNiLE1BQU0sQUFBQyxDQUFDLEFBQ04sR0FBRyxDQUFFLEtBQU0sQ0FEYixNQUFNLEFBQUMsQ0FBQyxBQUVOLElBQUksQ0FBRSxLQUFNLENBRWQsaUJBQWlCLENBQUUsZ0NBQXdCLENBQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ25FLFNBQVMsQ0FBRSxnQ0FBd0IsQ0FBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDNUQsQUF4REgsQUEwREUsb0NBMURrQyxDQTBEbEMsZUFBZSxBQUFDLENBQ2QsaUJBQWlCLENBQUUsZ0NBQXdCLENBQU0sUUFBUSxDQUFDLE1BQU0sQ0FDaEUsU0FBUyxDQUFFLGdDQUF3QixDQUFNLFFBQVEsQ0FBQyxNQUFNLENBQ3pELEFBR0gsa0JBQWtCLENBQWxCLHVDQUFrQixDQUNoQixBQUFBLEVBQUUsQ0FBRSxBQUFBLEdBQUcsQ0FBRSxBQUFBLElBQUksQ0FBRyxPQUFPLENBQUUsQ0FBRSxDQUMzQixBQUFBLEdBQUcsQ0FBRyxPQUFPLENBQUUsQ0FBRyxFQUdwQixVQUFVLENBQVYsdUNBQVUsQ0FDUixBQUFBLEVBQUUsQ0FBRSxBQUFBLEdBQUcsQ0FBRSxBQUFBLElBQUksQ0FBRyxPQUFPLENBQUUsQ0FBRSxDQUMzQixBQUFBLEdBQUcsQ0FBRyxPQUFPLENBQUUsQ0FBRSxFQUduQixrQkFBa0IsQ0FBbEIsa0NBQWtCLENBQ2hCLEFBQUEsSUFBSSxDQUFHLE9BQU8sQ0FBRSxDQUFFLENBQ2xCLEFBQUEsRUFBRSxDQUFHLE9BQU8sQ0FBRSxDQUFFLEVBR2xCLFVBQVUsQ0FBVixrQ0FBVSxDQUNSLEFBQUEsSUFBSSxDQUFHLE9BQU8sQ0FBRSxDQUFFLENBQ2xCLEFBQUEsRUFBRSxDQUFHLE9BQU8sQ0FBRSxDQUFFLEVBR2xCLGtCQUFrQixDQUFsQixnQ0FBa0IsQ0FDaEIsQUFBQSxJQUFJLENBQUcsaUJBQWlCLENBQUUsWUFBTSxDQUNoQyxBQUFBLEVBQUUsQ0FBRyxpQkFBaUIsQ0FBRSxjQUFNLEVBR2hDLFVBQVUsQ0FBVixnQ0FBVSxDQUNSLEFBQUEsSUFBSSxDQUFHLFNBQVMsQ0FBRSxZQUFNLENBQ3hCLEFBQUEsRUFBRSxDQUFHLFNBQVMsQ0FBRSxjQUFNIiwKCSJuYW1lcyI6IFtdCn0= */")
    }, {sassify: 2}],
    12: [function (e, t, n) {
      t.exports = "1.0.6"
    }, {}],
    bowser: [function (e, t, n) {
      !function (e, n) {
        void 0 !== t && t.exports ? t.exports = n() : this[e] = n()
      }("bowser", function () {
        function e(e) {
          function t(t) {
            var n = e.match(t);
            return n && n.length > 1 && n[1] || ""
          }

          var n, i = t(/(ipod|iphone|ipad)/i).toLowerCase(), o = !/like android/i.test(e) && /android/i.test(e),
            s = /nexus\s*[0-6]\s*/i.test(e), a = !s && /nexus\s*[0-9]+/i.test(e), l = /CrOS/.test(e),
            c = /silk/i.test(e), u = /sailfish/i.test(e), d = /tizen/i.test(e), h = /(web|hpw)os/i.test(e),
            f = /windows phone/i.test(e), p = !f && /windows/i.test(e), v = !i && !c && /macintosh/i.test(e),
            g = !o && !u && !d && !h && /linux/i.test(e), m = t(/edge\/(\d+(\.\d+)?)/i),
            y = t(/version\/(\d+(\.\d+)?)/i), b = /tablet/i.test(e), w = !b && /[^-]mobi/i.test(e), x = /xbox/i.test(e);
          /opera|opr|opios/i.test(e) ? n = {
            name: "Opera",
            opera: r,
            version: y || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
          } : /coast/i.test(e) ? n = {
            name: "Opera Coast",
            coast: r,
            version: y || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
          } : /yabrowser/i.test(e) ? n = {
            name: "Yandex Browser",
            yandexbrowser: r,
            version: y || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
          } : /ucbrowser/i.test(e) ? n = {
            name: "UC Browser",
            ucbrowser: r,
            version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
          } : /mxios/i.test(e) ? n = {
            name: "Maxthon",
            maxthon: r,
            version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
          } : /epiphany/i.test(e) ? n = {
            name: "Epiphany",
            epiphany: r,
            version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
          } : /puffin/i.test(e) ? n = {
            name: "Puffin",
            puffin: r,
            version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
          } : /sleipnir/i.test(e) ? n = {
            name: "Sleipnir",
            sleipnir: r,
            version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
          } : /k-meleon/i.test(e) ? n = {
            name: "K-Meleon",
            kMeleon: r,
            version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
          } : f ? (n = {
            name: "Windows Phone",
            windowsphone: r
          }, m ? (n.msedge = r, n.version = m) : (n.msie = r, n.version = t(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? n = {
            name: "Internet Explorer",
            msie: r,
            version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
          } : l ? n = {
            name: "Chrome",
            chromeos: r,
            chromeBook: r,
            chrome: r,
            version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          } : /chrome.+? edge/i.test(e) ? n = {
            name: "Microsoft Edge",
            msedge: r,
            version: m
          } : /vivaldi/i.test(e) ? n = {
            name: "Vivaldi",
            vivaldi: r,
            version: t(/vivaldi\/(\d+(\.\d+)?)/i) || y
          } : u ? n = {
            name: "Sailfish",
            sailfish: r,
            version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
          } : /seamonkey\//i.test(e) ? n = {
            name: "SeaMonkey",
            seamonkey: r,
            version: t(/seamonkey\/(\d+(\.\d+)?)/i)
          } : /firefox|iceweasel|fxios/i.test(e) ? (n = {
            name: "Firefox",
            firefox: r,
            version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
          }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (n.firefoxos = r)) : c ? n = {
            name: "Amazon Silk",
            silk: r,
            version: t(/silk\/(\d+(\.\d+)?)/i)
          } : /phantom/i.test(e) ? n = {
            name: "PhantomJS",
            phantom: r,
            version: t(/phantomjs\/(\d+(\.\d+)?)/i)
          } : /slimerjs/i.test(e) ? n = {
            name: "SlimerJS",
            slimer: r,
            version: t(/slimerjs\/(\d+(\.\d+)?)/i)
          } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? n = {
            name: "BlackBerry",
            blackberry: r,
            version: y || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
          } : h ? (n = {
            name: "WebOS",
            webos: r,
            version: y || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
          }, /touchpad\//i.test(e) && (n.touchpad = r)) : /bada/i.test(e) ? n = {
            name: "Bada",
            bada: r,
            version: t(/dolfin\/(\d+(\.\d+)?)/i)
          } : d ? n = {
            name: "Tizen",
            tizen: r,
            version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
          } : /qupzilla/i.test(e) ? n = {
            name: "QupZilla",
            qupzilla: r,
            version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
          } : /chromium/i.test(e) ? n = {
            name: "Chromium",
            chromium: r,
            version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
          } : /chrome|crios|crmo/i.test(e) ? n = {
            name: "Chrome",
            chrome: r,
            version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          } : o ? n = {name: "Android", version: y} : /safari|applewebkit/i.test(e) ? (n = {
            name: "Safari",
            safari: r
          }, y && (n.version = y)) : i ? (n = {name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"}, y && (n.version = y)) : n = /googlebot/i.test(e) ? {
            name: "Googlebot",
            googlebot: r,
            version: t(/googlebot\/(\d+(\.\d+))/i) || y
          } : {
            name: t(/^(.*)\/(.*) /), version: function (t) {
              var n = e.match(t);
              return n && n.length > 1 && n[2] || ""
            }(/^(.*)\/(.*) /)
          }, !n.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (n.name = n.name || "Blink", n.blink = r) : (n.name = n.name || "Webkit", n.webkit = r), !n.version && y && (n.version = y)) : !n.opera && /gecko\//i.test(e) && (n.name = n.name || "Gecko", n.gecko = r, n.version = n.version || t(/gecko\/(\d+(\.\d+)?)/i)), n.msedge || !o && !n.silk ? i ? (n[i] = r, n.ios = r) : v ? n.mac = r : x ? n.xbox = r : p ? n.windows = r : g && (n.linux = r) : n.android = r;
          var E = "";
          n.windowsphone ? E = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i ? E = (E = t(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? E = t(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? E = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? E = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? E = t(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (E = t(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (n.osversion = E);
          var P = E.split(".")[0];
          return b || a || "ipad" == i || o && (3 == P || P >= 4 && !w) || n.silk ? n.tablet = r : (w || "iphone" == i || "ipod" == i || o || s || n.blackberry || n.webos || n.bada) && (n.mobile = r), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = r : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = r : n.x = r, n
        }

        function t(e) {
          return e.split(".").length
        }

        function n(e, t) {
          var n, i = [];
          if (Array.prototype.map) return Array.prototype.map.call(e, t);
          for (n = 0; n < e.length; n++) i.push(t(e[n]));
          return i
        }

        function i(e) {
          for (var i = Math.max(t(e[0]), t(e[1])), o = n(e, function (e) {
            var o = i - t(e);
            return n((e += new Array(o + 1).join(".0")).split("."), function (e) {
              return new Array(20 - e.length).join("0") + e
            }).reverse()
          }); --i >= 0;) {
            if (o[0][i] > o[1][i]) return 1;
            if (o[0][i] !== o[1][i]) return -1;
            if (0 === i) return 0
          }
        }

        function o(t, n, o) {
          var r = s;
          "string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (r = e(o));
          var a = "" + r.version;
          for (var l in t) if (t.hasOwnProperty(l) && r[l]) return i([a, t[l]]) < 0;
          return n
        }

        var r = !0, s = e("undefined" != typeof navigator ? navigator.userAgent : "");
        return s.test = function (e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            if ("string" == typeof n && n in s) return !0
          }
          return !1
        }, s.isUnsupportedBrowser = o, s.compareVersions = i, s.check = function (e, t, n) {
          return !o(e, t, n)
        }, s._detect = e, s
      })
    }, {}],
    jquery: [function (e, t, n) {
      !function (e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (e) {
          if (!e.document) throw new Error("jQuery requires a window with a document");
          return n(e)
        } : n(e)
      }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
          var t = "length" in e && e.length, n = z.type(e);
          return "function" !== n && !z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function i(e, t, n) {
          if (z.isFunction(t)) return z.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
          });
          if (t.nodeType) return z.grep(e, function (e) {
            return e === t !== n
          });
          if ("string" == typeof t) {
            if (ne.test(t)) return z.filter(t, e, n);
            t = z.filter(t, e)
          }
          return z.grep(e, function (e) {
            return j.call(t, e) >= 0 !== n
          })
        }

        function o(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType;) ;
          return e
        }

        function r() {
          q.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), z.ready()
        }

        function s() {
          Object.defineProperty(this.cache = {}, 0, {
            get: function () {
              return {}
            }
          }), this.expando = z.expando + s.uid++
        }

        function a(e, t, n) {
          var i;
          if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(pe, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
              n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : fe.test(n) ? z.parseJSON(n) : n)
            } catch (e) {
            }
            he.set(e, t, n)
          } else n = void 0;
          return n
        }

        function l() {
          return !0
        }

        function c() {
          return !1
        }

        function u() {
          try {
            return q.activeElement
          } catch (e) {
          }
        }

        function d(e, t) {
          return z.nodeName(e, "table") && z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function h(e) {
          return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function f(e) {
          var t = Be.exec(e.type);
          return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function p(e, t) {
          for (var n = 0, i = e.length; i > n; n++) de.set(e[n], "globalEval", !t || de.get(t[n], "globalEval"))
        }

        function v(e, t) {
          var n, i, o, r, s, a, l, c;
          if (1 === t.nodeType) {
            if (de.hasData(e) && (r = de.access(e), s = de.set(t, r), c = r.events)) for (o in delete s.handle, s.events = {}, c) for (n = 0, i = c[o].length; i > n; n++) z.event.add(t, o, c[o][n]);
            he.hasData(e) && (a = he.access(e), l = z.extend({}, a), he.set(t, l))
          }
        }

        function g(e, t) {
          var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
          return void 0 === t || t && z.nodeName(e, t) ? z.merge([e], n) : n
        }

        function m(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ye.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function y(t, n) {
          var i, o = z(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : z.css(o[0], "display");
          return o.detach(), r
        }

        function b(e) {
          var t = q, n = Fe[e];
          return n || ("none" !== (n = y(e, t)) && n || ((t = ($e = ($e || z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = y(e, t), $e.detach()), Fe[e] = n), n
        }

        function w(e, t, n) {
          var i, o, r, s, a = e.style;
          return (n = n || Oe(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || z.contains(e.ownerDocument, e) || (s = z.style(e, t)), De.test(s) && _e.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function x(e, t) {
          return {
            get: function () {
              return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
          }
        }

        function E(e, t) {
          if (t in e) return t;
          for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = We.length; o--;) if ((t = We[o] + n) in e) return t;
          return i
        }

        function P(e, t, n) {
          var i = Re.exec(t);
          return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function C(e, t, n, i, o) {
          for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += z.css(e, n + ge[r], !0, o)), i ? ("content" === n && (s -= z.css(e, "padding" + ge[r], !0, o)), "margin" !== n && (s -= z.css(e, "border" + ge[r] + "Width", !0, o))) : (s += z.css(e, "padding" + ge[r], !0, o), "padding" !== n && (s += z.css(e, "border" + ge[r] + "Width", !0, o)));
          return s
        }

        function T(e, t, n) {
          var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = Oe(e),
            s = "border-box" === z.css(e, "boxSizing", !1, r);
          if (0 >= o || null == o) {
            if ((0 > (o = w(e, t, r)) || null == o) && (o = e.style[t]), De.test(o)) return o;
            i = s && (G.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
          }
          return o + C(e, t, n || (s ? "border" : "content"), i, r) + "px"
        }

        function S(e, t) {
          for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) (i = e[s]).style && (r[s] = de.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && me(i) && (r[s] = de.access(i, "olddisplay", b(i.nodeName)))) : (o = me(i), "none" === n && o || de.set(i, "olddisplay", o ? n : z.css(i, "display"))));
          for (s = 0; a > s; s++) (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
          return e
        }

        function k(e, t, n, i, o) {
          return new k.prototype.init(e, t, n, i, o)
        }

        function L() {
          return setTimeout(function () {
            He = void 0
          }), He = z.now()
        }

        function I(e, t) {
          var n, i = 0, o = {height: e};
          for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = ge[i])] = o["padding" + n] = e;
          return t && (o.opacity = o.width = e), o
        }

        function B(e, t, n) {
          for (var i, o = (Je[t] || []).concat(Je["*"]), r = 0, s = o.length; s > r; r++) if (i = o[r].call(n, t, e)) return i
        }

        function A(e, t, n) {
          var i, o, r = 0, s = Xe.length, a = z.Deferred().always(function () {
            delete l.elem
          }), l = function () {
            if (o) return !1;
            for (var t = He || L(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]), 1 > i && s ? n : (a.resolveWith(e, [c]), !1)
          }, c = a.promise({
            elem: e,
            props: z.extend({}, t),
            opts: z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: He || L(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(i), i
            },
            stop: function (t) {
              var n = 0, i = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; i > n; n++) c.tweens[n].run(1);
              return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
            }
          }), u = c.props;
          for (function (e, t) {
            var n, i, o, r, s;
            for (n in e) if (o = t[i = z.camelCase(n)], r = e[n], z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = z.cssHooks[i]) && "expand" in s) for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o); else t[i] = o
          }(u, c.opts.specialEasing); s > r; r++) if (i = Xe[r].call(c, e, u, c.opts)) return i;
          return z.map(u, B, c), z.isFunction(c.opts.start) && c.opts.start.call(e, c), z.fx.timer(z.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
          })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function M(e) {
          return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(le) || [];
            if (z.isFunction(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
          }
        }

        function $(e, t, n, i) {
          function o(a) {
            var l;
            return r[a] = !0, z.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
          }

          var r = {}, s = e === dt;
          return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function F(e, t) {
          var n, i, o = z.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
          return i && z.extend(!0, e, i), e
        }

        function _(e, t, n, i) {
          var o;
          if (z.isArray(t)) z.each(t, function (t, o) {
            n || gt.test(e) ? i(e, o) : _(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
          }); else if (n || "object" !== z.type(t)) i(e, t); else for (o in t) _(e + "[" + o + "]", t[o], n, i)
        }

        function D(e) {
          return z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }

        var O = [], N = O.slice, R = O.concat, U = O.push, j = O.indexOf, Q = {}, W = Q.toString, H = Q.hasOwnProperty,
          G = {}, q = e.document, V = "2.1.4", z = function (e, t) {
            return new z.fn.init(e, t)
          }, X = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, J = /^-ms-/, Y = /-([\da-z])/gi, Z = function (e, t) {
            return t.toUpperCase()
          };
        z.fn = z.prototype = {
          jquery: V, constructor: z, selector: "", length: 0, toArray: function () {
            return N.call(this)
          }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : N.call(this)
          }, pushStack: function (e) {
            var t = z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
          }, each: function (e, t) {
            return z.each(this, e, t)
          }, map: function (e) {
            return this.pushStack(z.map(this, function (t, n) {
              return e.call(t, n, t)
            }))
          }, slice: function () {
            return this.pushStack(N.apply(this, arguments))
          }, first: function () {
            return this.eq(0)
          }, last: function () {
            return this.eq(-1)
          }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
          }, end: function () {
            return this.prevObject || this.constructor(null)
          }, push: U, sort: O.sort, splice: O.splice
        }, z.extend = z.fn.extend = function () {
          var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
          for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (z.isPlainObject(i) || (o = z.isArray(i))) ? (o ? (o = !1, r = n && z.isArray(n) ? n : []) : r = n && z.isPlainObject(n) ? n : {}, s[t] = z.extend(c, r, i)) : void 0 !== i && (s[t] = i));
          return s
        }, z.extend({
          expando: "jQuery" + (V + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
          }, noop: function () {
          }, isFunction: function (e) {
            return "function" === z.type(e)
          }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
          }, isNumeric: function (e) {
            return !z.isArray(e) && e - parseFloat(e) + 1 >= 0
          }, isPlainObject: function (e) {
            return "object" === z.type(e) && !e.nodeType && !z.isWindow(e) && !(e.constructor && !H.call(e.constructor.prototype, "isPrototypeOf"))
          }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
          }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[W.call(e)] || "object" : typeof e
          }, globalEval: function (e) {
            var t, n = eval;
            (e = z.trim(e)) && (1 === e.indexOf("use strict") ? ((t = q.createElement("script")).text = e, q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
          }, camelCase: function (e) {
            return e.replace(J, "ms-").replace(Y, Z)
          }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
          }, each: function (e, t, i) {
            var o = 0, r = e.length, s = n(e);
            if (i) {
              if (s) for (; r > o && !1 !== t.apply(e[o], i); o++) ; else for (o in e) if (!1 === t.apply(e[o], i)) break
            } else if (s) for (; r > o && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e
          }, trim: function (e) {
            return null == e ? "" : (e + "").replace(X, "")
          }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? z.merge(i, "string" == typeof e ? [e] : e) : U.call(i, e)), i
          }, inArray: function (e, t, n) {
            return null == t ? -1 : j.call(t, e, n)
          }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
          }, grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; r > o; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
          }, map: function (e, t, i) {
            var o, r = 0, s = e.length, a = [];
            if (n(e)) for (; s > r; r++) null != (o = t(e[r], r, i)) && a.push(o); else for (r in e) null != (o = t(e[r], r, i)) && a.push(o);
            return R.apply([], a)
          }, guid: 1, proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), z.isFunction(e) ? (i = N.call(arguments, 2), (o = function () {
              return e.apply(t || this, i.concat(N.call(arguments)))
            }).guid = e.guid = e.guid || z.guid++, o) : void 0
          }, now: Date.now, support: G
        }), z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
          Q["[object " + t + "]"] = t.toLowerCase()
        });
        var K = function (e) {
          function t(e, t, n, i) {
            var o, r, s, a, l, c, d, f, p, v;
            if ((t ? t.ownerDocument || t : U) !== M && A(t), n = n || [], a = (t = t || M).nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && F) {
              if (11 !== a && (o = ye.exec(e))) if (s = o[1]) {
                if (9 === a) {
                  if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                  if (r.id === s) return n.push(r), n
                } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && N(t, r) && r.id === s) return n.push(r), n
              } else {
                if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                if ((s = o[3]) && x.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
              }
              if (x.qsa && (!_ || !_.test(e))) {
                if (f = d = R, p = t, v = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                  for (c = T(e), (d = t.getAttribute("id")) ? f = d.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + h(c[l]);
                  p = be.test(e) && u(t.parentNode) || t, v = c.join(",")
                }
                if (v) try {
                  return Z.apply(n, p.querySelectorAll(v)), n
                } catch (e) {
                } finally {
                  d || t.removeAttribute("id")
                }
              }
            }
            return k(e.replace(le, "$1"), t, n, i)
          }

          function n() {
            var e = [];
            return function t(n, i) {
              return e.push(n + " ") > E.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
          }

          function i(e) {
            return e[R] = !0, e
          }

          function o(e) {
            var t = M.createElement("div");
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
            }
          }

          function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) E.attrHandle[n[i]] = t
          }

          function s(e, t) {
            var n = t && e,
              i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
          }

          function a(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
            }
          }

          function l(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
            }
          }

          function c(e) {
            return i(function (t) {
              return t = +t, i(function (n, i) {
                for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
              })
            })
          }

          function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
          }

          function d() {
          }

          function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
          }

          function f(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, r = Q++;
            return t.first ? function (t, n, r) {
              for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
              var a, l, c = [j, r];
              if (s) {
                for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
              } else for (; t = t[i];) if (1 === t.nodeType || o) {
                if ((a = (l = t[R] || (t[R] = {}))[i]) && a[0] === j && a[1] === r) return c[2] = a[2];
                if (l[i] = c, c[2] = e(t, n, s)) return !0
              }
            }
          }

          function p(e) {
            return e.length > 1 ? function (t, n, i) {
              for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
              return !0
            } : e[0]
          }

          function v(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
          }

          function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++) (r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
          }

          function m(e, t, n, o, r, s) {
            return o && !o[R] && (o = m(o)), r && !r[R] && (r = m(r, s)), i(function (i, s, a, l) {
              var c, u, d, h = [], f = [], p = s.length, m = i || v(t || "*", a.nodeType ? [a] : a, []),
                y = !e || !i && t ? m : g(m, h, e, a, l), b = n ? r || (i ? e : p || o) ? [] : s : y;
              if (n && n(y, b, a, l), o) for (c = g(b, f), o(c, [], a, l), u = c.length; u--;) (d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
              if (i) {
                if (r || e) {
                  if (r) {
                    for (c = [], u = b.length; u--;) (d = b[u]) && c.push(y[u] = d);
                    r(null, b = [], c, l)
                  }
                  for (u = b.length; u--;) (d = b[u]) && (c = r ? ee(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                }
              } else b = g(b === s ? b.splice(p, b.length) : b), r ? r(null, s, b, l) : Z.apply(s, b)
            })
          }

          function y(e) {
            for (var t, n, i, o = e.length, r = E.relative[e[0].type], s = r || E.relative[" "], a = r ? 1 : 0, l = f(function (e) {
              return e === t
            }, s, !0), c = f(function (e) {
              return ee(t, e) > -1
            }, s, !0), u = [function (e, n, i) {
              var o = !r && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return t = null, o
            }]; o > a; a++) if (n = E.relative[e[a].type]) u = [f(p(u), n)]; else {
              if ((n = E.filter[e[a].type].apply(null, e[a].matches))[R]) {
                for (i = ++a; o > i && !E.relative[e[i].type]; i++) ;
                return m(a > 1 && p(u), a > 1 && h(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && h(e))
              }
              u.push(n)
            }
            return p(u)
          }

          function b(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
              var u, d, h, f = 0, p = "0", v = i && [], m = [], y = L, b = i || r && E.find.TAG("*", c),
                w = j += null == y ? 1 : Math.random() || .1, x = b.length;
              for (c && (L = s !== M && s); p !== x && null != (u = b[p]); p++) {
                if (r && u) {
                  for (d = 0; h = e[d++];) if (h(u, s, a)) {
                    l.push(u);
                    break
                  }
                  c && (j = w)
                }
                o && ((u = !h && u) && f--, i && v.push(u))
              }
              if (f += p, o && p !== f) {
                for (d = 0; h = n[d++];) h(v, m, s, a);
                if (i) {
                  if (f > 0) for (; p--;) v[p] || m[p] || (m[p] = J.call(l));
                  m = g(m)
                }
                Z.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
              }
              return c && (j = w, L = y), v
            };
            return o ? i(s) : s
          }

          var w, x, E, P, C, T, S, k, L, I, B, A, M, $, F, _, D, O, N, R = "sizzle" + 1 * new Date, U = e.document,
            j = 0, Q = 0, W = n(), H = n(), G = n(), q = function (e, t) {
              return e === t && (B = !0), 0
            }, V = 1 << 31, z = {}.hasOwnProperty, X = [], J = X.pop, Y = X.push, Z = X.push, K = X.slice,
            ee = function (e, t) {
              for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
              return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"),
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), he = new RegExp(se),
            fe = new RegExp("^" + oe + "$"), pe = {
              ID: new RegExp("^#(" + ie + ")"),
              CLASS: new RegExp("^\\.(" + ie + ")"),
              TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + re),
              PSEUDO: new RegExp("^" + se),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + te + ")$", "i"),
              needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, ve = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ee = function (e, t, n) {
              var i = "0x" + t - 65536;
              return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Pe = function () {
              A()
            };
          try {
            Z.apply(X = K.call(U.childNodes), U.childNodes), X[U.childNodes.length].nodeType
          } catch (e) {
            Z = {
              apply: X.length ? function (e, t) {
                Y.apply(e, K.call(t))
              } : function (e, t) {
                for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                e.length = n - 1
              }
            }
          }
          for (w in x = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
          }, A = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : U;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, $ = i.documentElement, (n = i.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Pe, !1) : n.attachEvent && n.attachEvent("onunload", Pe)), F = !C(i), x.attributes = o(function (e) {
              return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function (e) {
              return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = me.test(i.getElementsByClassName), x.getById = o(function (e) {
              return $.appendChild(e).id = R, !i.getElementsByName || !i.getElementsByName(R).length
            }), x.getById ? (E.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && F) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
              }
            }, E.filter.ID = function (e) {
              var t = e.replace(xe, Ee);
              return function (e) {
                return e.getAttribute("id") === t
              }
            }) : (delete E.find.ID, E.filter.ID = function (e) {
              var t = e.replace(xe, Ee);
              return function (e) {
                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return n && n.value === t
              }
            }), E.find.TAG = x.getElementsByTagName ? function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
              var n, i = [], o = 0, r = t.getElementsByTagName(e);
              if ("*" === e) {
                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                return i
              }
              return r
            }, E.find.CLASS = x.getElementsByClassName && function (e, t) {
              return F ? t.getElementsByClassName(e) : void 0
            }, D = [], _ = [], (x.qsa = me.test(i.querySelectorAll)) && (o(function (e) {
              $.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || _.push(".#.+[+~]")
            }), o(function (e) {
              var t = i.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
            })), (x.matchesSelector = me.test(O = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function (e) {
              x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), D.push("!=", se)
            }), _ = _.length && new RegExp(_.join("|")), D = D.length && new RegExp(D.join("|")), t = me.test($.compareDocumentPosition), N = t || me.test($.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
              return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
              if (t) for (; t = t.parentNode;) if (t === e) return !0;
              return !1
            }, q = t ? function (e, t) {
              if (e === t) return B = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === U && N(U, e) ? -1 : t === i || t.ownerDocument === U && N(U, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
              if (e === t) return B = !0, 0;
              var n, o = 0, r = e.parentNode, a = t.parentNode, l = [e], c = [t];
              if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : I ? ee(I, e) - ee(I, t) : 0;
              if (r === a) return s(e, t);
              for (n = e; n = n.parentNode;) l.unshift(n);
              for (n = t; n = n.parentNode;) c.unshift(n);
              for (; l[o] === c[o];) o++;
              return o ? s(l[o], c[o]) : l[o] === U ? -1 : c[o] === U ? 1 : 0
            }, i) : M
          }, t.matches = function (e, n) {
            return t(e, null, null, n)
          }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== M && A(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !F || D && D.test(n) || _ && _.test(n))) try {
              var i = O.call(e, n);
              if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return t(n, M, null, [e]).length > 0
          }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== M && A(e), N(e, t)
          }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== M && A(e);
            var n = E.attrHandle[t.toLowerCase()],
              i = n && z.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== i ? i : x.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (B = !x.detectDuplicates, I = !x.sortStable && e.slice(0), e.sort(q), B) {
              for (; t = e[o++];) t === e[o] && (i = n.push(o));
              for (; i--;) e.splice(n[i], 1)
            }
            return I = null, e
          }, P = t.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += P(e)
              } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += P(t);
            return n
          }, (E = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
              ">": {dir: "parentNode", first: !0},
              " ": {dir: "parentNode"},
              "+": {dir: "previousSibling", first: !0},
              "~": {dir: "previousSibling"}
            },
            preFilter: {
              ATTR: function (e) {
                return e[1] = e[1].replace(xe, Ee), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
              }, PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(xe, Ee).toLowerCase();
                return "*" === e ? function () {
                  return !0
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              }, CLASS: function (e) {
                var t = W[e + " "];
                return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
              }, ATTR: function (e, n, i) {
                return function (o) {
                  var r = t.attr(o, e);
                  return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                }
              }, CHILD: function (e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                return 1 === i && 0 === o ? function (e) {
                  return !!e.parentNode
                } : function (t, n, l) {
                  var c, u, d, h, f, p, v = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode,
                    m = a && t.nodeName.toLowerCase(), y = !l && !a;
                  if (g) {
                    if (r) {
                      for (; v;) {
                        for (d = t; d = d[v];) if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                        p = v = "only" === e && !p && "nextSibling"
                      }
                      return !0
                    }
                    if (p = [s ? g.firstChild : g.lastChild], s && y) {
                      for (f = (c = (u = g[R] || (g[R] = {}))[e] || [])[0] === j && c[1], h = c[0] === j && c[2], d = f && g.childNodes[f]; d = ++f && d && d[v] || (h = f = 0) || p.pop();) if (1 === d.nodeType && ++h && d === t) {
                        u[e] = [j, f, h];
                        break
                      }
                    } else if (y && (c = (t[R] || (t[R] = {}))[e]) && c[0] === j) h = c[1]; else for (; (d = ++f && d && d[v] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++h || (y && ((d[R] || (d[R] = {}))[e] = [j, h]), d !== t));) ;
                    return (h -= o) === i || h % i == 0 && h / i >= 0
                  }
                }
              }, PSEUDO: function (e, n) {
                var o, r = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                return r[R] ? r(n) : r.length > 1 ? (o = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                  for (var i, o = r(e, n), s = o.length; s--;) e[i = ee(e, o[s])] = !(t[i] = o[s])
                }) : function (e) {
                  return r(e, 0, o)
                }) : r
              }
            },
            pseudos: {
              not: i(function (e) {
                var t = [], n = [], o = S(e.replace(le, "$1"));
                return o[R] ? i(function (e, t, n, i) {
                  for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))
                }) : function (e, i, r) {
                  return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                }
              }), has: i(function (e) {
                return function (n) {
                  return t(e, n).length > 0
                }
              }), contains: i(function (e) {
                return e = e.replace(xe, Ee), function (t) {
                  return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
                }
              }), lang: i(function (e) {
                return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ee).toLowerCase(), function (t) {
                  var n;
                  do {
                    if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
              }), target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
              }, root: function (e) {
                return e === $
              }, focus: function (e) {
                return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              }, enabled: function (e) {
                return !1 === e.disabled
              }, disabled: function (e) {
                return !0 === e.disabled
              }, checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0
              }, parent: function (e) {
                return !E.pseudos.empty(e)
              }, header: function (e) {
                return ge.test(e.nodeName)
              }, input: function (e) {
                return ve.test(e.nodeName)
              }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              }, text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              }, first: c(function () {
                return [0]
              }), last: c(function (e, t) {
                return [t - 1]
              }), eq: c(function (e, t, n) {
                return [0 > n ? n + t : n]
              }), even: c(function (e, t) {
                for (var n = 0; t > n; n += 2) e.push(n);
                return e
              }), odd: c(function (e, t) {
                for (var n = 1; t > n; n += 2) e.push(n);
                return e
              }), lt: c(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                return e
              }), gt: c(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                return e
              })
            }
          }).pseudos.nth = E.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) E.pseudos[w] = a(w);
          for (w in {submit: !0, reset: !0}) E.pseudos[w] = l(w);
          return d.prototype = E.filters = E.pseudos, E.setFilters = new d, T = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, u = H[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = E.preFilter; a;) {
              for (s in (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                value: i,
                type: o[0].replace(le, " ")
              }), a = a.slice(i.length)), E.filter) !(o = pe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                value: i,
                type: s,
                matches: o
              }), a = a.slice(i.length));
              if (!i) break
            }
            return n ? a.length : a ? t.error(e) : H(e, l).slice(0)
          }, S = t.compile = function (e, t) {
            var n, i = [], o = [], r = G[e + " "];
            if (!r) {
              for (t || (t = T(e)), n = t.length; n--;) (r = y(t[n]))[R] ? i.push(r) : o.push(r);
              (r = G(e, b(o, i))).selector = e
            }
            return r
          }, k = t.select = function (e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e, d = !i && T(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
              if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && F && E.relative[r[1].type]) {
                if (!(t = (E.find.ID(s.matches[0].replace(xe, Ee), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(r.shift().value.length)
              }
              for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !E.relative[a = s.type]);) if ((l = E.find[a]) && (i = l(s.matches[0].replace(xe, Ee), be.test(r[0].type) && u(t.parentNode) || t))) {
                if (r.splice(o, 1), !(e = i.length && h(r))) return Z.apply(n, i), n;
                break
              }
            }
            return (c || S(e, d))(i, t, !F, n, be.test(e) && u(t.parentNode) || t), n
          }, x.sortStable = R.split("").sort(q).join("") === R, x.detectDuplicates = !!B, A(), x.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
          }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
          }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          }), x.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
          }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
          }), o(function (e) {
            return null == e.getAttribute("disabled")
          }) || r(te, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          }), t
        }(e);
        z.find = K, z.expr = K.selectors, z.expr[":"] = z.expr.pseudos, z.unique = K.uniqueSort, z.text = K.getText, z.isXMLDoc = K.isXML, z.contains = K.contains;
        var ee = z.expr.match.needsContext, te = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ne = /^.[^:#\[\.,]*$/;
        z.filter = function (e, t, n) {
          var i = t[0];
          return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? z.find.matchesSelector(i, e) ? [i] : [] : z.find.matches(e, z.grep(t, function (e) {
            return 1 === e.nodeType
          }))
        }, z.fn.extend({
          find: function (e) {
            var t, n = this.length, i = [], o = this;
            if ("string" != typeof e) return this.pushStack(z(e).filter(function () {
              for (t = 0; n > t; t++) if (z.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) z.find(e, o[t], i);
            return (i = this.pushStack(n > 1 ? z.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
          }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
          }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
          }, is: function (e) {
            return !!i(this, "string" == typeof e && ee.test(e) ? z(e) : e || [], !1).length
          }
        });
        var ie, oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (z.fn.init = function (e, t) {
          var n, i;
          if (!e) return this;
          if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : oe.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ie).find(e) : this.constructor(t).find(e);
            if (n[1]) {
              if (t = t instanceof z ? t[0] : t, z.merge(this, z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : q, !0)), te.test(n[1]) && z.isPlainObject(t)) for (n in t) z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
              return this
            }
            return (i = q.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = q, this.selector = e, this
          }
          return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : z.isFunction(e) ? void 0 !== ie.ready ? ie.ready(e) : e(z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), z.makeArray(e, this))
        }).prototype = z.fn, ie = z(q);
        var re = /^(?:parents|prev(?:Until|All))/, se = {children: !0, contents: !0, next: !0, prev: !0};
        z.extend({
          dir: function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
              if (o && z(e).is(n)) break;
              i.push(e)
            }
            return i
          }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
          }
        }), z.fn.extend({
          has: function (e) {
            var t = z(e, this), n = t.length;
            return this.filter(function () {
              for (var e = 0; n > e; e++) if (z.contains(this, t[e])) return !0
            })
          }, closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], s = ee.test(e) || "string" != typeof e ? z(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && z.find.matchesSelector(n, e))) {
              r.push(n);
              break
            }
            return this.pushStack(r.length > 1 ? z.unique(r) : r)
          }, index: function (e) {
            return e ? "string" == typeof e ? j.call(z(e), this[0]) : j.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          }, add: function (e, t) {
            return this.pushStack(z.unique(z.merge(this.get(), z(e, t))))
          }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
          }
        }), z.each({
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
          }, parents: function (e) {
            return z.dir(e, "parentNode")
          }, parentsUntil: function (e, t, n) {
            return z.dir(e, "parentNode", n)
          }, next: function (e) {
            return o(e, "nextSibling")
          }, prev: function (e) {
            return o(e, "previousSibling")
          }, nextAll: function (e) {
            return z.dir(e, "nextSibling")
          }, prevAll: function (e) {
            return z.dir(e, "previousSibling")
          }, nextUntil: function (e, t, n) {
            return z.dir(e, "nextSibling", n)
          }, prevUntil: function (e, t, n) {
            return z.dir(e, "previousSibling", n)
          }, siblings: function (e) {
            return z.sibling((e.parentNode || {}).firstChild, e)
          }, children: function (e) {
            return z.sibling(e.firstChild)
          }, contents: function (e) {
            return e.contentDocument || z.merge([], e.childNodes)
          }
        }, function (e, t) {
          z.fn[e] = function (n, i) {
            var o = z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = z.filter(i, o)), this.length > 1 && (se[e] || z.unique(o), re.test(e) && o.reverse()), this.pushStack(o)
          }
        });
        var ae, le = /\S+/g, ce = {};
        z.Callbacks = function (e) {
          e = "string" == typeof e ? ce[e] || function (e) {
            var t = ce[e] = {};
            return z.each(e.match(le) || [], function (e, n) {
              t[n] = !0
            }), t
          }(e) : z.extend({}, e);
          var t, n, i, o, r, s, a = [], l = !e.once && [], c = function (d) {
            for (t = e.memory && d, n = !0, s = o || 0, o = 0, r = a.length, i = !0; a && r > s; s++) if (!1 === a[s].apply(d[0], d[1]) && e.stopOnFalse) {
              t = !1;
              break
            }
            i = !1, a && (l ? l.length && c(l.shift()) : t ? a = [] : u.disable())
          }, u = {
            add: function () {
              if (a) {
                var n = a.length;
                !function t(n) {
                  z.each(n, function (n, i) {
                    var o = z.type(i);
                    "function" === o ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== o && t(i)
                  })
                }(arguments), i ? r = a.length : t && (o = n, c(t))
              }
              return this
            }, remove: function () {
              return a && z.each(arguments, function (e, t) {
                for (var n; (n = z.inArray(t, a, n)) > -1;) a.splice(n, 1), i && (r >= n && r--, s >= n && s--)
              }), this
            }, has: function (e) {
              return e ? z.inArray(e, a) > -1 : !(!a || !a.length)
            }, empty: function () {
              return a = [], r = 0, this
            }, disable: function () {
              return a = l = t = void 0, this
            }, disabled: function () {
              return !a
            }, lock: function () {
              return l = void 0, t || u.disable(), this
            }, locked: function () {
              return !l
            }, fireWith: function (e, t) {
              return !a || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], i ? l.push(t) : c(t)), this
            }, fire: function () {
              return u.fireWith(this, arguments), this
            }, fired: function () {
              return !!n
            }
          };
          return u
        }, z.extend({
          Deferred: function (e) {
            var t = [["resolve", "done", z.Callbacks("once memory"), "resolved"], ["reject", "fail", z.Callbacks("once memory"), "rejected"], ["notify", "progress", z.Callbacks("memory")]],
              n = "pending", i = {
                state: function () {
                  return n
                }, always: function () {
                  return o.done(arguments).fail(arguments), this
                }, then: function () {
                  var e = arguments;
                  return z.Deferred(function (n) {
                    z.each(t, function (t, r) {
                      var s = z.isFunction(e[t]) && e[t];
                      o[r[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                      })
                    }), e = null
                  }).promise()
                }, promise: function (e) {
                  return null != e ? z.extend(e, i) : i
                }
              }, o = {};
            return i.pipe = i.then, z.each(t, function (e, r) {
              var s = r[2], a = r[3];
              i[r[1]] = s.add, a && s.add(function () {
                n = a
              }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? i : this, arguments), this
              }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
          }, when: function (e) {
            var t, n, i, o = 0, r = N.call(arguments), s = r.length,
              a = 1 !== s || e && z.isFunction(e.promise) ? s : 0, l = 1 === a ? e : z.Deferred(),
              c = function (e, n, i) {
                return function (o) {
                  n[e] = this, i[e] = arguments.length > 1 ? N.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
              };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && z.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
          }
        }), z.fn.ready = function (e) {
          return z.ready.promise().done(e), this
        }, z.extend({
          isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? z.readyWait++ : z.ready(!0)
          }, ready: function (e) {
            (!0 === e ? --z.readyWait : z.isReady) || (z.isReady = !0, !0 !== e && --z.readyWait > 0 || (ae.resolveWith(q, [z]), z.fn.triggerHandler && (z(q).triggerHandler("ready"), z(q).off("ready"))))
          }
        }), z.ready.promise = function (t) {
          return ae || (ae = z.Deferred(), "complete" === q.readyState ? setTimeout(z.ready) : (q.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1))), ae.promise(t)
        }, z.ready.promise();
        var ue = z.access = function (e, t, n, i, o, r, s) {
          var a = 0, l = e.length, c = null == n;
          if ("object" === z.type(n)) for (a in o = !0, n) z.access(e, t, a, n[a], !0, r, s); else if (void 0 !== i && (o = !0, z.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(z(e), n)
          })), t)) for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        };
        z.acceptData = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, s.uid = 1, s.accepts = z.acceptData, s.prototype = {
          key: function (e) {
            if (!s.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
              n = s.uid++;
              try {
                t[this.expando] = {value: n}, Object.defineProperties(e, t)
              } catch (i) {
                t[this.expando] = n, z.extend(e, t)
              }
            }
            return this.cache[n] || (this.cache[n] = {}), n
          }, set: function (e, t, n) {
            var i, o = this.key(e), r = this.cache[o];
            if ("string" == typeof t) r[t] = n; else if (z.isEmptyObject(r)) z.extend(this.cache[o], t); else for (i in t) r[i] = t[i];
            return r
          }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
          }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, z.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
          }, remove: function (e, t) {
            var n, i, o, r = this.key(e), s = this.cache[r];
            if (void 0 === t) this.cache[r] = {}; else {
              z.isArray(t) ? i = t.concat(t.map(z.camelCase)) : (o = z.camelCase(t), t in s ? i = [t, o] : i = (i = o) in s ? [i] : i.match(le) || []), n = i.length;
              for (; n--;) delete s[i[n]]
            }
          }, hasData: function (e) {
            return !z.isEmptyObject(this.cache[e[this.expando]] || {})
          }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
          }
        };
        var de = new s, he = new s, fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, pe = /([A-Z])/g;
        z.extend({
          hasData: function (e) {
            return he.hasData(e) || de.hasData(e)
          }, data: function (e, t, n) {
            return he.access(e, t, n)
          }, removeData: function (e, t) {
            he.remove(e, t)
          }, _data: function (e, t, n) {
            return de.access(e, t, n)
          }, _removeData: function (e, t) {
            de.remove(e, t)
          }
        }), z.fn.extend({
          data: function (e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
              if (this.length && (o = he.get(r), 1 === r.nodeType && !de.get(r, "hasDataAttrs"))) {
                for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = z.camelCase(i.slice(5)), a(r, i, o[i])));
                de.set(r, "hasDataAttrs", !0)
              }
              return o
            }
            return "object" == typeof e ? this.each(function () {
              he.set(this, e)
            }) : ue(this, function (t) {
              var n, i = z.camelCase(e);
              if (r && void 0 === t) {
                if (void 0 !== (n = he.get(r, e))) return n;
                if (void 0 !== (n = he.get(r, i))) return n;
                if (void 0 !== (n = a(r, i, void 0))) return n
              } else this.each(function () {
                var n = he.get(this, i);
                he.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && he.set(this, e, t)
              })
            }, null, t, arguments.length > 1, null, !0)
          }, removeData: function (e) {
            return this.each(function () {
              he.remove(this, e)
            })
          }
        }), z.extend({
          queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = de.get(e, t), n && (!i || z.isArray(n) ? i = de.access(e, t, z.makeArray(n)) : i.push(n)), i || []) : void 0
          }, dequeue: function (e, t) {
            t = t || "fx";
            var n = z.queue(e, t), i = n.length, o = n.shift(), r = z._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
              z.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
          }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return de.get(e, n) || de.access(e, n, {
              empty: z.Callbacks("once memory").add(function () {
                de.remove(e, [t + "queue", n])
              })
            })
          }
        }), z.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
              var n = z.queue(this, e, t);
              z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && z.dequeue(this, e)
            })
          }, dequeue: function (e) {
            return this.each(function () {
              z.dequeue(this, e)
            })
          }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
          }, promise: function (e, t) {
            var n, i = 1, o = z.Deferred(), r = this, s = this.length, a = function () {
              --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = de.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
          }
        });
        var ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ge = ["Top", "Right", "Bottom", "Left"],
          me = function (e, t) {
            return e = t || e, "none" === z.css(e, "display") || !z.contains(e.ownerDocument, e)
          }, ye = /^(?:checkbox|radio)$/i;
        !function () {
          var e = q.createDocumentFragment().appendChild(q.createElement("div")), t = q.createElement("input");
          t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var be = "undefined";
        G.focusinBubbles = "onfocusin" in e;
        var we = /^key/, xe = /^(?:mouse|pointer|contextmenu)|click/, Ee = /^(?:focusinfocus|focusoutblur)$/,
          Pe = /^([^.]*)(?:\.(.+)|)$/;
        z.event = {
          global: {},
          add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, f, p, v, g = de.get(e);
            if (g) for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = z.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
              return typeof z !== be && z.event.triggered !== t.type ? z.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(le) || [""]).length; c--;) f = v = (a = Pe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = z.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = z.event.special[f] || {}, u = z.extend({
              type: f,
              origType: v,
              data: i,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && z.expr.match.needsContext.test(o),
              namespace: p.join(".")
            }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), z.event.global[f] = !0)
          },
          remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, f, p, v, g = de.hasData(e) && de.get(e);
            if (g && (l = g.events)) {
              for (c = (t = (t || "").match(le) || [""]).length; c--;) if (f = v = (a = Pe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                for (d = z.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || z.removeEvent(e, f, g.handle), delete l[f])
              } else for (f in l) z.event.remove(e, f + t[c], n, i, !0);
              z.isEmptyObject(l) && (delete g.handle, de.remove(e, "events"))
            }
          },
          trigger: function (t, n, i, o) {
            var r, s, a, l, c, u, d, h = [i || q], f = H.call(t, "type") ? t.type : t,
              p = H.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || q, 3 !== i.nodeType && 8 !== i.nodeType && !Ee.test(f + z.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, (t = t[z.expando] ? t : new z.Event(f, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : z.makeArray(n, [t]), d = z.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
              if (!o && !d.noBubble && !z.isWindow(i)) {
                for (l = d.delegateType || f, Ee.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                a === (i.ownerDocument || q) && h.push(a.defaultView || a.parentWindow || e)
              }
              for (r = 0; (s = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, (u = (de.get(s, "events") || {})[t.type] && de.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && z.acceptData(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
              return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !z.acceptData(i) || c && z.isFunction(i[f]) && !z.isWindow(i) && ((a = i[c]) && (i[c] = null), z.event.triggered = f, i[f](), z.event.triggered = void 0, a && (i[c] = a)), t.result
            }
          },
          dispatch: function (e) {
            e = z.event.fix(e);
            var t, n, i, o, r, s = [], a = N.call(arguments), l = (de.get(this, "events") || {})[e.type] || [],
              c = z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
              for (s = z.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (i = ((z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
          },
          handlers: function (e, t) {
            var n, i, o, r, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) if (!0 !== l.disabled || "click" !== e.type) {
              for (i = [], n = 0; a > n; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? z(o, this).index(l) >= 0 : z.find(o, this, null, [l]).length), i[o] && i.push(r);
              i.length && s.push({elem: l, handlers: i})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
          },
          mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
              var n, i, o, r = t.button;
              return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || q).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
          },
          fix: function (e) {
            if (e[z.expando]) return e;
            var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = xe.test(o) ? this.mouseHooks : we.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new z.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
            return e.target || (e.target = q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
          },
          special: {
            load: {noBubble: !0}, focus: {
              trigger: function () {
                return this !== u() && this.focus ? (this.focus(), !1) : void 0
              }, delegateType: "focusin"
            }, blur: {
              trigger: function () {
                return this === u() && this.blur ? (this.blur(), !1) : void 0
              }, delegateType: "focusout"
            }, click: {
              trigger: function () {
                return "checkbox" === this.type && this.click && z.nodeName(this, "input") ? (this.click(), !1) : void 0
              }, _default: function (e) {
                return z.nodeName(e.target, "a")
              }
            }, beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
            }
          },
          simulate: function (e, t, n, i) {
            var o = z.extend(new z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? z.event.trigger(o, null, t) : z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
          }
        }, z.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1)
        }, z.Event = function (e, t) {
          return this instanceof z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? l : c) : this.type = e, t && z.extend(this, t), this.timeStamp = e && e.timeStamp || z.now(), void (this[z.expando] = !0)) : new z.Event(e, t)
        }, z.Event.prototype = {
          isDefaultPrevented: c,
          isPropagationStopped: c,
          isImmediatePropagationStopped: c,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
          }
        }, z.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function (e, t) {
          z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
              var n, i = e.relatedTarget, o = e.handleObj;
              return (!i || i !== this && !z.contains(this, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
          }
        }), G.focusinBubbles || z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
          var n = function (e) {
            z.event.simulate(t, e.target, z.event.fix(e), !0)
          };
          z.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this, o = de.access(i, t);
              o || i.addEventListener(e, n, !0), de.access(i, t, (o || 0) + 1)
            }, teardown: function () {
              var i = this.ownerDocument || this, o = de.access(i, t) - 1;
              o ? de.access(i, t, o) : (i.removeEventListener(e, n, !0), de.remove(i, t))
            }
          }
        }), z.fn.extend({
          on: function (e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
              for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
              return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = c; else if (!i) return this;
            return 1 === o && (r = i, (i = function (e) {
              return z().off(e), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = z.guid++)), this.each(function () {
              z.event.add(this, e, i, n, t)
            })
          }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
          }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = c), this.each(function () {
              z.event.remove(this, e, n, t)
            })
          }, trigger: function (e, t) {
            return this.each(function () {
              z.event.trigger(e, t, this)
            })
          }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? z.event.trigger(e, t, n, !0) : void 0
          }
        });
        var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Te = /<([\w:]+)/,
          Se = /<|&#?\w+;/, ke = /<(?:script|style|link)/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Ie = /^$|\/(?:java|ecma)script/i, Be = /^true\/(.*)/, Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
        Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, z.extend({
          clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = z.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || z.isXMLDoc(e))) for (s = g(a), i = 0, o = (r = g(e)).length; o > i; i++) m(r[i], s[i]);
            if (t) if (n) for (r = r || g(e), s = s || g(a), i = 0, o = r.length; o > i; i++) v(r[i], s[i]); else v(e, a);
            return (s = g(a, "script")).length > 0 && p(s, !l && g(e, "script")), a
          }, buildFragment: function (e, t, n, i) {
            for (var o, r, s, a, l, c, u = t.createDocumentFragment(), d = [], h = 0, f = e.length; f > h; h++) if ((o = e[h]) || 0 === o) if ("object" === z.type(o)) z.merge(d, o.nodeType ? [o] : o); else if (Se.test(o)) {
              for (r = r || u.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), a = Me[s] || Me._default, r.innerHTML = a[1] + o.replace(Ce, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
              z.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", h = 0; o = d[h++];) if ((!i || -1 === z.inArray(o, i)) && (l = z.contains(o.ownerDocument, o), r = g(u.appendChild(o), "script"), l && p(r), n)) for (c = 0; o = r[c++];) Ie.test(o.type || "") && n.push(o);
            return u
          }, cleanData: function (e) {
            for (var t, n, i, o, r = z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
              if (z.acceptData(n) && ((o = n[de.expando]) && (t = de.cache[o]))) {
                if (t.events) for (i in t.events) r[i] ? z.event.remove(n, i) : z.removeEvent(n, i, t.handle);
                de.cache[o] && delete de.cache[o]
              }
              delete he.cache[n[he.expando]]
            }
          }
        }), z.fn.extend({
          text: function (e) {
            return ue(this, function (e) {
              return void 0 === e ? z.text(this) : this.empty().each(function () {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
              })
            }, null, e, arguments.length)
          }, append: function () {
            return this.domManip(arguments, function (e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, e).appendChild(e)
            })
          }, prepend: function () {
            return this.domManip(arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = d(this, e);
                t.insertBefore(e, t.firstChild)
              }
            })
          }, before: function () {
            return this.domManip(arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
            })
          }, after: function () {
            return this.domManip(arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
          }, remove: function (e, t) {
            for (var n, i = e ? z.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || z.cleanData(g(n)), n.parentNode && (t && z.contains(n.ownerDocument, n) && p(g(n, "script")), n.parentNode.removeChild(n));
            return this
          }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (z.cleanData(g(e, !1)), e.textContent = "");
            return this
          }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
              return z.clone(this, e, t)
            })
          }, html: function (e) {
            return ue(this, function (e) {
              var t = this[0] || {}, n = 0, i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !ke.test(e) && !Me[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(Ce, "<$1></$2>");
                try {
                  for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (z.cleanData(g(t, !1)), t.innerHTML = e);
                  t = 0
                } catch (e) {
                }
              }
              t && this.empty().append(e)
            }, null, e, arguments.length)
          }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
              e = this.parentNode, z.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
          }, detach: function (e) {
            return this.remove(e, !0)
          }, domManip: function (e, t) {
            e = R.apply([], e);
            var n, i, o, r, s, a, l = 0, c = this.length, u = this, d = c - 1, p = e[0], v = z.isFunction(p);
            if (v || c > 1 && "string" == typeof p && !G.checkClone && Le.test(p)) return this.each(function (n) {
              var i = u.eq(n);
              v && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (i = (n = z.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = i), i)) {
              for (r = (o = z.map(g(n, "script"), h)).length; c > l; l++) s = n, l !== d && (s = z.clone(s, !0, !0), r && z.merge(o, g(s, "script"))), t.call(this[l], s, l);
              if (r) for (a = o[o.length - 1].ownerDocument, z.map(o, f), l = 0; r > l; l++) s = o[l], Ie.test(s.type || "") && !de.access(s, "globalEval") && z.contains(a, s) && (s.src ? z._evalUrl && z._evalUrl(s.src) : z.globalEval(s.textContent.replace(Ae, "")))
            }
            return this
          }
        }), z.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function (e, t) {
          z.fn[e] = function (e) {
            for (var n, i = [], o = z(e), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), z(o[s])[t](n), U.apply(i, n.get());
            return this.pushStack(i)
          }
        });
        var $e, Fe = {}, _e = /^margin/, De = new RegExp("^(" + ve + ")(?!px)[a-z%]+$", "i"), Oe = function (t) {
          return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
        !function () {
          function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
          }

          var n, i, o = q.documentElement, r = q.createElement("div"), s = q.createElement("div");
          s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && z.extend(G, {
            pixelPosition: function () {
              return t(), n
            }, boxSizingReliable: function () {
              return null == i && t(), i
            }, reliableMarginRight: function () {
              var t, n = s.appendChild(q.createElement("div"));
              return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), t
            }
          }))
        }(), z.swap = function (e, t, n, i) {
          var o, r, s = {};
          for (r in t) s[r] = e.style[r], e.style[r] = t[r];
          for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
          return o
        };
        var Ne = /^(none|table(?!-c[ea]).+)/, Re = new RegExp("^(" + ve + ")(.*)$", "i"),
          Ue = new RegExp("^([+-])=(" + ve + ")", "i"),
          je = {position: "absolute", visibility: "hidden", display: "block"},
          Qe = {letterSpacing: "0", fontWeight: "400"}, We = ["Webkit", "O", "Moz", "ms"];
        z.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = w(e, "opacity");
                  return "" === n ? "1" : n
                }
              }
            }
          },
          cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {float: "cssFloat"},
          style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o, r, s, a = z.camelCase(t), l = e.style;
              return t = z.cssProps[a] || (z.cssProps[a] = E(l, a)), s = z.cssHooks[t] || z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (r = typeof n) && (o = Ue.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(z.css(e, t)), r = "number"), void (null != n && n == n && ("number" !== r || z.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
          },
          css: function (e, t, n, i) {
            var o, r, s, a = z.camelCase(t);
            return t = z.cssProps[a] || (z.cssProps[a] = E(e.style, a)), (s = z.cssHooks[t] || z.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = w(e, t, i)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (r = parseFloat(o), !0 === n || z.isNumeric(r) ? r || 0 : o) : o
          }
        }), z.each(["height", "width"], function (e, t) {
          z.cssHooks[t] = {
            get: function (e, n, i) {
              return n ? Ne.test(z.css(e, "display")) && 0 === e.offsetWidth ? z.swap(e, je, function () {
                return T(e, t, i)
              }) : T(e, t, i) : void 0
            }, set: function (e, n, i) {
              var o = i && Oe(e);
              return P(0, n, i ? C(e, t, i, "border-box" === z.css(e, "boxSizing", !1, o), o) : 0)
            }
          }
        }), z.cssHooks.marginRight = x(G.reliableMarginRight, function (e, t) {
          return t ? z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
        }), z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
          z.cssHooks[e + t] = {
            expand: function (n) {
              for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + ge[i] + t] = r[i] || r[i - 2] || r[0];
              return o
            }
          }, _e.test(e) || (z.cssHooks[e + t].set = P)
        }), z.fn.extend({
          css: function (e, t) {
            return ue(this, function (e, t, n) {
              var i, o, r = {}, s = 0;
              if (z.isArray(t)) {
                for (i = Oe(e), o = t.length; o > s; s++) r[t[s]] = z.css(e, t[s], !1, i);
                return r
              }
              return void 0 !== n ? z.style(e, t, n) : z.css(e, t)
            }, e, t, arguments.length > 1)
          }, show: function () {
            return S(this, !0)
          }, hide: function () {
            return S(this)
          }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
              me(this) ? z(this).show() : z(this).hide()
            })
          }
        }), z.Tween = k, k.prototype = {
          constructor: k, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (z.cssNumber[n] ? "" : "px")
          }, cur: function () {
            var e = k.propHooks[this.prop];
            return e && e.get ? e.get(this) : k.propHooks._default.get(this)
          }, run: function (e) {
            var t, n = k.propHooks[this.prop];
            return this.pos = t = this.options.duration ? z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
          }
        }, k.prototype.init.prototype = k.prototype, k.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = z.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            }, set: function (e) {
              z.fx.step[e.prop] ? z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[z.cssProps[e.prop]] || z.cssHooks[e.prop]) ? z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
          }
        }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
          }
        }, z.easing = {
          linear: function (e) {
            return e
          }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          }
        }, z.fx = k.prototype.init, z.fx.step = {};
        var He, Ge, qe = /^(?:toggle|show|hide)$/, Ve = new RegExp("^(?:([+-])=|)(" + ve + ")([a-z%]*)$", "i"),
          ze = /queueHooks$/, Xe = [function (e, t, n) {
            var i, o, r, s, a, l, c, u = this, d = {}, h = e.style, f = e.nodeType && me(e), p = de.get(e, "fxshow");
            for (i in n.queue || (null == (a = z._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
              a.unqueued || l()
            }), a.unqueued++, u.always(function () {
              u.always(function () {
                a.unqueued--, z.queue(e, "fx").length || a.empty.fire()
              })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = z.css(e, "display")) ? de.get(e, "olddisplay") || b(e.nodeName) : c) && "none" === z.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function () {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), t) if (o = t[i], qe.exec(o)) {
              if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                if ("show" !== o || !p || void 0 === p[i]) continue;
                f = !0
              }
              d[i] = p && p[i] || z.style(e, i)
            } else c = void 0;
            if (z.isEmptyObject(d)) "inline" === ("none" === c ? b(e.nodeName) : c) && (h.display = c); else for (i in p ? "hidden" in p && (f = p.hidden) : p = de.access(e, "fxshow", {}), r && (p.hidden = !f), f ? z(e).show() : u.done(function () {
              z(e).hide()
            }), u.done(function () {
              var t;
              for (t in de.remove(e, "fxshow"), d) z.style(e, t, d[t])
            }), d) s = B(f ? p[i] : 0, i, u), i in p || (p[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
          }], Je = {
            "*": [function (e, t) {
              var n = this.createTween(e, t), i = n.cur(), o = Ve.exec(t), r = o && o[3] || (z.cssNumber[e] ? "" : "px"),
                s = (z.cssNumber[e] || "px" !== r && +i) && Ve.exec(z.css(n.elem, e)), a = 1, l = 20;
              if (s && s[3] !== r) {
                r = r || s[3], o = o || [], s = +i || 1;
                do {
                  s /= a = a || ".5", z.style(n.elem, e, s + r)
                } while (a !== (a = n.cur() / i) && 1 !== a && --l)
              }
              return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
          };
        z.Animation = z.extend(A, {
          tweener: function (e, t) {
            z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; o > i; i++) n = e[i], Je[n] = Je[n] || [], Je[n].unshift(t)
          }, prefilter: function (e, t) {
            t ? Xe.unshift(e) : Xe.push(e)
          }
        }), z.speed = function (e, t, n) {
          var i = e && "object" == typeof e ? z.extend({}, e) : {
            complete: n || !n && t || z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !z.isFunction(t) && t
          };
          return i.duration = z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in z.fx.speeds ? z.fx.speeds[i.duration] : z.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            z.isFunction(i.old) && i.old.call(this), i.queue && z.dequeue(this, i.queue)
          }, i
        }, z.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(me).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
          }, animate: function (e, t, n, i) {
            var o = z.isEmptyObject(e), r = z.speed(t, n, i), s = function () {
              var t = A(this, z.extend({}, e), r);
              (o || de.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          }, stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
              var t = !0, o = null != e && e + "queueHooks", r = z.timers, s = de.get(this);
              if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && ze.test(o) && i(s[o]);
              for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
              (t || !n) && z.dequeue(this, e)
            })
          }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
              var t, n = de.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = z.timers, s = i ? i.length : 0;
              for (n.finish = !0, z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish
            })
          }
        }), z.each(["toggle", "show", "hide"], function (e, t) {
          var n = z.fn[t];
          z.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, o)
          }
        }), z.each({
          slideDown: I("show"),
          slideUp: I("hide"),
          slideToggle: I("toggle"),
          fadeIn: {opacity: "show"},
          fadeOut: {opacity: "hide"},
          fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
          z.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
          }
        }), z.timers = [], z.fx.tick = function () {
          var e, t = 0, n = z.timers;
          for (He = z.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || z.fx.stop(), He = void 0
        }, z.fx.timer = function (e) {
          z.timers.push(e), e() ? z.fx.start() : z.timers.pop()
        }, z.fx.interval = 13, z.fx.start = function () {
          Ge || (Ge = setInterval(z.fx.tick, z.fx.interval))
        }, z.fx.stop = function () {
          clearInterval(Ge), Ge = null
        }, z.fx.speeds = {slow: 600, fast: 200, _default: 400}, z.fn.delay = function (e, t) {
          return e = z.fx && z.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(i)
            }
          })
        }, function () {
          var e = q.createElement("input"), t = q.createElement("select"), n = t.appendChild(q.createElement("option"));
          e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, (e = q.createElement("input")).value = "t", e.type = "radio", G.radioValue = "t" === e.value
        }();
        var Ye, Ze = z.expr.attrHandle;
        z.fn.extend({
          attr: function (e, t) {
            return ue(this, z.attr, e, t, arguments.length > 1)
          }, removeAttr: function (e) {
            return this.each(function () {
              z.removeAttr(this, e)
            })
          }
        }), z.extend({
          attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === be ? z.prop(e, t, n) : (1 === r && z.isXMLDoc(e) || (t = t.toLowerCase(), i = z.attrHooks[t] || (z.expr.match.bool.test(t) ? Ye : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = z.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void z.removeAttr(e, t))
          }, removeAttr: function (e, t) {
            var n, i, o = 0, r = t && t.match(le);
            if (r && 1 === e.nodeType) for (; n = r[o++];) i = z.propFix[n] || n, z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
          }, attrHooks: {
            type: {
              set: function (e, t) {
                if (!G.radioValue && "radio" === t && z.nodeName(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t
                }
              }
            }
          }
        }), Ye = {
          set: function (e, t, n) {
            return !1 === t ? z.removeAttr(e, n) : e.setAttribute(n, n), n
          }
        }, z.each(z.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = Ze[t] || z.find.attr;
          Ze[t] = function (e, t, i) {
            var o, r;
            return i || (r = Ze[t], Ze[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Ze[t] = r), o
          }
        });
        var Ke = /^(?:input|select|textarea|button)$/i;
        z.fn.extend({
          prop: function (e, t) {
            return ue(this, z.prop, e, t, arguments.length > 1)
          }, removeProp: function (e) {
            return this.each(function () {
              delete this[z.propFix[e] || e]
            })
          }
        }), z.extend({
          propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !z.isXMLDoc(e)) && (t = z.propFix[t] || t, o = z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
          }, propHooks: {
            tabIndex: {
              get: function (e) {
                return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href ? e.tabIndex : -1
              }
            }
          }
        }), G.optSelected || (z.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
          }
        }), z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          z.propFix[this.toLowerCase()] = this
        });
        var et = /[\t\r\n\f]/g;
        z.fn.extend({
          addClass: function (e) {
            var t, n, i, o, r, s, a = "string" == typeof e && e, l = 0, c = this.length;
            if (z.isFunction(e)) return this.each(function (t) {
              z(this).addClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(le) || []; c > l; l++) if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(et, " ") : " ")) {
              for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              s = z.trim(i), n.className !== s && (n.className = s)
            }
            return this
          }, removeClass: function (e) {
            var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
            if (z.isFunction(e)) return this.each(function (t) {
              z(this).removeClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(le) || []; c > l; l++) if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(et, " ") : "")) {
              for (r = 0; o = t[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
              s = e ? z.trim(i) : "", n.className !== s && (n.className = s)
            }
            return this
          }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(z.isFunction(e) ? function (n) {
              z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
              if ("string" === n) for (var t, i = 0, o = z(this), r = e.match(le) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === be || "boolean" === n) && (this.className && de.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : de.get(this, "__className__") || "")
            })
          }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(et, " ").indexOf(t) >= 0) return !0;
            return !1
          }
        });
        var tt = /\r/g;
        z.fn.extend({
          val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = z.isFunction(e), this.each(function (n) {
              var o;
              1 === this.nodeType && (null == (o = i ? e.call(this, n, z(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : z.isArray(o) && (o = z.map(o, function (e) {
                return null == e ? "" : e + ""
              })), (t = z.valHooks[this.type] || z.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = z.valHooks[o.type] || z.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(tt, "") : null == n ? "" : n : void 0
          }
        }), z.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = z.find.attr(e, "value");
                return null != t ? t : z.trim(z.text(e))
              }
            }, select: {
              get: function (e) {
                for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++) if (!(!(n = i[l]).selected && l !== o || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && z.nodeName(n.parentNode, "optgroup"))) {
                  if (t = z(n).val(), r) return t;
                  s.push(t)
                }
                return s
              }, set: function (e, t) {
                for (var n, i, o = e.options, r = z.makeArray(t), s = o.length; s--;) ((i = o[s]).selected = z.inArray(i.value, r) >= 0) && (n = !0);
                return n || (e.selectedIndex = -1), r
              }
            }
          }
        }), z.each(["radio", "checkbox"], function () {
          z.valHooks[this] = {
            set: function (e, t) {
              return z.isArray(t) ? e.checked = z.inArray(z(e).val(), t) >= 0 : void 0
            }
          }, G.checkOn || (z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
          })
        }), z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
          z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
          }
        }), z.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
          }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
          }, unbind: function (e, t) {
            return this.off(e, null, t)
          }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
          }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          }
        });
        var nt = z.now(), it = /\?/;
        z.parseJSON = function (e) {
          return JSON.parse(e + "")
        }, z.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = (new DOMParser).parseFromString(e, "text/xml")
          } catch (e) {
            t = void 0
          }
          return (!t || t.getElementsByTagName("parsererror").length) && z.error("Invalid XML: " + e), t
        };
        var ot = /#.*$/, rt = /([?&])_=[^&]*/, st = /^(.*?):[ \t]*([^\r\n]*)$/gm, at = /^(?:GET|HEAD)$/, lt = /^\/\//,
          ct = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ut = {}, dt = {}, ht = "*/".concat("*"),
          ft = e.location.href, pt = ct.exec(ft.toLowerCase()) || [];
        z.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: ft,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": ht,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": z.parseJSON, "text xml": z.parseXML},
            flatOptions: {url: !0, context: !0}
          },
          ajaxSetup: function (e, t) {
            return t ? F(F(e, z.ajaxSettings), t) : F(z.ajaxSettings, e)
          },
          ajaxPrefilter: M(ut),
          ajaxTransport: M(dt),
          ajax: function (e, t) {
            function n(e, t, n, s) {
              var l, u, m, y, w, E = t;
              2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = function (e, t, n) {
                for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i) for (o in a) if (a[o] && a[o].test(i)) {
                  l.unshift(o);
                  break
                }
                if (l[0] in n) r = l[0]; else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break
                    }
                    s || (s = o)
                  }
                  r = r || s
                }
                return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
              }(d, x, n)), y = function (e, t, n, i) {
                var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
                if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                  if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                    break
                  }
                  if (!0 !== s) if (s && e.throws) t = s(t); else try {
                    t = s(t)
                  } catch (e) {
                    return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
                  }
                }
                return {state: "success", data: t}
              }(d, y, x, l), l ? (d.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (z.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (z.etag[o] = w)), 204 === e || "HEAD" === d.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = y.state, u = y.data, l = !(m = y.error))) : (m = E, (e || !E) && (E = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || E) + "", l ? p.resolveWith(h, [u, E, x]) : p.rejectWith(h, [x, E, m]), x.statusCode(g), g = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? u : m]), v.fireWith(h, [x, E]), c && (f.trigger("ajaxComplete", [x, d]), --z.active || z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, c, u, d = z.ajaxSetup({}, t), h = d.context || d,
              f = d.context && (h.nodeType || h.jquery) ? z(h) : z.event, p = z.Deferred(),
              v = z.Callbacks("once memory"), g = d.statusCode || {}, m = {}, y = {}, b = 0, w = "canceled", x = {
                readyState: 0, getResponseHeader: function (e) {
                  var t;
                  if (2 === b) {
                    if (!s) for (s = {}; t = st.exec(r);) s[t[1].toLowerCase()] = t[2];
                    t = s[e.toLowerCase()]
                  }
                  return null == t ? null : t
                }, getAllResponseHeaders: function () {
                  return 2 === b ? r : null
                }, setRequestHeader: function (e, t) {
                  var n = e.toLowerCase();
                  return b || (e = y[n] = y[n] || e, m[e] = t), this
                }, overrideMimeType: function (e) {
                  return b || (d.mimeType = e), this
                }, statusCode: function (e) {
                  var t;
                  if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]]; else x.always(e[x.status]);
                  return this
                }, abort: function (e) {
                  var t = e || w;
                  return i && i.abort(t), n(0, t), this
                }
              };
            if (p.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || ft) + "").replace(ot, "").replace(lt, pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = z.trim(d.dataType || "*").toLowerCase().match(le) || [""], null == d.crossDomain && (l = ct.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === pt[1] && l[2] === pt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (pt[3] || ("http:" === pt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = z.param(d.data, d.traditional)), $(ut, d, t, x), 2 === b) return x;
            for (u in (c = z.event && d.global) && 0 == z.active++ && z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !at.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (it.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = rt.test(o) ? o.replace(rt, "$1_=" + nt++) : o + (it.test(o) ? "&" : "?") + "_=" + nt++)), d.ifModified && (z.lastModified[o] && x.setRequestHeader("If-Modified-Since", z.lastModified[o]), z.etag[o] && x.setRequestHeader("If-None-Match", z.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ht + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, x, d) || 2 === b)) return x.abort();
            for (u in w = "abort", {success: 1, error: 1, complete: 1}) x[u](d[u]);
            if (i = $(dt, d, t, x)) {
              x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                x.abort("timeout")
              }, d.timeout));
              try {
                b = 1, i.send(m, n)
              } catch (e) {
                if (!(2 > b)) throw e;
                n(-1, e)
              }
            } else n(-1, "No Transport");
            return x
          },
          getJSON: function (e, t, n) {
            return z.get(e, t, n, "json")
          },
          getScript: function (e, t) {
            return z.get(e, void 0, t, "script")
          }
        }), z.each(["get", "post"], function (e, t) {
          z[t] = function (e, n, i, o) {
            return z.isFunction(n) && (o = o || i, i = n, n = void 0), z.ajax({
              url: e,
              type: t,
              dataType: o,
              data: n,
              success: i
            })
          }
        }), z._evalUrl = function (e) {
          return z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        }, z.fn.extend({
          wrapAll: function (e) {
            var t;
            return z.isFunction(e) ? this.each(function (t) {
              z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
            }).append(this)), this)
          }, wrapInner: function (e) {
            return this.each(z.isFunction(e) ? function (t) {
              z(this).wrapInner(e.call(this, t))
            } : function () {
              var t = z(this), n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
            })
          }, wrap: function (e) {
            var t = z.isFunction(e);
            return this.each(function (n) {
              z(this).wrapAll(t ? e.call(this, n) : e)
            })
          }, unwrap: function () {
            return this.parent().each(function () {
              z.nodeName(this, "body") || z(this).replaceWith(this.childNodes)
            }).end()
          }
        }), z.expr.filters.hidden = function (e) {
          return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, z.expr.filters.visible = function (e) {
          return !z.expr.filters.hidden(e)
        };
        var vt = /%20/g, gt = /\[\]$/, mt = /\r?\n/g, yt = /^(?:submit|button|image|reset|file)$/i,
          bt = /^(?:input|select|textarea|keygen)/i;
        z.param = function (e, t) {
          var n, i = [], o = function (e, t) {
            t = z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
          };
          if (void 0 === t && (t = z.ajaxSettings && z.ajaxSettings.traditional), z.isArray(e) || e.jquery && !z.isPlainObject(e)) z.each(e, function () {
            o(this.name, this.value)
          }); else for (n in e) _(n, e[n], t, o);
          return i.join("&").replace(vt, "+")
        }, z.fn.extend({
          serialize: function () {
            return z.param(this.serializeArray())
          }, serializeArray: function () {
            return this.map(function () {
              var e = z.prop(this, "elements");
              return e ? z.makeArray(e) : this
            }).filter(function () {
              var e = this.type;
              return this.name && !z(this).is(":disabled") && bt.test(this.nodeName) && !yt.test(e) && (this.checked || !ye.test(e))
            }).map(function (e, t) {
              var n = z(this).val();
              return null == n ? null : z.isArray(n) ? z.map(n, function (e) {
                return {name: t.name, value: e.replace(mt, "\r\n")}
              }) : {name: t.name, value: n.replace(mt, "\r\n")}
            }).get()
          }
        }), z.ajaxSettings.xhr = function () {
          try {
            return new XMLHttpRequest
          } catch (e) {
          }
        };
        var wt = 0, xt = {}, Et = {0: 200, 1223: 204}, Pt = z.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function () {
          for (var e in xt) xt[e]()
        }), G.cors = !!Pt && "withCredentials" in Pt, G.ajax = Pt = !!Pt, z.ajaxTransport(function (e) {
          var t;
          return G.cors || Pt && !e.crossDomain ? {
            send: function (n, i) {
              var o, r = e.xhr(), s = ++wt;
              if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
              for (o in e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) r.setRequestHeader(o, n[o]);
              t = function (e) {
                return function () {
                  t && (delete xt[s], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(Et[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {text: r.responseText} : void 0, r.getAllResponseHeaders()))
                }
              }, r.onload = t(), r.onerror = t("error"), t = xt[s] = t("abort");
              try {
                r.send(e.hasContent && e.data || null)
              } catch (e) {
                if (t) throw e
              }
            }, abort: function () {
              t && t()
            }
          } : void 0
        }), z.ajaxSetup({
          accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
          contents: {script: /(?:java|ecma)script/},
          converters: {
            "text script": function (e) {
              return z.globalEval(e), e
            }
          }
        }), z.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), z.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain) return {
            send: function (i, o) {
              t = z("<script>").prop({
                async: !0,
                charset: e.scriptCharset,
                src: e.url
              }).on("load error", n = function (e) {
                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
              }), q.head.appendChild(t[0])
            }, abort: function () {
              n && n()
            }
          }
        });
        var Ct = [], Tt = /(=)\?(?=&|$)|\?\?/;
        z.ajaxSetup({
          jsonp: "callback", jsonpCallback: function () {
            var e = Ct.pop() || z.expando + "_" + nt++;
            return this[e] = !0, e
          }
        }), z.ajaxPrefilter("json jsonp", function (t, n, i) {
          var o, r, s,
            a = !1 !== t.jsonp && (Tt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Tt.test(t.data) && "data");
          return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Tt, "$1" + o) : !1 !== t.jsonp && (t.url += (it.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || z.error(o + " was not called"), s[0]
          }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
          }, i.always(function () {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ct.push(o)), s && z.isFunction(r) && r(s[0]), s = r = void 0
          }), "script") : void 0
        }), z.parseHTML = function (e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && (n = t, t = !1), t = t || q;
          var i = te.exec(e), o = !n && [];
          return i ? [t.createElement(i[1])] : (i = z.buildFragment([e], t, o), o && o.length && z(o).remove(), z.merge([], i.childNodes))
        };
        var St = z.fn.load;
        z.fn.load = function (e, t, n) {
          if ("string" != typeof e && St) return St.apply(this, arguments);
          var i, o, r, s = this, a = e.indexOf(" ");
          return a >= 0 && (i = z.trim(e.slice(a)), e = e.slice(0, a)), z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && z.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
          }).done(function (e) {
            r = arguments, s.html(i ? z("<div>").append(z.parseHTML(e)).find(i) : e)
          }).complete(n && function (e, t) {
            s.each(n, r || [e.responseText, t, e])
          }), this
        }, z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          z.fn[t] = function (e) {
            return this.on(t, e)
          }
        }), z.expr.filters.animated = function (e) {
          return z.grep(z.timers, function (t) {
            return e === t.elem
          }).length
        };
        var kt = e.document.documentElement;
        z.offset = {
          setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c = z.css(e, "position"), u = z(e), d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = z.css(e, "top"), l = z.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
          }
        }, z.fn.extend({
          offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
              z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
            return r ? (t = r.documentElement, z.contains(t, i) ? (typeof i.getBoundingClientRect !== be && (o = i.getBoundingClientRect()), n = D(r), {
              top: o.top + n.pageYOffset - t.clientTop,
              left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
          }, position: function () {
            if (this[0]) {
              var e, t, n = this[0], i = {top: 0, left: 0};
              return "fixed" === z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), z.nodeName(e[0], "html") || (i = e.offset()), i.top += z.css(e[0], "borderTopWidth", !0), i.left += z.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - i.top - z.css(n, "marginTop", !0),
                left: t.left - i.left - z.css(n, "marginLeft", !0)
              }
            }
          }, offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent || kt; e && !z.nodeName(e, "html") && "static" === z.css(e, "position");) e = e.offsetParent;
              return e || kt
            })
          }
        }), z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
          var i = "pageYOffset" === n;
          z.fn[t] = function (o) {
            return ue(this, function (t, o, r) {
              var s = D(t);
              return void 0 === r ? s ? s[n] : t[o] : void (s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
            }, t, o, arguments.length, null)
          }
        }), z.each(["top", "left"], function (e, t) {
          z.cssHooks[t] = x(G.pixelPosition, function (e, n) {
            return n ? (n = w(e, t), De.test(n) ? z(e).position()[t] + "px" : n) : void 0
          })
        }), z.each({Height: "height", Width: "width"}, function (e, t) {
          z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            z.fn[i] = function (i, o) {
              var r = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
              return ue(this, function (t, n, i) {
                var o;
                return z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? z.css(t, n, s) : z.style(t, n, i, s)
              }, t, r ? i : void 0, r, null)
            }
          })
        }), z.fn.size = function () {
          return this.length
        }, z.fn.andSelf = z.fn.addBack;
        var Lt = e.jQuery, It = e.$;
        return z.noConflict = function (t) {
          return e.$ === z && (e.$ = It), t && e.jQuery === z && (e.jQuery = Lt), z
        }, typeof t === be && (e.jQuery = e.$ = z), z
      })
    }, {}],
    lodash: [function (e, t, n) {
      (function (e) {
        (function () {
          function i(e, t) {
            if (e !== t) {
              var n = null === e, i = e === P, o = e == e, r = null === t, s = t === P, a = t == t;
              if (e > t && !r || !o || n && !s && a || i && a) return 1;
              if (t > e && !n || !a || r && !i && o || s && o) return -1
            }
            return 0
          }

          function o(e, t, n) {
            for (var i = e.length, o = n ? i : -1; n ? o-- : ++o < i;) if (t(e[o], o, e)) return o;
            return -1
          }

          function r(e, t, n) {
            if (t != t) return g(e, n);
            for (var i = n - 1, o = e.length; ++i < o;) if (e[i] === t) return i;
            return -1
          }

          function s(e) {
            return "function" == typeof e || !1
          }

          function a(e) {
            return null == e ? "" : e + ""
          }

          function l(e, t) {
            for (var n = -1, i = e.length; ++n < i && t.indexOf(e.charAt(n)) > -1;) ;
            return n
          }

          function c(e, t) {
            for (var n = e.length; n-- && t.indexOf(e.charAt(n)) > -1;) ;
            return n
          }

          function u(e, t) {
            return i(e.criteria, t.criteria) || e.index - t.index
          }

          function d(e, t, n) {
            for (var o = -1, r = e.criteria, s = t.criteria, a = r.length, l = n.length; ++o < a;) {
              var c = i(r[o], s[o]);
              if (c) {
                if (o >= l) return c;
                var u = n[o];
                return c * ("asc" === u || !0 === u ? 1 : -1)
              }
            }
            return e.index - t.index
          }

          function h(e) {
            return Qe[e]
          }

          function f(e) {
            return We[e]
          }

          function p(e, t, n) {
            return t ? e = qe[e] : n && (e = Ve[e]), "\\" + e
          }

          function v(e) {
            return "\\" + Ve[e]
          }

          function g(e, t, n) {
            for (var i = e.length, o = t + (n ? 0 : -1); n ? o-- : ++o < i;) {
              var r = e[o];
              if (r != r) return o
            }
            return -1
          }

          function m(e) {
            return !!e && "object" == typeof e
          }

          function y(e) {
            return 160 >= e && e >= 9 && 13 >= e || 32 == e || 160 == e || 5760 == e || 6158 == e || e >= 8192 && (8202 >= e || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
          }

          function b(e, t) {
            for (var n = -1, i = e.length, o = -1, r = []; ++n < i;) e[n] === t && (e[n] = Q, r[++o] = n);
            return r
          }

          function w(e) {
            for (var t = -1, n = e.length; ++t < n && y(e.charCodeAt(t));) ;
            return t
          }

          function x(e) {
            for (var t = e.length; t-- && y(e.charCodeAt(t));) ;
            return t
          }

          function E(e) {
            return He[e]
          }

          var P, C = "3.10.1", T = 1, S = 2, k = 4, L = 8, I = 16, B = 32, A = 64, M = 128, $ = 256, F = 30, _ = "...",
            D = 150, O = 16, N = 200, R = 1, U = 2, j = "Expected a function", Q = "__lodash_placeholder__",
            W = "[object Arguments]", H = "[object Array]", G = "[object Boolean]", q = "[object Date]",
            V = "[object Error]", z = "[object Function]", X = "[object Map]", J = "[object Number]",
            Y = "[object Object]", Z = "[object RegExp]", K = "[object Set]", ee = "[object String]",
            te = "[object WeakMap]", ne = "[object ArrayBuffer]", ie = "[object Float32Array]",
            oe = "[object Float64Array]", re = "[object Int8Array]", se = "[object Int16Array]",
            ae = "[object Int32Array]", le = "[object Uint8Array]", ce = "[object Uint8ClampedArray]",
            ue = "[object Uint16Array]", de = "[object Uint32Array]", he = /\b__p \+= '';/g, fe = /\b(__p \+=) '' \+/g,
            pe = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ve = /&(?:amp|lt|gt|quot|#39|#96);/g, ge = /[&<>"'`]/g,
            me = RegExp(ve.source), ye = RegExp(ge.source), be = /<%-([\s\S]+?)%>/g, we = /<%([\s\S]+?)%>/g,
            xe = /<%=([\s\S]+?)%>/g, Ee = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, Pe = /^\w*$/,
            Ce = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
            Te = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, Se = RegExp(Te.source),
            ke = /[\u0300-\u036f\ufe20-\ufe23]/g, Le = /\\(\\)?/g, Ie = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Be = /\w*$/,
            Ae = /^0[xX]/, Me = /^\[object .+?Constructor\]$/, $e = /^\d+$/,
            Fe = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, _e = /($^)/, De = /['\n\r\u2028\u2029\\]/g,
            Oe = function () {
              var e = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", t = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
              return RegExp(e + "+(?=" + e + t + ")|" + e + "?" + t + "|" + e + "+|[0-9]+", "g")
            }(),
            Ne = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
            Re = -1, Ue = {};
          Ue[ie] = Ue[oe] = Ue[re] = Ue[se] = Ue[ae] = Ue[le] = Ue[ce] = Ue[ue] = Ue[de] = !0, Ue[W] = Ue[H] = Ue[ne] = Ue[G] = Ue[q] = Ue[V] = Ue[z] = Ue[X] = Ue[J] = Ue[Y] = Ue[Z] = Ue[K] = Ue[ee] = Ue[te] = !1;
          var je = {};
          je[W] = je[H] = je[ne] = je[G] = je[q] = je[ie] = je[oe] = je[re] = je[se] = je[ae] = je[J] = je[Y] = je[Z] = je[ee] = je[le] = je[ce] = je[ue] = je[de] = !0, je[V] = je[z] = je[X] = je[K] = je[te] = !1;
          var Qe = {
              "À": "A",
              "Á": "A",
              "Â": "A",
              "Ã": "A",
              "Ä": "A",
              "Å": "A",
              "à": "a",
              "á": "a",
              "â": "a",
              "ã": "a",
              "ä": "a",
              "å": "a",
              "Ç": "C",
              "ç": "c",
              "Ð": "D",
              "ð": "d",
              "È": "E",
              "É": "E",
              "Ê": "E",
              "Ë": "E",
              "è": "e",
              "é": "e",
              "ê": "e",
              "ë": "e",
              "Ì": "I",
              "Í": "I",
              "Î": "I",
              "Ï": "I",
              "ì": "i",
              "í": "i",
              "î": "i",
              "ï": "i",
              "Ñ": "N",
              "ñ": "n",
              "Ò": "O",
              "Ó": "O",
              "Ô": "O",
              "Õ": "O",
              "Ö": "O",
              "Ø": "O",
              "ò": "o",
              "ó": "o",
              "ô": "o",
              "õ": "o",
              "ö": "o",
              "ø": "o",
              "Ù": "U",
              "Ú": "U",
              "Û": "U",
              "Ü": "U",
              "ù": "u",
              "ú": "u",
              "û": "u",
              "ü": "u",
              "Ý": "Y",
              "ý": "y",
              "ÿ": "y",
              "Æ": "Ae",
              "æ": "ae",
              "Þ": "Th",
              "þ": "th",
              "ß": "ss"
            }, We = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"},
            He = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`"},
            Ge = {function: !0, object: !0}, qe = {
              0: "x30",
              1: "x31",
              2: "x32",
              3: "x33",
              4: "x34",
              5: "x35",
              6: "x36",
              7: "x37",
              8: "x38",
              9: "x39",
              A: "x41",
              B: "x42",
              C: "x43",
              D: "x44",
              E: "x45",
              F: "x46",
              a: "x61",
              b: "x62",
              c: "x63",
              d: "x64",
              e: "x65",
              f: "x66",
              n: "x6e",
              r: "x72",
              t: "x74",
              u: "x75",
              v: "x76",
              x: "x78"
            }, Ve = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"},
            ze = Ge[typeof n] && n && !n.nodeType && n, Xe = Ge[typeof t] && t && !t.nodeType && t,
            Je = ze && Xe && "object" == typeof e && e && e.Object && e,
            Ye = Ge[typeof self] && self && self.Object && self,
            Ze = Ge[typeof window] && window && window.Object && window, Ke = Xe && Xe.exports === ze && ze,
            et = Je || Ze !== (this && this.window) && Ze || Ye || this, tt = function e(t) {
              function n(e) {
                if (m(e) && !br(e) && !(e instanceof K)) {
                  if (e instanceof X) return e;
                  if (Hi.call(e, "__chain__") && Hi.call(e, "__wrapped__")) return Mn(e)
                }
                return new X(e)
              }

              function y() {
              }

              function X(e, t, n) {
                this.__wrapped__ = e, this.__actions__ = n || [], this.__chain__ = !!t
              }

              function K(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = yo, this.__views__ = []
              }

              function te() {
                this.__data__ = {}
              }

              function Qe(e) {
                var t = e ? e.length : 0;
                for (this.data = {hash: so(null), set: new eo}; t--;) this.push(e[t])
              }

              function We(e, t) {
                var n = e.data;
                return ("string" == typeof t || si(t) ? n.set.has(t) : n.hash[t]) ? 0 : -1
              }

              function He(e, t) {
                var n = -1, i = e.length;
                for (t || (t = Bi(i)); ++n < i;) t[n] = e[n];
                return t
              }

              function Ge(e, t) {
                for (var n = -1, i = e.length; ++n < i && !1 !== t(e[n], n, e);) ;
                return e
              }

              function qe(e, t) {
                for (var n = -1, i = e.length; ++n < i;) if (!t(e[n], n, e)) return !1;
                return !0
              }

              function Ve(e, t) {
                for (var n = -1, i = e.length, o = -1, r = []; ++n < i;) {
                  var s = e[n];
                  t(s, n, e) && (r[++o] = s)
                }
                return r
              }

              function ze(e, t) {
                for (var n = -1, i = e.length, o = Bi(i); ++n < i;) o[n] = t(e[n], n, e);
                return o
              }

              function Xe(e, t) {
                for (var n = -1, i = t.length, o = e.length; ++n < i;) e[o + n] = t[n];
                return e
              }

              function Je(e, t, n, i) {
                var o = -1, r = e.length;
                for (i && r && (n = e[++o]); ++o < r;) n = t(n, e[o], o, e);
                return n
              }

              function Ye(e, t) {
                for (var n = -1, i = e.length; ++n < i;) if (t(e[n], n, e)) return !0;
                return !1
              }

              function Ze(e, t, n, i) {
                return e !== P && Hi.call(i, n) ? e : t
              }

              function Ke(e, t, n) {
                for (var i = -1, o = Br(t), r = o.length; ++i < r;) {
                  var s = o[i], a = e[s], l = n(a, t[s], s, e, t);
                  (l == l ? l === a : a != a) && (a !== P || s in e) || (e[s] = l)
                }
                return e
              }

              function nt(e, t) {
                return null == t ? e : ot(t, Br(t), e)
              }

              function it(e, t) {
                for (var n = -1, i = null == e, o = !i && bn(e), r = o ? e.length : 0, s = t.length, a = Bi(s); ++n < s;) {
                  var l = t[n];
                  a[n] = o ? wn(l, r) ? e[l] : P : i ? P : e[l]
                }
                return a
              }

              function ot(e, t, n) {
                n || (n = {});
                for (var i = -1, o = t.length; ++i < o;) {
                  var r = t[i];
                  n[r] = e[r]
                }
                return n
              }

              function rt(e, t, n) {
                var i = typeof e;
                return "function" == i ? t === P ? e : Dt(e, t, n) : null == e ? Ti : "object" == i ? xt(e) : t === P ? Ii(e) : Et(e, t)
              }

              function st(e, t, n, i, o, r, s) {
                var a;
                if (n && (a = o ? n(e, i, o) : n(e)), a !== P) return a;
                if (!si(e)) return e;
                var l = br(e);
                if (l) {
                  if (a = function (e) {
                    var t = e.length, n = new e.constructor(t);
                    return t && "string" == typeof e[0] && Hi.call(e, "index") && (n.index = e.index, n.input = e.input), n
                  }(e), !t) return He(e, a)
                } else {
                  var c = qi.call(e), u = c == z;
                  if (c != Y && c != W && (!u || o)) return je[c] ? function (e, t, n) {
                    var i = e.constructor;
                    switch (t) {
                      case ne:
                        return Ot(e);
                      case G:
                      case q:
                        return new i(+e);
                      case ie:
                      case oe:
                      case re:
                      case se:
                      case ae:
                      case le:
                      case ce:
                      case ue:
                      case de:
                        var o = e.buffer;
                        return new i(n ? Ot(o) : o, e.byteOffset, e.length);
                      case J:
                      case ee:
                        return new i(e);
                      case Z:
                        var r = new i(e.source, Be.exec(e));
                        r.lastIndex = e.lastIndex
                    }
                    return r
                  }(e, c, t) : o ? e : {};
                  if (a = function (e) {
                    var t = e.constructor;
                    return "function" == typeof t && t instanceof t || (t = Di), new t
                  }(u ? {} : e), !t) return nt(a, e)
                }
                r || (r = []), s || (s = []);
                for (var d = r.length; d--;) if (r[d] == e) return s[d];
                return r.push(e), s.push(a), (l ? Ge : pt)(e, function (i, o) {
                  a[o] = st(i, t, n, o, e, r, s)
                }), a
              }

              function at(e, t, n) {
                if ("function" != typeof e) throw new Ri(j);
                return to(function () {
                  e.apply(P, n)
                }, t)
              }

              function lt(e, t) {
                var n = e ? e.length : 0, i = [];
                if (!n) return i;
                var o = -1, s = vn(), a = s === r, l = a && t.length >= N ? Ht(t) : null, c = t.length;
                l && (s = We, a = !1, t = l);
                e:for (; ++o < n;) {
                  var u = e[o];
                  if (a && u == u) {
                    for (var d = c; d--;) if (t[d] === u) continue e;
                    i.push(u)
                  } else s(t, u, 0) < 0 && i.push(u)
                }
                return i
              }

              function ct(e, t) {
                var n = !0;
                return So(e, function (e, i, o) {
                  return n = !!t(e, i, o)
                }), n
              }

              function ut(e, t) {
                var n = [];
                return So(e, function (e, i, o) {
                  t(e, i, o) && n.push(e)
                }), n
              }

              function dt(e, t, n, i) {
                var o;
                return n(e, function (e, n, r) {
                  return t(e, n, r) ? (o = i ? n : e, !1) : void 0
                }), o
              }

              function ht(e, t, n, i) {
                i || (i = []);
                for (var o = -1, r = e.length; ++o < r;) {
                  var s = e[o];
                  m(s) && bn(s) && (n || br(s) || ni(s)) ? t ? ht(s, t, n, i) : Xe(i, s) : n || (i[i.length] = s)
                }
                return i
              }

              function ft(e, t) {
                return Lo(e, t, mi)
              }

              function pt(e, t) {
                return Lo(e, t, Br)
              }

              function vt(e, t) {
                return Io(e, t, Br)
              }

              function gt(e, t) {
                for (var n = -1, i = t.length, o = -1, r = []; ++n < i;) {
                  var s = t[n];
                  ri(e[s]) && (r[++o] = s)
                }
                return r
              }

              function mt(e, t, n) {
                if (null != e) {
                  n !== P && n in Bn(e) && (t = [n]);
                  for (var i = 0, o = t.length; null != e && o > i;) e = e[t[i++]];
                  return i && i == o ? e : P
                }
              }

              function yt(e, t, n, i, o, r) {
                return e === t || (null == e || null == t || !si(e) && !m(t) ? e != e && t != t : function (e, t, n, i, o, r, s) {
                  var a = br(e), l = br(t), c = H, u = H;
                  a || ((c = qi.call(e)) == W ? c = Y : c != Y && (a = hi(e))), l || ((u = qi.call(t)) == W ? u = Y : u != Y && (l = hi(t)));
                  var d = c == Y, h = u == Y, f = c == u;
                  if (f && !a && !d) return function (e, t, n) {
                    switch (n) {
                      case G:
                      case q:
                        return +e == +t;
                      case V:
                        return e.name == t.name && e.message == t.message;
                      case J:
                        return e != +e ? t != +t : e == +t;
                      case Z:
                      case ee:
                        return e == t + ""
                    }
                    return !1
                  }(e, t, c);
                  if (!o) {
                    var p = d && Hi.call(e, "__wrapped__"), v = h && Hi.call(t, "__wrapped__");
                    if (p || v) return n(p ? e.value() : e, v ? t.value() : t, i, o, r, s)
                  }
                  if (!f) return !1;
                  r || (r = []), s || (s = []);
                  for (var g = r.length; g--;) if (r[g] == e) return s[g] == t;
                  r.push(e), s.push(t);
                  var m = (a ? function (e, t, n, i, o, r, s) {
                    var a = -1, l = e.length, c = t.length;
                    if (l != c && !(o && c > l)) return !1;
                    for (; ++a < l;) {
                      var u = e[a], d = t[a], h = i ? i(o ? d : u, o ? u : d, a) : P;
                      if (h !== P) {
                        if (h) continue;
                        return !1
                      }
                      if (o) {
                        if (!Ye(t, function (e) {
                          return u === e || n(u, e, i, o, r, s)
                        })) return !1
                      } else if (u !== d && !n(u, d, i, o, r, s)) return !1
                    }
                    return !0
                  } : function (e, t, n, i, o, r, s) {
                    var a = Br(e), l = a.length, c = Br(t).length;
                    if (l != c && !o) return !1;
                    for (var u = l; u--;) {
                      var d = a[u];
                      if (!(o ? d in t : Hi.call(t, d))) return !1
                    }
                    for (var h = o; ++u < l;) {
                      d = a[u];
                      var f = e[d], p = t[d], v = i ? i(o ? p : f, o ? f : p, d) : P;
                      if (!(v === P ? n(f, p, i, o, r, s) : v)) return !1;
                      h || (h = "constructor" == d)
                    }
                    if (!h) {
                      var g = e.constructor, m = t.constructor;
                      if (g != m && "constructor" in e && "constructor" in t && !("function" == typeof g && g instanceof g && "function" == typeof m && m instanceof m)) return !1
                    }
                    return !0
                  })(e, t, n, i, o, r, s);
                  return r.pop(), s.pop(), m
                }(e, t, yt, n, i, o, r))
              }

              function bt(e, t, n) {
                var i = t.length, o = i, r = !n;
                if (null == e) return !o;
                for (e = Bn(e); i--;) {
                  var s = t[i];
                  if (r && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                }
                for (; ++i < o;) {
                  var a = (s = t[i])[0], l = e[a], c = s[1];
                  if (r && s[2]) {
                    if (l === P && !(a in e)) return !1
                  } else {
                    var u = n ? n(l, c, a) : P;
                    if (!(u === P ? yt(c, l, n, !0) : u)) return !1
                  }
                }
                return !0
              }

              function wt(e, t) {
                var n = -1, i = bn(e) ? Bi(e.length) : [];
                return So(e, function (e, o, r) {
                  i[++n] = t(e, o, r)
                }), i
              }

              function xt(e) {
                var t = gn(e);
                if (1 == t.length && t[0][2]) {
                  var n = t[0][0], i = t[0][1];
                  return function (e) {
                    return null != e && e[n] === i && (i !== P || n in Bn(e))
                  }
                }
                return function (e) {
                  return bt(e, t)
                }
              }

              function Et(e, t) {
                var n = br(e), i = En(e) && Tn(t), o = e + "";
                return e = An(e), function (r) {
                  if (null == r) return !1;
                  var s = o;
                  if (r = Bn(r), !(!n && i || s in r)) {
                    if (null == (r = 1 == e.length ? r : mt(r, St(e, 0, -1)))) return !1;
                    s = On(e), r = Bn(r)
                  }
                  return r[s] === t ? t !== P || s in r : yt(t, r[s], P, !0)
                }
              }

              function Pt(e) {
                return function (t) {
                  return null == t ? P : t[e]
                }
              }

              function Ct(e, t) {
                for (var n = e ? t.length : 0; n--;) {
                  var i = t[n];
                  if (i != o && wn(i)) {
                    var o = i;
                    no.call(e, i, 1)
                  }
                }
                return e
              }

              function Tt(e, t) {
                return e + ao(go() * (t - e + 1))
              }

              function St(e, t, n) {
                var i = -1, o = e.length;
                0 > (t = null == t ? 0 : +t || 0) && (t = -t > o ? 0 : o + t), 0 > (n = n === P || n > o ? o : +n || 0) && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var r = Bi(o); ++i < o;) r[i] = e[i + t];
                return r
              }

              function kt(e, t) {
                var n;
                return So(e, function (e, i, o) {
                  return !(n = t(e, i, o))
                }), !!n
              }

              function Lt(e, t) {
                var n = e.length;
                for (e.sort(t); n--;) e[n] = e[n].value;
                return e
              }

              function It(e, t, n) {
                var i = fn(), o = -1;
                return t = ze(t, function (e) {
                  return i(e)
                }), Lt(wt(e, function (e) {
                  return {
                    criteria: ze(t, function (t) {
                      return t(e)
                    }), index: ++o, value: e
                  }
                }), function (e, t) {
                  return d(e, t, n)
                })
              }

              function Bt(e, t) {
                var n = -1, i = vn(), o = e.length, s = i === r, a = s && o >= N, l = a ? Ht() : null, c = [];
                l ? (i = We, s = !1) : (a = !1, l = t ? [] : c);
                e:for (; ++n < o;) {
                  var u = e[n], d = t ? t(u, n, e) : u;
                  if (s && u == u) {
                    for (var h = l.length; h--;) if (l[h] === d) continue e;
                    t && l.push(d), c.push(u)
                  } else i(l, d, 0) < 0 && ((t || a) && l.push(d), c.push(u))
                }
                return c
              }

              function At(e, t) {
                for (var n = -1, i = t.length, o = Bi(i); ++n < i;) o[n] = e[t[n]];
                return o
              }

              function Mt(e, t, n, i) {
                for (var o = e.length, r = i ? o : -1; (i ? r-- : ++r < o) && t(e[r], r, e);) ;
                return n ? St(e, i ? 0 : r, i ? r + 1 : o) : St(e, i ? r + 1 : 0, i ? o : r)
              }

              function $t(e, t) {
                var n = e;
                n instanceof K && (n = n.value());
                for (var i = -1, o = t.length; ++i < o;) {
                  var r = t[i];
                  n = r.func.apply(r.thisArg, Xe([n], r.args))
                }
                return n
              }

              function Ft(e, t, n) {
                var i = 0, o = e ? e.length : i;
                if ("number" == typeof t && t == t && xo >= o) {
                  for (; o > i;) {
                    var r = i + o >>> 1, s = e[r];
                    (n ? t >= s : t > s) && null !== s ? i = r + 1 : o = r
                  }
                  return o
                }
                return _t(e, t, Ti, n)
              }

              function _t(e, t, n, i) {
                t = n(t);
                for (var o = 0, r = e ? e.length : 0, s = t != t, a = null === t, l = t === P; r > o;) {
                  var c = ao((o + r) / 2), u = n(e[c]), d = u !== P, h = u == u;
                  if (s) var f = h || i; else f = a ? h && d && (i || null != u) : l ? h && (i || d) : null != u && (i ? t >= u : t > u);
                  f ? o = c + 1 : r = c
                }
                return fo(r, wo)
              }

              function Dt(e, t, n) {
                if ("function" != typeof e) return Ti;
                if (t === P) return e;
                switch (n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n)
                    };
                  case 3:
                    return function (n, i, o) {
                      return e.call(t, n, i, o)
                    };
                  case 4:
                    return function (n, i, o, r) {
                      return e.call(t, n, i, o, r)
                    };
                  case 5:
                    return function (n, i, o, r, s) {
                      return e.call(t, n, i, o, r, s)
                    }
                }
                return function () {
                  return e.apply(t, arguments)
                }
              }

              function Ot(e) {
                var t = new Xi(e.byteLength);
                return new io(t).set(new io(e)), t
              }

              function Nt(e, t, n) {
                for (var i = n.length, o = -1, r = ho(e.length - i, 0), s = -1, a = t.length, l = Bi(a + r); ++s < a;) l[s] = t[s];
                for (; ++o < i;) l[n[o]] = e[o];
                for (; r--;) l[s++] = e[o++];
                return l
              }

              function Rt(e, t, n) {
                for (var i = -1, o = n.length, r = -1, s = ho(e.length - o, 0), a = -1, l = t.length, c = Bi(s + l); ++r < s;) c[r] = e[r];
                for (var u = r; ++a < l;) c[u + a] = t[a];
                for (; ++i < o;) c[u + n[i]] = e[r++];
                return c
              }

              function Ut(e, t) {
                return function (n, i, o) {
                  var r = t ? t() : {};
                  if (i = fn(i, o, 3), br(n)) for (var s = -1, a = n.length; ++s < a;) {
                    var l = n[s];
                    e(r, l, i(l, s, n), n)
                  } else So(n, function (t, n, o) {
                    e(r, t, i(t, n, o), o)
                  });
                  return r
                }
              }

              function jt(e) {
                return ei(function (t, n) {
                  var i = -1, o = null == t ? 0 : n.length, r = o > 2 ? n[o - 2] : P, s = o > 2 ? n[2] : P,
                    a = o > 1 ? n[o - 1] : P;
                  for ("function" == typeof r ? (r = Dt(r, a, 5), o -= 2) : o -= (r = "function" == typeof a ? a : P) ? 1 : 0, s && xn(n[0], n[1], s) && (r = 3 > o ? P : r, o = 1); ++i < o;) {
                    var l = n[i];
                    l && e(t, l, r)
                  }
                  return t
                })
              }

              function Qt(e, t) {
                return function (n, i) {
                  var o = n ? Mo(n) : 0;
                  if (!Cn(o)) return e(n, i);
                  for (var r = t ? o : -1, s = Bn(n); (t ? r-- : ++r < o) && !1 !== i(s[r], r, s);) ;
                  return n
                }
              }

              function Wt(e) {
                return function (t, n, i) {
                  for (var o = Bn(t), r = i(t), s = r.length, a = e ? s : -1; e ? a-- : ++a < s;) {
                    var l = r[a];
                    if (!1 === n(o[l], l, o)) break
                  }
                  return t
                }
              }

              function Ht(e) {
                return so && eo ? new Qe(e) : null
              }

              function Gt(e) {
                return function (t) {
                  for (var n = -1, i = Pi(wi(t)), o = i.length, r = ""; ++n < o;) r = e(r, i[n], n);
                  return r
                }
              }

              function qt(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e;
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                  }
                  var n = To(e.prototype), i = e.apply(n, t);
                  return si(i) ? i : n
                }
              }

              function Vt(e) {
                return function t(n, i, o) {
                  o && xn(n, i, o) && (i = P);
                  var r = hn(n, e, P, P, P, P, P, i);
                  return r.placeholder = t.placeholder, r
                }
              }

              function zt(e, t) {
                return ei(function (n) {
                  var i = n[0];
                  return null == i ? i : (n.push(t), e.apply(P, n))
                })
              }

              function Xt(e, t) {
                return function (n, i, o) {
                  if (o && xn(n, i, o) && (i = P), 1 == (i = fn(i, o, 3)).length) {
                    var r = function (e, t, n, i) {
                      for (var o = -1, r = e.length, s = i, a = s; ++o < r;) {
                        var l = e[o], c = +t(l);
                        n(c, s) && (s = c, a = l)
                      }
                      return a
                    }(n = br(n) ? n : In(n), i, e, t);
                    if (!n.length || r !== t) return r
                  }
                  return function (e, t, n, i) {
                    var o = i, r = o;
                    return So(e, function (e, s, a) {
                      var l = +t(e, s, a);
                      (n(l, o) || l === i && l === r) && (o = l, r = e)
                    }), r
                  }(n, i, e, t)
                }
              }

              function Jt(e, t) {
                return function (n, i, r) {
                  if (i = fn(i, r, 3), br(n)) {
                    var s = o(n, i, t);
                    return s > -1 ? n[s] : P
                  }
                  return dt(n, i, e)
                }
              }

              function Yt(e) {
                return function (t, n, i) {
                  return t && t.length ? o(t, n = fn(n, i, 3), e) : -1
                }
              }

              function Zt(e) {
                return function (t, n, i) {
                  return dt(t, n = fn(n, i, 3), e, !0)
                }
              }

              function Kt(e) {
                return function () {
                  for (var t, n = arguments.length, i = e ? n : -1, o = 0, r = Bi(n); e ? i-- : ++i < n;) {
                    var s = r[o++] = arguments[i];
                    if ("function" != typeof s) throw new Ri(j);
                    !t && X.prototype.thru && "wrapper" == pn(s) && (t = new X([], !0))
                  }
                  for (i = t ? -1 : n; ++i < n;) {
                    var a = pn(s = r[i]), l = "wrapper" == a ? Ao(s) : P;
                    t = l && Pn(l[0]) && l[1] == (M | L | B | $) && !l[4].length && 1 == l[9] ? t[pn(l[0])].apply(t, l[3]) : 1 == s.length && Pn(s) ? t[a]() : t.thru(s)
                  }
                  return function () {
                    var e = arguments, i = e[0];
                    if (t && 1 == e.length && br(i) && i.length >= N) return t.plant(i).value();
                    for (var o = 0, s = n ? r[o].apply(this, e) : i; ++o < n;) s = r[o].call(this, s);
                    return s
                  }
                }
              }

              function en(e, t) {
                return function (n, i, o) {
                  return "function" == typeof i && o === P && br(n) ? e(n, i) : t(n, Dt(i, o, 3))
                }
              }

              function tn(e) {
                return function (t, n, i) {
                  return ("function" != typeof n || i !== P) && (n = Dt(n, i, 3)), e(t, n, mi)
                }
              }

              function nn(e) {
                return function (t, n, i) {
                  return ("function" != typeof n || i !== P) && (n = Dt(n, i, 3)), e(t, n)
                }
              }

              function on(e) {
                return function (t, n, i) {
                  var o = {};
                  return n = fn(n, i, 3), pt(t, function (t, i, r) {
                    var s = n(t, i, r);
                    t = e ? t : s, o[i = e ? s : i] = t
                  }), o
                }
              }

              function rn(e) {
                return function (t, n, i) {
                  return t = a(t), (e ? t : "") + cn(t, n, i) + (e ? "" : t)
                }
              }

              function sn(e) {
                var t = ei(function (n, i) {
                  var o = b(i, t.placeholder);
                  return hn(n, e, P, i, o)
                });
                return t
              }

              function an(e, t) {
                return function (n, i, o, r) {
                  var s = arguments.length < 3;
                  return "function" == typeof i && r === P && br(n) ? e(n, i, o, s) : function (e, t, n, i, o) {
                    return o(e, function (e, o, r) {
                      n = i ? (i = !1, e) : t(n, e, o, r)
                    }), n
                  }(n, fn(i, r, 4), o, s, t)
                }
              }

              function ln(e, t, n, i, o, r, s, a, l, c) {
                var u = t & M, d = t & T, h = t & S, f = t & L, p = t & k, v = t & I, g = h ? P : qt(e);
                return function m() {
                  for (var y = arguments.length, w = y, x = Bi(y); w--;) x[w] = arguments[w];
                  if (i && (x = Nt(x, i, o)), r && (x = Rt(x, r, s)), f || v) {
                    var E = m.placeholder, C = b(x, E);
                    if (y -= C.length, c > y) {
                      var k = a ? He(a) : P, L = ho(c - y, 0);
                      t |= f ? B : A, t &= ~(f ? A : B), p || (t &= ~(T | S));
                      var I = [e, t, n, f ? x : P, f ? C : P, f ? P : x, f ? P : C, k, l, L], M = ln.apply(P, I);
                      return Pn(e) && $o(M, I), M.placeholder = E, M
                    }
                  }
                  var $ = d ? n : this, F = h ? $[e] : e;
                  return a && (x = function (e, t) {
                    for (var n = e.length, i = fo(t.length, n), o = He(e); i--;) {
                      var r = t[i];
                      e[i] = wn(r, n) ? o[r] : P
                    }
                    return e
                  }(x, a)), u && l < x.length && (x.length = l), this && this !== et && this instanceof m && (F = g || qt(e)), F.apply($, x)
                }
              }

              function cn(e, t, n) {
                var i = e.length;
                if (i >= (t = +t) || !co(t)) return "";
                var o = t - i;
                return xi(n = null == n ? " " : n + "", ro(o / n.length)).slice(0, o)
              }

              function un(e) {
                var t = Fi[e];
                return function (e, n) {
                  return (n = n === P ? 0 : +n || 0) ? (n = Zi(10, n), t(e * n) / n) : t(e)
                }
              }

              function dn(e) {
                return function (t, n, i, o) {
                  var r = fn(i);
                  return null == i && r === rt ? Ft(t, n, e) : _t(t, n, r(i, o, 1), e)
                }
              }

              function hn(e, t, n, i, o, r, s, a) {
                var l = t & S;
                if (!l && "function" != typeof e) throw new Ri(j);
                var c = i ? i.length : 0;
                if (c || (t &= ~(B | A), i = o = P), c -= o ? o.length : 0, t & A) {
                  var u = i, d = o;
                  i = o = P
                }
                var h = l ? P : Ao(e), f = [e, t, n, i, o, u, d, r, s, a];
                if (h && (function (e, t) {
                  var n = e[1], i = t[1], o = n | i, r = M > o,
                    s = i == M && n == L || i == M && n == $ && e[7].length <= t[8] || i == (M | $) && n == L;
                  if (!r && !s) return e;
                  i & T && (e[2] = t[2], o |= n & T ? 0 : k);
                  var a = t[3];
                  if (a) {
                    var l = e[3];
                    e[3] = l ? Nt(l, a, t[4]) : He(a), e[4] = l ? b(e[3], Q) : He(t[4])
                  }
                  (a = t[5]) && (l = e[5], e[5] = l ? Rt(l, a, t[6]) : He(a), e[6] = l ? b(e[5], Q) : He(t[6])), (a = t[7]) && (e[7] = He(a)), i & M && (e[8] = null == e[8] ? t[8] : fo(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = o
                }(f, h), t = f[1], a = f[9]), f[9] = null == a ? l ? 0 : e.length : ho(a - c, 0) || 0, t == T) var p = function (e, t) {
                  var n = qt(e);
                  return function i() {
                    return (this && this !== et && this instanceof i ? n : e).apply(t, arguments)
                  }
                }(f[0], f[2]); else p = t != B && t != (T | B) || f[4].length ? ln.apply(P, f) : function (e, t, n, i) {
                  var o = t & T, r = qt(e);
                  return function t() {
                    for (var s = -1, a = arguments.length, l = -1, c = i.length, u = Bi(c + a); ++l < c;) u[l] = i[l];
                    for (; a--;) u[l++] = arguments[++s];
                    return (this && this !== et && this instanceof t ? r : e).apply(o ? n : this, u)
                  }
                }.apply(P, f);
                return (h ? Bo : $o)(p, f)
              }

              function fn(e, t, i) {
                var o = n.callback || Ci;
                return o = o === Ci ? rt : o, i ? o(e, t, i) : o
              }

              function pn(e) {
                for (var t = e.name + "", n = Co[t], i = n ? n.length : 0; i--;) {
                  var o = n[i], r = o.func;
                  if (null == r || r == e) return o.name
                }
                return t
              }

              function vn(e, t, i) {
                var o = n.indexOf || Dn;
                return o = o === Dn ? r : o, e ? o(e, t, i) : o
              }

              function gn(e) {
                for (var t = yi(e), n = t.length; n--;) t[n][2] = Tn(t[n][1]);
                return t
              }

              function mn(e, t) {
                var n = null == e ? P : e[t];
                return ai(n) ? n : P
              }

              function yn(e, t, n) {
                null == e || En(t, e) || (e = 1 == (t = An(t)).length ? e : mt(e, St(t, 0, -1)), t = On(t));
                var i = null == e ? e : e[t];
                return null == i ? P : i.apply(e, n)
              }

              function bn(e) {
                return null != e && Cn(Mo(e))
              }

              function wn(e, t) {
                return e = "number" == typeof e || $e.test(e) ? +e : -1, t = null == t ? Eo : t, e > -1 && e % 1 == 0 && t > e
              }

              function xn(e, t, n) {
                if (!si(n)) return !1;
                var i = typeof t;
                if ("number" == i ? bn(n) && wn(t, n.length) : "string" == i && t in n) {
                  var o = n[t];
                  return e == e ? e === o : o != o
                }
                return !1
              }

              function En(e, t) {
                var n = typeof e;
                return !!("string" == n && Pe.test(e) || "number" == n) || !br(e) && (!Ee.test(e) || null != t && e in Bn(t))
              }

              function Pn(e) {
                var t = pn(e), i = n[t];
                if ("function" != typeof i || !(t in K.prototype)) return !1;
                if (e === i) return !0;
                var o = Ao(i);
                return !!o && e === o[0]
              }

              function Cn(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && Eo >= e
              }

              function Tn(e) {
                return e == e && !si(e)
              }

              function Sn(e, t) {
                e = Bn(e);
                for (var n = -1, i = t.length, o = {}; ++n < i;) {
                  var r = t[n];
                  r in e && (o[r] = e[r])
                }
                return o
              }

              function kn(e, t) {
                var n = {};
                return ft(e, function (e, i, o) {
                  t(e, i, o) && (n[i] = e)
                }), n
              }

              function Ln(e) {
                for (var t = mi(e), n = t.length, i = n && e.length, o = !!i && Cn(i) && (br(e) || ni(e)), r = -1, s = []; ++r < n;) {
                  var a = t[r];
                  (o && wn(a, i) || Hi.call(e, a)) && s.push(a)
                }
                return s
              }

              function In(e) {
                return null == e ? [] : bn(e) ? si(e) ? e : Di(e) : bi(e)
              }

              function Bn(e) {
                return si(e) ? e : Di(e)
              }

              function An(e) {
                if (br(e)) return e;
                var t = [];
                return a(e).replace(Ce, function (e, n, i, o) {
                  t.push(i ? o.replace(Le, "$1") : n || e)
                }), t
              }

              function Mn(e) {
                return e instanceof K ? e.clone() : new X(e.__wrapped__, e.__chain__, He(e.__actions__))
              }

              function $n(e, t, n) {
                return e && e.length ? ((n ? xn(e, t, n) : null == t) && (t = 1), St(e, 0 > t ? 0 : t)) : []
              }

              function Fn(e, t, n) {
                var i = e ? e.length : 0;
                return i ? ((n ? xn(e, t, n) : null == t) && (t = 1), St(e, 0, 0 > (t = i - (+t || 0)) ? 0 : t)) : []
              }

              function _n(e) {
                return e ? e[0] : P
              }

              function Dn(e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return -1;
                if ("number" == typeof n) n = 0 > n ? ho(i + n, 0) : n; else if (n) {
                  var o = Ft(e, t);
                  return i > o && (t == t ? t === e[o] : e[o] != e[o]) ? o : -1
                }
                return r(e, t, n || 0)
              }

              function On(e) {
                var t = e ? e.length : 0;
                return t ? e[t - 1] : P
              }

              function Nn(e) {
                return $n(e, 1)
              }

              function Rn(e, t, n, i) {
                if (!e || !e.length) return [];
                null != t && "boolean" != typeof t && (n = xn(e, t, i = n) ? P : t, t = !1);
                var o = fn();
                return (null != n || o !== rt) && (n = o(n, i, 3)), t && vn() === r ? function (e, t) {
                  for (var n, i = -1, o = e.length, r = -1, s = []; ++i < o;) {
                    var a = e[i], l = t ? t(a, i, e) : a;
                    i && n === l || (n = l, s[++r] = a)
                  }
                  return s
                }(e, n) : Bt(e, n)
              }

              function Un(e) {
                if (!e || !e.length) return [];
                var t = -1, n = 0;
                e = Ve(e, function (e) {
                  return bn(e) ? (n = ho(e.length, n), !0) : void 0
                });
                for (var i = Bi(n); ++t < n;) i[t] = ze(e, Pt(t));
                return i
              }

              function jn(e, t, n) {
                if (!e || !e.length) return [];
                var i = Un(e);
                return null == t ? i : (t = Dt(t, n, 4), ze(i, function (e) {
                  return Je(e, t, P, !0)
                }))
              }

              function Qn(e, t) {
                var n = -1, i = e ? e.length : 0, o = {};
                for (!i || t || br(e[0]) || (t = []); ++n < i;) {
                  var r = e[n];
                  t ? o[r] = t[n] : r && (o[r[0]] = r[1])
                }
                return o
              }

              function Wn(e) {
                var t = n(e);
                return t.__chain__ = !0, t
              }

              function Hn(e, t, n) {
                return t.call(n, e)
              }

              function Gn(e, t, n) {
                var i = br(e) ? qe : ct;
                return n && xn(e, t, n) && (t = P), ("function" != typeof t || n !== P) && (t = fn(t, n, 3)), i(e, t)
              }

              function qn(e, t, n) {
                return (br(e) ? Ve : ut)(e, t = fn(t, n, 3))
              }

              function Vn(e, t, n, i) {
                var o = e ? Mo(e) : 0;
                return Cn(o) || (o = (e = bi(e)).length), n = "number" != typeof n || i && xn(t, n, i) ? 0 : 0 > n ? ho(o + n, 0) : n || 0, "string" == typeof e || !br(e) && di(e) ? o >= n && e.indexOf(t, n) > -1 : !!o && vn(e, t, n) > -1
              }

              function zn(e, t, n) {
                return (br(e) ? ze : wt)(e, t = fn(t, n, 3))
              }

              function Xn(e, t, n) {
                if (n ? xn(e, t, n) : null == t) return (i = (e = In(e)).length) > 0 ? e[Tt(0, i - 1)] : P;
                var i, o = -1, r = pi(e), s = (i = r.length) - 1;
                for (t = fo(0 > t ? 0 : +t || 0, i); ++o < t;) {
                  var a = Tt(o, s), l = r[a];
                  r[a] = r[o], r[o] = l
                }
                return r.length = t, r
              }

              function Jn(e, t, n) {
                var i = br(e) ? Ye : kt;
                return n && xn(e, t, n) && (t = P), ("function" != typeof t || n !== P) && (t = fn(t, n, 3)), i(e, t)
              }

              function Yn(e, t) {
                var n;
                if ("function" != typeof t) {
                  if ("function" != typeof e) throw new Ri(j);
                  var i = e;
                  e = t, t = i
                }
                return function () {
                  return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = P), n
                }
              }

              function Zn(e, t, n) {
                function i(t, n) {
                  n && Ji(n), l = h = f = P, t && (p = rr(), c = e.apply(d, a), h || l || (a = d = P))
                }

                function o() {
                  var e = t - (rr() - u);
                  0 >= e || e > t ? i(f, l) : h = to(o, e)
                }

                function r() {
                  i(g, h)
                }

                function s() {
                  if (a = arguments, u = rr(), d = this, f = g && (h || !m), !1 === v) var n = m && !h; else {
                    l || m || (p = u);
                    var i = v - (u - p), s = 0 >= i || i > v;
                    s ? (l && (l = Ji(l)), p = u, c = e.apply(d, a)) : l || (l = to(r, i))
                  }
                  return s && h ? h = Ji(h) : h || t === v || (h = to(o, t)), n && (s = !0, c = e.apply(d, a)), !s || h || l || (a = d = P), c
                }

                var a, l, c, u, d, h, f, p = 0, v = !1, g = !0;
                if ("function" != typeof e) throw new Ri(j);
                if (t = 0 > t ? 0 : +t || 0, !0 === n) {
                  var m = !0;
                  g = !1
                } else si(n) && (m = !!n.leading, v = "maxWait" in n && ho(+n.maxWait || 0, t), g = "trailing" in n ? !!n.trailing : g);
                return s.cancel = function () {
                  h && Ji(h), l && Ji(l), p = 0, l = h = f = P
                }, s
              }

              function Kn(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new Ri(j);
                var n = function () {
                  var i = arguments, o = t ? t.apply(this, i) : i[0], r = n.cache;
                  if (r.has(o)) return r.get(o);
                  var s = e.apply(this, i);
                  return n.cache = r.set(o, s), s
                };
                return n.cache = new Kn.Cache, n
              }

              function ei(e, t) {
                if ("function" != typeof e) throw new Ri(j);
                return t = ho(t === P ? e.length - 1 : +t || 0, 0), function () {
                  for (var n = arguments, i = -1, o = ho(n.length - t, 0), r = Bi(o); ++i < o;) r[i] = n[t + i];
                  switch (t) {
                    case 0:
                      return e.call(this, r);
                    case 1:
                      return e.call(this, n[0], r);
                    case 2:
                      return e.call(this, n[0], n[1], r)
                  }
                  var s = Bi(t + 1);
                  for (i = -1; ++i < t;) s[i] = n[i];
                  return s[t] = r, e.apply(this, s)
                }
              }

              function ti(e, t) {
                return e > t
              }

              function ni(e) {
                return m(e) && bn(e) && Hi.call(e, "callee") && !Ki.call(e, "callee")
              }

              function ii(e, t, n, i) {
                var o = (n = "function" == typeof n ? Dt(n, i, 3) : P) ? n(e, t) : P;
                return o === P ? yt(e, t, n) : !!o
              }

              function oi(e) {
                return m(e) && "string" == typeof e.message && qi.call(e) == V
              }

              function ri(e) {
                return si(e) && qi.call(e) == z
              }

              function si(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
              }

              function ai(e) {
                return null != e && (ri(e) ? zi.test(Wi.call(e)) : m(e) && Me.test(e))
              }

              function li(e) {
                return "number" == typeof e || m(e) && qi.call(e) == J
              }

              function ci(e) {
                var t, n;
                return !(!m(e) || qi.call(e) != Y || ni(e) || !(Hi.call(e, "constructor") || (t = e.constructor, "function" != typeof t || t instanceof t))) && (ft(e, function (e, t) {
                  n = t
                }), n === P || Hi.call(e, n))
              }

              function ui(e) {
                return si(e) && qi.call(e) == Z
              }

              function di(e) {
                return "string" == typeof e || m(e) && qi.call(e) == ee
              }

              function hi(e) {
                return m(e) && Cn(e.length) && !!Ue[qi.call(e)]
              }

              function fi(e, t) {
                return t > e
              }

              function pi(e) {
                var t = e ? Mo(e) : 0;
                return Cn(t) ? t ? He(e) : [] : bi(e)
              }

              function vi(e) {
                return ot(e, mi(e))
              }

              function gi(e) {
                return gt(e, mi(e))
              }

              function mi(e) {
                if (null == e) return [];
                si(e) || (e = Di(e));
                var t = e.length;
                t = t && Cn(t) && (br(e) || ni(e)) && t || 0;
                for (var n = e.constructor, i = -1, o = "function" == typeof n && n.prototype === e, r = Bi(t), s = t > 0; ++i < t;) r[i] = i + "";
                for (var a in e) s && wn(a, t) || "constructor" == a && (o || !Hi.call(e, a)) || r.push(a);
                return r
              }

              function yi(e) {
                e = Bn(e);
                for (var t = -1, n = Br(e), i = n.length, o = Bi(i); ++t < i;) {
                  var r = n[t];
                  o[t] = [r, e[r]]
                }
                return o
              }

              function bi(e) {
                return At(e, Br(e))
              }

              function wi(e) {
                return (e = a(e)) && e.replace(Fe, h).replace(ke, "")
              }

              function xi(e, t) {
                var n = "";
                if (e = a(e), 1 > (t = +t) || !e || !co(t)) return n;
                do {
                  t % 2 && (n += e), t = ao(t / 2), e += e
                } while (t);
                return n
              }

              function Ei(e, t, n) {
                var i = e;
                return (e = a(e)) ? (n ? xn(i, t, n) : null == t) ? e.slice(w(e), x(e) + 1) : (t += "", e.slice(l(e, t), c(e, t) + 1)) : e
              }

              function Pi(e, t, n) {
                return n && xn(e, t, n) && (t = P), (e = a(e)).match(t || Oe) || []
              }

              function Ci(e, t, n) {
                return n && xn(e, t, n) && (t = P), m(e) ? Si(e) : rt(e, t)
              }

              function Ti(e) {
                return e
              }

              function Si(e) {
                return xt(st(e, !0))
              }

              function ki(e, t, n) {
                if (null == n) {
                  var i = si(t), o = i ? Br(t) : P, r = o && o.length ? gt(t, o) : P;
                  (r ? r.length : i) || (r = !1, n = t, t = e, e = this)
                }
                r || (r = gt(t, Br(t)));
                var s = !0, a = -1, l = ri(e), c = r.length;
                !1 === n ? s = !1 : si(n) && "chain" in n && (s = n.chain);
                for (; ++a < c;) {
                  var u = r[a], d = t[u];
                  e[u] = d, l && (e.prototype[u] = function (t) {
                    return function () {
                      var n = this.__chain__;
                      if (s || n) {
                        var i = e(this.__wrapped__);
                        return (i.__actions__ = He(this.__actions__)).push({
                          func: t,
                          args: arguments,
                          thisArg: e
                        }), i.__chain__ = n, i
                      }
                      return t.apply(e, Xe([this.value()], arguments))
                    }
                  }(d))
                }
                return e
              }

              function Li() {
              }

              function Ii(e) {
                return En(e) ? Pt(e) : function (e) {
                  var t = e + "";
                  return e = An(e), function (n) {
                    return mt(n, e, t)
                  }
                }(e)
              }

              var Bi = (t = t ? tt.defaults(et.Object(), t, tt.pick(et, Ne)) : et).Array, Ai = t.Date, Mi = t.Error,
                $i = t.Function, Fi = t.Math, _i = t.Number, Di = t.Object, Oi = t.RegExp, Ni = t.String,
                Ri = t.TypeError, Ui = Bi.prototype, ji = Di.prototype, Qi = Ni.prototype, Wi = $i.prototype.toString,
                Hi = ji.hasOwnProperty, Gi = 0, qi = ji.toString, Vi = et._,
                zi = Oi("^" + Wi.call(Hi).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Xi = t.ArrayBuffer, Ji = t.clearTimeout, Yi = t.parseFloat, Zi = Fi.pow, Ki = ji.propertyIsEnumerable,
                eo = mn(t, "Set"), to = t.setTimeout, no = Ui.splice, io = t.Uint8Array, oo = mn(t, "WeakMap"),
                ro = Fi.ceil, so = mn(Di, "create"), ao = Fi.floor, lo = mn(Bi, "isArray"), co = t.isFinite,
                uo = mn(Di, "keys"), ho = Fi.max, fo = Fi.min, po = mn(Ai, "now"), vo = t.parseInt, go = Fi.random,
                mo = _i.NEGATIVE_INFINITY, yo = _i.POSITIVE_INFINITY, bo = 4294967295, wo = bo - 1, xo = bo >>> 1,
                Eo = 9007199254740991, Po = oo && new oo, Co = {};
              n.support = {}, n.templateSettings = {
                escape: be,
                evaluate: we,
                interpolate: xe,
                variable: "",
                imports: {_: n}
              };
              var To = function () {
                function e() {
                }

                return function (t) {
                  if (si(t)) {
                    e.prototype = t;
                    var n = new e;
                    e.prototype = P
                  }
                  return n || {}
                }
              }(), So = Qt(pt), ko = Qt(vt, !0), Lo = Wt(), Io = Wt(!0), Bo = Po ? function (e, t) {
                return Po.set(e, t), e
              } : Ti, Ao = Po ? function (e) {
                return Po.get(e)
              } : Li, Mo = Pt("length"), $o = function () {
                var e = 0, t = 0;
                return function (n, i) {
                  var o = rr(), r = O - (o - t);
                  if (t = o, r > 0) {
                    if (++e >= D) return n
                  } else e = 0;
                  return Bo(n, i)
                }
              }(), Fo = ei(function (e, t) {
                return m(e) && bn(e) ? lt(e, ht(t, !1, !0)) : []
              }), _o = Yt(), Do = Yt(!0), Oo = ei(function (e) {
                for (var t = e.length, n = t, i = Bi(d), o = vn(), s = o === r, a = []; n--;) {
                  var l = e[n] = bn(l = e[n]) ? l : [];
                  i[n] = s && l.length >= 120 ? Ht(n && l) : null
                }
                var c = e[0], u = -1, d = c ? c.length : 0, h = i[0];
                e:for (; ++u < d;) if (l = c[u], (h ? We(h, l) : o(a, l, 0)) < 0) {
                  for (n = t; --n;) {
                    var f = i[n];
                    if ((f ? We(f, l) : o(e[n], l, 0)) < 0) continue e
                  }
                  h && h.push(l), a.push(l)
                }
                return a
              }), No = ei(function (e, t) {
                var n = it(e, t = ht(t));
                return Ct(e, t.sort(i)), n
              }), Ro = dn(), Uo = dn(!0), jo = ei(function (e) {
                return Bt(ht(e, !1, !0))
              }), Qo = ei(function (e, t) {
                return bn(e) ? lt(e, t) : []
              }), Wo = ei(Un), Ho = ei(function (e) {
                var t = e.length, n = t > 2 ? e[t - 2] : P, i = t > 1 ? e[t - 1] : P;
                return t > 2 && "function" == typeof n ? t -= 2 : (n = t > 1 && "function" == typeof i ? (--t, i) : P, i = P), e.length = t, jn(e, n, i)
              }), Go = ei(function (e) {
                return e = ht(e), this.thru(function (t) {
                  return function (e, t) {
                    for (var n = -1, i = e.length, o = -1, r = t.length, s = Bi(i + r); ++n < i;) s[n] = e[n];
                    for (; ++o < r;) s[n++] = t[o];
                    return s
                  }(br(t) ? t : [Bn(t)], e)
                })
              }), qo = ei(function (e, t) {
                return it(e, ht(t))
              }), Vo = Ut(function (e, t, n) {
                Hi.call(e, n) ? ++e[n] : e[n] = 1
              }), zo = Jt(So), Xo = Jt(ko, !0), Jo = en(Ge, So), Yo = en(function (e, t) {
                for (var n = e.length; n-- && !1 !== t(e[n], n, e);) ;
                return e
              }, ko), Zo = Ut(function (e, t, n) {
                Hi.call(e, n) ? e[n].push(t) : e[n] = [t]
              }), Ko = Ut(function (e, t, n) {
                e[n] = t
              }), er = ei(function (e, t, n) {
                var i = -1, o = "function" == typeof t, r = En(t), s = bn(e) ? Bi(e.length) : [];
                return So(e, function (e) {
                  var a = o ? t : r && null != e ? e[t] : P;
                  s[++i] = a ? a.apply(e, n) : yn(e, t, n)
                }), s
              }), tr = Ut(function (e, t, n) {
                e[n ? 0 : 1].push(t)
              }, function () {
                return [[], []]
              }), nr = an(Je, So), ir = an(function (e, t, n, i) {
                var o = e.length;
                for (i && o && (n = e[--o]); o--;) n = t(n, e[o], o, e);
                return n
              }, ko), or = ei(function (e, t) {
                if (null == e) return [];
                var n = t[2];
                return n && xn(t[0], t[1], n) && (t.length = 1), It(e, ht(t), [])
              }), rr = po || function () {
                return (new Ai).getTime()
              }, sr = ei(function (e, t, n) {
                var i = T;
                if (n.length) {
                  var o = b(n, sr.placeholder);
                  i |= B
                }
                return hn(e, i, t, n, o)
              }), ar = ei(function (e, t) {
                for (var n = -1, i = (t = t.length ? ht(t) : gi(e)).length; ++n < i;) {
                  var o = t[n];
                  e[o] = hn(e[o], T, e)
                }
                return e
              }), lr = ei(function (e, t, n) {
                var i = T | S;
                if (n.length) {
                  var o = b(n, lr.placeholder);
                  i |= B
                }
                return hn(t, i, e, n, o)
              }), cr = Vt(L), ur = Vt(I), dr = ei(function (e, t) {
                return at(e, 1, t)
              }), hr = ei(function (e, t, n) {
                return at(e, t, n)
              }), fr = Kt(), pr = Kt(!0), vr = ei(function (e, t) {
                if (t = ht(t), "function" != typeof e || !qe(t, s)) throw new Ri(j);
                var n = t.length;
                return ei(function (i) {
                  for (var o = fo(i.length, n); o--;) i[o] = t[o](i[o]);
                  return e.apply(this, i)
                })
              }), gr = sn(B), mr = sn(A), yr = ei(function (e, t) {
                return hn(e, $, P, P, P, ht(t))
              }), br = lo || function (e) {
                return m(e) && Cn(e.length) && qi.call(e) == H
              }, wr = jt(function e(t, n, i, o, r) {
                if (!si(t)) return t;
                var s = bn(n) && (br(n) || hi(n)), a = s ? P : Br(n);
                return Ge(a || n, function (l, c) {
                  if (a && (l = n[c = l]), m(l)) o || (o = []), r || (r = []), function (e, t, n, i, o, r, s) {
                    for (var a = r.length, l = t[n]; a--;) if (r[a] == l) return void (e[n] = s[a]);
                    var c = e[n], u = o ? o(c, l, n, e, t) : P, d = u === P;
                    d && (u = l, bn(l) && (br(l) || hi(l)) ? u = br(c) ? c : bn(c) ? He(c) : [] : ci(l) || ni(l) ? u = ni(c) ? vi(c) : ci(c) ? c : {} : d = !1), r.push(l), s.push(u), d ? e[n] = i(u, l, o, r, s) : (u == u ? u !== c : c == c) && (e[n] = u)
                  }(t, n, c, e, i, o, r); else {
                    var u = t[c], d = i ? i(u, l, c, t, n) : P, h = d === P;
                    h && (d = l), d === P && (!s || c in t) || !h && (d == d ? d === u : u != u) || (t[c] = d)
                  }
                }), t
              }), xr = jt(function (e, t, n) {
                return n ? Ke(e, t, n) : nt(e, t)
              }), Er = zt(xr, function (e, t) {
                return e === P ? t : e
              }), Pr = zt(wr, function e(t, n) {
                return t === P ? n : wr(t, n, e)
              }), Cr = Zt(pt), Tr = Zt(vt), Sr = tn(Lo), kr = tn(Io), Lr = nn(pt), Ir = nn(vt), Br = uo ? function (e) {
                var t = null == e ? P : e.constructor;
                return "function" == typeof t && t.prototype === e || "function" != typeof e && bn(e) ? Ln(e) : si(e) ? uo(e) : []
              } : Ln, Ar = on(!0), Mr = on(), $r = ei(function (e, t) {
                if (null == e) return {};
                if ("function" != typeof t[0]) return t = ze(ht(t), Ni), Sn(e, lt(mi(e), t));
                var n = Dt(t[0], t[1], 3);
                return kn(e, function (e, t, i) {
                  return !n(e, t, i)
                })
              }), Fr = ei(function (e, t) {
                return null == e ? {} : "function" == typeof t[0] ? kn(e, Dt(t[0], t[1], 3)) : Sn(e, ht(t))
              }), _r = Gt(function (e, t, n) {
                return t = t.toLowerCase(), e + (n ? t.charAt(0).toUpperCase() + t.slice(1) : t)
              }), Dr = Gt(function (e, t, n) {
                return e + (n ? "-" : "") + t.toLowerCase()
              }), Or = rn(), Nr = rn(!0), Rr = Gt(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase()
              }), Ur = Gt(function (e, t, n) {
                return e + (n ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
              }), jr = ei(function (e, t) {
                try {
                  return e.apply(P, t)
                } catch (e) {
                  return oi(e) ? e : new Mi(e)
                }
              }), Qr = ei(function (e, t) {
                return function (n) {
                  return yn(n, e, t)
                }
              }), Wr = ei(function (e, t) {
                return function (n) {
                  return yn(e, n, t)
                }
              }), Hr = un("ceil"), Gr = un("floor"), qr = Xt(ti, mo), Vr = Xt(fi, yo), zr = un("round");
              return n.prototype = y.prototype, X.prototype = To(y.prototype), X.prototype.constructor = X, K.prototype = To(y.prototype), K.prototype.constructor = K, te.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e]
              }, te.prototype.get = function (e) {
                return "__proto__" == e ? P : this.__data__[e]
              }, te.prototype.has = function (e) {
                return "__proto__" != e && Hi.call(this.__data__, e)
              }, te.prototype.set = function (e, t) {
                return "__proto__" != e && (this.__data__[e] = t), this
              }, Qe.prototype.push = function (e) {
                var t = this.data;
                "string" == typeof e || si(e) ? t.set.add(e) : t.hash[e] = !0
              }, Kn.Cache = te, n.after = function (e, t) {
                if ("function" != typeof t) {
                  if ("function" != typeof e) throw new Ri(j);
                  var n = e;
                  e = t, t = n
                }
                return e = co(e = +e) ? e : 0, function () {
                  return --e < 1 ? t.apply(this, arguments) : void 0
                }
              }, n.ary = function (e, t, n) {
                return n && xn(e, t, n) && (t = P), t = e && null == t ? e.length : ho(+t || 0, 0), hn(e, M, P, P, P, P, t)
              }, n.assign = xr, n.at = qo, n.before = Yn, n.bind = sr, n.bindAll = ar, n.bindKey = lr, n.callback = Ci, n.chain = Wn, n.chunk = function (e, t, n) {
                t = (n ? xn(e, t, n) : null == t) ? 1 : ho(ao(t) || 1, 1);
                for (var i = 0, o = e ? e.length : 0, r = -1, s = Bi(ro(o / t)); o > i;) s[++r] = St(e, i, i += t);
                return s
              }, n.compact = function (e) {
                for (var t = -1, n = e ? e.length : 0, i = -1, o = []; ++t < n;) {
                  var r = e[t];
                  r && (o[++i] = r)
                }
                return o
              }, n.constant = function (e) {
                return function () {
                  return e
                }
              }, n.countBy = Vo, n.create = function (e, t, n) {
                var i = To(e);
                return n && xn(e, t, n) && (t = P), t ? nt(i, t) : i
              }, n.curry = cr, n.curryRight = ur, n.debounce = Zn, n.defaults = Er, n.defaultsDeep = Pr, n.defer = dr, n.delay = hr, n.difference = Fo, n.drop = $n, n.dropRight = Fn, n.dropRightWhile = function (e, t, n) {
                return e && e.length ? Mt(e, fn(t, n, 3), !0, !0) : []
              }, n.dropWhile = function (e, t, n) {
                return e && e.length ? Mt(e, fn(t, n, 3), !0) : []
              }, n.fill = function (e, t, n, i) {
                var o = e ? e.length : 0;
                return o ? (n && "number" != typeof n && xn(e, t, n) && (n = 0, i = o), function (e, t, n, i) {
                  var o = e.length;
                  for (0 > (n = null == n ? 0 : +n || 0) && (n = -n > o ? 0 : o + n), 0 > (i = i === P || i > o ? o : +i || 0) && (i += o), o = n > i ? 0 : i >>> 0, n >>>= 0; o > n;) e[n++] = t;
                  return e
                }(e, t, n, i)) : []
              }, n.filter = qn, n.flatten = function (e, t, n) {
                var i = e ? e.length : 0;
                return n && xn(e, t, n) && (t = !1), i ? ht(e, t) : []
              }, n.flattenDeep = function (e) {
                return e && e.length ? ht(e, !0) : []
              }, n.flow = fr, n.flowRight = pr, n.forEach = Jo, n.forEachRight = Yo, n.forIn = Sr, n.forInRight = kr, n.forOwn = Lr, n.forOwnRight = Ir, n.functions = gi, n.groupBy = Zo, n.indexBy = Ko, n.initial = function (e) {
                return Fn(e, 1)
              }, n.intersection = Oo, n.invert = function (e, t, n) {
                n && xn(e, t, n) && (t = P);
                for (var i = -1, o = Br(e), r = o.length, s = {}; ++i < r;) {
                  var a = o[i], l = e[a];
                  t ? Hi.call(s, l) ? s[l].push(a) : s[l] = [a] : s[l] = a
                }
                return s
              }, n.invoke = er, n.keys = Br, n.keysIn = mi, n.map = zn, n.mapKeys = Ar, n.mapValues = Mr, n.matches = Si, n.matchesProperty = function (e, t) {
                return Et(e, st(t, !0))
              }, n.memoize = Kn, n.merge = wr, n.method = Qr, n.methodOf = Wr, n.mixin = ki, n.modArgs = vr, n.negate = function (e) {
                if ("function" != typeof e) throw new Ri(j);
                return function () {
                  return !e.apply(this, arguments)
                }
              }, n.omit = $r, n.once = function (e) {
                return Yn(2, e)
              }, n.pairs = yi, n.partial = gr, n.partialRight = mr, n.partition = tr, n.pick = Fr, n.pluck = function (e, t) {
                return zn(e, Ii(t))
              }, n.property = Ii, n.propertyOf = function (e) {
                return function (t) {
                  return mt(e, An(t), t + "")
                }
              }, n.pull = function () {
                var e = arguments, t = e[0];
                if (!t || !t.length) return t;
                for (var n = 0, i = vn(), o = e.length; ++n < o;) for (var r = 0, s = e[n]; (r = i(t, s, r)) > -1;) no.call(t, r, 1);
                return t
              }, n.pullAt = No, n.range = function (e, t, n) {
                n && xn(e, t, n) && (t = n = P), e = +e || 0, null == t ? (t = e, e = 0) : t = +t || 0;
                for (var i = -1, o = ho(ro((t - e) / ((n = null == n ? 1 : +n || 0) || 1)), 0), r = Bi(o); ++i < o;) r[i] = e, e += n;
                return r
              }, n.rearg = yr, n.reject = function (e, t, n) {
                var i = br(e) ? Ve : ut;
                return t = fn(t, n, 3), i(e, function (e, n, i) {
                  return !t(e, n, i)
                })
              }, n.remove = function (e, t, n) {
                var i = [];
                if (!e || !e.length) return i;
                var o = -1, r = [], s = e.length;
                for (t = fn(t, n, 3); ++o < s;) {
                  var a = e[o];
                  t(a, o, e) && (i.push(a), r.push(o))
                }
                return Ct(e, r), i
              }, n.rest = Nn, n.restParam = ei, n.set = function (e, t, n) {
                if (null == e) return e;
                for (var i = t + "", o = -1, r = (t = null != e[i] || En(t, e) ? [i] : An(t)).length, s = r - 1, a = e; null != a && ++o < r;) {
                  var l = t[o];
                  si(a) && (o == s ? a[l] = n : null == a[l] && (a[l] = wn(t[o + 1]) ? [] : {})), a = a[l]
                }
                return e
              }, n.shuffle = function (e) {
                return Xn(e, yo)
              }, n.slice = function (e, t, n) {
                var i = e ? e.length : 0;
                return i ? (n && "number" != typeof n && xn(e, t, n) && (t = 0, n = i), St(e, t, n)) : []
              }, n.sortBy = function (e, t, n) {
                if (null == e) return [];
                n && xn(e, t, n) && (t = P);
                var i = -1;
                return t = fn(t, n, 3), Lt(wt(e, function (e, n, o) {
                  return {criteria: t(e, n, o), index: ++i, value: e}
                }), u)
              }, n.sortByAll = or, n.sortByOrder = function (e, t, n, i) {
                return null == e ? [] : (i && xn(t, n, i) && (n = P), br(t) || (t = null == t ? [] : [t]), br(n) || (n = null == n ? [] : [n]), It(e, t, n))
              }, n.spread = function (e) {
                if ("function" != typeof e) throw new Ri(j);
                return function (t) {
                  return e.apply(this, t)
                }
              }, n.take = function (e, t, n) {
                return e && e.length ? ((n ? xn(e, t, n) : null == t) && (t = 1), St(e, 0, 0 > t ? 0 : t)) : []
              }, n.takeRight = function (e, t, n) {
                var i = e ? e.length : 0;
                return i ? ((n ? xn(e, t, n) : null == t) && (t = 1), St(e, 0 > (t = i - (+t || 0)) ? 0 : t)) : []
              }, n.takeRightWhile = function (e, t, n) {
                return e && e.length ? Mt(e, fn(t, n, 3), !1, !0) : []
              }, n.takeWhile = function (e, t, n) {
                return e && e.length ? Mt(e, fn(t, n, 3)) : []
              }, n.tap = function (e, t, n) {
                return t.call(n, e), e
              },n.throttle = function (e, t, n) {
                var i = !0, o = !0;
                if ("function" != typeof e) throw new Ri(j);
                return !1 === n ? i = !1 : si(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Zn(e, t, {
                  leading: i,
                  maxWait: +t,
                  trailing: o
                })
              },n.thru = Hn,n.times = function (e, t, n) {
                if (1 > (e = ao(e)) || !co(e)) return [];
                var i = -1, o = Bi(fo(e, bo));
                for (t = Dt(t, n, 1); ++i < e;) bo > i ? o[i] = t(i) : t(i);
                return o
              },n.toArray = pi,n.toPlainObject = vi,n.transform = function (e, t, n, i) {
                var o = br(e) || hi(e);
                if (t = fn(t, i, 4), null == n) if (o || si(e)) {
                  var r = e.constructor;
                  n = o ? br(e) ? new r : [] : To(ri(r) ? r.prototype : P)
                } else n = {};
                return (o ? Ge : pt)(e, function (e, i, o) {
                  return t(n, e, i, o)
                }), n
              },n.union = jo,n.uniq = Rn,n.unzip = Un,n.unzipWith = jn,n.values = bi,n.valuesIn = function (e) {
                return At(e, mi(e))
              },n.where = function (e, t) {
                return qn(e, xt(t))
              },n.without = Qo,n.wrap = function (e, t) {
                return hn(t = null == t ? Ti : t, B, P, [e], [])
              },n.xor = function () {
                for (var e = -1, t = arguments.length; ++e < t;) {
                  var n = arguments[e];
                  if (bn(n)) var i = i ? Xe(lt(i, n), lt(n, i)) : n
                }
                return i ? Bt(i) : []
              },n.zip = Wo,n.zipObject = Qn,n.zipWith = Ho,n.backflow = pr,n.collect = zn,n.compose = pr,n.each = Jo,n.eachRight = Yo,n.extend = xr,n.iteratee = Ci,n.methods = gi,n.object = Qn,n.select = qn,n.tail = Nn,n.unique = Rn,ki(n, n),n.add = function (e, t) {
                return (+e || 0) + (+t || 0)
              },n.attempt = jr,n.camelCase = _r,n.capitalize = function (e) {
                return (e = a(e)) && e.charAt(0).toUpperCase() + e.slice(1)
              },n.ceil = Hr,n.clone = function (e, t, n, i) {
                return t && "boolean" != typeof t && xn(e, t, n) ? t = !1 : "function" == typeof t && (i = n, n = t, t = !1), "function" == typeof n ? st(e, t, Dt(n, i, 3)) : st(e, t)
              },n.cloneDeep = function (e, t, n) {
                return "function" == typeof t ? st(e, !0, Dt(t, n, 3)) : st(e, !0)
              },n.deburr = wi,n.endsWith = function (e, t, n) {
                t += "";
                var i = (e = a(e)).length;
                return n = n === P ? i : fo(0 > n ? 0 : +n || 0, i), (n -= t.length) >= 0 && e.indexOf(t, n) == n
              },n.escape = function (e) {
                return (e = a(e)) && ye.test(e) ? e.replace(ge, f) : e
              },n.escapeRegExp = function (e) {
                return (e = a(e)) && Se.test(e) ? e.replace(Te, p) : e || "(?:)"
              },n.every = Gn,n.find = zo,n.findIndex = _o,n.findKey = Cr,n.findLast = Xo,n.findLastIndex = Do,n.findLastKey = Tr,n.findWhere = function (e, t) {
                return zo(e, xt(t))
              },n.first = _n,n.floor = Gr,n.get = function (e, t, n) {
                var i = null == e ? P : mt(e, An(t), t + "");
                return i === P ? n : i
              },n.gt = ti,n.gte = function (e, t) {
                return e >= t
              },n.has = function (e, t) {
                if (null == e) return !1;
                var n = Hi.call(e, t);
                if (!n && !En(t)) {
                  if (null == (e = 1 == (t = An(t)).length ? e : mt(e, St(t, 0, -1)))) return !1;
                  t = On(t), n = Hi.call(e, t)
                }
                return n || Cn(e.length) && wn(t, e.length) && (br(e) || ni(e))
              },n.identity = Ti,n.includes = Vn,n.indexOf = Dn,n.inRange = function (e, t, n) {
                return t = +t || 0, n === P ? (n = t, t = 0) : n = +n || 0, e >= fo(t, n) && e < ho(t, n)
              },n.isArguments = ni,n.isArray = br,n.isBoolean = function (e) {
                return !0 === e || !1 === e || m(e) && qi.call(e) == G
              },n.isDate = function (e) {
                return m(e) && qi.call(e) == q
              },n.isElement = function (e) {
                return !!e && 1 === e.nodeType && m(e) && !ci(e)
              },n.isEmpty = function (e) {
                return null == e || (bn(e) && (br(e) || di(e) || ni(e) || m(e) && ri(e.splice)) ? !e.length : !Br(e).length)
              },n.isEqual = ii,n.isError = oi,n.isFinite = function (e) {
                return "number" == typeof e && co(e)
              },n.isFunction = ri,n.isMatch = function (e, t, n, i) {
                return n = "function" == typeof n ? Dt(n, i, 3) : P, bt(e, gn(t), n)
              },n.isNaN = function (e) {
                return li(e) && e != +e
              },n.isNative = ai,n.isNull = function (e) {
                return null === e
              },n.isNumber = li,n.isObject = si,n.isPlainObject = ci,n.isRegExp = ui,n.isString = di,n.isTypedArray = hi,n.isUndefined = function (e) {
                return e === P
              },n.kebabCase = Dr,n.last = On,n.lastIndexOf = function (e, t, n) {
                var i = e ? e.length : 0;
                if (!i) return -1;
                var o = i;
                if ("number" == typeof n) o = (0 > n ? ho(i + n, 0) : fo(n || 0, i - 1)) + 1; else if (n) {
                  var r = e[o = Ft(e, t, !0) - 1];
                  return (t == t ? t === r : r != r) ? o : -1
                }
                if (t != t) return g(e, o, !0);
                for (; o--;) if (e[o] === t) return o;
                return -1
              },n.lt = fi,n.lte = function (e, t) {
                return t >= e
              },n.max = qr,n.min = Vr,n.noConflict = function () {
                return et._ = Vi, this
              },n.noop = Li,n.now = rr,n.pad = function (e, t, n) {
                t = +t;
                var i = (e = a(e)).length;
                if (i >= t || !co(t)) return e;
                var o = (t - i) / 2, r = ao(o);
                return (n = cn("", ro(o), n)).slice(0, r) + e + n
              },n.padLeft = Or,n.padRight = Nr,n.parseInt = function (e, t, n) {
                return (n ? xn(e, t, n) : null == t) ? t = 0 : t && (t = +t), e = Ei(e), vo(e, t || (Ae.test(e) ? 16 : 10))
              },n.random = function (e, t, n) {
                n && xn(e, t, n) && (t = n = P);
                var i = null == e, o = null == t;
                if (null == n && (o && "boolean" == typeof e ? (n = e, e = 1) : "boolean" == typeof t && (n = t, o = !0)), i && o && (t = 1, o = !1), e = +e || 0, o ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                  var r = go();
                  return fo(e + r * (t - e + Yi("1e-" + ((r + "").length - 1))), t)
                }
                return Tt(e, t)
              },n.reduce = nr,n.reduceRight = ir,n.repeat = xi,n.result = function (e, t, n) {
                var i = null == e ? P : e[t];
                return i === P && (null == e || En(t, e) || (i = null == (e = 1 == (t = An(t)).length ? e : mt(e, St(t, 0, -1))) ? P : e[On(t)]), i = i === P ? n : i), ri(i) ? i.call(e) : i
              },n.round = zr,n.runInContext = e,n.size = function (e) {
                var t = e ? Mo(e) : 0;
                return Cn(t) ? t : Br(e).length
              },n.snakeCase = Rr,n.some = Jn,n.sortedIndex = Ro,n.sortedLastIndex = Uo,n.startCase = Ur,n.startsWith = function (e, t, n) {
                return e = a(e), n = null == n ? 0 : fo(0 > n ? 0 : +n || 0, e.length), e.lastIndexOf(t, n) == n
              },n.sum = function (e, t, n) {
                return n && xn(e, t, n) && (t = P), 1 == (t = fn(t, n, 3)).length ? function (e, t) {
                  for (var n = e.length, i = 0; n--;) i += +t(e[n]) || 0;
                  return i
                }(br(e) ? e : In(e), t) : function (e, t) {
                  var n = 0;
                  return So(e, function (e, i, o) {
                    n += +t(e, i, o) || 0
                  }), n
                }(e, t)
              },n.template = function (e, t, i) {
                var o = n.templateSettings;
                i && xn(e, t, i) && (t = i = P), e = a(e), t = Ke(nt({}, i || t), o, Ze);
                var r, s, l = Ke(nt({}, t.imports), o.imports, Ze), c = Br(l), u = At(l, c), d = 0,
                  h = t.interpolate || _e, f = "__p += '",
                  p = Oi((t.escape || _e).source + "|" + h.source + "|" + (h === xe ? Ie : _e).source + "|" + (t.evaluate || _e).source + "|$", "g"),
                  g = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++Re + "]") + "\n";
                e.replace(p, function (t, n, i, o, a, l) {
                  return i || (i = o), f += e.slice(d, l).replace(De, v), n && (r = !0, f += "' +\n__e(" + n + ") +\n'"), a && (s = !0, f += "';\n" + a + ";\n__p += '"), i && (f += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), d = l + t.length, t
                }), f += "';\n";
                var m = t.variable;
                m || (f = "with (obj) {\n" + f + "\n}\n"), f = (s ? f.replace(he, "") : f).replace(fe, "$1").replace(pe, "$1;"), f = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (r ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                var y = jr(function () {
                  return $i(c, g + "return " + f).apply(P, u)
                });
                if (y.source = f, oi(y)) throw y;
                return y
              },n.trim = Ei,n.trimLeft = function (e, t, n) {
                var i = e;
                return (e = a(e)) ? e.slice((n ? xn(i, t, n) : null == t) ? w(e) : l(e, t + "")) : e
              },n.trimRight = function (e, t, n) {
                var i = e;
                return (e = a(e)) ? (n ? xn(i, t, n) : null == t) ? e.slice(0, x(e) + 1) : e.slice(0, c(e, t + "") + 1) : e
              },n.trunc = function (e, t, n) {
                n && xn(e, t, n) && (t = P);
                var i = F, o = _;
                if (null != t) if (si(t)) {
                  var r = "separator" in t ? t.separator : r;
                  i = "length" in t ? +t.length || 0 : i, o = "omission" in t ? a(t.omission) : o
                } else i = +t || 0;
                if (i >= (e = a(e)).length) return e;
                var s = i - o.length;
                if (1 > s) return o;
                var l = e.slice(0, s);
                if (null == r) return l + o;
                if (ui(r)) {
                  if (e.slice(s).search(r)) {
                    var c, u, d = e.slice(0, s);
                    for (r.global || (r = Oi(r.source, (Be.exec(r) || "") + "g")), r.lastIndex = 0; c = r.exec(d);) u = c.index;
                    l = l.slice(0, null == u ? s : u)
                  }
                } else if (e.indexOf(r, s) != s) {
                  var h = l.lastIndexOf(r);
                  h > -1 && (l = l.slice(0, h))
                }
                return l + o
              },n.unescape = function (e) {
                return (e = a(e)) && me.test(e) ? e.replace(ve, E) : e
              },n.uniqueId = function (e) {
                var t = ++Gi;
                return a(e) + t
              },n.words = Pi,n.all = Gn,n.any = Jn,n.contains = Vn,n.eq = ii,n.detect = zo,n.foldl = nr,n.foldr = ir,n.head = _n,n.include = Vn,n.inject = nr,ki(n, function () {
                var e = {};
                return pt(n, function (t, i) {
                  n.prototype[i] || (e[i] = t)
                }), e
              }(), !1),n.sample = Xn,n.prototype.sample = function (e) {
                return this.__chain__ || null != e ? this.thru(function (t) {
                  return Xn(t, e)
                }) : Xn(this.value())
              },n.VERSION = C,Ge(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                n[e].placeholder = n
              }),Ge(["drop", "take"], function (e, t) {
                K.prototype[e] = function (n) {
                  var i = this.__filtered__;
                  if (i && !t) return new K(this);
                  n = null == n ? 1 : ho(ao(n) || 0, 0);
                  var o = this.clone();
                  return i ? o.__takeCount__ = fo(o.__takeCount__, n) : o.__views__.push({
                    size: n,
                    type: e + (o.__dir__ < 0 ? "Right" : "")
                  }), o
                }, K.prototype[e + "Right"] = function (t) {
                  return this.reverse()[e](t).reverse()
                }
              }),Ge(["filter", "map", "takeWhile"], function (e, t) {
                var n = t + 1, i = n != U;
                K.prototype[e] = function (e, t) {
                  var o = this.clone();
                  return o.__iteratees__.push({iteratee: fn(e, t, 1), type: n}), o.__filtered__ = o.__filtered__ || i, o
                }
              }),Ge(["first", "last"], function (e, t) {
                var n = "take" + (t ? "Right" : "");
                K.prototype[e] = function () {
                  return this[n](1).value()[0]
                }
              }),Ge(["initial", "rest"], function (e, t) {
                var n = "drop" + (t ? "" : "Right");
                K.prototype[e] = function () {
                  return this.__filtered__ ? new K(this) : this[n](1)
                }
              }),Ge(["pluck", "where"], function (e, t) {
                var n = t ? "filter" : "map", i = t ? xt : Ii;
                K.prototype[e] = function (e) {
                  return this[n](i(e))
                }
              }),K.prototype.compact = function () {
                return this.filter(Ti)
              },K.prototype.reject = function (e, t) {
                return e = fn(e, t, 1), this.filter(function (t) {
                  return !e(t)
                })
              },K.prototype.slice = function (e, t) {
                e = null == e ? 0 : +e || 0;
                var n = this;
                return n.__filtered__ && (e > 0 || 0 > t) ? new K(n) : (0 > e ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== P && (n = 0 > (t = +t || 0) ? n.dropRight(-t) : n.take(t - e)), n)
              },K.prototype.takeRightWhile = function (e, t) {
                return this.reverse().takeWhile(e, t).reverse()
              },K.prototype.toArray = function () {
                return this.take(yo)
              },pt(K.prototype, function (e, t) {
                var i = /^(?:filter|map|reject)|While$/.test(t), o = /^(?:first|last)$/.test(t),
                  r = n[o ? "take" + ("last" == t ? "Right" : "") : t];
                r && (n.prototype[t] = function () {
                  var t = o ? [1] : arguments, n = this.__chain__, s = this.__wrapped__, a = !!this.__actions__.length,
                    l = s instanceof K, c = t[0], u = l || br(s);
                  u && i && "function" == typeof c && 1 != c.length && (l = u = !1);
                  var d = function (e) {
                    return o && n ? r(e, 1)[0] : r.apply(P, Xe([e], t))
                  }, h = {func: Hn, args: [d], thisArg: P}, f = l && !a;
                  if (o && !n) return f ? ((s = s.clone()).__actions__.push(h), e.call(s)) : r.call(P, this.value())[0];
                  if (!o && u) {
                    s = f ? s : new K(this);
                    var p = e.apply(s, t);
                    return p.__actions__.push(h), new X(p, n)
                  }
                  return this.thru(d)
                })
              }),Ge(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (e) {
                var t = (/^(?:replace|split)$/.test(e) ? Qi : Ui)[e],
                  i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:join|pop|replace|shift)$/.test(e);
                n.prototype[e] = function () {
                  var e = arguments;
                  return o && !this.__chain__ ? t.apply(this.value(), e) : this[i](function (n) {
                    return t.apply(n, e)
                  })
                }
              }),pt(K.prototype, function (e, t) {
                var i = n[t];
                if (i) {
                  var o = i.name + "";
                  (Co[o] || (Co[o] = [])).push({name: t, func: i})
                }
              }),Co[ln(P, S).name] = [{name: "wrapper", func: P}],K.prototype.clone = function () {
                var e = new K(this.__wrapped__);
                return e.__actions__ = He(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = He(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = He(this.__views__), e
              },K.prototype.reverse = function () {
                if (this.__filtered__) {
                  var e = new K(this);
                  e.__dir__ = -1, e.__filtered__ = !0
                } else (e = this.clone()).__dir__ *= -1;
                return e
              },K.prototype.value = function () {
                var e = this.__wrapped__.value(), t = this.__dir__, n = br(e), i = 0 > t, o = n ? e.length : 0,
                  r = function (e, t, n) {
                    for (var i = -1, o = n.length; ++i < o;) {
                      var r = n[i], s = r.size;
                      switch (r.type) {
                        case"drop":
                          e += s;
                          break;
                        case"dropRight":
                          t -= s;
                          break;
                        case"take":
                          t = fo(t, e + s);
                          break;
                        case"takeRight":
                          e = ho(e, t - s)
                      }
                    }
                    return {start: e, end: t}
                  }(0, o, this.__views__), s = r.start, a = r.end, l = a - s, c = i ? a : s - 1, u = this.__iteratees__,
                  d = u.length, h = 0, f = fo(l, this.__takeCount__);
                if (!n || N > o || o == l && f == l) return $t(e, this.__actions__);
                var p = [];
                e:for (; l-- && f > h;) {
                  for (var v = -1, g = e[c += t]; ++v < d;) {
                    var m = u[v], y = m.iteratee, b = m.type, w = y(g);
                    if (b == U) g = w; else if (!w) {
                      if (b == R) continue e;
                      break e
                    }
                  }
                  p[h++] = g
                }
                return p
              },n.prototype.chain = function () {
                return Wn(this)
              },n.prototype.commit = function () {
                return new X(this.value(), this.__chain__)
              },n.prototype.concat = Go,n.prototype.plant = function (e) {
                for (var t, n = this; n instanceof y;) {
                  var i = Mn(n);
                  t ? o.__wrapped__ = i : t = i;
                  var o = i;
                  n = n.__wrapped__
                }
                return o.__wrapped__ = e, t
              },n.prototype.reverse = function () {
                var e = this.__wrapped__, t = function (e) {
                  return e.reverse()
                };
                if (e instanceof K) {
                  var n = e;
                  return this.__actions__.length && (n = new K(this)), (n = n.reverse()).__actions__.push({
                    func: Hn,
                    args: [t],
                    thisArg: P
                  }), new X(n, this.__chain__)
                }
                return this.thru(t)
              },n.prototype.toString = function () {
                return this.value() + ""
              },n.prototype.run = n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = function () {
                return $t(this.__wrapped__, this.__actions__)
              },n.prototype.collect = n.prototype.map,n.prototype.head = n.prototype.first,n.prototype.select = n.prototype.filter,n.prototype.tail = n.prototype.rest,n
            }();
          ze && Xe ? Ke ? (Xe.exports = tt)._ = tt : ze._ = tt : et._ = tt
        }).call(this)
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    main: [function (e, t, n) {
      var i, o = e("lodash"), r = e("jquery"), s = e("./app");
      t.exports = o.extend(o.object(o.map(["init", "open", "on", "off", "sendMessage", "onMessage"], function (e) {
        var t = (i || (i = new s), i);
        return [e, function () {
          return t[e].apply(t, arguments)
        }]
      })), {eventTypes: s.eventTypes, $: r})
    }, {"./app": 3, jquery: "jquery", lodash: "lodash"}]
  }, {}, ["main"])("main")
}),define("PoE/Shop/XsollaPaymentWidget", ["plugins", "PoE/Helpers", "PoE/Backbone/EventBus", "lib/xsolla/widget-1.0.7"], function (e, t, n, i) {
  return {
    packId: !1, upgrade: !1, xps: !1, init: function (o, r, s, a) {
      this.packId = o, this.upgrade = r, this.xps = i, this.sandbox = s, this.accountTicketInfo = a;
      var l = this;
      e(".shopXsollaOptionContainer").removeClass("loading");
      var c = !1;
      e(".xsolla-purchase").click(function (i) {
        n.trigger("shop.purchaseStart"), $relEl = e(i.target).closest("div.shopXsollaOptionContainer");
        var o = $relEl.data(), r = {packageID: l.packId, xsollaMethod: o.xsollaMethod}, s = l.upgrade;
        s.length > 0 && (r.upgrade = s), l.accountTicketInfo && (r.ticketInfo = l.accountTicketInfo), $relEl.addClass("loading");
        var a = $relEl.find(".details");
        a.removeClass("error"), c = a.html(), a.html(c), e.ajax({
          url: "/shop/xsolla-purchase",
          data: JSON.stringify(r),
          contentType: "application/json",
          method: "POST",
          success: function (e) {
            e.token ? (token = e.token, l.xps.init({
              access_token: token,
              sandbox: l.sandbox
            }), l.xps.on(l.xps.eventTypes.STATUS_DONE, function (e, t) {
              t.paymentInfo.invoice && (window.location.href = "/shop/purchase-complete?completeType=xsolla&id=" + t.paymentInfo.invoice)
            }), l.xps.open(), a.show()) : (a.html(t.translate("Failed to create Xsolla transaction, please try again later or contact support@grindinggear.com")), a.addClass("error"))
          },
          error: function (e) {
            a.html(t.translate("Failed to create Xsolla transaction, please try again later or contact support@grindinggear.com")), a.addClass("error")
          },
          complete: function (e) {
            $relEl.removeClass("loading"), n.trigger("shop.purchaseEnd")
          }
        })
      })
    }
  }
}),function () {
  if ("function" == typeof window.CustomEvent) return !1;

  function e(e, t) {
    t = t || {bubbles: !1, cancelable: !1, detail: void 0};
    let n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
  }

  e.prototype = window.Event.prototype, window.CustomEvent = e
}(),define("custom-event", function (e) {
  return function () {
    return e.CustomEvent
  }
}(this)),define("PoE/View/Widget/Modal", ["require", "custom-event"], function (e) {
  return e("custom-event"), function () {
    function e(t, n, i) {
      _classCallCheck(this, e), this.overlay = t, this.container = document.createElement("div"), this.container.id = "poe-modal-container", this.content = !1, this.width = n, this.height = i, this.overlay.appendChild(this.container), this.delegateEvents(), this.hideEvent = new CustomEvent("hide", {cancelable: !0})
    }

    return _createClass(e, [{
      key: "delegateEvents", value: function () {
        var e = this;
        this.overlay.onclick = function (t) {
          e.hide(), t.stopPropagation()
        }, this.container.onclick = function (e) {
          return e.stopPropagation()
        }
      }
    }, {
      key: "show", value: function (e) {
        this.content = e, this.container.appendChild(e), this.container.style.width = this.width, this.container.style.height = this.height, this.overlay.style.display = "block"
      }
    }, {
      key: "hide", value: function () {
        this.container.dispatchEvent(this.hideEvent), this.overlay.style.display = "none", this.clear()
      }
    }, {
      key: "clear", value: function () {
        this.container.innerHTML = ""
      }
    }]), e
  }()
}),define("PoE/View/Widget/ConfirmDialog", ["require", "PoE/View/Widget/Modal", "Handlebars", "es6-promise"], function (e) {
  var t = e("PoE/View/Widget/Modal"), n = e("Handlebars");
  return e("es6-promise"), function () {
    function e(n, i, o, r, s, a) {
      _classCallCheck(this, e), this.modal = new t(n, s, a), this.title = i, this.confirmText = o, this.cancelText = r, this.messageClass = "", this.container = document.createElement("div"), this.theme = "poe", this.render()
    }

    return _createClass(e, [{
      key: "render", value: function () {
        var t = n.compile(e.template());
        this.container.innerHTML = t(this), this.buttonContainer = this.container.getElementsByClassName("confirm-buttons").item(0), this.cancelButton = this.container.getElementsByClassName("cancel").item(0), this.confirmButton = this.container.getElementsByClassName("confirm").item(0), this.messages = this.container.getElementsByClassName("messages").item(0), this.extraContainer = this.container.getElementsByClassName("extra").item(0), this.delegateEvents()
      }
    }, {
      key: "clear", value: function () {
        this.message = "", this.container.innerHTML = "", this.render()
      }
    }, {
      key: "error", value: function (e) {
        this.messageClass = "error", this.message = e, this.render()
      }
    }, {
      key: "success", value: function (e) {
        this.messageClass = "success", this.message = e, this.render()
      }
    }, {
      key: "loading", value: function () {
        this.buttonContainer.innerHTML = '<div class="loading"></div>'
      }
    }, {
      key: "hide", value: function () {
        this.modal.hide()
      }
    }, {
      key: "delegateEvents", value: function () {
        var e = this;
        return this.promise = new Promise(function (t, n) {
          e.cancelButton.onclick = function () {
            t(!1), e.hide()
          }, e.confirmButton.onclick = function () {
            t(!0)
          }, e.modal.container.addEventListener("hide", function () {
            t(!1)
          })
        }), this.promise
      }
    }, {
      key: "confirm", value: function (e) {
        var t = e.title, n = e.confirmText, i = e.cancelText, o = e.notes;
        return this.title = t || this.title, this.confirmText = n || this.confirmText, this.cancelText = i || this.cancelText, this.clear(), this.extraContainer.innerHTML = o && o instanceof HTMLElement ? o.outerHTML : o, this.modal.show(this.container), this.delegateEvents()
      }
    }], [{
      key: "template", value: function () {
        return '\n<div id="poe-confirm-dialog" class="{{theme}}">\n    <header class="dialog-header">{{title}}</header>\n    <div class="messages {{messageClass}}">{{{message}}}</div>\n    <div class="confirm-buttons">\n        <div class="button-text confirm">{{confirmText}}</div>\n        <div class="button-text red cancel">{{cancelText}}</div>\n    </div>\n    <div class="clear"></div>\n    <div class="extra"></div>\n</div>\n            '
      }
    }]), e
  }()
}),"NodeList" in window && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
  t = t || window;
  for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
}),define("nodelist", function () {
}),function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define("fetch", ["exports"], t) : t(e.WHATWGFetch = {})
}(this, function (e) {
  "use strict";
  var t = {
    searchParams: "URLSearchParams" in self,
    iterable: "Symbol" in self && "iterator" in Symbol,
    blob: "FileReader" in self && "Blob" in self && function () {
      try {
        return new Blob, !0
      } catch (e) {
        return !1
      }
    }(),
    formData: "FormData" in self,
    arrayBuffer: "ArrayBuffer" in self
  };
  if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    i = ArrayBuffer.isView || function (e) {
      return e && n.indexOf(Object.prototype.toString.call(e)) > -1
    };

  function o(e) {
    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
    return e.toLowerCase()
  }

  function r(e) {
    return "string" != typeof e && (e = String(e)), e
  }

  function s(e) {
    var n = {
      next: function () {
        var t = e.shift();
        return {done: void 0 === t, value: t}
      }
    };
    return t.iterable && (n[Symbol.iterator] = function () {
      return n
    }), n
  }

  function a(e) {
    this.map = {}, e instanceof a ? e.forEach(function (e, t) {
      this.append(t, e)
    }, this) : Array.isArray(e) ? e.forEach(function (e) {
      this.append(e[0], e[1])
    }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
      this.append(t, e[t])
    }, this)
  }

  function l(e) {
    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0
  }

  function c(e) {
    return new Promise(function (t, n) {
      e.onload = function () {
        t(e.result)
      }, e.onerror = function () {
        n(e.error)
      }
    })
  }

  function u(e) {
    var t = new FileReader, n = c(t);
    return t.readAsArrayBuffer(e), n
  }

  function d(e) {
    if (e.slice) return e.slice(0);
    var t = new Uint8Array(e.byteLength);
    return t.set(new Uint8Array(e)), t.buffer
  }

  function h() {
    return this.bodyUsed = !1, this._initBody = function (e) {
      var n;
      this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : t.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : t.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : t.arrayBuffer && t.blob && ((n = e) && DataView.prototype.isPrototypeOf(n)) ? (this._bodyArrayBuffer = d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = d(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
    }, t.blob && (this.blob = function () {
      var e = l(this);
      if (e) return e;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]))
    }, this.arrayBuffer = function () {
      return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u)
    }), this.text = function () {
      var e, t, n, i = l(this);
      if (i) return i;
      if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = c(t), t.readAsText(e), n;
      if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
        for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++) n[i] = String.fromCharCode(t[i]);
        return n.join("")
      }(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText)
    }, t.formData && (this.formData = function () {
      return this.text().then(v)
    }), this.json = function () {
      return this.text().then(JSON.parse)
    }, this
  }

  a.prototype.append = function (e, t) {
    e = o(e), t = r(t);
    var n = this.map[e];
    this.map[e] = n ? n + ", " + t : t
  }, a.prototype.delete = function (e) {
    delete this.map[o(e)]
  }, a.prototype.get = function (e) {
    return e = o(e), this.has(e) ? this.map[e] : null
  }, a.prototype.has = function (e) {
    return this.map.hasOwnProperty(o(e))
  }, a.prototype.set = function (e, t) {
    this.map[o(e)] = r(t)
  }, a.prototype.forEach = function (e, t) {
    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
  }, a.prototype.keys = function () {
    var e = [];
    return this.forEach(function (t, n) {
      e.push(n)
    }), s(e)
  }, a.prototype.values = function () {
    var e = [];
    return this.forEach(function (t) {
      e.push(t)
    }), s(e)
  }, a.prototype.entries = function () {
    var e = [];
    return this.forEach(function (t, n) {
      e.push([n, t])
    }), s(e)
  }, t.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
  var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

  function p(e, t) {
    var n, i, o = (t = t || {}).body;
    if (e instanceof p) {
      if (e.bodyUsed) throw new TypeError("Already read");
      this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new a(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
    } else this.url = String(e);
    if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new a(t.headers)), this.method = (n = t.method || this.method || "GET", i = n.toUpperCase(), f.indexOf(i) > -1 ? i : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(o)
  }

  function v(e) {
    var t = new FormData;
    return e.trim().split("&").forEach(function (e) {
      if (e) {
        var n = e.split("="), i = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
        t.append(decodeURIComponent(i), decodeURIComponent(o))
      }
    }), t
  }

  function g(e, t) {
    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new a(t.headers), this.url = t.url || "", this._initBody(e)
  }

  p.prototype.clone = function () {
    return new p(this, {body: this._bodyInit})
  }, h.call(p.prototype), h.call(g.prototype), g.prototype.clone = function () {
    return new g(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new a(this.headers),
      url: this.url
    })
  }, g.error = function () {
    var e = new g(null, {status: 0, statusText: ""});
    return e.type = "error", e
  };
  var m = [301, 302, 303, 307, 308];
  g.redirect = function (e, t) {
    if (-1 === m.indexOf(t)) throw new RangeError("Invalid status code");
    return new g(null, {status: t, headers: {location: e}})
  }, e.DOMException = self.DOMException;
  try {
    new e.DOMException
  } catch (t) {
    e.DOMException = function (e, t) {
      this.message = e, this.name = t;
      var n = Error(e);
      this.stack = n.stack
    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
  }

  function y(n, i) {
    return new Promise(function (o, r) {
      var s = new p(n, i);
      if (s.signal && s.signal.aborted) return r(new e.DOMException("Aborted", "AbortError"));
      var l = new XMLHttpRequest;

      function c() {
        l.abort()
      }

      l.onload = function () {
        var e, t, n = {
          status: l.status,
          statusText: l.statusText,
          headers: (e = l.getAllResponseHeaders() || "", t = new a, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
            var n = e.split(":"), i = n.shift().trim();
            if (i) {
              var o = n.join(":").trim();
              t.append(i, o)
            }
          }), t)
        };
        n.url = "responseURL" in l ? l.responseURL : n.headers.get("X-Request-URL");
        var i = "response" in l ? l.response : l.responseText;
        o(new g(i, n))
      }, l.onerror = function () {
        r(new TypeError("Network request failed"))
      }, l.ontimeout = function () {
        r(new TypeError("Network request failed"))
      }, l.onabort = function () {
        r(new e.DOMException("Aborted", "AbortError"))
      }, l.open(s.method, s.url, !0), "include" === s.credentials ? l.withCredentials = !0 : "omit" === s.credentials && (l.withCredentials = !1), "responseType" in l && t.blob && (l.responseType = "blob"), s.headers.forEach(function (e, t) {
        l.setRequestHeader(t, e)
      }), s.signal && (s.signal.addEventListener("abort", c), l.onreadystatechange = function () {
        4 === l.readyState && s.signal.removeEventListener("abort", c)
      }), l.send(void 0 === s._bodyInit ? null : s._bodyInit)
    })
  }

  y.polyfill = !0, self.fetch || (self.fetch = y, self.Headers = a, self.Request = p, self.Response = g), e.Headers = a, e.Request = p, e.Response = g, e.fetch = y, Object.defineProperty(e, "__esModule", {value: !0})
}),define("PoE/Shop/KakaoPaymentWidget", ["require", "PoE/View/Widget/ConfirmDialog", "PoE/Backbone/EventBus", "PoE/Helpers", "es6-promise", "nodelist", "fetch"], function (e) {
  var t = e("PoE/View/Widget/ConfirmDialog"), n = e("PoE/Backbone/EventBus"), i = e("PoE/Helpers");
  return e("es6-promise"), e("nodelist"), e("fetch"), function () {
    function e(n, o) {
      _classCallCheck(this, e), this.options = _objectSpread({}, o), this.dialog = new t(n, i.translate("Would you like to proceed with the purchase?"), i.translate("Purchase"), i.translate("Cancel"), "500px", "300px"), this.dialog.theme = "kakao"
    }

    return _createClass(e, [{
      key: "loginRequired", value: function () {
        this.dialog.confirm({
          title: i.translate("Login Required"),
          confirmText: i.translate("Login"),
          cancelText: i.translate("Cancel"),
          notes: "로그인이 필요합니다. 로그인 하시겠습니까?"
        }).then(function (e) {
          e && (window.location = "/login?redir=" + encodeURIComponent(window.location.pathname))
        })
      }
    }, {
      key: "accountRequired", value: function () {
        this.dialog.confirm({
          title: i.translate("Account Creation Required"),
          confirmText: i.translate("Create"),
          cancelText: i.translate("Cancel"),
          notes: "캐릭터 생성 후 이용해주세요"
        }).then(function (e) {
          e && (window.location = "/login?redir=" + encodeURIComponent(window.location.pathname))
        })
      }
    }, {
      key: "insufficientBalance", value: function (e) {
        var t = this;
        this.dialog.confirm({
          title: i.translate("Insufficient Balance"),
          confirmText: i.translate("Top Up"),
          cancelText: i.translate("Cancel"),
          notes: "가지고 계신 게임코인 잔액이 부족합니다. 충전페이지로 이동하시겠습니까?"
        }).then(function (n) {
          if (n) {
            var i = window.top.outerHeight / 2 + window.top.screenY - 350,
              o = window.top.outerWidth / 2 + window.top.screenX - 250;
            window.open(e, "", "height=".concat(700, ",width=").concat(500, ",top=").concat(i, ",left=").concat(o, ",scrollbars=1")), t.dialog.hide()
          }
        })
      }
    }, {
      key: "recharge", value: function (e) {
        return this.options.hasKakao ? this.options.hasAccount ? (n.trigger("shop.purchaseStart"), e.disabled = !0, fetch("/shop/kakao-recharge", {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          }, method: "POST"
        }).then(function (e) {
          if (e.ok) return e.json();
          throw new Error(e.statusText)
        }).then(function (e) {
          if (e.chargeUrl) {
            var t = window.top.outerHeight / 2 + window.top.screenY - 200,
              n = window.top.outerWidth / 2 + window.top.screenX - 150,
              i = window.open(e.chargeUrl, "recharge", "height=".concat(400, ",width=").concat(300, ",top=").concat(t, ",left=").concat(n, ",scrollbars=1"));
            try {
              var o = !1;
              i.onload = function () {
                return o = !0
              }, i.onunload = function () {
                o && location.reload(!0)
              }
            } catch (e) {
            }
            i.focus()
          }
        }).catch(function (e) {
          alert(i.translate("An error occurred. Please try again later."))
        }).then(function () {
          n.trigger("shop.purchaseEnd"), e.disabled = !1
        }), !0) : (this.accountRequired(), !0) : (this.loginRequired(), !0)
      }
    }, {
      key: "purchase", value: function (e, t, o) {
        var r = this;
        if (!this.options.hasKakao) return this.loginRequired(), !0;
        if (!this.options.hasAccount) return this.accountRequired(), !0;
        if (o) return !1;
        var s = document.createElement("div");
        return s.innerHTML = this.disclaimer(), n.trigger("shop.purchaseStart"), this.dialog.confirm({
          title: i.translate("Would you like to proceed with the purchase?"),
          confirmText: i.translate("Purchase"),
          cancelText: i.translate("Cancel"),
          notes: s
        }).then(function (o) {
          if (o) {
            r.dialog.loading();
            var s = {packageID: e};
            t && t.length > 0 && (s.upgrade = t), fetch("/shop/kakao-purchase", {
              headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
              }, method: "POST", body: JSON.stringify(s)
            }).then(function (e) {
              if (e.ok) return e.json();
              throw new Error(e.statusText)
            }).then(function (e) {
              e.success ? (r.dialog.success(i.translate("Purchase Successful")), window.location = e.redirectUrl) : e.chargeUrl ? (r.dialog.hide(), r.insufficientBalance(e.chargeUrl)) : e.errorMessage ? (r.dialog.error(i.translate("Error") + ": " + e.errorMessage), r.dialog.render()) : r.dialog.render()
            })
          }
          n.trigger("shop.purchaseEnd")
        }), !0
      }
    }, {
      key: "delegateEvents", value: function () {
        var e = this;
        document.querySelectorAll(".kakaoBuy").forEach(function (t) {
          t.onclick = function (n) {
            if (e.purchase(t.getAttribute("data-packId"), t.getAttribute("data-upgrade"), t.getAttribute("data-shipping"))) return n.preventDefault(), !1
          }
        });
        var t = document.querySelector("#kakaoRecharge");
        t && (t.onclick = function (t) {
          if (e.recharge(t.target)) return t.preventDefault(), !1
        })
      }
    }, {
      key: "disclaimer", value: function () {
        return ""
      }
    }]), e
  }()
}),define("PoE/Collection/League/EventsCollection", ["jquery", "Backbone", "PoE/Model/League/Event", "moment-tz"], function (e, t, n, i) {
  return t.Collection.extend({
    model: n, sortByStartDate: function () {
      this.comparator = function (e, t) {
        return e.get("startAt") && t.get("startAt") ? i(e.get("startAt")).diff(i(t.get("startAt"))) : 0
      }, this.sort()
    }
  })
}),define("text!PoE/Widget/League/EventCalendar/Event.hbt", [], function () {
  return '{{#if url}}<a href="{{url}}">{{id}}</a>{{else}}{{id}}{{/if}}'
}),define("PoE/Widget/League/EventCalendar/Event", ["require", "Backbone", "moment-tz", "Underscore", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/League/EventCalendar/Event.hbt"], function (e) {
  var t = e("Backbone"), n = (e("moment-tz"), e("Underscore"), e("PoE/Handlebars/TemplateCollection"));
  return e("text!PoE/Widget/League/EventCalendar/Event.hbt"), t.View.extend({
    className: "event",
    initialize: function () {
    },
    render: function () {
      var e = this, t = this.model.toJSON();
      return "" == t.url && delete t.url, t.inProgress ? this.$el.addClass("inProgress") : t.complete && this.$el.addClass("complete"), n.load("PoE/Widget/League/EventCalendar/Event.hbt").done(function (n) {
        e.$el.html(n(t))
      })
    }
  })
}),define("PoE/Widget/League/EventCalendar/Day", ["require", "Backbone", "moment-tz", "Underscore", "./Event"], function (e) {
  var t = e("Backbone"), n = e("moment-tz"), i = (e("Underscore"), e("./Event"));
  return t.View.extend({
    className: "day", initialize: function () {
      this.periods = this.options.periods, this.start = this.options.start, this.end = this.options.end
    }, render: function () {
      var e = [], t = this;
      this.$el.html('<div class="label"></div><div class="periods"></div>'), $periods = this.$el.find(".periods"), $label = this.$el.find(".label"), 1 == this.start.format("D") ? ($label.html(this.start.format("MMM D")), $label.addClass("first")) : $label.html(this.start.format("D")), this.periodToEl = {};
      for (var n = 0, o = this.periods.length; n < o; ++n) {
        var r = $('<div class="period"></div>');
        $periods.append(r), r.addClass("period" + n), this.periodToEl[this.periods[n]] = r
      }
      return this.collection.each(function (n) {
        var o = new i({model: n});
        e.push(o.render()), t.periodToEl[t.getEventMinutesOffset(n)].append(o.$el)
      }), $.when.apply(null, e)
    }, getEventMinutesOffset: function (e) {
      var t = n(e.get("startAt"));
      return 60 * t.hours() + t.minutes()
    }
  })
}),define("PoE/Widget/League/EventCalendar/Week", ["require", "Backbone", "moment-tz", "Underscore", "PoE/Collection/League/EventsCollection", "./Day", "PoE/Helpers"], function (e) {
  var t = e("Backbone"), n = e("moment-tz"), i = e("Underscore"), o = e("PoE/Collection/League/EventsCollection"),
    r = e("./Day"), s = e("PoE/Helpers");
  return t.View.extend({
    className: "week", initialize: function () {
      this.start = this.options.start, this.end = this.options.end, this.realmRegion = this.options.realmRegion
    }, render: function () {
      var e = [], t = this;
      this.$el.html('<div class="periodsInfo"><div class="label"></div><div class="periods"></div></div>');
      var n = this.start.format("MMM");
      this.$el.find(".label").html(s.translate(n));
      var i = this.collectMinutes(this.collection);
      $periods = this.$el.find(".periodsInfo .periods");
      for (var o = 0, a = i.length; o < a; ++o) {
        var l = this.start.clone().add("minutes", i[o]), c = $('<div class="period"></div>');
        c.addClass("period" + o);
        var u = "h:mm A";
        "ru_RU" == this.realmRegion && (u = "HH:mm"), c.html(l.format(u)), $periods.append(c)
      }
      var d = this.start.clone(), h = d.clone().add("days", 1);
      for (o = 0; o < 7; ++o) {
        var f = new r({start: d, end: h, collection: this.retrieveEventsUntilDate(this.collection, h), periods: i});
        e.push(f.render()), this.$el.append(f.$el), d = h, (h = h.clone()).add("days", 1)
      }
      $.when.apply(null, e).done(function () {
        for (var e = 0, n = i.length; e < n; ++e) {
          var o = 0, r = t.$el.find(".period" + e);
          r.each(function () {
            o = Math.max($(this).height(), o)
          }), r.height(o)
        }
      })
    }, getEventMinutesOffset: function (e) {
      var t = n(e.get("startAt"));
      return 60 * t.hours() + t.minutes()
    }, collectMinutes: function (e) {
      var t = [], n = this;
      return e.each(function (e) {
        t.push(n.getEventMinutesOffset(e))
      }), t.sort(function (e, t) {
        return e - t
      }), i.uniq(t, !0)
    }, retrieveEventsUntilDate: function (e, t) {
      for (var i = new o, r = 0, s = e.length; r < s; ++r) {
        var a = e.at(0);
        if (n(a.get("startAt")).diff(t) >= 0) break;
        i.push(e.shift())
      }
      return i
    }
  })
}),define("PoE/Widget/League/EventCalendar/EventCalendar", ["require", "Backbone", "moment-tz", "Underscore", "PoE/Collection/League/EventsCollection", "./Week", "PoE/Helpers"], function (e) {
  var t = e("Backbone"), n = e("moment-tz"), i = (e("Underscore"), e("PoE/Collection/League/EventsCollection")),
    o = e("./Week"), r = e("PoE/Helpers");
  return t.View.extend({
    initialize: function () {
      for (var e = new i, t = 0, n = this.collection.length; t < n; ++t) {
        var o = this.collection.at(t);
        o.get("startAt") && e.push(o)
      }
      this.sponsors = !!this.options.sponsors && this.options.sponsors, this.prizesLink = !!this.options.prizesLink && this.options.prizesLink, this.collection = e, this.collection.sortByStartDate(), this.startDay = 1, this.$el.addClass("eventCalendar"), this.realmRegion = this.options.realmRegion ? this.options.realmRegion : "ggg", this.title = this.options.title ? this.options.title : r.translate("Events Schedule"), this.note = this.options.note ? this.options.note : r.translate("Please note that the times on this schedule are shown in your local timezone.")
    }, render: function () {
      var e = "<h1> " + this.title + "</h1>";
      if (this.collection.isEmpty()) return e += '<p class="description">' + r.translate("There are no current events.") + "</p>", void this.$el.html(e);
      if (e += '<p class="description">' + this.note + "</p>", this.sponsors && this.sponsors.length > 0) {
        for (var t in e += '<div class="pvp-season-intro">', e += '<img src="/image/season/pvp/ProvidedBy.jpg">', e += '<div class="sponsors">', this.sponsors) {
          var i = this.sponsors[t];
          e += '<a href="' + i.link + '" target="_blank"><img src="' + i.src + '" /></a>'
        }
        e += "</div>", e += "</div>"
      }
      this.prizesLink && (e += '<div class="prizesLink"><a href="' + this.prizesLink.link + '"><img src="' + this.prizesLink.src + '" /></a></div>'), e += '<div class="entries"></div>', e += '<div class="debug"></div>', this.$el.html(e), $entries = this.$el.find(".entries"), $debug = this.$el.find(".debug");
      var s = this.collection.first(), a = n(s.get("startAt")),
        l = a.clone().day(0).hours(0).minutes(0).seconds(0).milliseconds(0);
      n(this.collection.last().get("startAt"));
      l.add("days", this.startDay), a.diff(l) < 0 && l.add("weeks", -1);
      var c = l.clone();
      for (c.add("weeks", 1), this.collection.length && $entries.append('<div class="header"><div class="col"></div><div class="col">' + r.translate("Monday") + '</div><div class="col">' + r.translate("Tuesday") + '</div><div class="col">' + r.translate("Wednesday") + '</div><div class="col">' + r.translate("Thursday") + '</div><div class="col">' + r.translate("Friday") + '</div><div class="col">' + r.translate("Saturday") + '</div><div class="col">' + r.translate("Sunday") + "</div></div>"); this.collection.length;) {
        var u = this.retrieveEventsUntilDate(this.collection, c),
          d = new o({collection: u, start: l.clone(), end: c.clone(), realmRegion: this.realmRegion});
        $entries.append(d.$el), d.render(), l = c, (c = c.clone()).add("weeks", 1)
      }
      this.collection.each(function (e) {
        var t = n(e.get("startAt"));
        $debug.append("<div>" + e.get("id") + " " + t.format() + "</div>")
      })
    }, retrieveEventsUntilDate: function (e, t) {
      for (var o = new i, r = 0, s = e.length; r < s; ++r) {
        var a = e.at(0), l = n(a.get("startAt"));
        if (!l || l.diff(t) >= 0) break;
        o.push(e.shift())
      }
      return o
    }
  })
}),define("PoE/Collection/League/Signature", ["jquery", "Backbone", "PoE/Model/League/LadderEntry", "PoE/Backbone/Paginator", "./LadderEntries"], function (e, t, n, i, o) {
  return o.extend({
    paginator_core: {url: "/api/signature-ladders", dataType: "json"}, server_api: {
      offset: function () {
        return (this.currentPage - 1) * this.perPage
      }, limit: function () {
        return this.perPage
      }, id: function () {
        return this.id
      }, characterClass: function () {
        return this.characterClass
      }
    }, perPageOptions: [], parse: function (e) {
      return e.limit && (this.perPage = parseInt(e.limit, 10)), e.id && (this.id = e.id), e.characterClass && (this.characterClass = e.characterClass), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries
    }
  })
}),define("text!PoE/View/Season/ViewSignatureRaces.hbt", [], function () {
  return '<div class="seasons-list poeForm">\r\n    <select name="seasons">\r\n        {{#each seasons}}\r\n            {{#unless pvp}}\r\n            <option value="{{numericId}}">{{translate id}}</option>\r\n            {{/unless}}\r\n        {{/each}}\r\n    </select>\r\n</div>\r\n<div class="races">\r\n</div>'
}),define("PoE/View/Season/ViewSignatureRaces", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoEAdmin/Collection/Season/Seasons", "PoE/Collection/League/Signature", "PoE/Widget/League/Ladder/Ladder", "text!PoE/View/Season/ViewSignatureRaces.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), i = e("PoE/Handlebars/TemplateCollection"),
    o = e("PoEAdmin/Collection/Season/Seasons"), r = e("PoE/Collection/League/Signature"),
    s = e("PoE/Widget/League/Ladder/Ladder");
  return e("text!PoE/View/Season/ViewSignatureRaces.hbt"), n.View.extend({
    initialize: function () {
      var e = t.Deferred();
      this.selectedSeason = !!this.options.season && this.options.season, this.$el.addClass("adminTheme1"), this.classes = this.options.classes, this.races = {}, this.chosenSeason = !1, this.garena = !!this.options.garena && this.options.garena, this.seasons = new o, this.deps = e.promise(), this.seasons.fetch({
        success: function () {
          e.resolve()
        }
      })
    }, events: {'change select[name="seasons"]': "changeSeason"}, changeSeason: function (e) {
      var n = this;
      if (n.$seasons.val()) for (var i in n.$races.html(""), n.classes) {
        var o = new r;
        o.id = n.$seasons.val(), o.characterClass = n.classes[i], o.characterClassName = i, o.fetch({
          success: function (e) {
            var i = new s({collection: e, title: e.characterClassName});
            i.render().done(function () {
              i.$el.addClass("layoutBox1").addClass("layoutBoxFull").addClass("defaultTheme"), i.$el.find("h2").each(function () {
                t(this).replaceWith("<h1>" + t(this).html() + "</h1>")
              }), i.$el.find("h1").addClass("topBar").addClass("first").addClass("last").addClass("layoutBoxTitle")
            }), n.$races.append(i.el)
          }
        })
      }
    }, render: function () {
      var e = this;
      this.deps.done(function () {
        i.load("PoE/View/Season/ViewSignatureRaces.hbt").done(function (t) {
          e.seasons.models.reverse();
          var n = [];
          for (var i in e.seasons.models) n.push(e.seasons.models[i].toJSON());
          var o = {seasons: n, garena: e.garena};
          e.$el.html(t(o)), e.delegateEvents(), e.$seasons = e.$el.find('select[name="seasons"]'), e.$races = e.$el.find(".races"), e.selectedSeason && e.$seasons.val(e.selectedSeason), e.changeSeason()
        })
      })
    }
  })
}),define("text!PoE/View/Season/PlayerHistory.hbt", [], function () {
  return '<div class="row league">\r\n    <div class="name cell info">{{leagueName}}</div>\r\n    <div class="points cell info">{{points}}</div>\r\n    <div class="rank cell info">\r\n        {{rank}}\r\n        {{#if pins}}\r\n        <a class="showcase-pin button add" data-type="{{#if pvp}}pvp_rank{{else}}event_rank{{/if}}" data-subtype="{{leagueName}}"></a>\r\n        {{/if}}\r\n    </div>\r\n</div>\r\n<div class="row trophy even">\r\n    {{#each trophies}}\r\n    <div class="name cell info">&gt; {{description}}</div>\r\n    <div class="points cell info">{{points}}</div>\r\n    {{/each}}\r\n</div>'
}),define("PoE/View/Season/PlayerHistory", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Helpers", "text!PoE/View/Season/PlayerHistory.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), i = e("PoE/Handlebars/TemplateCollection"), o = e("PoE/Helpers");
  return e("text!PoE/View/Season/PlayerHistory.hbt"), n.View.extend({
    initialize: function () {
    }, events: {"click .showcase-pin.add": "pin"}, pin: function (e) {
      var n = t(e.target);
      t.ajax({
        url: BASEURL + "/api/account/showcase-pins",
        dataType: "json",
        data: JSON.stringify(n.data()),
        contentType: "application/json",
        type: "POST",
        success: function (e) {
          t(".showcase-message").length ? t(".showcase-message").html(o.translate("Added pin")).animate({opacity: 1}, 800, function () {
            setTimeout(function () {
              t(".showcase-message").animate({opacity: 0}, 1500)
            }, 2e3)
          }) : alert("Added pin")
        },
        error: function (e) {
          alert(o.translate("There was an error adding this pin"))
        }
      })
    }, render: function () {
      var e = this;
      return i.load("PoE/View/Season/PlayerHistory.hbt").done(function (t) {
        var n = e.model.toJSON();
        n.rank = n.rank ? n.rank : "-", n.pins = !!e.options.pins, e.$el.html(t(n))
      })
    }
  })
}),define("PoE/Model/Season/Reward", ["Backbone", "PoE/Backbone/Model/Item/Item"], function (e, t, n) {
  return e.RelationalModel.extend({relations: [{type: e.HasOne, key: "item", relatedModel: n}]})
}),define("PoE/Model/Season/Season", ["Backbone", "./Reward"], function (e, t) {
  return e.RelationalModel.extend({relations: [{type: e.HasMany, key: "rewards", relatedModel: t}]})
}),define("PoE/Model/Season/PlayerHistory", ["require", "Backbone", "./Season"], function (e) {
  var t = e("Backbone"), n = e("./Season");
  return t.RelationalModel.extend({relations: [{type: t.HasOne, key: "season", relatedModel: n}]})
}),define("PoE/Collection/Season/PlayerHistory", ["require", "Backbone", "PoE/Model/Season/PlayerHistory", "PoE/Backbone/Paginator"], function (e) {
  e("Backbone");
  var t = e("PoE/Model/Season/PlayerHistory");
  return e("PoE/Backbone/Paginator").extend({
    model: t,
    paginator_core: {url: "/api/season-player-history", dataType: "json"},
    paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5},
    server_api: {
      page: function () {
        return this.currentPage
      }, perPage: function () {
        return this.perPage
      }, seasonId: "", id: "", realm: ""
    },
    perPageOptions: [5, 10, 20],
    parse: function (e) {
      return this.totalRecords = e.total, this.totalPages = Math.ceil(this.totalRecords / this.perPage), e.entries
    }
  })
}),define("text!PoE/View/Season/PlayerHistoryViewer.hbt", [], function () {
  return '<div class="loading-inline">{{translate "Loading"}}...</div>\r\n\r\n{{#if showSeasonSelect}}\r\n<select name="seasons">\r\n    <option value=""></option>\r\n    {{#each seasons}}\r\n    <option value="{{id}}">{{translate id}}</option>\r\n    {{/each}}\r\n</select>\r\n<span class="loading-inline"></span>\r\n{{/if}}\r\n\r\n<div class="historyContainer">\r\n    <div class="history">\r\n        <div class="row heading">\r\n            <div class="name cell">{{translate "League"}}</div>\r\n            <div class="points cell">{{translate "Points"}}</div>\r\n            <div class="rank cell">{{translate "Rank"}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="pagination"></div>'
}),define("PoE/View/Season/PlayerHistoryViewer", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/View/Season/PlayerHistory", "PoEAdmin/Collection/Season/Seasons", "PoE/Collection/Season/PlayerHistory", "PoE/View/Widget/Pagination", "PoE/Helpers", "text!PoE/View/Season/PlayerHistoryViewer.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), i = e("PoE/Handlebars/TemplateCollection"),
    o = e("PoE/View/Season/PlayerHistory"), r = e("PoEAdmin/Collection/Season/Seasons"),
    s = e("PoE/Collection/Season/PlayerHistory"), a = e("PoE/View/Widget/Pagination"), l = e("PoE/Helpers");
  return e("text!PoE/View/Season/PlayerHistoryViewer.hbt"), n.View.extend({
    initialize: function () {
      var e = this, n = t.Deferred();
      this.$el.addClass("playerHistoryViewer").addClass("table"), this.history = new s, this.history.server_api.id = this.model.get("name"), this.history.server_api.realm = this.model.get("realm"), this.pagination = new a({collection: this.history}), this.pins = !!this.options.pins, this.seasons = new r, this.options.pvp && (this.seasons.url = "/api/seasons?pvp=true"), this.deps = n.promise(), this.seasons.fetch({
        success: function () {
          n.resolve()
        }
      }), this.history.on("change", function () {
        e.updateHistory()
      }), this.history.on("reset", function () {
        e.updateHistory(), e.$el.find(".loading-inline").hide()
      })
    }, events: {'change select[name="seasons"]': "changeSeason"}, changeSeason: function (e) {
      var t = this;
      t.$loader.show(), this.history.server_api.seasonId = this.seasons.get(t.options.seasonName ? t.options.seasonName : this.$seasons.val()).get("id"), this.history.fetch({
        success: function () {
          t.updateHistory(), t.$loader.hide()
        }, error: function () {
          alert(l.translate("Failed to load history")), t.$loader.hide()
        }
      })
    }, updateHistory: function () {
      var e = this;
      this.$history.children("div:not(:first)").remove(), this.history.each(function (t) {
        var n = new o({model: t, pins: e.pins});
        n.render(), e.$history.append(n.$el)
      })
    }, render: function () {
      var e = this, n = t.Deferred();
      this.rendered = n.promise(), this.deps.done(function () {
        i.load("PoE/View/Season/PlayerHistoryViewer.hbt").done(function (t) {
          var i = {seasons: e.seasons.toJSON(), showSeasonSelect: !e.options.seasonName};
          e.$el.html(t(i)), e.delegateEvents(), e.$el.find(".pagination").replaceWith(e.pagination.el), e.$seasons = e.$el.find('select[name="seasons"]'), e.$loader = e.$el.find(".loading-inline").hide(), e.$history = e.$el.find(".history"), e.pagination.render(), e.pagination.delegateEvents(), n.resolve(), e.options.seasonName && e.changeSeason()
        })
      })
    }
  })
}),define("PoE/Model/Account/ShowcasePin", ["Backbone"], function (e) {
  return e.RelationalModel.extend({relations: []})
}),define("PoE/Collection/Account/ShowcasePins", ["jquery", "Backbone", "PoE/Model/Account/ShowcasePin", "PoE/Backbone/Paginator"], function (e, t, n, i) {
  return i.extend({
    model: n,
    paginator_core: {url: "/api/account/showcase-pins", dataType: "json"},
    paginator_ui: {firstPage: 1, currentPage: 1, perPage: 10, totalPages: 10},
    server_api: {
      offset: function () {
        return (this.currentPage - 1) * this.perPage
      }, limit: function () {
        return this.perPage
      }, account: "", realm: ""
    },
    parse: function (e) {
      return e.limit && (this.perPage = parseInt(e.limit, 10)), e.seasonId && (this.server_api.id = e.seasonId), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries
    }
  })
}),define("text!PoE/View/Profile/ShowcasePins.hbt", [], function () {
  return '{{#if noResult}}\r\n{{#if ../curAccountProfile}}\r\n<div class="showcase-item">\r\n    <p><em>{{translate "Your showcase is empty. Click a {PIN} to pin a notable item here." PIN="<img src=\'/image/profile/pin.png\' />"}}</em></p>\r\n</div>\r\n{{/if}}\r\n{{else}}\r\n\r\n{{#each showcasePins}}\r\n<div class="showcase-item">\r\n    <img class="icon" src="{{icon}}" />\r\n\r\n    <h2>{{label}}</h2>\r\n\r\n    {{#if ../curAccountProfile}}\r\n    <div class="showcase-manage">\r\n        <a class="showcase-pin button delete" data-id="{{id}}"></a>\r\n        <a class="showcase-move button up" data-id="{{id}}" data-direction="up"></a>\r\n        <a class="showcase-move button down" data-id="{{id}}" data-direction="down"></a>\r\n    </div>\r\n    {{/if}}\r\n</div>\r\n{{/each}}\r\n\r\n{{/if}}'
}),define("PoE/View/Profile/ShowcasePins", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Collection/Account/ShowcasePins", "PoE/Helpers", "text!PoE/View/Profile/ShowcasePins.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), i = e("PoE/Handlebars/TemplateCollection"),
    o = e("PoE/Collection/Account/ShowcasePins"), r = e("PoE/Helpers");
  return e("text!PoE/View/Profile/ShowcasePins.hbt"), n.View.extend({
    initialize: function () {
      var e = t.Deferred();
      this.messageTimer = !1, this.showcasepins = new o, this.deps = e.promise(), this.showcasepins.server_api.account = this.options.account, this.showcasepins.server_api.realm = this.options.realm, this.showcasepins.fetch({
        success: function () {
          e.resolve()
        }
      })
    },
    events: {"click .showcase-pin.button.delete": "unpin", "click .showcase-move.button": "move"},
    unpin: function (e) {
      var n = this, i = t(e.target);
      i.hasClass("disabled") || t.ajax({
        url: BASEURL + "/api/account/showcase-pins/" + i.data("id"),
        dataType: "json",
        data: JSON.stringify(i.data()),
        contentType: "application/json",
        type: "DELETE",
        success: function (e) {
          t(".showcase-message").html(r.translate("Deleted pin")).animate({opacity: 1}, 600, function () {
            clearTimeout(n.messageTimer), n.messageTimer = setTimeout(function () {
              t(".showcase-message").stop().animate({opacity: 0}, 1300)
            }, 2e3)
          }), n.refresh()
        },
        error: function (e) {
          alert(r.translate("There was an error deleting this pin"))
        }
      })
    },
    move: function (e) {
      var n = this, i = t(e.target);
      i.hasClass("disabled") || t.ajax({
        url: BASEURL + "/api/account/showcase-pins/" + i.data("id"),
        dataType: "json",
        data: JSON.stringify(i.data()),
        contentType: "application/json",
        type: "PUT",
        success: function (e) {
          t(".showcase-message").html(r.translate("Moved pin")).animate({opacity: 1}, 800, function () {
            clearTimeout(n.messageTimer), n.messageTimer = setTimeout(function () {
              t(".showcase-message").stop().animate({opacity: 0}, 1500)
            }, 2e3)
          }), n.refresh()
        },
        error: function (e) {
          alert(r.translate("There was an error moving this pin"))
        }
      })
    },
    refresh: function () {
      var e = this;
      e.showcasepins.fetch({
        success: function () {
          e.render()
        }
      })
    },
    render: function () {
      var e = this;
      this.deps.done(function () {
        i.load("PoE/View/Profile/ShowcasePins.hbt").done(function (t) {
          var n = {
            showcasePins: e.showcasepins.toJSON(),
            curAccountProfile: e.options.curAccountProfile,
            noResult: 0 === e.showcasepins.totalRecords
          };
          e.$el.html(t(n)), e.$el.find(".showcase-move.up:first, .showcase-move.down:last").addClass("disabled")
        })
      })
    }
  })
}),define("PoE/Form/Account/SignUpBase", ["require", "PoE/Util/Date", "plugins"], function (e) {
  var t = e("PoE/Util/Date"), n = e("plugins");
  return function (e) {
    var i = e instanceof n ? e : n(e), o = i.find('input[name="submit"]'), r = t.getTimezone();
    i.find('input[name="dst"]').val(r.dst ? 1 : 0), i.find('input[name="tzOffset"]').val(r.offset), i.submit(function () {
      return o.attr("disabled", !0).val("Loading..."), !0
    })
  }
}),define("PoE/Form/CaptchaRow", ["require", "plugins"], function (e) {
  var t = e("plugins");
  return function (e) {
    var n = e.find(".row.captcha:not(.recaptcha)"), i = n.find("img"), o = n.find('input[name="captcha[id]"]'),
      r = t('<div class="refresh" title="Refresh captcha"></div>');
    n.find(".element").append(r), r.click(function () {
      t.ajax({
        url: "/default/account/refresh-captcha", dataType: "json", success: function (e) {
          0 != e ? (i.hide().attr("src", "/gen/image/captcha/" + e + ".png"), o.attr("value", e)) : (0 == t('input[name="captcha[input]"]').parent().find(".errors").length && t('input[name="captcha[input]"]').parent().find(".refresh").after('<ul class="errors"></ul>'), t('input[name="captcha[input]"]').parent().find(".errors").html(""), t('input[name="captcha[input]"]').parent().find(".errors").append("<li>Too many captcha refresh requests, please wait</li>")), i.fadeIn()
        }
      })
    })
  }
}),define("PoE/Form/Account/SignUp", ["require", "plugins", "PoE/Form/Account/SignUpBase", "PoE/Form/CaptchaRow"], function (e) {
  var t = e("plugins"), n = e("PoE/Form/Account/SignUpBase"), i = e("PoE/Form/CaptchaRow");
  return function () {
    var e = t("#sign-up-container .layoutBoxContent"), o = t("#create_account"), r = t("#terms_of_use");
    n(o), i(o), t(function () {
      r.height(e.height())
    })
  }
}),define("PoE/Form/Account/LostPassword", ["require", "plugins", "PoE/Form/CaptchaRow"], function (e) {
  var t = e("plugins"), n = e("PoE/Form/CaptchaRow");
  return function () {
    n(t("#lost_password"))
  }
}),define("PoE/Form/Account/SteamSignUp", ["require", "plugins", "PoE/Form/Account/SignUpBase"], function (e) {
  var t = e("plugins"), n = e("PoE/Form/Account/SignUpBase");
  return function () {
    var e = t("#create_account"), i = t("#sign-up-container .layoutBoxContent"), o = t("#terms_of_use");
    n(e), t(function () {
      o.height(i.height())
    })
  }
}),define("PoE/Profile/FollowAccount", ["require", "plugins", "PoE/Helpers"], function (e) {
  var t = e("plugins"), n = e("PoE/Helpers");
  t("body").on("click", ".uiFollowButton", function (e) {
    var i = t(this), o = i.data("name");
    e.preventDefault(), i.css("opacity", .4), t.ajax({
      url: "/api/follow/" + o, type: "PUT", success: function (e) {
        i.removeClass("uiFollowButton").addClass("uiUnfollowButton");
        var t = n.translate("Unfollow {NAME}", {"{NAME}": o});
        i.attr("title", t), i.find("span").text(t)
      }, error: function (e) {
      }, complete: function () {
        i.css("opacity", "")
      }
    })
  }), t("body").on("click", ".uiUnfollowButton", function (e) {
    var i = t(this), o = i.data("name");
    e.preventDefault(), i.css("opacity", .4), t.ajax({
      url: "/api/follow/" + o, type: "DELETE", success: function (e) {
        i.removeClass("uiUnfollowButton").addClass("uiFollowButton");
        var t = n.translate("Follow {NAME}", {"{NAME}": o});
        i.attr("title", t), i.find("span").text(t)
      }, error: function (e) {
      }, complete: function () {
        i.css("opacity", "")
      }
    })
  })
}),define("PoE/Inventory/LinkedStashTab", ["plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "./StashPanel"], function (e, t, n, i) {
}),define("PoE/Inventory/LinkedStashRenderer", ["plugins", "Backbone", "./LinkedStashTab"], function (e, t, n) {
  return !1
}),define("PoE/Widget/GuildStashHistory/Viewer", ["require", "es6-promise", "vue", "vuex", "plugins", "Underscore", "moment", "PoE/Helpers", "vue-flatpickr"], function (e) {
  e("es6-promise");
  var t = e("vue"), n = e("vuex"), i = e("plugins"), o = (e("Underscore"), e("moment")), r = e("PoE/Helpers"),
    s = e("vue-flatpickr");
  t.use(n);
  var a = {
    state: {
      guildId: null,
      range: {startAt: null, startId: null, endAt: null, endId: null},
      entries: [],
      fetching: !1
    }, mutations: {
      setCurrentHistory: function (e, t) {
        e.range = t.range, e.entries = t.entries
      }, setFetching: function (e, t) {
        e.fetching = t
      }, setGuildId: function (e, t) {
        e.guildId = t
      }
    }, actions: {
      fetch: function (e, t) {
        return new Promise(function (n, o) {
          e.state.guildId ? (e.commit("setFetching", !0), i.ajax({
            url: "/api/guild/" + e.state.guildId + "/stash/history",
            method: "get",
            cache: "false",
            data: {from: t.at, fromid: t.id}
          }).done(function (i) {
            var o = i.entries, r = o.length ? o[o.length - 1] : null;
            e.commit("setCurrentHistory", {
              entries: o,
              range: {startAt: t.at, startId: t.id, endAt: r ? r.time : null, endId: r ? r.id : null}
            }), n(o)
          }).fail(function (e, t, i) {
            console.log(i), n([])
          }).always(function () {
            e.commit("setFetching", !1)
          })) : o("No guild id")
        })
      }
    }
  }, l = new n.Store({strict: !0, modules: {history: a}});
  return function (e) {
    t.component("flat-pickr", s), t.mixin({
      methods: {
        translate: r.translate,
        distUrl: r.distUrl,
        unixToDate: function (e) {
          return o.unix(e).calendar()
        }
      }
    }), window.app = new t({
      store: l,
      data: {
        debug: e.debug || !1, datePickerConfig: {
          enableTime: !0, time_24hr: !0, parseDate: function (e, t, n) {
            return new Date(e)
          }
        }
      },
      computed: {
        history: function () {
          return this.$store.state.history
        }, date: function () {
          if (this.history.range.startAt) return new Date(1e3 * this.history.range.startAt);
          var e = new Date;
          return e.setHours(23, 59, 59), e
        }
      },
      methods: {
        next: function () {
          this.$store.dispatch("fetch", {at: this.history.range.endAt, id: this.history.range.endId})
        }, reset: function () {
          this.$store.commit("setCurrentHistory", {
            entries: [],
            range: {startAt: null, startId: null, endAt: null, endId: null}
          }), this.$store.dispatch("fetch", {at: Date.parse(this.date) / 1e3, id: null})
        }, updateDate: function (e) {
          var t = e.length ? e[0] : null;
          t && t.getTime() !== this.date.getTime() && (this.$store.commit("setCurrentHistory", {
            entries: [],
            range: {startAt: Date.parse(t) / 1e3, startId: null, endAt: null, endId: null}
          }), this.$store.dispatch("fetch", {at: this.history.range.startAt, id: this.history.range.startId}))
        }
      },
      created: function () {
        this.$store.commit("setGuildId", e.guildId || null), this.$store.dispatch("fetch", {
          at: Date.parse(this.date) / 1e3,
          id: null
        })
      }
    }), window.app.$mount("#guild-stash-history-viewer")
  }
}),define("PoE/PrivateLeague/PrivateLeague", ["jquery", "moment", "PoE/Helpers", "flatpickr"], function (e, t, n, i) {
  return {
    init: function (i) {
      this.countdownSelector = "#mini-countdown", i && i.countdownSelector && (this.countdownSelector = i.countdownSelector), this.timezone = t.tz.guess(), this.pickr = null, this.defaultTime = t().toDate(), this.startTimeMessage = n.translate("This private league starts at {START_TIME}."), this.currentTimeMessage = n.translate("The League will start when it is created."), this.leagueStartMessage = n.translate("after league start, are you sure?"), this.startHoursMessage = n.translate("from now, are you sure?"), this.currentTimeText = n.translate("Now"), this.countdownElement = e(this.countdownSelector + " .countdown")
    }, getDefaultTime: function () {
      return this.defaultTime
    }, getBrowserTimezone: function () {
      return this.timezone
    }, getLocalTime: function (e) {
      return t(e).tz(this.timezone).toDate()
    }, getLocalTimeString: function (e) {
      return t(e).tz(this.timezone).format("YYYY-MM-DD HH:mm")
    }, initDateAndCountdown: function (e, t, n) {
      var i = e && this.getMaxDate(e, this.defaultTime) > this.defaultTime ? this.getLocalTime(e) : null,
        o = i || this.defaultTime, r = i ? this.getLocalTimeString(i) : this.currentTimeText,
        s = t ? this.getMaxDate(t, o) : o, a = i || this.getMinDate(o, n);
      return this.pickr.set("minDate", a), this.pickr.setDate(s), this.showCountdown(s, !1), r
    }, getMinDate: function (e, t) {
      return this.getLocalTime(e) < this.getLocalTime(t) ? this.getLocalTime(e) : this.getLocalTime(t)
    }, getMaxDate: function (e, t) {
      return this.getLocalTime(e) > this.getLocalTime(t) ? this.getLocalTime(e) : this.getLocalTime(t)
    }, getStartTimeWarning: function (e, n) {
      var i = [];
      i.hours = 0;
      var o = this.getLocalTime(new Date), r = n ? this.getMaxDate(n, o) : o;
      if (e = t.tz(e, this.timezone).toDate(), !this.isValidStartTime(e, r)) return i.html = this.currentTimeMessage, i;
      var s = this.startTimeMessage.replace("{START_TIME}", this.getLocalTimeString(e)), a = this.getDiffHours(e, r);
      return a > 0 && (i.hours = a, s += '<br><span class="error start-time-warning-error">'.concat(a, " Hours</span> "), s += n && this.isFutureStartTime(r) ? this.leagueStartMessage : this.startHoursMessage), i.html = s, i
    }, isValidStartTime: function (e, t) {
      return e - t >= 0
    }, isFutureStartTime: function (e) {
      return e - this.getLocalTime(new Date) > 0
    }, getDiffHours: function (e, t) {
      var n = e - t;
      return n > 0 ? Math.floor(n / 1e3 / 60 / 60) : 0
    }, showCountdown: function (t, n) {
      t > this.defaultTime ? (this.initCountdown(t, n), e(this.countdownSelector).parent(".countdown-container").show()) : (this.destroyCountdown(), e(this.countdownSelector).parent(".countdown-container").hide())
    }, initCountdown: function (n, i) {
      var o = e(this.countdownSelector + " .league-start-message"), r = n - t().toDate(),
        s = r > 0 ? Math.floor(r / 1e3) : 0, a = [0, 0, 0, 0, 0, 0, 0], l = this;
      o.hide(), 0 === s && o.show(), this.countdownElement.countdown("destroy"), this.countdownElement.countdown({
        until: s,
        layout: '<div class="days">{dn}</div><div class="hours">{hn}</div><div class="minutes">{mn}</div><div class="seconds">{sn}</div>',
        onTick: function (e) {
          var t = function (t, n) {
            e[t] !== a[t] && (a[t] = e[t], l.countdownElement.find(n).addClass("start"), setTimeout(function () {
              l.countdownElement.find(n).addClass("done")
            }, 0), 0 === e[t] && 6 === t && l.countdownElement.find(n).addClass("zero"))
          };
          t(6, ".seconds"), t(5, ".minutes"), t(4, ".hours"), t(3, ".days")
        },
        onExpiry: function () {
          setTimeout(function () {
            i ? e(this.countdownSelector).parent(".countdown-container").hide() : (o.show(), l.countdownElement.find(".seconds").removeClass("start zero done"))
          }, 1e3)
        }
      })
    }, destroyCountdown: function () {
      this.countdownElement.countdown("destroy")
    }, initFlatpickr: function (n, o, r) {
      var s = this;
      return s.pickr = i(n, {
        enableTime: !0,
        time_24hr: !0,
        minDate: t(o).toDate(),
        maxDate: t(r).toDate(),
        parseDate: function (e, t, n) {
          return new Date(e)
        },
        onChange: function (t, i, o) {
          t.length > 0 && s.showCountdown(t[0], !1), "block" == e(n).css("display") && (s.pickr.toggle(), s.pickr.open())
        }
      }), s.pickr
    }
  }
}),define("PoE/Service/Settings", ["require", "PoE/Helpers", "es6-promise", "nodelist", "fetch"], function (e) {
  e("PoE/Helpers");
  return e("es6-promise"), e("nodelist"), e("fetch"), function () {
    function e(t, n) {
      var i = this;
      _classCallCheck(this, e), this.options = _objectSpread({}, n), this.keys = t, this.timeOut = 12e3, setTimeout(function () {
        return i.fetchSettings()
      }, this.timeOut)
    }

    return _createClass(e, [{
      key: "enableEl", value: function (e) {
        var t = document.querySelector(".locked_" + e.key);
        t && (t.classList.add(e.key), t.classList.remove("locked"), t.firstChild.setAttribute("href", e.settings[0].url))
      }
    }, {
      key: "fetchSettings", value: function () {
        var e = this;
        this.keys.length > 0 && fetch("/api/page-setting/" + this.keys.join()).then(function (e) {
          if (e.ok) return e.json();
          throw new Error("Error occurred")
        }).then(function (t) {
          t && t.map(function (t) {
            t.enabled && (e.enableEl(t), e.keys = e.keys.filter(function (e) {
              return t.key !== e
            }))
          }), setTimeout(function () {
            return e.fetchSettings()
          }, e.timeOut)
        })
      }
    }]), e
  }()
}),define("text!PoE/Ascendancy/Ascendancy.hbt", [], function () {
  return '<div class="ascendancy-hover-box"></div>\r\n<svg version="1.1" viewbox="0 0 {{frameW}} {{frameH}}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r\n    \x3c!-- defining image icons and lines --\x3e\r\n    <defs>\r\n        <filter id="Darken">\r\n            <feColorMatrix in="SourceGraphic" type="saturate" values="0.3" />\r\n        </filter>\r\n        <pattern id="LargeBorder" x="0%" y="0%" width="100%" height="100%" patternContentUnits="objectBoundingBox">\r\n          <image xlink:href="{{largeBorder}}" width="1" height="1" preserveAspectRatio="none"/>\r\n        </pattern>\r\n        <pattern id="SmallBorder" x="0%" y="0%" width="100%" height="100%" patternContentUnits="objectBoundingBox">\r\n          <image xlink:href="{{smallBorder}}" width="1" height="1" preserveAspectRatio="none"/>\r\n        </pattern>\r\n        {{#each nodes}}\r\n            <pattern id="{{@key}}" x="0%" y="0%" width="100%" height="100%" patternContentUnits="objectBoundingBox">\r\n                <image xlink:href="{{icon}}" width="1" height="1" preserveAspectRatio="none"/>\r\n            </pattern>\r\n        {{/each}}\r\n        {{drawAscendancyLines nodes offsetX}}\r\n    </defs>\r\n    <g>\r\n      \x3c!-- frame --\x3e\r\n      <image x="{{offsetX}}" y="0%" width="{{imageW}}" height="{{frameH}}" xlink:href="{{ascData.background}}"></image>\r\n      <image x="{{math titlePlaque.x \'+\' offsetX}}" y="{{titlePlaque.y}}" width="{{titlePlaque.width}}" height="{{titlePlaque.height}}" xlink:href="{{titlePlaque.image}}"></image>\r\n      <text text-anchor="middle" fill="#7CB29C" x="{{math titlePlaque.centerX \'+\' offsetX}}" y="{{math titlePlaque.height \'/\' 1.6}}" style="font-family: FontinBold; font-size: 18px; font-style: italic; paint-order: stroke; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke: #525252;">{{ascData.displayName}}</text>\r\n      \x3c!-- flavour text --\x3e\r\n      {{drawAscendancyFlavourText flavourText offsetX 24}}\r\n\r\n      \x3c!-- draw lines --\x3e\r\n      {{drawAscendancyLines nodes offsetX}}\r\n      \x3c!-- draw icons --\x3e\r\n      {{#each nodes}}\r\n        <g class="node-group">\r\n          {{#if isAscendancyStart}}\r\n            <circle class="node node-{{@key}}" data-node="{{@key}}" cx="{{math x \'+\' ../offsetX}}" cy="{{y}}" r="{{ir}}" opacity="1" fill="url(#{{@key}})"></circle>\r\n          {{else}}\r\n            <circle class="node" data-node="{{@key}}" cx="{{math x \'+\' ../offsetX}}" cy="{{y}}" r="{{ir}}" opacity="1" fill="url(#{{@key}})" filter="url(#Darken)"></circle>\r\n            {{#if isNotable}}\r\n              <circle class="node node-{{@key}}" data-node="{{@key}}" cx="{{math x \'+\' ../offsetX}}" cy="{{y}}" r="{{or}}" opacity="1" fill="url(#LargeBorder)"></circle>\r\n            {{else}}\r\n              <circle class="node node-{{@key}}" data-node="{{@key}}" cx="{{math x \'+\' ../offsetX}}" cy="{{y}}" r="{{or}}" opacity="1" fill="url(#SmallBorder)"></circle>\r\n            {{/if}}\r\n          {{/if}}\r\n      </g>\r\n      {{/each}}\r\n    </g>\r\n</svg>\r\n\r\n{{#each nodes}}\r\n<div class="description-{{@key}} ascendancy-popup" data-node="{{@key}}">\r\n  <div class="FontinBold ascendancy-description">\r\n    {{name}}\r\n    {{#if stats}}\r\n      <div class="ascendancy-description-inner">\r\n        {{#each stats}}\r\n          {{ formatAscendancyText this}}<br>\r\n        {{/each}}\r\n      </div>\r\n    {{/if}}\r\n    {{#if reminderText}}\r\n    <div class="ascendancy-description-inner reminder-text">\r\n      {{#each reminderText}}\r\n        {{ formatAscendancyText this}}<br>\r\n      {{/each}}\r\n    </div>\r\n    {{/if}}\r\n  </div>\r\n</div>\r\n{{/each}}'
}),define("PoE/Ascendancy/Ascendancy", ["jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Layout/Popup/Popup", "text!PoE/Ascendancy/Ascendancy.hbt"], function (e, t, n, i) {
  return t.View.extend({
    initialize: function (e) {
      this.render(), this.UA = window.navigator.userAgent.toLowerCase(), this.isIE = this.UA && /msie|trident|edge/.test(this.UA), this.isForum = e.isForum
    }, mouseenter: function (t, n) {
      var i = t.getAttribute("data-node");
      if (n != i) {
        var o = (t = this.$el[0].querySelector(".node-" + i)).getBBox(), r = o.x, s = o.y, a = 10;
        if (t.style.width = parseInt(o.width + a) + "px", t.style.height = parseInt(o.height + a) + "px", !this.isForum && o.y < 300 && this.isIE) {
          a = 30;
          var l = document.getElementsByClassName("ascendancy-hover-box"), c = this.convertCoords(r, s, t);
          e(l[0]).css({
            top: c.y,
            left: c.x,
            width: parseInt(o.width + a),
            height: parseInt(o.height + a)
          }), this.popups[i].positionBelowEl(e(l[0]))
        } else this.popups[i].smartPositionByEl(e(t))
      }
    }, convertCoords: function (e, t, n) {
      var i = this.$el[0].getElementsByTagName("svg")[0].getBoundingClientRect(), o = n.getScreenCTM();
      return {x: o.a * e + o.c * t + o.e - i.left, y: o.b * e + o.d * t + o.f - i.top}
    }, mouseleave: function (e) {
      var t = e.getAttribute("data-node");
      this.popups[t].hide()
    }, render: function () {
      var e = this, t = this.$el;
      this.popups = [];
      var o = this.model;
      n.load("PoE/Ascendancy/Ascendancy.hbt").done(function (e) {
        t.html(e(o))
      }).then(function () {
        if (o.nodes) for (var n in o.nodes) {
          var r = t[0].querySelector(".description-" + n);
          if (r) {
            r.classList.remove("prepared");
            var s = window.top.outerWidth > 550 || window.top.outerWidth < 200 ? 550 : window.outerWidth;
            r.style.width = r.offsetWidth > s ? s + "px" : r.offsetWidth + "px", r.offsetWidth >= s && r.classList.add("maxwidth"), r.classList.add("prepared"), e.popups[n] = new i(r)
          }
        }
        var a = t[0].querySelectorAll(".node");
        for (var n in a) if (a.hasOwnProperty(n)) {
          var l = a[n].getAttribute("data-node");
          a[n].addEventListener("mouseenter", function (t) {
            e.mouseenter(t.currentTarget, o.startNode)
          }), a[n].addEventListener("mouseleave", function (t) {
            e.mouseleave(t.currentTarget)
          });
          var c = t[0].querySelectorAll(".description-" + l);
          c.length > 0 && (c[0].addEventListener("mouseenter", function (t) {
            e.mouseenter(t.currentTarget, o.startNode)
          }), c[0].addEventListener("mouseleave", function (t) {
            e.mouseleave(t.currentTarget)
          }))
        }
      })
    }
  })
}),define("PoE/Ascendancy/AscendancyRenderer", ["jquery", "Handlebars", "PoE/Ascendancy/Ascendancy"], function (e, t, n) {
  var i = 900, o = 700, r = window.navigator.userAgent.toLowerCase(), s = r && /msie|trident/.test(r);
  return {
    init: function (t, r, s) {
      for (var a in this.registerHelper(), i = r, o = s, offsetX = parseInt((i - 675) / 2), t) {
        var l = t[a];
        l.offsetX = offsetX, l.imageW = 675, l.frameW = i, l.frameH = o;
        var c = e("#" + l.elementId);
        c.height(l.frameH), new n({el: c, model: l, isForum: t.length > 1})
      }
    }, registerHelper: function () {
      var e = this;
      t.registerHelper("drawAscendancyLines", function (n, i) {
        return new t.SafeString(e.drawAscendancyLines(n, i))
      }), t.registerHelper("drawAscendancyFlavourText", function (n, i, o) {
        return new t.SafeString(e.drawAscendancyFlavourText(n, i, o))
      }), t.registerHelper("formatAscendancyText", function (e) {
        return e = (e = t.Utils.escapeExpression(e)).replace(/(\r\n|\n|\r)/gm, "<br>"), new t.SafeString(e)
      })
    }, drawAscendancyLines: function (e, t) {
      var n = "";
      for (var i in t = parseInt(t), e) for (var o in e[i].out) {
        var r = e[e[i].out[o]];
        if (r) {
          var s = parseFloat(e[i].x), a = parseFloat(e[i].y), l = parseFloat(r.x), c = parseFloat(r.y);
          n += '<line x1="' + (s + t) + '" y1="' + a + '" x2="' + (l + t) + '" y2="' + c + '" style="stroke-width: 5px; stroke: #746543"></line><line x1="' + (s + t) + '" y1="' + a + '" x2="' + (l + t) + '" y2="' + c + '" style="stroke-width: 2px; stroke: #231c0c"></line>'
        }
      }
      return n
    }, drawAscendancyFlavourText: function (e, t, n) {
      var i = e.flavourText.split("\n"), o = (n = n ? parseInt(n) : 0, e.fontSize > 24 ? 24 : e.fontSize),
        r = parseFloat(e.x) + parseInt(t),
        a = '<text fill="rgb(' + e.flavourTextColour + ')" x="' + r + '" y="' + e.y + '" width="' + e.width + '" height="' + e.height + '" style="font-family: FontinItalic; font-size:' + o + "px; font-style: italic; paint-order: stroke; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke: black; font-weight:" + (s ? "bold" : "normal") + ';">';
      for (var l in i) n += 0 == l ? o / 2 : o, i.length > l && (a += '<tspan x="' + r + '" y="' + (parseFloat(e.y) + n) + '">' + i[l].replace(/\s/g, "&nbsp;") + "</tspan>");
      return a += "</text>"
    }
  }
}),define("default/gallery/gallery", ["require", "plugins", "PoE/Helpers"], function (e) {
  var t = e("plugins"), n = n || {}, i = e("PoE/Helpers");
  return n.Gallery = function (e, o, r, s) {
    this.init = function () {
      var i = this;
      this.els = {
        content: t(e),
        breadcrumb: t(o)
      }, this.els.pagination = t(r), this.els.botControls = this.els.pagination.parent(), this.state = {
        current: null,
        states: {
          browseGalleries: new n.Gallery.BrowseGalleriesState(this),
          viewGallery: new n.Gallery.ViewGalleryState(this),
          previewImage: new n.Gallery.PreviewImageState(this),
          loading: new n.Gallery.LoadingState(this)
        }
      }, this.options = {enableHistory: !0}, this.events = {
        avatarChosen: function () {
        }
      }, this.isHistorySupported() && (window.onpopstate = function (e) {
        null !== e.state && i.loadStateFromUrl()
      }), this.setOpts(s)
    }, this.setOpts = function (e) {
      e && (void 0 !== e.enableHistory && (this.options.enableHistory = e.enableHistory), e.events && e.events.avatarChosen && (this.events.avatarChosen = e.events.avatarChosen))
    }, this.loadStateFromUrl = function () {
      for (var e = window.location.href.split("/"), t = (e[e.length - 1], e[e.length - 2], -1), n = 0, i = e.length; n < i; ++n) if ("gallery" == e[n]) {
        t = n;
        break
      }
      if (-1 != t) for (var o in e = e.slice(t + 1), this.state.states) if (this.state.states[o].loadStateFromUrlParts(e)) return
    }, this.enableBotControls = function (e) {
      e ? this.els.botControls.show() : this.els.botControls.hide()
    }, this.setStartState = function (e, t) {
      this.state.current = this.state.states[e], this.state.current.setState(t), this.pushHistoryState()
    }, this.currentState = function () {
      return this.state.current
    }, this.getState = function (e) {
      var t = this.state.states[e];
      return void 0 === t ? null : t
    }, this.showState = function (e) {
      var t = this.state.states[e];
      void 0 !== t && (this.state.current = t, t.show())
    }, this.browseGalleries = function (e) {
      var t = this;
      return this.state.states.browseGalleries.load(function () {
        t.showState("browseGalleries")
      }), !1
    }, this.viewGallery = function (e) {
      var t = this;
      return this.state.states.viewGallery.setGalleryId(e), this.state.states.viewGallery.load(function () {
        t.showState("viewGallery")
      }), !1
    }, this.previewImage = function (e) {
      var t = this;
      return this.state.states.previewImage.setImageId(e), this.state.states.previewImage.load(function () {
        t.showState("previewImage")
      }), !1
    }, this.setAvatarImageId = function (e, n) {
      if (!confirm(i.translate("Make this image your avatar?"))) return !1;
      var o = (n = t(n)).parents(".avatar-status:first"), r = o.find(".current-avatar"), s = o.find(".make-avatar"),
        a = this;
      return o.height(o.height()), r.hide(), s.hide(), o.addClass("avatar-status-loading"), t.ajax({
        url: "/my-account/set-avatar-image-id",
        data: {id: e},
        cache: !1,
        dataType: "json",
        type: "POST",
        success: function (e) {
          1 == e ? (o.removeClass("avatar-status-loading"), a.els.content.find(".current-avatar").hide(), a.els.content.find(".make-avatar").show(), s.hide(), r.fadeIn(), a.events.avatarChosen()) : s.show()
        }
      }), !1
    }, this.pushHistoryState = function () {
      this.isHistorySupported() && window.history.pushState({}, "", this.state.current.getHistoryUrl())
    }, this.isHistorySupported = function () {
      return !(!window.history || !history.pushState)
    }, this.init()
  }, n.Gallery.LoadingState = function (e) {
    this.init = function () {
      this.gallery = e, this.loadingEl = t('<div class="loading"></div>'), this.state = {}
    }, this.loadStateFromUrlParts = function (e) {
      return !1
    }, this.load = function (e) {
    }, this.show = function () {
      this.gallery.els.content.empty().append(this.loadingEl)
    }, this.init()
  }, n.Gallery.BrowseGalleriesState = function (e) {
    this.init = function () {
      this.gallery = e, this.state = {page: 1, perPage: 8}, this.responseCache = null
    }, this.getHistoryUrl = function () {
      return "/gallery" + (1 != this.state.page ? "/page/" + this.state.page : "")
    }, this.load = function (e, n) {
      var i = this;
      this.gallery.state.states.loading.show(), t.ajax({
        url: "/gallery",
        data: {page: this.state.page, perPage: this.state.perPage, _xhr: !0},
        cache: !1,
        dataType: "json",
        type: "GET",
        success: function (t) {
          i.responseCache = t, e(), i.gallery.options.enableHistory && (void 0 === n || n) && i.gallery.pushHistoryState()
        }
      })
    }, this.loadStateFromUrlParts = function (e) {
      var t = this;
      if (e.length > 0 && ("view" == e[0] || "preview" == e[0])) return !1;
      for (this.state.page = 1, e = e.slice(0); e.length > 0;) {
        "page" == e.shift() && e.length > 0 && (this.state.page = e.shift())
      }
      return this.load(function () {
        t.gallery.showState("browseGalleries")
      }, !1), !0
    }, this.gotoPage = function (e) {
      var t = this;
      return this.state.page = e, this.load(function () {
        t.gallery.showState("browseGalleries")
      }), !1
    }, this.setState = function (e) {
      this.state = t.extend({}, this.state, e)
    }, this.show = function () {
      this.gallery.state.current = this, this.gallery.els.content.empty().hide().append(this.responseCache.content).fadeIn(), this.gallery.els.breadcrumb.empty().append(this.responseCache.breadcrumb), this.gallery.els.pagination.empty().append(this.responseCache.pagination), this.gallery.enableBotControls(this.responseCache.bce)
    }, this.init()
  }, n.Gallery.ViewGalleryState = function (e) {
    this.init = function () {
      this.gallery = e, this.state = {galleryId: null, page: 1, perPage: 8}, this.responseCache = null
    }, this.getHistoryUrl = function () {
      return "/gallery/view/" + this.state.galleryId + (1 != this.state.page ? "/page/" + this.state.page : "")
    }, this.setGalleryId = function (e) {
      this.state.galleryId = e
    }, this.gotoPage = function (e) {
      var t = this;
      return this.state.page = e, this.load(function () {
        t.gallery.showState("viewGallery")
      }), !1
    }, this.load = function (e, n) {
      var i = this;
      this.gallery.state.states.loading.show(), t.ajax({
        url: "/gallery/view/" + this.state.galleryId,
        data: {page: this.state.page, perPage: this.state.perPage, _xhr: !0},
        cache: !1,
        dataType: "json",
        type: "GET",
        success: function (t) {
          i.responseCache = t, e(), i.gallery.options.enableHistory && (void 0 === n || n) && i.gallery.pushHistoryState()
        }
      })
    }, this.loadStateFromUrlParts = function (e) {
      if ((e = e.slice(0)).length < 2) return !1;
      if ("view" != e.shift()) return !1;
      for (this.state.page = 1, this.state.galleryId = e.shift(); e.length > 0;) {
        "page" == e.shift() && e.length > 0 && (this.state.page = e.shift())
      }
      var t = this;
      this.load(function () {
        t.gallery.showState("viewGallery")
      }, !1)
    }, this.show = function () {
      this.gallery.els.content.empty().hide().append(this.responseCache.content).fadeIn(), this.gallery.els.breadcrumb.empty().append(this.responseCache.breadcrumb), this.gallery.els.pagination.empty().append(this.responseCache.pagination), this.gallery.enableBotControls(this.responseCache.bce)
    }, this.setState = function (e) {
      this.state = t.extend({}, this.state, e)
    }, this.init()
  }, n.Gallery.PreviewImageState = function (e) {
    this.init = function () {
      this.gallery = e, this.state = {imageId: null}, this.responseCache = null
    }, this.getHistoryUrl = function () {
      return "/gallery/preview/" + this.state.imageId
    }, this.setImageId = function (e) {
      this.state.imageId = e
    }, this.loadStateFromUrlParts = function (e) {
      return !1
    }, this.load = function (e, n) {
      this.gallery.state.states.loading.show();
      var i = this;
      t.ajax({
        url: "/gallery/preview/" + this.state.imageId,
        data: {_xhr: !0},
        cache: !1,
        dataType: "json",
        type: "GET",
        success: function (t) {
          i.responseCache = t, e(), i.gallery.options.enableHistory && (void 0 === n || n) && i.gallery.pushHistoryState()
        }
      })
    }, this.show = function () {
      this.gallery.els.content.empty().hide().append(this.responseCache.content).fadeIn(), this.gallery.els.breadcrumb.empty().append(this.responseCache.breadcrumb), this.gallery.els.pagination.empty().append(this.responseCache.pagination), this.gallery.enableBotControls(this.responseCache.bce)
    }, this.setState = function (e) {
      this.state = e
    }, this.init()
  }, n
}),define("default/access_key", ["jquery"], function (e) {
  e(document).ready(function () {
    e("#generate_key").click(function (t) {
      e.ajax({
        type: "POST", url: "/my-account/preferences", contentType: "application/json", success: function (t) {
          e("#access_key").val(t.access_key)
        }, error: function (e) {
        }
      })
    })
  })
}),define("default/showcase-pins", ["jquery", "PoE/Helpers"], function (e, t) {
  e(document).ready(function () {
    e(".showcase-pin.button.add").click(function (n) {
      var i = e(this);
      n.target;
      console.log(i.data()), e.ajax({
        url: BASEURL + "/api/account/showcase-pins",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(i.data()),
        type: "POST",
        success: function (n) {
          e(".showcase-message").length ? e(".showcase-message").html(t.translate("Added pin")).animate({opacity: 1}, 800, function () {
            setTimeout(function () {
              e(".showcase-message").animate({opacity: 0}, 1500)
            }, 2e3)
          }) : alert(t.translate("Added pin")), i.hide();
          try {
            getShowcasePins()
          } catch (e) {
          }
        },
        error: function (e) {
          alert(t.translate("There was an error adding this pin"))
        }
      })
    })
  })
}),define("default/private-messages/compose", ["jquery"], function (e) {
  e(document).ready(function () {
    e("#pm-form").on("click", ".remove", function (t) {
      var n = e(this).closest("fieldset");
      n.find("ul.recipients > li").length > 1 ? (e(this).unbind("click"), e(this).parent().slideUp("fast").promise().done(function () {
        e(this).remove()
      })) : n.remove(), t.preventDefault()
    })
  })
}),define("default/private-messages/folder-view", ["jquery"], function (e) {
  e(document).ready(function () {
    e("#select-all").on("click", function (t) {
      e(".pm-list .controls input[type=checkbox]").prop("checked", !0), t.preventDefault()
    }), e("#deselect-all").on("click", function (t) {
      e(".pm-list .controls input[type=checkbox]").prop("checked", !1), t.preventDefault()
    });
    var t = e("#pm-list-controls .view-mode");
    t.change(function () {
      window.location.search = "?mode=" + e(this).val()
    }), t.prop("disabled", !1)
  })
}),define("main", ["plugins", "PoE/Environment/Font", "PoE/Loader", "PoE/Item/Item", "PoE/BetaCountdown", "PoE/Item/DeferredItemRenderer", "PoE/Forum", "PoE/Forum/Thread/Autosave", "PoE/Forum/Thread/Tags", "PoE/Forum/Thread/DatePicker", "PoE/View/Profile/Badges", "PoE/Forum/Post/Autosave", "PoE/Form", "PoE/Shop", "PoE/Profile/SelectAvatar", "PoE/Ladder/Ladder", "PoE/Widget/League/Ladder/Ladder", "PoE/Inventory/InventoryControls", "PoE/Widget/Guild/MemberPanel", "PoE/Widget/Guild/LeaderPanel", "PoE/Widget/TwitchTV", "PoE/Widget/YoutubeModal", "PoE/Widget/OpenBetaCountdown", "PoE/Widget/R16Label", "PoE/Widget/Season/SeasonInfo", "PoE/Widget/Season/Ladder/Ladder", "PoE/Widget/League/Event/Event", "PoE/Widget/ProfileLink/TwitchPopup", "PoE/Shop/PaymentForm", "PoE/Shop/PaymentFormExistingCard", "PoE/Shop/XsollaPaymentWidget", "PoE/Shop/KakaoPaymentWidget", "PoE/Widget/League/EventCalendar/EventCalendar", "PoE/View/Season/ViewSignatureRaces", "PoE/View/Season/PlayerHistory", "PoE/View/Season/PlayerHistoryViewer", "PoE/View/Profile/ShowcasePins", "PoE/Form/Account/SignUp", "PoE/Form/Account/LostPassword", "PoE/Form/Account/SteamSignUp", "PoE/Profile/FollowAccount", "PoE/Inventory/LinkedStashRenderer", "PoE/Widget/GuildStashHistory/Viewer", "PoE/View/Widget/Modal", "PoE/View/Widget/ConfirmDialog", "PoE/PrivateLeague/PrivateLeague", "PoE/Service/Settings", "PoE/Ascendancy/AscendancyRenderer", "PoE/Ascendancy/Ascendancy", "default/gallery/gallery", "default/access_key", "default/showcase-pins", "default/private-messages/compose", "default/private-messages/folder-view"], function (e, t) {
  e(window).resize(function () {
    e("body > .container").css("min-height", e(window).height())
  }), t.loadFonts(), e(".header > .navigation > li > a").on("touchstart", function (t) {
    var n = e(this);
    n.is(":hover") || n.data("touch-prevent", "true")
  }).on("click", function (t) {
    var n = e(this);
    n.data("touch-prevent") && (t.preventDefault(), n.data("touch-prevent", ""))
  })
});
