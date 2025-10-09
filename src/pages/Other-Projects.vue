<template>
    <section>
        <h1>Other Projects</h1>
        <div class="block">
            <div class="col left">
                <a href="https://mosaicly.io/" target="_blank">
                    <img src="@assets/img/mosaicly.png" style="width: 70%;">
                </a>
            </div>
            <div class="col right">
                <h2>Mosaicly</h2>
                <p>TypeScript, SCSS, Svelte</p>
                <p>Scrum Master for a quarter long agile developed web app to create public interactable canvases
                    similar to Pokemon Go.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://luminice-star.itch.io/wypb-special" target="_blank">
                    <img src="@assets/img/wypb.png" style="width: 70%;">
                </a>
            </div>
            <div class="col right">
                <h2>Would You Press the Button - Special</h2>
                <p>Godot, GDScript</p>
                <p>Convince others whether to press a button or not
                    that
                    can alter your life. Created out of the emotion of "tempt", the game was designed to "tempt someone
                    into doing something".</p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://luminice-star.itch.io/mobile-smash-idea" target="_blank">
                    <img src="@assets/img/mobile_smash.png" style="width: 30%;">
                </a>
            </div>
            <div class="col right">
                <h2>Mobile Smash Idea</h2>
                <p>Unity, C#</p>
                <p>My take on a vertical mobile game version of Super Smash Bros. Attack by double tapping,
                    swiping, or hold-swiping. Made after a dream about a Super Smash Bros Brawl sequel.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://connor-lynchh.github.io/CMPM-169-Team-Project-Group-8/" target="_blank">
                    <img src="@assets/img/eerie_watch.png" style="width: 70%;">
                </a>
            </div>
            <div class="col right">
                <h2>EerieWatch</h2>
                <p>HTML, CSS, JS</p>
                <p>Work as an agent investigating supernatural events. Read blogs and decide whether to report it and
                    send a
                    team to investigate further or don't risk it in case it is a fake.
                </p>
            </div>
        </div>

    </section>
</template>

<script>

</script>


<style scoped>
.block {
    display: flex;
    padding: 1.5em;
    width: 90%;
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
    margin-right: 1em;
}

.block>div.left.img {
    width: 100%;
    height: auto;
}

.block>div.right {
    width: 45%;
    margin-right: 2em;
}
</style>