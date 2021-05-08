<template>
    <div class="BottomNav bg-trans-4 pb-1" ref="bottomNav">
        <router-link to="/">
            <span class="icon-home t-white"></span>
            <span>Home</span>
        </router-link>
        <div @click="$emit('return', 'Home')">
            <span
                class="icon-left-open-big"
                :class="currentTab === 'Home' ? 't-grey--1' : 't-white'"
            ></span>
            <span>Back</span>
        </div>
        <div @click="scrollUp">
            <span class="icon-up-big" :class="!scrolled ? 't-grey--1':'t-white'"></span>
            <span>Scroll Up</span>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue"
import { $Navs } from '@/myStore'

export default Vue.extend({
    props: {
        currentTab: { required: false, type: String }, /* Refers to the currently rendered tab in the profile */
    },

    computed: {
        scrolled: () => $Navs.$container.scrolled,
    },

    // watch: {
    //     currentTab: {
    //         handler (val:string) {
    //             if (val != 'Home')
    //                 this.backable = true
    //             this.backable = false
    //         }
    //     }
    // },

    methods: {
        scrollUp () {
            if ($Navs.$container.scrolled)
                $Navs.$container.element.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    },

    mounted () {
        $Navs.$bottom.element = this.$refs.bottomNav as HTMLElement
    }

})
/* This component inherits the styling on the "BottomNav" component in the "MainAppLayout"  */
</script>