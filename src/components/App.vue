<template>
  <div>
    <div class="alerts">
      <app-alert
        v-for="alert in alerts"
        :key="alert.id"
        :alert="alert"
        dismissible
        @close="close(alert)"
      />
    </div>
    <component :is="currentPage"/>
  </div>
</template>
<script lang="ts">
import {AlertsState, alertsModule} from "@/store/modules/alerts";
import {Component, Vue} from "vue-property-decorator";
import {AlertModel, CurrentPage} from "@/types/model";
import AppAlert from "@/components/AppAlert.vue";
import {PageState} from "@/store/modules/page";
import CurrencyPoeTrade from "@/sites/currency-poe-trade/CurrencyPoeTrade.vue";
import PoeTrade from "@/sites/poe-trade/PoeTrade.vue";
import Pathofexile from "@/sites/pathofexile/Pathofexile.vue";
import Pathofexile from "@/sites/pathofexile/Pathofexile.vue";

@Component({
  components: {
    AppAlert,
    CurrencyPoeTrade,
    PoeTrade,
    Pathofexile,
  },
})
export default class App extends Vue {
  @PageState
  public readonly currentPage!: CurrentPage;

  @AlertsState
  public alerts!: AlertModel[];

  private close(alert: AlertModel): void {
    alertsModule.removeAlert(alert);
  }
}
</script>
<style lang="sass" scoped>
  .alerts
    padding: 5px
    position: fixed
    right: 5px
    top: 5px
    z-index: 10
</style>
