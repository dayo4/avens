<template>
    <Container ownID="MC-Srv">
        <div class="Srv">
            <h1 class="text-center t-blue-grey">SERVICES I OFFER</h1>
            <p>In the modern world, an organization's digital presence is integral to its success. A well-crafted website is the cornerstone of that presence. While creating the perfect website can seem like an impossible task, we are one of the abundance of teams that specialize in web development in order to make it easier.</p>
        </div>
    </Container>
</template>
<script lang="ts">
import Vue from "vue"

// import { $Posts } from "@/myStore"
// import { $Notify, $Obstacl } from "@/plugins"

import Container from '@/components/navs/reusables/Container.vue'

export default Vue.extend({
    components: {
        Container,
    },
})
</script>
<style lang="scss" scoped>
.Srv {
    // background-color: rgb(45, 45, 45);
    background-image: url("/defaults/pgs/p5.png");
    background-position: center;
    background-repeat: repeat;
    // background-size: cover;
}

/* Question & Answer Styling*/
.Ques,
.Ans {
    position: relative;

    & .Img {
        position: absolute;
        top: -18px;
        border: solid 3px rgba(128, 128, 128, 0.476);
        height: 50px;
        width: 50px;
        & img {
            width: 100%;
            height: 100%;
        }
    }
}

.Ques {
    margin: 25px 70px 15px 5px;
    & .Name {
        & > div {
            padding: 4px 4px 4px 46px;
            margin-left: 4px;
            width: 84%;
            border-top: solid currentColor 0.5px;
            border-radius: 0 50px 0 0;
        }
    }

    & .Img {
        left: -2px;
    }
}

.Ans {
    margin: 5px 5px 5px 50px;
    & .Name {
        & > div {
            padding: 4px 46px 4px 4px;
            margin-right: 4px;
            border-radius: 50px 0 0 0;
            width: 84%;
            border-top: solid currentColor 0.5px;
        }
    }

    & .Img {
        right: -4px;
    }
}

@include xs-only {
    .Ques {
        margin-right: 35px;
    }
    .Ans {
        margin-left: 35px;
    }
}
</style>