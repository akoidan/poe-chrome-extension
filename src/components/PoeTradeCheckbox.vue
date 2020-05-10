<template>
  <div class="switch fixWidth">
    <input
      id="ahk1"
      v-model="picked"
      value=""
      type="radio"
    /><span
      class="custom radio checked"
    />
    <label for="ahk1" onclick="">Off</label>
    <input
      id="ahk2"
      v-model="picked"
      value="x"
      type="radio"
    /><span class="custom radio"/>
    <label for="ahk2" onclick="">On</label>
    <span/>
  </div>
</template>
<script>

import {saveCurrentData} from "@/sites/poe-trade/utils";

export default {
  name: "PoeTradeCheckbox",
  props: ["value"],
  data() {
    return {picked: false};
  },
  watch: {
    picked() {
      this.$emit("input", this.picked === "x");
    },
  },
  created() {
    this.picked = this.value ? "x" : "";
  },
};
</script>
