<template>
  <div class="ProfileTabsContainer shadow-3 xs12 sm11 md9 lg7">
    <span @click="$emit('return')" class="closeBtn icon-cancel"></span>
    <!-- TABS SLOT -->
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss">
.ProfileTabsContainer {
  position: relative;
  min-height: 200px;
  margin: 20px 5px;
  padding: 15px;
  border-radius: 4px;
  border-top: solid 3px $cyan;
  border-bottom: solid 3px $cyan;
  background-color: rgb(247, 247, 240);
  animation: fade 0.7s;

  & .closeBtn {
    height: 33px;
    width: 33px;
    font-size: 25px;
    position: absolute;
    top: -30px;
    right: 0px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(247, 247, 240);
    border-radius: 15px 15px 2px 2px;
    color: $blue-grey;
    cursor: pointer;
  }
}

@include sm-and-down {
  .ProfileTabsContainer {
    padding: 5px;
  }
}
</style>