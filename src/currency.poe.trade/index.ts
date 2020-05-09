import {sleep} from "@/utils/helpers";
import Vue from "vue";
import { Vuetify } from "vuetify";

import App from "@/currency.poe.trade/App.vue";
import {Store} from "vuex";
import {IRootState} from "@/types/store";


async function getProdHtmlNode() {
  for (let i = 0; i < 50; i++) {
    const holder = document.getElementById('contentstart');
    if (holder) {
      return holder;
    }
    await sleep(100);
  }
  throw Error(`Unable to load poe-trade extension plugin cause
        document.querySelector('#contentstart') didnt find any wrappers`);
}



async function getDevHtmlNode() {
  import("@/assets/packed_dark.css");
  const content =  await import (/* webpackChunkName: "currency.poe.trade.html" */"@/currency.poe.trade/content.html");
  document.getElementById('app')!.innerHTML = content.default;
  return document.getElementById('contentstart');
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
