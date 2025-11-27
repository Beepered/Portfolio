<template>
    <section>
        <h1>Other Projects</h1>
        <div class="side-image">
            <img src="@assets/img/Unnamed.png">
        </div>

        <div class="block">
            <div class="col left" style="z-index: 1">
                <a href="https://luminice-star.itch.io/jumpscare" target="_blank" style="">
                    <img class="fit-image hover-effect" src="@assets/img/other_projects/foxy.jpg" alt="Jumpscare image"
                        style="">
                </a>
            </div>
            <div class=" col right">
                <h2>Random Jumpscare</h2>
                <p class="facts">Python, Tkinter</p>
                <p>Funny program that has a 1/10000 chance of playing a jumpscare. It autostarts and you can change
                    which jumpscares play and if you want the chance to increase slowly. Took a lot longer to finish
                    than I thought.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left" style="z-index: 1">
                <a href="https://mosaicly.io/" target="_blank" style="">
                    <img class="fit-image hover-effect" src="@assets/img/other_projects/mosaicly.png"
                        alt="Mosaicly image" style="">
                </a>
            </div>
            <div class=" col right">
                <h2>Mosaicly</h2>
                <p class="facts">TypeScript, SCSS, Svelte</p>
                <p>Scrum Master for a quarter long agile developed web app to create public interactable canvases
                    similar to Pokemon Go.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left" style="z-index: 1">
                <a href="https://luminice-star.itch.io/wypb-special" target="_blank">
                    <img class="fit-image hover-effect" src="@assets/img/other_projects/wypb.png"
                        alt="Would you press the button image">
                </a>
            </div>
            <div class="col right">
                <h2>Would You Press the Button - Special</h2>
                <p class="facts">Godot, GDScript</p>
                <p>Director of a game about convincing others whether to press a button or not
                    that
                    can alter your life. Created out of the emotion of "tempt", the game was designed to "tempt someone
                    into doing something".</p>
            </div>
        </div>
        <div class="block">
            <div class="col left" style="z-index: 1">
                <a href="https://luminice-star.itch.io/mobile-smash-idea" target="_blank">
                    <img class="fit-image hover-effect" src="@assets/img/other_projects/mobile_smash.png"
                        alt="Mobile Smash image">
                </a>
            </div>
            <div class="col right">
                <h2>Mobile Smash Idea</h2>
                <p class="facts">Unity, C#</p>
                <p>My take on a vertical mobile game version of Super Smash Bros. Attack by double tapping,
                    swiping, or hold-swiping. Made after a dream about a Super Smash Bros Brawl sequel.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left" style="z-index: 1">
                <a href="https://connor-lynchh.github.io/CMPM-169-Team-Project-Group-8/" target="_blank">
                    <img class="fit-image hover-effect" src="@assets/img/other_projects/eerie_watch.png"
                        alt="Eerie Watch image">
                </a>
            </div>
            <div class="col right">
                <h2>EerieWatch</h2>
                <p class="facts">HTML, CSS, JS</p>
                <p>Lead group of software engineers to design a website about working as an agent investigating
                    supernatural events. Read blogs and decide whether to report it and
                    send a
                    team to investigate further or don't risk it in case it is a fake.
                </p>
            </div>
        </div>
        <transition name="slowFade" v-show="secret">
            <div class="block" style="background-color: #e0e0e0;">
                <div class="col left">
                    <router-link to="/Secret" class="secret"><b>Secret Found</b></router-link>
                </div>
                <div class="col right">
                    <h2>Something Secret</h2>
                    <p class="facts">Mystery</p>
                    <p>Who knows where this leads?
                    </p>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
    data() {
        return {
            secret: false, // yes I am hiding a page inside code. Not sure how anyone will figure this out
        }
    },
}
</script>


<style scoped>
.block {
    display: flex;
    padding: 1.5em;
    width: 85%;
    margin: auto;
}

.block>div.col {
    float: left;
    text-align: center;
    align-content: center;
}

.block>div.left {
    width: 55%;
    margin-left: 2em;
    margin-right: 0.5em;
    max-height: 18em;
}

.block>div.right {
    width: 45%;
    margin-right: 2em;
}

.fit-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.facts {
    /* for the programming languages part" */
    color: rgb(110, 110, 110);
    line-height: 10px;
}

.side-image {
    position: fixed;
    top: 10%;
    left: 0%;
    z-index: 0;
}

.secret {
    color: rgb(73, 200, 141);
    font-size: 3em;
}

.hover-effect {
    transition: 0.2s;
}

.hover-effect:hover {
    transform: scale(1.05);
}
</style>