<template>
    <section class="cursor-hand">
        <div class="top">
            <h1 style="color: rgb(0, 152, 7);">Cash the Cache</h1>
        </div>

        <div class="block" style="max-width: 75%; color: rgb(205, 173, 65); font-size: 1.2em;">
            <h2>My College Capstone</h2>
            <p>Break into houses. Steal stuff, sell, repeat. A free to play, 3D Unity game about burglarizing houses.
            </p>
            <p>Release Date: I'm not sure</p>
            <h3><a href="https://store.steampowered.com/app/3704870/Cash_the_Cache/" class="cursor-toilet">Steam
                    Link</a></h3>

            <p>I am the producer for my college Capstone project. You play as a robber, breaking into
                buildings to steal items and sell them to buy upgrades. I work on system design, 2D art, trailers, and
                team management.</p>
        </div>
        <img :src="img1Src" alt="CtC 1" class="cursor-toilet" @click="toggleImg1(); PlaySound()"
            style="float: left; margin-left: 0.75em">
        <div class="block" style="width: 40%;">
            <h3>Quarter 1: Scaffolding</h3>
            <p>I designed the interaction
                system and UI, while my group worked on AI pathfinding, sounds, and assets.
                We realized that we didn't have anything to show off so we
                began designing a central level, which helped us see how our ideas working in a plausible level.
            </p>
        </div>
        <img :src="img2Src" alt="CtC 2" class="cursor-toilet" @click="toggleImg2(); PlaySound()"
            style="float: right; margin-right: 0.75em">

        <div class="block" style="width: 40%;">
            <h3>Quarter 2: Level generation and level selection</h3>
            <p>I onboarded new members,
                refactored nearly every game system, and focused on new levels. We switched from having a pre-designed
                level to making
                randomly generated ones as it would help lengthen game time. I kept checking in with members every few
                days, offered help, and cleaned up code.
            </p>
        </div>
        <img :src="img3Src" alt="CtC 3" class="cursor-toilet" @click="toggleImg3(); PlaySound()"
            style="float: left; margin-left: 0.75em">
        <div class="block" style="width: 40%;">
            <h3>Current: Limbo</h3>
            <p>Most of the team left or gotten jobs. I enjoyed working on this while the group was still together. This
                project
                has tested my leadership skills, programming, and time management. Great experience!
            </p>
            <p>Fixed a big room generation code. Now we can work on finishing up the game. Hopefully it gets
                released
                soon.</p>
        </div>
    </section>
</template>

<script>
import sound from '@assets/sfx/ctc_click.wav'

export default {
    data() {
        return {
            img1Active: false,
            img2Active: false,
            img3Active: false,
        }
    },
    computed: {
        img1Src() {
            return this.img1Active ? new URL('@assets/img/ctc/ctc1.png', import.meta.url).href : new URL('@assets/img/ctc/ctc2.png', import.meta.url).href
        },
        img2Src() {
            return this.img2Active ? new URL('@assets/img/ctc/ctc5.png', import.meta.url).href : new URL('@assets/img/ctc/ctc4.png', import.meta.url).href;
        },
        img3Src() {
            return this.img3Active ? new URL('@assets/img/ctc/ctc6.png', import.meta.url).href : new URL('@assets/img/ctc/ctc3.png', import.meta.url).href;
        }
    },
    methods: {
        toggleImg1() {
            this.img1Active = !this.img1Active;
        },
        toggleImg2() {
            this.img2Active = !this.img2Active;
        },
        toggleImg3() {
            this.img3Active = !this.img3Active;
        },

        PlaySound() {
            var audio = new Audio(sound)
            audio.play();
        }
    }
}
</script>


<style scoped>
.block {
    margin: auto;
    margin-bottom: 1em;
    width: 70%;
    padding: 1em;
    background-color: rgb(62, 62, 62);
    color: rgb(235, 235, 235);
    border-radius: 10px;
}

.cursor-hand {
    cursor: url("@assets/img/ctc/cursor.png"), auto;
}

.cursor-toilet {
    cursor: url("@assets/img/ctc/cursor toilet.png"), auto;
}

img {
    width: 25%;
    border: 2px solid white;
}
</style>