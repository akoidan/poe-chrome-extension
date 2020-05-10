<template>
  <div class="inline">
    <div>
      <label>Amount</label>
      <input v-model.number="amount" type="number" class="form-control"/>
    </div>
    <div>
      <label>Price limit</label>
      <input v-model.number="price" type="number" class="form-control"/>
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
import {saveCurrenCurrencyData} from "@/sites/pathofexile/utils";
import {Component, Prop, Vue, Watch, Ref, Emit} from "vue-property-decorator";

@Component
export default class BulkExchangeApp extends Vue {
  amount: number = 0;
  price: number = 0;
  create() {
    saveCurrenCurrencyData(this.amount, this.price);
  }
}

</script>
<style lang="sass" scoped>
  .inline
    display: flex
    flex-direction: row
    > *
      flex: 1
    div
      padding: 0 10px
  button
    width: 100%
  input
    width: 100%

</style>
