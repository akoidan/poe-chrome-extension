import {Api} from "@/utils/api";
import {Consts} from "@/types/model";
import {IRootState} from "@/types/store";
import {Logger} from "lines-logger";
import {Store} from "vuex";
import Vue from "vue";
import {Xhr} from "@/utils/xhr";

declare module "vue/types/vue" {

  interface Vue {
    $logger: Logger;
    $api: Api;
  }
}

declare global {
  interface Window {
    vue: Vue;
    store: Store<IRootState>;
    xhr: Xhr;
    consts: Consts;
    api: Api;
  }
}
