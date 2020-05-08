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
  const {hostname}: {hostname: string} = window.location;
  let vue: Vue;

  let targetModule = await import(/* webpackMode: "eager" */ `@/${ApiConsts.APP_TARGET}/`);
  let el;
  if (['localhost', '0.0.0.0', '127.0.0.1'].indexOf(hostname) >= 0) {
    el = await targetModule.getDevHtmlNode();
  } else {
    el = await targetModule.getProdHtmlNode();
  }

  window.vue =  await targetModule.getVueApp({el, store, vuetify});;

})();

