<template>
  <Container ownID="MC-cntct">
    <h1 class="Head page-head-bg-grad text-center t-blue-grey py-8">
      Let's Get Things Done
    </h1>

    <!-- Contact Component -->
    <Contact></Contact>

    <section>
      <div class="page-head-bg-grad text-center p-10 mt-10 br2 font-5">
        Care for more enquiries? Feel free to contact us. Or if you are ready to
        start your project, use the button below
        <div class="flex j-c-center mt-10 mb-2">
          <button
            @click="$router.push({ path: '/project-enquiry' })"
            class="btn pink-gradient-btn shadow-5 br4 py-7"
          >
            Get a quote
          </button>
        </div>
      </div>
    </section>
  </Container>
</template>
<script lang="ts">
import Vue from "vue";

// import { $Posts } from "@/myStore"
// import { $Notify, $Obstacl } from "@/plugins"

import Container from "@/components/navs/reusables/Container.vue";
import Contact from "@/components/pages/Contact.vue";
import { $General } from "@/plugins";

export default Vue.extend({
  components: {
    Container,
    Contact,
  },
  metaInfo() {
    return $General.metaInfo({ title: "Get in touch with us" });
  },
});
</script>
<style lang="scss" scoped>
.Head {
  font-family: "Itim", "Roboto", sans-serif;
  letter-spacing: 1px;
}
</style>