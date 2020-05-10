<template>
  <div class="ahk-main no-marg-b">
    <table>
      <tr>
        <td class="kms">
          <span v-if="complexPrice">Complex price</span>
          <input v-else v-model="price" type="text"/>
        </td>
        <td>
          <div>
            <poe-trade-checkbox v-model="complexPrice" class="topB"/>
          </div>
        </td>
        <td class="fsd">
          <button @click="save">
            Create File
          </button>
        </td>
        <td>
          <button @click="reinit">
            Reinit
          </button>
        </td>
      </tr>
      <tr>
        <td class="kms">
          <input v-model="blockName" type="text"/>
        </td>
        <td>
          <div>
            <poe-trade-checkbox v-model="block" class="topB"/>
          </div>
        </td>
        <td class="fsd">
          <button @click="showBlockInfo">
            Show Block Info
          </button>
        </td>
        <td>
          <button @click="clear">
            Clear
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import {getBlockName, init, saveCurrentData} from "@/sites/poe-trade/utils";
import PoeTradeCheckbox from "@/components/PoeTradeCheckbox.vue";


import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {clearBlock, showBlockInfo} from "@/utils/helpers";

@Component({components: {PoeTradeCheckbox}})
export default class App extends Vue {
  @Prop({default: false})
  public readonly dismissible!: boolean;

  private status = "";

  private block = false;

  public readonly blockName: string = getBlockName() ;

  private complexPrice = false;

  private price = "My offer is 1 chaos";


  reinit() {
    init();
  }

  save() {
    saveCurrentData(this.block && this.blockName ? this.blockName : "", this.price);
  }

  clear() {
    clearBlock(this.blockName);
  }

  showBlockInfo() {
    alert(showBlockInfo(this.blockName));
  }
}

</script>
<style lang="sass" scoped>
  .fsd
    min-width: 180px

  button
    width: 100%

  .kms
    width: 100%

  .topB
    margin-bottom: 0
</style>
