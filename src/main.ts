// ClassComponentHooks and mixins should be imported before others
import "@/assets/sass/globals.sass";
import "@/utils/classComponentHooks"; // eslint-disable-line import/no-unassigned-import
import "@/utils/mixins"; // eslint-disable-line import/no-unassigned-import
import {api, globalLogger, xhr} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts"; // eslint-disable-line import/no-namespace
import Vue from "vue";
import {store} from "@/store/store";
import App from "@/components/App.vue";


export async function init(el: HTMLElement) {


  globalLogger.log("Initing poe ahk extension")();


  Vue.prototype.$api = api;

  window.consts = ApiConsts;
  window.store = store;
  window.api = api;
  window.xhr = xhr;


  window.vue =  new Vue({
    render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App),
    el,
    store
  });


  // if (ApiConsts.APP_TARGET) {
  //   const {getDevHtmlNode} = await import(/* webpackMode: "eager" */ `@/sites/${ApiConsts.APP_TARGET}/`);
  //   el = await getDevHtmlNode();
  // } else {
  //   const currentPage: CurrentPage = getCurrentPage();
  //   const {getProdHtmlNode} = await import(/* webpackMode: "eager" */ `@/sites/${currentPage}`)
  //   el = await getProdHtmlNode();
  // }

}
