<template>
    <section>
        <img src="@assets/img/gangnam.gif" alt="Who cares about alt text" style="width:15%">
        <img src="@assets/img/thanos.gif" alt="It's a gif of Thanos twerking" style="width:15%">
        <img src="@assets/img/cat-water.gif" alt="Blah blah blah. Runs away on all four" style="width:15%">
        <a href="https://www.youtube.com/watch?v=gRpLPv41WxA&ab_channel=SuperGuy" target="_blank"><img
                src="@assets/img/geras.gif" alt="Geras MK1 combo" style="width:30%; cursor: default;"></a>
        <!-- You see this? -->
        <img src="@assets/img/rat-lunge.gif" alt="Have at thee" style="width:18%">
        <p>I don't care enough for an "About Me" page. This is <i>MY</i> portfolio wahhahaha</p>

        <p>I can predict your future. Please enter your name and birthday.</p>
        <input type="text" v-model="name">
        <input type="date" id="birthday" v-model="date">
        <button @click="CheckForm">Submit</button>

        <p>Your result: </p>
        <transition name="fade">
            <p v-show="result" :key="count">Dead</p>
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
        }
    },
    methods: {
        CheckForm() {
            if (this.name && this.date) {
                this.result = true;
                this.count++;
            }
        }
    }
}
</script>

<style scoped>
/*--------- TRANSITIONS  ---------*/
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

input {
    margin-right: 1%;
}

.birthday {
    width: 30%;
}
</style>