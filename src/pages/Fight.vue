<template>
    <section>
        <div class="head">
            <h1>Fight Game Plus Zero</h1>
            <h2>My beloved fighting game</h2>

            <p>A fighting game designed for beginners. Pick a character, pick
                a
                stage, and fight a friend.
            </p>

            <h3><a href="https://luminice-star.itch.io/fight-game-plus-zero">Itch.io Link</a></h3>

        </div>

        <div class="container">
            <div class="left-col block">
                <h3>History</h3>
                <p>One day, I was watching fighting game videos and became really interested in
                    them. I came up with the idea of a
                    simple fighting game where you die in 1 hit, can't jump, and only 2 attacks. After a while of
                    working on
                    <a href="https://luminice-star.itch.io/fight-game">"Fight Game"</a>, I realized I did
                    not have enough programming knowledge to
                    complete the game.
                    Half a year later, I revisited the idea but focused on creating it one building block at a time.
                    One of my proudest moments is a character input script that reads controller inputs using
                    an
                    input
                    buffer and another
                    script takes those inputs to determine which attacks to play.
                </p>
            </div>

            <div>
                <img class="fit-image" src="@assets/img/fight1.png">
            </div>
        </div>

        <div class="container">
            <div>
                <img class="fit-image" src="@assets/img/fight2.png">
            </div>

            <div class="right-col block">
                <h3>Current</h3>
                <p>While I still wish to work on it and have many character ideas, animation takes a long time and the
                    code
                    is
                    very messy. It was a
                    great lesson on system design and making sure things work on their own. The game is on indefinite
                    hold
                    and if I
                    work
                    on
                    this again, it will likely be from scratch, as I have
                    gained better, cleaner system design knowledge.
                </p>
            </div>

        </div>
    </section>
</template>

<style scoped>
.head {
    left: 0;
    right: 0;
}

.container {
    display: flex;
    padding: 1.5em;
    width: 90%;
    margin: auto;
}

.block {
    width: 50%;
    padding: 1em;
    margin: 1em;
    background-color: rgb(227, 227, 227);
}

.left-col {
    float: left;
    margin-left: 2em;
    margin-right: 2em;
    border: rgb(9, 158, 9) outset;
}

.right-col {
    float: right;
    margin-right: 2em;
    border: rgb(181, 0, 0) outset;
}

img {
    max-height: 18em;
}

.fit-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>