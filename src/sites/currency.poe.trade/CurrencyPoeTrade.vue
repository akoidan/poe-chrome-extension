<template>
  <div class="inline">
    <div>
      <label>Amount</label>
      <input v-model.number="amount" type="number"/>
    </div>
    <div>
      <label>Price limit</label>
      <input v-model.number="price" type="number"/>
    </div>
    <button @click="create">
      Create
    </button>
  </div>
</template>
<script lang="ts">
import {saveCurrencyData} from "@/sites/currency.poe.trade/utils";
import {Component, Prop, Vue, Watch, Ref, Emit} from "vue-property-decorator";

@Component
export default class AppCurrency extends Vue {
  amount: number = 0;
  price: number = 0;
  create() {
    saveCurrencyData(this.amount, this.price);
  }
}
</script>
<style lang="sass" scoped>
  .inline
    > div
      display: inline-block
      width: calc(50% - 90px)
      margin-right: 5px
    > button
      width: 150px
</style>
