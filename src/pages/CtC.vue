<template>
    <section class="cursor-hand">
        <div class="top">
            <h1 style="color: rgb(0, 152, 7);">Cash the Cache</h1>
        </div>

        <div class="block" style="color: rgb(205, 173, 65); font-size: 1.2em;">
            <h2>My College Capstone</h2>
            <p>Break into houses. Steal stuff, sell, repeat. A free to play, 3D Unity game about burglarizing houses.
            </p>
            <p>Release Date: I'm not sure</p>
            <h3><a href="https://store.steampowered.com/app/3704870/Cash_the_Cache/" class="cursor-toilet">Steam
                    Link</a></h3>

            <p>I am working as the producer for my college capstone final project. You play as a robber, breaking into
                buildings to steal items and sell them to buy upgrades. I work on system design, 2D art, trailers, and
                team management.</p>
        </div>
        <div class="block" style="width: 60%;">
            <h3>Quarter 1: Scaffolding</h3>
            <p>I designed the interaction
                system and UI, while my group worked on the AI pathfinding, sounds, and getting assets.
                We realized that we didn't have anything to show off so we
                began designing a central level, which helped us see how our ideas working in a plausible level.
            </p>
        </div>
        <div class="block" style="width: 60%;">
            <h3>Quarter 2: Level generation and level selection</h3>
            <p>I onboarded new members,
                refactored systems, and focused on new levels. We switched from having a pre-designed level to making
                randomly generated ones as it would help lengthen game time. I kept checking in with members every few
                days, offered help, and cleaned up code.
            </p>
        </div>
        <div class="block cursor-toilet" style="width: 60%;">
            <h3>Current: Limbo</h3>
            <p>Most of the team has
                left or gotten jobs. I enjoyed working on this while the group was still together, but it was been hard
                getting
                time to work on it and encouraging the group while we still had other classes to worry about. This
                project
                has tested my leadership skills, programming, and time management. Great experience!
            </p>
            <p>We are stuck on a big level generation bug, but no one has time to fix it. Hopefully the game gets
                released
                at some point.</p>
        </div>
    </section>
</template>

<script>

</script>


<style scoped>
.top {
    background-image: "@assets/img/me.jpg";
}

.block {
    margin: auto;
    margin-bottom: 1em;
    width: 70%;
    padding: 1em;
    background-color: rgb(62, 62, 62);
    color: rgb(235, 235, 235);
    border-radius: 10px;
}

.cursor-hand {
    cursor: url("@assets/img/ctc/cursor.png"), auto;
}

.cursor-toilet {
    cursor: url("@assets/img/ctc/cursor toilet.png"), auto;
}
</style>