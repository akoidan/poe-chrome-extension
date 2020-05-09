import {sleep} from "@/utils/helpers";
import Vue from "vue";
import { Vuetify } from "vuetify";

import App from "@/pathofexile.com/App.vue";
import {Store} from "vuex";
import {IRootState} from "@/types/store";


async function getProdHtmlNode() {
  for (let i = 0; i < 50; i++) {
    const holder = document.getElementById('trade');
    if (holder) {
      const result = document.createElement('div');
      holder.parentElement!.insertBefore(result, holder);
      return result;
    }
    await sleep(200);
  }
  throw Error(`Unable to load poe-trade extension plugin cause
        document.querySelector('#contentstart') didnt find any wrappers`);
}

async function getDevHtmlNode() {
  import(/* webpackChunkName: "pathofexile.modern.css" */"@/pathofexile.com/modern.css");
  const content =  await import (/* webpackChunkName: "pathofexile.html" */"@/pathofexile.com/content.html");
  document.getElementById('app')!.innerHTML = content.default;
  return await getProdHtmlNode();
}

async function getVueApp({el, store, vuetify}: {el: HTMLElement, store: Store<IRootState>, vuetify: Vuetify}) {
  return new Vue({
    render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App),
    el,
    store,
    vuetify,
  });
}

export {getVueApp, getDevHtmlNode, getProdHtmlNode}
