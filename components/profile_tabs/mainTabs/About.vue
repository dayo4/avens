<template>
  <TabsContainer @return="$emit('return', 'Home')">
    <div>About About About About About About About About</div>
    <div>About About About About About About About About</div>
    <div>About About About About About About About About</div>
    <div>About About About About About About About About</div>
    <div>About About About About About About About About</div>
    <div>About About About About About About About About</div>
  </TabsContainer>
</template>
<script lang="ts">
import Vue from "vue";
import TabsContainer from "@/components/profile_tabs/TabsContainer.vue";

export default Vue.extend({
  components: {
    TabsContainer,
  },
});
</script>
<style lang="scss" 

</style>