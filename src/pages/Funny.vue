<template>
    <section>
        <h1>Welcome!</h1>
        <div class="img">
            <img src="@assets/img/gangnam.gif" alt="Who cares about alt text" style="width:13%">
            <img src="@assets/img/thanos.gif" alt="It's a gif of Thanos twerking" style="width:13%">
            <img src="@assets/img/cat-water.gif" alt="Blah blah blah. Runs away on all four" style="width:12%">
            <a href="https://www.youtube.com/watch?v=gRpLPv41WxA&ab_channel=SuperGuy" target="_blank"><img
                    src="@assets/img/geras.gif" alt="Geras MK1 combo" style="width:26%; cursor: default;"></a>
            <!-- You see this? -->
            <img src="@assets/img/rat-lunge.gif" alt="Have at thee" style="width:15%">
            <img src="@assets/img/foxy.gif" alt="AAAAAAAAA" style="width:20%">
            <p>I can do whatever I want. This is <i>MY</i> portfolio wahhahaha</p>
        </div>

        <p>I can predict your future. Please enter your name and birthday.</p>
        <input type="text" maxLength=25 size=27 v-model="name">
        <input type="date" id="birthday" v-model="date">
        <button @click="CheckForm">Submit</button>
        <p class="error" v-show="error">Nuh uh. You need to fill it all out</p>

        <p><b>Your result: </b></p>
        <transition name="fadeText">
            <p class="result" v-show="result" :key="count">Dead</p>
        </transition>

        <transition name="slowFade">
            <router-link to="/Secret" class="secret" v-show="secret">Secret Found</router-link>
        </transition>

        <div class="img" style="margin-top: 2em;">
            <img src="@assets/img/chica.gif" alt="I'm feeling romantical" style="width:15%">
            <img src="@assets/img/fall.gif" alt="Falling up stairs" style="width:20%">
            <img src="@assets/img/brick.gif" alt="Ouch" style="width:20%">
            <img src="@assets/img/dance.gif" alt="Impressive moves" style="width:18%">
            <img src="@assets/img/monopoly.gif" alt="Hit that" style="width:18%">
        </div>
        <!-- Judge all you want, you can't do anything-->

    </section>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            date: null,
            count: 0, // pathetic way to get text to keep using transition
            result: false,
            error: false,
            secret: false,
        }
    },
    methods: {
        CheckForm() {
            if (this.name && this.date) {
                this.result = true;
                this.error = false;
                this.count++;
                if (this.name.toLowerCase() == "cheater") {
                    this.secret = true;
                }
            }
            else {
                this.error = true;
            }
        }
    }
}
</script>

<style scoped>
input {
    margin-right: 1%;
    padding: 1%;
    border-radius: 3px;
}

.img {
    display: inline-block;
    width: 80%;
}

.error {
    color: rgb(196, 0, 0);
    font-size: 1.2em;
}

.result {
    color: rgb(65, 18, 110);
    font-size: 1.5em;
}

.secret {
    color: rgb(73, 200, 141);
    font-size: 1.5em;
}

/*--------- TRANSITIONS  ---------*/
.fadeText-enter-active,
.fadeText-leave-active {
    transition: opacity 2.25s ease;
}

.fadeText-enter-from,
.fadeText-leave-to {
    opacity: 0;
}

.slowFade-enter-active,
.slowFade-leave-active {
    transition: opacity 5s ease;
}

.slowFade-enter-from,
.slowFade-leave-to {
    opacity: 0;
}
</style>