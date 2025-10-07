<!-- https://www.youtube.com/watch?v=CfTvye31Ad0&ab_channel=JustinBrooks -->

<template>
    <div class="bar">
        <div class="top" @click="ToggleBar">
            <p style="">Hide</p>
        </div>

        <div class="base" :style="{ height: barHeight }">
            <p>This is the bottom bar</p>
            <p>It will hold more stuff later</p>
            <p>Hire me please! :)</p>
        </div>
    </div>
</template>

<script>
import { collapsed, ToggleBar, barHeight } from "./state.js"

export default {
    setup() {
        return { collapsed, ToggleBar, barHeight }
    }
}
</script>

<style scoped>
.bar {
    width: 100%;
    z-index: 1;
    left: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
}

.top {
    width: 8%;
    background-color: #ececec;
    border-top-style: solid;
    border-top-color: rgb(200, 200, 200);
    border-right-style: solid;
    border-right-color: rgb(200, 200, 200);
    border-top-right-radius: 10px;
    text-align: center;
    z-index: 1;
}

.base {
    background-color: #ececec;
    border-top-style: solid;
    border-top-color: rgb(200, 200, 200);

    transition: 0.3s ease
}
</style>