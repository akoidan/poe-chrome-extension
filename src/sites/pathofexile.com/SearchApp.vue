<template>
  <!--  class matches the same on pathofexile.com-->
  <div class="ahk-main no-marg-b">
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
        <td class="fsd">
          <input
            v-model.number="minUniqIgns"
            placeholder="Min IGNs"
            title="Minimal number of unique player names enough to create the file"
            class="form-control"
            type="text"
          />
        </td>
        <td class="fsd">
          <button class="btn create-btn" title="generate file for AHK" @click="save">
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
import {saveCurrentData} from "@/sites/pathofexile.com/utils";


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

  private minUniqIgns: number = 20;

  private offer = "My offer is 1 chaos";

  @Prop()
  public readonly alert!: AlertModel;

  @Emit()
  private close(): AlertModel {
    return this.alert;
  }

  async save() {
    this.$logger.log("triggering saving to file")();
    await saveCurrentData(this.offer, this.minUniqIgns);
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

  td
    padding: 4px

  .kms
    width: 100%

</style>
