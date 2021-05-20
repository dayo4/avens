<template>
    <Container ownID="MC-ProjEnq">
        <div v-html="$appLogo('logo-static')" class="flex j-c-center pt-5 noselect"></div>
        <!-- <div class="Title text-center t-blue-grey"></div> -->

        <h1
            class="Head text-center page-head-bg-grad t-blue-grey font-9 px-5 py-8"
        >Website Project Enquiry Form</h1>

        <section class="flex j-c-center">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScMZ__K-MM9d1u0Qh6cbhf1FLYT5o6zIaeRH5Lqk77ykHcP3g/viewform?embedded=true"
                width="640"
                height="2570"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >Loading…</iframe>
        </section>
    </Container>
</template>
<script lang="ts">
import Vue from "vue"

import Container from "@/components/navs/reusables/Container.vue"
import { $General } from "@/plugins"

export default Vue.extend({
    components: {
        Container,
    },
    metaInfo () {
        return $General.metaInfo({ title: "Project | scavorb" })
    },

    data () {
        return {
            formConfig: {},
        }
    },
});
</script>
<style lang="scss" scoped>
.Title {
    margin: 6px 0 40px 0;
    font-size: 16px;
    font-weight: bold;
}

.Head {
    font-family: "Itim", "Roboto", sans-serif;
    letter-spacing: 1px;
    margin-bottom: 30px;
}

@include xs-only {
}
</style>
