import {sleep} from "@/utils/helpers";
import Vue from "vue";
import { Vuetify } from "vuetify";

import App from "@/poe.trade/App.vue";
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


function getBlockName() {
  let innerHTML2 = document.querySelector('#base_chosen a span')!.innerHTML;
  if (innerHTML2 === 'any') {
    innerHTML2 = '';
  }
  let blockName = (document.getElementById('name') as HTMLInputElement).value || innerHTML2;
  return blockName;
}


async function getDevHtmlNode() {
  import(/* webpackChunkName: "poe.trade.css" */"@/assets/packed_dark.css");
  const content =  await import (/* webpackChunkName: "poe.trade.html" */"@/poe.trade/content.html");
  document.getElementById('app')!.innerHTML = content.default;
  return document.getElementById('contentstart');
}

async function getVueApp({el, store, vuetify}: {el: HTMLElement, store: Store<IRootState>, vuetify: Vuetify}) {
  return new Vue({
    render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App, {props: {blockName: getBlockName()}}),
    el,
    store,
    vuetify,
  });
}

export {getVueApp, getDevHtmlNode, getProdHtmlNode}
