// ClassComponentHooks and mixins should be imported before others
import "@/assets/sass/globals.sass";
import "@/utils/classComponentHooks"; // eslint-disable-line import/no-unassigned-import
import "@/utils/mixins"; // eslint-disable-line import/no-unassigned-import
import {api, xhr} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts"; // eslint-disable-line import/no-namespace
import Vue from "vue";
import {store} from "@/store/store";
import {vuetify} from "@/utils/vuetify";


Vue.prototype.$api = api;

window.consts = ApiConsts;
window.store = store;
window.api = api;
window.xhr = xhr;


(async function () {
  const hostname: string = /^(www\.)?(?<host>.*)$/u.exec(window.location.hostname)?.groups?.host!;

  let el;
  let getVueApp;
  if (ApiConsts.APP_TARGET) {
    const targetModule = await import(/* webpackMode: "eager" */ `@/${ApiConsts.APP_TARGET}/`);
    el = await targetModule.getDevHtmlNode();
    getVueApp = targetModule.getVueApp;
  } else {
    switch (hostname) {
      case "pathofexile.com":
      case "currency.poe.trade":
      case "poe.trade":
        const targetModule = await import(/* webpackMode: "eager" */ `@/${hostname}/`)
        getVueApp = targetModule.getVueApp;
        el = await targetModule.getProdHtmlNode();
        break;
      default:
        throw Error(`Unsupported host ${hostname}`);
    }
  }

  window.vue =  await getVueApp({el, store, vuetify});

})();

