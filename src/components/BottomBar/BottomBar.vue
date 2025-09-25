<!-- https://www.youtube.com/watch?v=CfTvye31Ad0&ab_channel=JustinBrooks -->

<template>
    <div class="bar" :style="{ height: barHeight }">
        <span class="collapse-icon" @click="ToggleBar">
            <p>HIDE</p>
        </span>

        <p>This is the bottom bar</p>
        <p>It will hold more stuff later</p>
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
    background-color: #ececec;
    padding-left: 0.3em;
    padding-right: 0.3em;
    width: 100%;
    z-index: 1;
    left: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;

    transition: 0.3s ease
}

.collapse-icon {
    position: absolute;
    padding-left: 2%;
    top: 0;
    transition: 0.2s linear;
    color: rgb(144, 144, 144);
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>