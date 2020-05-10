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

  currentRoute: string = '';
  timeoutFn: number = 0;

  created() {
    // watch pathname, since history pushstate api doesn't provive watch method if event was created synthethically
    this.timeoutFn = setInterval(() => {
      if (window.location.pathname !== this.currentRoute) {
        this.input(window.location.pathname);
      }
      this.currentRoute = window.location.pathname;
    }, 100) as unknown as number;
  }

  destroy(): void {
    clearInterval(this.timeoutFn);
  }

}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>

</style>
