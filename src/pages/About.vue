<template>
    <section>
        <router-link to="/Funny">
            <div id="odd_pixel"></div>
        </router-link>

        <div class="padd" style="padding-top: 1em">
            <h1>About Me</h1>
            <p>Blood type: H</p>
            <p>Height: 72cm (5.9 ft)</p>
            <p>Favorite Food: Chitin, Caramel, Noodles</p>
        </div>

        <div class="padd" style="background-color: #f4f4f4;">
            <h1>Skills</h1>
            <div class="row" style="width: 80%; margin: auto;">
                <div class="col">
                    <div style="width: 90%">
                        <p>C#</p>
                        <progress-bar :progress="70"></progress-bar>
                    </div>
                    <div style="width: 90%">
                        <p>C/C++</p>
                        <progress-bar :progress="45"></progress-bar>
                    </div>
                    <div style="width: 90%">
                        <p>Unity (Game Engine)</p>
                        <progress-bar :progress="80"></progress-bar>
                    </div>
                    <div style="width: 90%">
                        <p>Web Development</p>
                        <progress-bar :progress="60"></progress-bar>
                    </div>
                </div>
                <div class="col">
                    <div style="width: 90%">
                        <p>Game Development</p>
                        <progress-bar :progress="80"></progress-bar>
                    </div>
                    <div style="width: 90%">
                        <p>Object Oriented Programming</p>
                        <progress-bar :progress="70"></progress-bar>
                    </div>
                    <div style="width: 90%">
                        <p>System Design</p>
                        <progress-bar :progress="50"></progress-bar>
                    </div>
                    <div style="width: 90%">
                        <p>Hunger</p>
                        <progress-bar :progress="80"></progress-bar>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue'
export default {
    components: { ProgressBar },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.padd {
    display: block;
    padding-top: 2em;
    padding-bottom: 2em;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col {
    flex: 0 0 auto;
    width: 50%;
}

.progress-bar {
    width: 100%;
    background-color: grey;
}

.progress-bar-inner {
    width: 1%;
    height: 30px;
    background-color: green;
}

#odd_pixel {
    width: 1em;
    height: 1em;
    background: rgb(245, 245, 245);
}
</style>