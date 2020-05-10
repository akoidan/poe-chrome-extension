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
<style lang="sass" scoped>
    .inline
        > div
            display: inline-block
            width: calc(50% - 90px)
            margin-right: 5px
        > button
            width: 150px
</style>
<script>

import {saveCurrencyData} from "@/sites/currency-poe-trade/utils";
import PoeTradeCheckbox from "@/components/PoeTradeCheckbox.vue";

export default {
  name: "AppCurrency",
  data() {
    return {
      amount: 0,
      price: 0,
    };
  },
  methods: {
    create() {
      saveCurrencyData(this.amount, this.price);
    },
  },
};
</script>
