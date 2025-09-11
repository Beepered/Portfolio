<template>
    <section>
        <img src="@assets/img/gangnam.gif" alt="Who cares about alt text" style="width:13%">
        <img src="@assets/img/thanos.gif" alt="It's a gif of Thanos twerking" style="width:13%">
        <img src="@assets/img/cat-water.gif" alt="Blah blah blah. Runs away on all four" style="width:15%">
        <a href="https://www.youtube.com/watch?v=gRpLPv41WxA&ab_channel=SuperGuy" target="_blank"><img
                src="@assets/img/geras.gif" alt="Geras MK1 combo" style="width:30%; cursor: default;"></a>
        <!-- You see this? -->
        <img src="@assets/img/rat-lunge.gif" alt="Have at thee" style="width:18%">
        <p>I don't care enough for an "About Me" page. This is <i>MY</i> portfolio wahhahaha</p>

        <p>I can predict your future. Please enter your name and birthday.</p>
        <input type="text" maxLength=25 size=27 v-model="name">
        <input type="date" id="birthday" v-model="date">
        <button @click="CheckForm">Submit</button>
        <p class="error" v-show="error">Nuh uh. You need to fill it all out</p>

        <p><b>Your result: </b></p>
        <transition name="fadeText">
            <p class="result" v-show="result" :key="count">Dead</p>
        </transition>

    </section>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            date: null,
            count: 0,
            result: false,
            error: false,
        }
    },
    methods: {
        CheckForm() {
            if (this.name && this.date) {
                this.result = true;
                this.error = false;
                this.count++;
            }
            else {
                this.error = true;
            }
        }
    }
}
</script>

<style scoped>
/*--------- TRANSITIONS  ---------*/
.fadeText-enter-active,
.fadeText-leave-active {
    transition: opacity 2.5s ease;
}

.fadeText-enter-from,
.fadeText-leave-to {
    opacity: 0;
}

input {
    margin-right: 1%;
    padding: 1%;
    border-radius: 3px;
}

.error {
    color: rgb(196, 0, 0);
    font-size: 1.2em;
}

.result {
    color: rgb(65, 18, 110);
    font-size: 1.5em;
}
</style>