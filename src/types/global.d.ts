import {Consts} from "@/types/model";
import {IRootState} from "@/types/store";
import {Logger} from "lines-logger";
import {Store} from "vuex";
import Vue from "vue";

declare module "vue/types/vue" {

  interface Vue {
    $logger: Logger;
  }
}

declare global {
  interface Window {
    vue: Vue;
    store: Store<IRootState>;
    consts: Consts;
  }
}
