<template>
<!--  class matches the same on pathofexile.com-->
  <div class="ahk-main no-marg-b controls">
    <table class="search-bar">
      <tr>
        <td class="kms">
          <span v-if="complexPrice">Complex price</span>
          <input class="form-control" type="text" v-else v-model="price"/>
        </td>
        <td>
          <div >
            <input type="checkbox" v-model="complexPrice"/>
          </div>
        </td>
        <td class="fsd">
          <button class="btn" @click="save">Create File</button>
        </td>
        <td>
          ыеги
        </td>
      </tr>
      <tr>
        <td class="kms"><input class="form-control" type="text" v-model="blockName"/></td>
        <td>
          <div>
            <input type="checkbox" v-model="block"/>
          </div>
        </td>
        <td class="fsd">
          <button class="btn" @click="showBlockInfo">Show Block Info</button>
        </td>
        <td >
          <button class="btn" @click="clear">Clear</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import {saveCurrentData} from '@/pathofexile.com/utils'


import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {AlertModel} from "@/types/model";
import {clearBlock, showBlockInfo} from "@/utils/helpers";

@Component
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

  async save () {
    this.$logger.log("triggering saving to file")();
    await saveCurrentData(this.price)
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
  .ahk-main
    background-color: black
    font-family: FontinSmallcaps, sans-serif
    max-width: 1520px
    margin: auto
    padding: 10px

  .ahk-main button
    color: #e2e2e2
    background-color: #1e2124
    position: relative
    padding: 6px
    line-height: 16px
    min-height: 34px
    min-width: 34px
  .fsd
    min-width: 180px

  td
    padding: 0 5px

  tr
    padding-bottom: 5px

  button
    width: 100%

  .kms
    width: 100%

  .topB
    margin-bottom: 0
</style>
