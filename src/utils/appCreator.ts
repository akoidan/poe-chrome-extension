// ClassComponentHooks and mixins should be imported before others
import "@/assets/sass/globals.sass";
import "@/utils/classComponentHooks"; // eslint-disable-line import/no-unassigned-import
import "@/utils/mixins"; // eslint-disable-line import/no-unassigned-import
import {api, globalLogger, xhr} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts"; // eslint-disable-line import/no-namespace
import Vue from "vue";
import {store} from "@/store/store";


export async function init(el: HTMLElement, App: unknown) {
  globalLogger.log("Initing poe ahk extension")();


  Vue.prototype.$api = api;

  window.consts = ApiConsts;
  window.store = store;
  window.api = api;
  window.xhr = xhr;


  window.vue = new Vue({
    el,
    render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App),
    store,
  });


  // If (ApiConsts.APP_TARGET) {
  //   Const {getDevHtmlNode} = await import(/* webpackMode: "eager" */ `@/sites/${ApiConsts.APP_TARGET}/`);
  //   El = await getDevHtmlNode();
  // } else {
  //   Const currentPage: CurrentPage = getCurrentPage();
  //   Const {getProdHtmlNode} = await import(/* webpackMode: "eager" */ `@/sites/${currentPage}`)
  //   El = await getProdHtmlNode();
  // }
}
