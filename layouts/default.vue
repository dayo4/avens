<template>
    <div>
        <!-- <TopNav />
    <HoverPanel />
    <Notify />
    <ReadQueue />
    <Input />
    <Process />
        <Auth />-->

        <!-- <transition name="fade-in"> -->
        <component :is="layout">
            <router-view></router-view>
        </component>
        <!-- </transition> -->

        <!-- <BottomNav /> -->
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import MainAppLayout from '@/layouts/MainAppLayout.vue'
import ProfileLayout from '@/layouts/ProfileLayout.vue'

// import TopNav from "@/components/navs/TopNav.vue";
// import BottomNav from "@/components/navs/BottomNav.vue";
// import HoverPanel from "@/components/navs/HoverPanel.vue";
// import Process from "@/components/GlobalComponents/notification/Process.vue";
// import Notify from "@/components/GlobalComponents/notification/Notify.vue";

// import { $Auth, $Navs } from "@/myStore";
// import { $General } from "./plugins";
// import Footer from "@/components/navs/Footer.vue"

export default Vue.extend({
    components: {
        MainAppLayout,
        ProfileLayout
        // TopNav,
        // BottomNav,
        // HoverPanel,
        // Process,
        // Notify,
        // ReadQueue: () => import("@/components/posts/misc/ReadQueue.vue"),
        // Input: () => import("@/components/GlobalComponents/Input.vue"),
        // Auth: () => import("@/components/auth/Auth.vue"),
    },

    computed: {
        layout () {
            return this.$route.meta.layout || "MainAppLayout"
        }
        //     // loadAuth: () => import(/* webpackChunkName: "auth" */ "@/components/auth/Auth.vue")
    }

    // mounted() {
    // $Auth.getSysSettings();
    // $Navs.$container.element = window; //document.getElementsByClassName('GBLMContainer')[ 0 ]
    // $Navs.$container.ScrollingHandler();
    // },
});
</script>

<style lang="scss">
</style>
