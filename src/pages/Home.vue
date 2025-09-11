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
        <p>Visit my <a href="https://sites.google.com/view/brendan-trieu-portfolio/home" target="_blank">old portfolio
                website</a></p>

        <QuoteGenerator></QuoteGenerator>

        <div class="footer">
            <div class="footer-row">
                <a href="https://www.linkedin.com/in/brendan-trieu-882753266/" target="_blank"
                    class="social_link">Linkedin<img src="@assets/icons/linkedin.png" class="icon"></a>
                <a href="https://luminice-star.itch.io/" target="_blank" class="social_link">itch.io<img
                        src="@assets/icons/itch.png" class="icon"></a>
            </div>
            <div class="footer-row">
                <a href="https://github.com/Beepered" target="_blank" class="social_link">Github<img
                        src="@assets/icons/github.png" class="icon"></a>
                <a href="mailto:bktrieu@gmail.com" target="_blank" class="social_link">Email<img
                        src="@assets/icons/email.png" class="icon"></a>
            </div>
        </div>


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
.footer {
    background-color: #ececec;
    border-radius: 6px;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: 5%;
}

.footer .footer-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
}

.social_link {
    width: 10%;
    height: 4%;
    padding: 1%;
    display: flex;
    justify-content: center;
    font-size: large;
}

.icon {
    padding-left: 10%;
    width: 25%;
}
</style>
