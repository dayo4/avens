<template>
    <div class="MainCont bg-img-masked">
        <div>
            <div
                class="text-center page-head-bg-grad t-white bold-4 font-9 px-5 py-4"
            >{{ topInfo.header }}</div>
            <div class="Title">{{ topInfo.title }}</div>

            <!-- <transition name="slide-down-fade"> -->
            <section class="flex j-c-center a-i-center">
                <keep-alive>
                    <component @tabClicked="switchTab" @return="switchTab" :is="currentTab"></component>
                </keep-alive>
            </section>
            <!-- </transition> -->
        </div>

        <ProfileBottomNav :currentTab="currentTab" @return="switchTab"></ProfileBottomNav>
    </div>
</template>
<script lang="ts">
import Vue from "vue"

import ProfileBottomNav from "@/components/profile_tabs/ProfileBottomNav.vue"
import Home from "@/components/profile_tabs/mainTabs/Home.vue"
import Message from "@/components/profile_tabs/mainTabs/Contact.vue"
import Portfolio from "@/components/profile_tabs/mainTabs/Portfolio.vue"
import About from "@/components/profile_tabs/mainTabs/About.vue"
import Posts from "@/components/profile_tabs/mainTabs/PostsTab.vue"
import { $Profile } from "@/myStore"

export default Vue.extend({
    layout: "profile",
    components: {
        ProfileBottomNav,
        Message,
        Home,
        Portfolio,
        About,
        Posts,
    },

    data () {
        return {
            currentTab: "Home",
            topInfo: {
                header: $Profile.data.name,
                title: "Full-stack Developer",
            },
        }
    },
    computed: {
        profile: () => $Profile.data,
    },
    methods: {
        switchTab (tab_name: string) {
            this.currentTab = tab_name
            switch (tab_name)
            {
                case "Portfolio":
                    this.topInfo = {
                        header: "My Designs Gallery",
                        title: "Full-stack Developer",
                    }
                    break
                case "Posts":
                    this.topInfo = {
                        header: "My Posts",
                        title: "Contents of " + this.profile.name,
                    }
                    break
                case "About":
                    this.topInfo = {
                        header: "About Me",
                        title: "",
                    }
                    break
                case "Contact":
                    this.topInfo = {
                        header: "Message Me",
                        title: "Let's Chat",
                    }
                    break
                default:
                    this.topInfo = {
                        header: "I'm " + this.profile.name,
                        title: "Full-stack Developer",
                    }
            }
        },
    },
});
</script>
<style lang="scss" scoped>
.MainCont {
    background-color: #263238;
    background-image: url("/defaults/pgs/scavorb_technolink.jpg");
    background-blend-mode: overlay;
    background-attachment: fixed;
    min-height: 100vh;
    padding-top: 20px;
    padding-bottom: 40px;
}

.Title {
    text-align: center;
    font-family: "Itim", "Roboto", sans-serif;
    font-size: 30px;
    font-weight: bold;

    color: $pink-3;
    padding: 10px 20px 10px 20px;
}
</style>