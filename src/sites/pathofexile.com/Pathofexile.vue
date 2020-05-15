<template>
  <!--controls is pathofiexle css class-->
  <app class="controls ahk-main">
    <bulk-exchange-app v-if="currentRoute.startsWith('/trade/exchange/Delirium')"/>
    <search-app v-else-if="currentRoute.startsWith('/trade/search/Delirium')"/>
    <div v-else class="error">
      Waiting page to appear {{currentRoute}}
    </div>
    <router-watcher v-model="currentRoute"/>
  </app>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch, Ref} from "vue-property-decorator";
import App from "@/components/App.vue";
import RouterWatcher from "@/sites/pathofexile.com/RouterWatcher.vue";
import SearchApp from "@/sites/pathofexile.com/SearchApp.vue";
import BulkExchangeApp from "@/sites/pathofexile.com/BulkExchangeApp.vue";
@Component({
  components: {BulkExchangeApp, SearchApp, RouterWatcher, App}
})
export default class Pathofexile extends Vue {
  currentRoute: string = '';
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
  .ahk-main
    background-color: black
    font-family: FontinSmallcaps, sans-serif
    max-width: 1520px
    margin: auto
    padding: 4px 2px

    ::v-deep  button
      color: #e2e2e2
      background-color: #1e2124
      position: relative
      width: 100%
      padding: 6px
      min-width: 96px
      line-height: 16px
      min-height: 34px
      &:hover
        background-color: #2d3136
      &.create-btn
        background-color: #5a3806
        border-color: #8a5609
        &:hover
          background-color: #724708

    ::v-deep input[type=text]
        color: #fff8e1

  .error
    color: white
</style>
