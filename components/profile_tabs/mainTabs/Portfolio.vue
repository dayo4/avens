<template>
  <!-- <div class="flex j-c-center"> -->
  <!-- <h2
            class="shadow-5 t-blue-grey-1 font-6 bg-white br1 text-center py-4 mt-0 mb-4"
        >Portfolio of {{ profile.name }}</h2>-->
  <!-- Portfolio -->
  <TabsContainer @return="$emit('return', 'Home')">
    <div class="Cont px-10">
      <div
        class="PTF bg-white mb-10 br3 shadow-1"
        v-for="proj in projects"
        :key="proj.id"
      >
        <div
          class="t-pink--3 shadow-1 text-up text-center b4 br3 bold-3 font-8 py-4 letter-space-1 noselect"
        >
          <span class="font-12"></span>
          {{ proj.title }}
        </div>

        <div
          v-html="proj.detail"
          class="bg-cyan- t-whit font-5 bold-2 pl-10 mt-3 p-1"
        ></div>
      </div>
    </div>
  </TabsContainer>
</template>
<script lang="ts">
import Vue from "vue";
import TabsContainer from "@/components/profile_tabs/TabsContainer.vue";
import { $Auth, $Profile, $Posts } from "@/myStore";

export default Vue.extend({
  components: {
    TabsContainer,
  },
  computed: {
    projects: () => $Profile.$Portfolio.projects_A,
    profile: () => $Profile.data,
  },
});
// export default class PTFL extends Vue {
// projects!: any
// @Prop({ required: true, type: String }) readonly currentTab: string
// $refs!: {
// 	PostsWrapper
// }
// query = {user_id: $Profile.data.id,filter: { active: true }}

// mounted () {
//     $Profile.$Portfolio.fetchAll(this.query, true)
// }
// }
</script>
<style lang="scss" scoped>
.PTF {
  // & .Head {
  // box-shadow: 0 0 10px #b2ebf2, 0 0 20px #b2ebf2, 0 0 40px #b2ebf2;
  // }
  & > div:nth-child(2) {
    letter-spacing: 1px;
  }
}
@include xs-only {
  .Cont {
    padding-left: 10px;
    padding-right: 5px;
  }
}
</style>