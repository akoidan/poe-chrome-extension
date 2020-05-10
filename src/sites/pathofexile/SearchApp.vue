<template>
  <!--  class matches the same on pathofexile.com-->
  <div class="ahk-main no-marg-b controls">
    <table class="search-bar">
      <tr>
        <td class="kms">
          <span v-if="complexPrice">Complex price</span>
          <input
            v-else
            v-model="offer"
            placeholder="Offer"
            class="form-control"
            type="text"
          />
        </td>
        <td>
          <div>
            <input v-model="complexPrice" type="checkbox" title="Complex price (instead of string offer)"/>
          </div>
        </td>
        <td class="fsd" colspan="2">
          <button class="btn" title="generate file for AHK" @click="save">
            Create File
          </button>
        </td>
      </tr>
      <tr>
        <td class="kms">
          <input
            v-model="blockName"
            placeholder="Ignore indentifier"
            class="form-control"
            type="text"
            title="Same text in this value will produce same list of names to avoid whisper in the future"
          />
        </td>
        <td>
          <div>
            <input v-model="block" type="checkbox" placeholder="Check this if you want to ignore playes already present in ignore list. CLick on Show ignore info to view that list."/>
          </div>
        </td>
        <td class="fsd">
          <button class="btn" title="Displays current ignore players for the unique identifier" @click="showBlockInfo">
            Show Ignore Info
          </button>
        </td>
        <td>
          <button class="btn" title="Remove all ignore names" @click="clear">
            Clear
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import {saveCurrentData} from "@/sites/pathofexile/utils";


import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {AlertModel} from "@/types/model";
import {clearBlock, showBlockInfo} from "@/utils/helpers";

@Component
export default class SearchApp extends Vue {
  @Prop({default: false})
  public readonly dismissible!: boolean;

  private status = "";

  private block = false;

  @Prop({default: ""})
  private readonly blockName!: string;

  private complexPrice = false;

  private offer = "My offer is 1 chaos";

  @Prop()
  public readonly alert!: AlertModel;

  @Emit()
  private close(): AlertModel {
    return this.alert;
  }

  async save() {
    this.$logger.log("triggering saving to file")();
    await saveCurrentData(this.offer);
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

    input[type=text]
      color: #fff8e1
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
