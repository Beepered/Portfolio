<!--
Loading Bar
https://www.youtube.com/watch?v=-q8rtVK_Z04&t=558s&ab_channel=TylerPotts
-->

<template>
    <div id="loading_container">
        <div id="loading_inner" :style="`width: ${progress}%`">
            <span :class="(progress > 50) ? 'white' : ''">{{ progress }}%</span>
        </div>
    </div>
    <p id="loading_text">loading...</p>
</template>

<script>
export default {
    emits: ["loading_complete"],
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
                let min = 0.75
                let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
                this.progress += randomNum;
                if (this.progress >= 100) {
                    this.progress = 100;
                    setTimeout(() => {
                        this.$emit("loading_complete")
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
#loading_container {
    width: 60vw;
    height: 22%;
    background-color: #b4b4b4;
    position: relative;
    border: 4px solid rgb(140, 140, 140);
    border-radius: 3px;
    overflow: hidden;
}

#loading_inner {
    height: 30px;
    background-image: linear-gradient(to right, #0ed87d, #076e40);
    border-radius: 3px;
}

/* number inside loading bar */
#loading_inner span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(35, 35, 35);
    font-size: 100%;
}

#loading_inner span.white {
    color: white;
}

#loading_text {
    color: rgb(70, 70, 70);
    font-size: 1.2em;
}
</style>