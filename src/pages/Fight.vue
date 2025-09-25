<template>
    <section>
        <h1>Fight Game Plus Zero</h1>
        <h2>My beloved fighting game</h2>

        <p>A fighting game designed for beginners, because there are no special combinations. Pick a character, pick a
            stage, and fight a friend.
        </p>

        <h3><a href="https://luminice-star.itch.io/fight-game-plus-zero">Itch.io Link</a></h3>

        <div class="left">
            <h3>History</h3>
            <p>One day, I was watching fighting game videos and became really interested in
                them. I had an idea of
                simple fighting game where you die in 1 hit, can't jump, and only 2 attacks. After a while of working on
                <a href="https://luminice-star.itch.io/fight-game">"Fight Game"</a>, I realized I did
                not have enough programming knowledge to
                complete the game. I took a break to work on simpler projects to develop my <i>charcuterie</i> of
                knowledge and focus on my first year in college.
                Half a year later, I revisited the idea but focused on creating it one building block at a time.
                One of my proudest moments is a character input script that reads inputs from the controller using an
                input
                buffer and a
                character controller script takes those inputs to choose the attacks.
            </p>
        </div>

        <div class="right">
            <h3>Current</h3>
            <p>While I still wish to work on it and have many character ideas, animation takes a long time and the code
                is
                very messy. It was a
                great lesson on system design and making sure things work on their own. The character scripts can be
                modified to take different actions for
                each of the inputs read in from the character input script. The game is on indefinite hold and if I work
                on
                this again, it will likely be from scratch, as I have
                gained better system design knowledge.
            </p>
        </div>

    </section>
</template>

<style scoped>
.left {
    float: left;
    width: 50%;
    margin: 1%;
    padding: 1%;
    background-color: rgb(227, 227, 227);
    border: rgb(9, 158, 9) inset;
}

.right {
    float: right;
    width: 50%;
    margin: 1%;
    padding: 1%;
    background-color: rgb(227, 227, 227);
    border: rgb(181, 0, 0) outset;
}
</style>