<template>
  <div class="inline">
    <div>
      <label>Amount</label>
      <input placeholder="Amount" title="Desired amount of curency you want to buy. This will make the offer bigger up to opponent stack size" v-model.number="amount" type="number" class="form-control"/>
    </div>
    <div>
      <label>Price limit</label>
      <input placeholder="Price Limit" title="If the price is bigger, the whisper message won't be created" v-model.number="price" type="number" class="form-control"/>
    </div>
    <div>
      <label>Min stack size</label>
      <input placeholder="Min stack size" title="If amount of currency an opponent has is less, the whisper won't be created" v-model.number="minStackSize" type="number" class="form-control"/>
    </div>
    <div>
      <label>Click bellow to generate file</label>
      <button class="btn" @click="create">
        Create
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import {saveCurrenCurrencyData} from "@/sites/pathofexile.com/utils";
import {Component, Prop, Vue, Watch, Ref, Emit} from "vue-property-decorator";

@Component
export default class BulkExchangeApp extends Vue {
  amount: number = 0;
  price: number = 0;
  minStackSize: number = 1;
  create() {
    saveCurrenCurrencyData(this.amount, this.price, this.minStackSize);
  }
}

</script>
<style lang="sass" scoped>
  .inline
    display: flex
    flex-direction: row
    > *
      flex: 1
      padding: 4px
  button
    width: 100%
  input
    width: 100%

</style>
