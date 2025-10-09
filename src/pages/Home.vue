<template>
    <section>
        <div class="padd" style="padding-top: 0.75em">
            <h1>Brendan Trieu</h1>
            <p style="font-size: 1.3em;">Hey-o! This is Brendan Trieu's portfolio, a place where I delve further into my
                projects the process and
                a bunch of other random stuff.</p>
        </div>

        <div style="background-color: #f4f4f4; margin: 0;">
            <div class="block">
                <div class="col" style="width: 40%">
                    <img :src="current_image" style="height:20em; border-radius: 25%;" @click="PlaySound()"
                        @mouseenter="MeImageEnter()" @mouseleave="MeImageLeave()">
                </div>
                <div class="col">
                    <p>My name is Brendan Trieu. I graduated UC: Santa Cruz with a
                        Bachelor of
                        Science in
                        Computer Science:
                        Computer Game Design.
                        I am passionate about programming and creating thing with my skills, whether it is video games
                        or
                        drawings.
                        Though I have a degree in game design, programming interests me as a whole,
                        and I would like to learn more and experience software development as a whole.
                    </p>
                    <div style="margin-top: 2em;">
                        <p><b>Blood type:</b> H</p>
                        <p><b>Height:</b> 72cm (5.9 ft)</p>
                        <p><b>Favorite Food:</b> Chitin, Caramel, Noodles</p>
                    </div>
                    <div style="margin-top: 2em;">
                        <a href="https://docs.google.com/document/d/1Y3NPLMJ7Zu68bm68akAthKcHAYK8E-DX4vM7Souc_6o/edit?tab=t.0#heading=h.e8nqy5ycl96p"
                            target="_blank" class="resume-btn">Resume</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="block">
            <div class="col">
                <div style="width: 90%">
                    <p>C#</p>
                    <progress-bar :progress="70" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>C/C++</p>
                    <progress-bar :progress="50" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Unity (Game Engine)</p>
                    <progress-bar :progress="90" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Godot (Game Engine)</p>
                    <progress-bar :progress="75" style="width: 80%; margin: auto;"></progress-bar>
                </div>
            </div>
            <div class="col">
                <div style="width: 90%">
                    <p>Game Development</p>
                    <progress-bar :progress="85" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Object Oriented Programming</p>
                    <progress-bar :progress="70" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>System Design</p>
                    <progress-bar :progress="50" style="width: 80%; margin: auto;"></progress-bar>
                </div>
                <div style="width: 90%">
                    <p>Hunger</p>
                    <progress-bar :progress="80" style="width: 80%; margin: auto;"></progress-bar>
                </div>
            </div>
        </div>

        <div class="padd" style="margin: auto; width: 70%;">
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


        <div id="odd_pixel" @click="this.$router.push('/Funny')" :style="`margin-left: ${margin}%;`"></div>
    </section>
</template>

<script>
import QuoteGenerator from '@components/QuoteGenerator.vue';
import ProgressBar from '@components/ProgressBar.vue'
import me from '@assets/img/me.jpg';
import me1 from '@assets/img/me1.jpg';
import me2 from '@assets/img/me2.jpg';
import me3 from '@assets/img/me3.jpg';
import me4 from '@assets/img/me4.jpg';
import me5 from '@assets/img/me5.jpg';

const default_image = me;

export default {
    name: 'Home',
    components: {
        QuoteGenerator,
        ProgressBar
    },
    data() {
        return {
            margin: 0,
            direction: 1,
            me_images: [
                me1, me2, me3, me4, me5
            ],
            current_image: me,
        }
    },
    methods: {
        MovePixel() {
            const intervalTime = 200; // Milliseconds for each progress increment
            const moveAmt = 0.5;

            setInterval(() => {
                this.margin += moveAmt * this.direction
                if (this.margin >= 100 || this.margin <= 0) {
                    this.direction *= -1;
                }
            }, intervalTime);
        },
        PlaySound(ref) {
            console.log("ref: " + ref);
        },
        GetRandomImage() {
            const rand = Math.floor(Math.random() * this.me_images.length);
            return this.me_images[rand];
        },
        MeImageEnter() {
            this.current_image = this.GetRandomImage();
        },
        MeImageLeave() {
            this.current_image = default_image;
        },
    },
    beforeMount() {
        this.MovePixel();
    },
}
</script>

<style scoped>
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

.padd {
    padding-top: 2em;
    padding-bottom: 2em;
}

.block {
    display: flex;
    padding: 1.5em;
}

.block>div.col {
    float: left;
    text-align: center;
    padding: 1em;
    width: 50%;
}

.resume-btn {
    padding: 0.5em;
    border: 2px solid rgb(67, 67, 67);
    background-color: white;
    border-radius: 5px;
    font-size: 1.2em;
    color: rgb(0, 0, 0);
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

#odd_pixel {
    width: 1.2em;
    height: 1.2em;
    margin-top: 2em;
    background: rgb(250, 250, 250);
}
</style>
