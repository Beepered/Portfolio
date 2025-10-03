<template>
    <section>
        <h1>Projects I want to show off</h1>

        <div class="block">
            <div class="col left">
                <h2>Image</h2>
            </div>
            <div class="col right">
                <h2>EerieWatch</h2>
                <p>HTML, CSS, JS</p>
                <p>Work as an agent investigating supernatural events. Read blogs and decide whether to report it and
                    send a
                    team to investigate further or don't risk it in case it is a fake.
                </p>
                <p>I worked as the main programmer and was focused on getting
                    webpage connectivity. I programmed buttons to flag a post which can also change a story if the post
                    was
                    flagged. I also added "minor reports" that are randomly picked and dependent on which blogs
                    are read, reported, and the time of day. Additionally, I wrote "The Empty House" though I didn't
                    spend
                    much time on it.
                </p>
            </div>

        </div>
        <div class="block">
            <div class="col left">
                <h2>Image</h2>
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
                <h2>Image</h2>
            </div>
            <div class="col right">
                <h2>Mobile Smash Idea</h2>
                <p>My take on a vertical mobile game version of Super Smash Bros. Attack by double tapping,
                    swiping, or hold-swiping. I wasn't able to add special moves or a Final Smash, because those
                    couldn't be done without making the game horizontal or adding a button.
                </p>
                <p>Had a dream about a Super Smash Bros Brawl sequel and started working on how Smash Bros would
                    work on mobile. It is formatted for vertical phones so people could play quick matches
                    conveniently, also, because Smash Bros is very aerial focused, the vertical layout gives more air
                    space.
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
    border: 2px solid black;
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