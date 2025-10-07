<template>
    <section>
        <h1>Other Projects</h1>
        <div class="block">
            <div class="col left">
                <a href="https://mosaicly.io/" target="_blank">
                    <h2>Image</h2>
                </a>
            </div>
            <div class="col right">
                <h2>Mosaicly</h2>
                <p>TypeScript, SCSS, Svelte</p>
                <p>Create public canvases that other people can draw on in the real world, like Pokemon Go.
                </p>
                <p>Scrum Master for a quarter long agile developed web app to create public interactable canvases
                    similar to Pokemon Go.
                    Identified issues, user stories, and developed frontend such as canvas drawing and QR code creation.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://luminice-star.itch.io/wypb-special" target="_blank">
                    <h2>Image</h2>
                </a>
            </div>
            <div class="col right">
                <h2>Would You Press the Button - Special</h2>
                <p>Godot, GDScript</p>
                <p>Fun party game that I play with friends and family. Convince others whether to press a button or not
                    that
                    can alter your life.</p>
                <p>Created of the emotion of "tempt", the game was designed to "tempt someone into doing something".
                    Inspired by the Jackbox Party games, the game was designed to be more competitive instead of
                    inquisitive. A persuader must get the group to agree with them to press the button, while an opposer
                    must get the group to not press it. Each side must make their argument on the spot, which leads to a
                    lot of chaotic fun even if the prompt is very one-sided.</p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://luminice-star.itch.io/mobile-smash-idea" target="_blank">
                    <h2>Image</h2>
                </a>
            </div>
            <div class="col right">
                <h2>Mobile Smash Idea</h2>
                <p>Unity, C#</p>
                <p>My take on a vertical mobile game version of Super Smash Bros. Attack by double tapping,
                    swiping, or hold-swiping. I wasn't able to add special moves or a Final Smash, because those
                    couldn't be done without making the game horizontal or adding a button.
                </p>
                <p>Had a dream about a Super Smash Bros Brawl sequel and started working on how Smash Bros would
                    work on mobile. It is formatted for vertical phones so people could play quick matches
                    conveniently, also, because Smash Bros is very aerial focused, the vertical layout gives more
                    air
                    space.
                </p>
            </div>
        </div>
        <div class="block">
            <div class="col left">
                <a href="https://connor-lynchh.github.io/CMPM-169-Team-Project-Group-8/" target="_blank">
                    <h2>Image</h2>
                </a>
            </div>
            <div class="col right">
                <h2>EerieWatch</h2>
                <p>HTML, CSS, JS</p>
                <p>Work as an agent investigating supernatural events. Read blogs and decide whether to report it and
                    send a
                    team to investigate further or don't risk it in case it is a fake.
                </p>
                <p>I worked as the main programmer and was focused on getting
                    webpage connectivity. I programmed buttons to flag a post which could change a story. I also added
                    "minor reports" that are dependent on which blogs
                    were read, reported, and the time of day.
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
}

.block>div.col {
    float: left;
    text-align: center;
    align-content: center;
}

.block>div.left {
    width: 40%;
    margin-left: 2em;
    margin-right: 1em;
}

.block>div.right {
    width: 60%;
    margin-right: 2em;
}
</style>