<!-- Progress Bar used in About Page -->

<template>
    <div id="progress_container">
        <transition appear @before-appear="BeforeEnter" @after-appear="Enter">
            <div id="progress_inner" :style="`width: ${progress}%`"></div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0
        }
    },
    methods: {
        BeforeEnter(el) {
            el.style.width = 0;
        },
        Enter(el) {
            el.style.width = `${this.progress}%`;
            el.style.transition = `width 1.25s ease`
        }
    },
}
</script>

<style scoped>
#progress_container {
    height: 1.2em;
    background-color: #b4b4b4;
    border: 3px solid rgb(109, 109, 109);
    border-radius: 12px;
    position: relative;
}

#progress_inner {
    height: 100%;
    background-image: linear-gradient(to right, #58d1bf, #354bdc);
    border-radius: 12px;
}
</style>