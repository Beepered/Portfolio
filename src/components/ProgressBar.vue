<!-- Progress Bar used in About Page -->

<template>
    <div id="progress_container">
        <div id="progress_inner" :style="`width: ${progress}%`"></div>
    </div>
</template>

<script>
export default {
    props: {

        progress: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
#progress_container {
    width: 100%;
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