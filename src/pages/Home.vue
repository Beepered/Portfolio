<template>
    <section>
        <div class="padd" style="padding-top: 0.75em">
            <h1>Brendan Trieu</h1>
            <p>Hey-o! This is Brendan Trieu's portfolio, a place where I delve further into my projects the process and
                a bunch of other random stuff.</p>
        </div>

        <div class="about-me padd">
            <div class="col" style="width: 40%;">
                <img src="@assets/img/me.jpg" style="height:20em; border-radius: 25%;">
            </div>
            <div class="col" style="width: 40%;">
                <p>My name is Brendan Trieu. I graduated UC: Santa Cruz with a
                    Bachelor of
                    Science in
                    Computer Science:
                    Computer Game Design.
                    I am passionate about programming and creating thing with my skills, whether it is video games or
                    drawings.
                    Though I have a degree in game design, programming interests me as a whole,
                    and I would like to learn more and experience software development as a whole.
                </p>
            </div>
        </div>

        <div class="padd" style="margin: auto; width: 70%;">
            <p>As a game designer, I like to play games, make games, and talk about games. I am also very passionate
                about
                drawing and animating which you can see in my games.</p>
            <p>Click around and read! If not, sit around and lets talk. Umm... come here often?</p>
            <p>View my <a href="https://sites.google.com/view/brendan-trieu-portfolio/home" target="_blank">old
                    portfolio
                    website</a></p>

            <QuoteGenerator style="font-size: 1.1em;"></QuoteGenerator>
        </div>

        <div class="footer">
            <div class="social_link">
                <a href="https://www.linkedin.com/in/brendan-trieu-882753266/" target="_blank"
                    style="float: left;">Linkedin<img src="@assets/icons/linkedin.png" class="icon"
                        style="float: right;"></a>
            </div>

            <div class="social_link">
                <a href="https://luminice-star.itch.io/" target="_blank" style="float: left;">itch.io<img
                        src="@assets/icons/itch.png" class="icon" style="float: right;"></a>
            </div>

            <div class="social_link">
                <a href="https://github.com/Beepered" target="_blank" style="float: left;">Github<img
                        src="@assets/icons/github.png" class="icon" style="float: right;"></a>
            </div>

            <div class="social_link">
                <a href="mailto:bktrieu@gmail.com" target="_blank" style="float: left;">Email<img
                        src="@assets/icons/email.png" class="icon" style="float: right;"></a>
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

<style scoped>
* {
    border: 2px red
}

.footer {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px;
    width: 60vw;
    margin-top: 1em;
    bottom: 0;
    left: 0;
    border-radius: 6px;
    background-color: #f4f4f4;
}

.about-me {
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f4f4;
    padding-top: 2em;
    padding-bottom: 2em;
}

.padd {
    padding-top: 2em;
    padding-bottom: 2em;
}

.col {
    flex: 0 0 auto;
    align-content: center;
}

.social_link {
    padding: 0.5em;
    display: flex;
    justify-content: center;
    font-size: 1.2em;

}

.icon {
    padding-left: 1em;
    height: 2em;
}
</style>
