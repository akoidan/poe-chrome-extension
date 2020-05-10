<template/>
<script lang="ts">
import {Component, Prop, Vue, Watch, Ref, Emit} from "vue-property-decorator";

@Component
export default class RouterWatcher extends Vue {
  @Prop()
  public readonly value!: string;

  @Emit()
  input(e: string) {
    this.$logger.log("url has been changed")();
    return e;
  }

  bindedRouterChange!: (e: Event) => void;
  oldPushState!: Function;

  created() {
    this.oldPushState = window.history.pushState;
    var that = this;
    that.input(window.location.pathname)
    window.history.pushState = function (state) {
      let res =  that.oldPushState.apply(window.history, arguments);
      that.input(window.location.pathname)
      return res;
    };
  }

  destroy(): void {
    (window.history.pushState as Function) = this.oldPushState;
  }

}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>

</style>
