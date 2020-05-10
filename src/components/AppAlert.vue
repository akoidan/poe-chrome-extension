<template>
  <div
    v-if="alert"
    :key="alert.id"
    :class="alert.type"
  >
    <span v-if="dismissible" @click="close">X</span>
    {{ alert.text }}
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {AlertModel} from "@/types/model";

@Component
export default class AppAlert extends Vue {
  @Prop({default: false})
  public readonly dismissible!: boolean;

  @Prop()
  public readonly alert!: AlertModel;

  @Emit()
  private close(): AlertModel {
    return this.alert;
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>

  .alert
     color: white
  .success
    @extend .alert
    background-color: green
  .error
    @extend .alert
    background-color: red
  .info
    @extend .alert
    background-color: blue
</style>
