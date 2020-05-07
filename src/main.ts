// ClassComponentHooks and mixins should be imported before others
import "@/assets/sass/globals.sass";
import "@/utils/classComponentHooks"; // eslint-disable-line import/no-unassigned-import
import "@/utils/mixins"; // eslint-disable-line import/no-unassigned-import
import {api, xhr} from "@/utils/singletons";
import {ApiConsts} from "@/utils/consts"; // eslint-disable-line import/no-namespace
import App from "@/components/App.vue";
import CurrencyApp from "@/components/CurrencyApp.vue";
import Vue from "vue";
import {router} from "@/utils/router";
import {store} from "@/store/store";
import {init} from "@/utils/poeTrade";
import {vuetify} from "@/utils/vuetify";
import {sleep} from "@/utils/helpers"; // eslint-disable-line import/max-dependencies


async function poeTrade() {

  Vue.prototype.$api = api;

  window.consts = ApiConsts;
  window.router = router;
  window.store = store;
  window.api = api;
  window.xhr = xhr;

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


(async function () {
  let loadTries = 0;
  const {hostname} = window.location;
  let vue: Vue;

  function getBlockName() {
    let innerHTML2 = document.querySelector('#base_chosen a span').innerHTML;
    if (innerHTML2 === 'any') {
      innerHTML2 = '';
    }
    let blockName = document.getElementById('name').value || innerHTML2;
    return blockName;
  }

  switch (hostname) {
    case 'pathofexile.com':
      let content = await import("@/official-site-trade/index.html");
      document.getElementById('contentbody')!.innerHTML = content;
      vue = new Vue({
        render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App),
        router,
        el: '#contentstart',
        store,
        vuetify,
      });
      break
    case 'localhost':
    case '127.0.0.1':
    case '0.0.0.0':
      const html = await import('@/poe-trade/index.html');
      await import('@/poe-trade/packed_dark.css')
      document.getElementById('app')!.innerHTML = html.default;
      vue = new Vue({
        render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App, {props: {blockName: getBlockName()}}),
        router,
        el: '#contentstart',
        store,
        vuetify,
      });
      break;
    case 'poe.trade':
      await poeTrade()


      vue = new Vue({
        render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(App, {props: {blockName: getBlockName()}}),
        router,
        el: '#contentstart',
        store,
        vuetify,
      });
    case  "currency.poe.trade":
      await poeTrade();
      vue = new Vue({
        render: (createElement: Function): typeof Vue.prototype.$createElement => createElement(CurrencyApp),
        router,
        el: '#contentstart',
        store,
        vuetify,
      });
      break;
    default:
      throw Error("Unsupported site");
  }

  window.vue = vue;

})();

