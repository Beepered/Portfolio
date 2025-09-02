<template>
    <section>
        <h1>Brendan's Portfolio</h1>
        <p>Hey-o! This is Brendan Trieu's portfolio, a place where I delve further into my projects the process and
            a
            bunch
            of other random stuff.</p>
        <p>As a game designer, I like to play games, make games, and talk about games. I am also very passionate
            about
            drawing and animating which you can see in my games.</p>
        <p>Click around and read! If not, sit around and lets talk. Umm... come here often?</p>

        <QuoteGenerator></QuoteGenerator>

        <ol>
            <li><a href="https://www.linkedin.com/in/brendan-trieu-882753266/" class="social_link">Linkedin<img
                        src="@assets/icons/linkedin.png" class="icon"></a></li>
            <li><a href="https://luminice-star.itch.io/" class="social_link">itch.io<img src="@assets/icons/itchio.png"
                        class="icon"></a></li>
            <li><a href="https://github.com/Beepered" class="social_link">Github<img src="@assets/icons/github.png"
                        class="icon"></a></li>
            <li><a href="mailto:bktrieu@gmail.com" class="social_link">Email<img src="@assets/icons/email.jpg"
                        class="icon"></a></li>
        </ol>
    </section>
</template>

<script>
import QuoteGenerator from '@/components/QuoteGenerator.vue';

export default {
    name: 'Home',
    components: {
        QuoteGenerator
    },
    data() {
        return {

        }
    },
    methods: {

    },
    beforeMount() {

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #273d53;
    margin-top: 60px;
}

.social_link {
    width: 10%;
    height: 4%;
    padding: 1%;
    border: 2px solid black;
    border-radius: 4px;
    display: flex;
    justify-content: center;
}

.icon {
    padding-left: 10%;
    width: 25%;
}

/* TRANSITIONS  */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
