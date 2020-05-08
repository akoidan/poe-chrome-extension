<template>
  <div class="ahk-main no-marg-b">
    <table>
      <tr>
        <td class="kms">
          <span v-if="complexPrice">Complex price</span>
          <input type="text" v-else v-model="price"/>
        </td>
        <td>
          <div >
            <poe-trade-checkbox class="topB" v-model="complexPrice"/>
          </div>
        </td>
        <td class="fsd">
          <button @click="save">Create File</button>
        </td>
        <td>
          <button @click="reinit">Reinit</button>
        </td>
      </tr>
      <tr>
        <td class="kms"><input type="text" v-model="blockName"/></td>
        <td>
          <div>
            <poe-trade-checkbox class="topB" v-model="block"/>
          </div>
        </td>
        <td class="fsd">
          <button @click="showBlockInfo">Show Block Info</button>
        </td>
        <td >
          <button @click="clear">Clear</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import {clearBlock, init, saveCurrentData, showBlockInfo} from '@/poe.trade/utils'
import PoeTradeCheckbox from '@/poe.trade/PoeTradeCheckbox.vue'


import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {AlertModel} from "@/types/model";

@Component({components: {PoeTradeCheckbox}})
export default class App extends Vue {

  @Prop({default: false})
  public readonly dismissible!: boolean;

  private status = '';
  private block = false;

  @Prop({default: ''})
  private readonly blockName!: string;
  private complexPrice = false;
  private price = 'My offer is 1 chaos';

  @Prop()
  public readonly alert!: AlertModel;

  @Emit()
  private close(): AlertModel {
    return this.alert;
  }

  reinit() {
    init();
  }

  save () {
    saveCurrentData(this.block && this.blockName? this.blockName : false, this.price);
  }

  clear() {
    clearBlock(this.blockName);
  }
  showBlockInfo () {
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
