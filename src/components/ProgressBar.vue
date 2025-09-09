<!--
Progress Bar
https://www.youtube.com/watch?v=-q8rtVK_Z04&t=558s&ab_channel=TylerPotts
-->

<template>
    <div id="progress_bar">
        <div id="progress_inner" :style="`width: ${progress}%`">
            <span :class="(progress > 50) ? 'white' : ''">{{ progress }}%</span>
        </div>
    </div>
    <p id="loading_text">loading...</p>
</template>

<script>
export default {
    name: "progress_bar",
    emits: ["progress_complete"],
    data() {
        return {
            progress: 0
        }
    },
    methods: {
        AddProgress() {
            const intervalTime = 30; // Milliseconds for each progress increment

            const fakeLoad = setInterval(() => {
                let max = 2.5
                let min = 0.6
                let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
                this.progress += randomNum;
                if (this.progress >= 100) {
                    this.progress = 100;
                    setInterval(() => {
                        this.$emit("progress_complete")
                    }, 300)
                }
            }, intervalTime);
        },
    },
    beforeMount() {
        this.AddProgress();
    }
}
</script>

<style>
#progress_bar {
    width: 60vw;
    height: 22%;
    background-color: #b4b4b4;
    position: relative;
    border: 4px solid rgb(140, 140, 140);
    border-radius: 3px;
}

#progress_inner {
    width: 1%;
    height: 30px;
    background-image: linear-gradient(to right, #0ed87d, #076e40);
    border-radius: 3px;
}

#progress_inner span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(35, 35, 35);
    font-size: 100%;
}

#progress_inner span.white {
    color: white;
}

#loading_text {
    color: rgb(70, 70, 70);
    font-size: 100%;
}
</style>