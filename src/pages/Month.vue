<template>
    <section>
        <h1>Month of Code</h1>
        <h2>4 weeks to learn 4 new things</h2>

        <div class="grid" style="padding-top: 1.5em;">
            <div class="block" :style="{ backgroundColor: this.RandomColor() }">
                <h3><a href="https://github.com/Beepered/SQL-Practice" target="_blank">SQL / Databases</a></h3>
                <p>Ranking: 5/10</p>
                <section class="container">
                    <div class="divider" style="margin-right: 1em;">
                        <p>Resources:</p>
                        <ul style="text-align: left;">
                            <li>
                                Caleb Curry <a
                                    href="https://www.youtube.com/playlist?list=PL_c9BZzLwBRKC2PJwLFxc2y6cyXYYQzj3"
                                    class="tooltip">SQL
                                    series <span class="tooltip-text">database understanding</span></a>
                            </li>
                            <li>
                                <a href="https://sqlbolt.com" class="tooltip">SQLBolt <span class="tooltip-text">How to
                                        program in SQL</span></a> <!-- for learning -->
                            </li>
                            <li>
                                <a href="https://sqlzoo.net/wiki/SQL_Tutorial" class="tooltip">SQLZoo <span
                                        class="tooltip-text">SQL tests</span></a>
                                <!-- sucks, because doesn't give you code answer and requires that you already know a lot. not recommended -->
                            </li>
                            <li>
                                <a href="https://www.coursera.org/learn/database-design-postgresql"
                                    class="tooltip">Coursera <span class="tooltip-text">Not recommended</span></a>
                                <!-- not recommended. feels like you are just copy-pasting -->
                            </li>
                        </ul>
                    </div>
                    <div class="divider">
                        <p>Procrastination hit hard. Got better by Thursday and got back into LeetCode. Couldn't
                            think of a project, so followed a youtube video.</p>
                    </div>
                </section>
                <div style="width: 85%; margin: auto">
                    <img class="fit-image" src="@assets/img/month/sql.png">
                </div>
            </div>
            <div class="block" :style="{ backgroundColor: this.RandomColor() }">
                <h3><a href="https://github.com/Beepered/Full-Stack-Tutorial" target="_blank">Full-Stack</a></h3>
                <p>Ranking: 3/10</p>
                <section class="container">
                    <div class="divider" style="margin-right: 1em;">
                        <p>Resources:</p>
                        <ul style="text-align: left;">
                            <li>
                                <p>Tech by Tim <a href="https://www.youtube.com/watch?v=PppslXOR7TA&t=3364s"
                                        class="tooltip">full
                                        stack tutorial <span class="tooltip-text">it's ok</span></a></p>
                            </li>
                            <li>
                                <p>freeCodeCamp <a href="https://www.youtube.com/watch?v=PWG7NlUDVaA&t=2538s"
                                        class="tooltip">FARM
                                        tutorial <span class="tooltip-text">absolutely horrible</span></a></p>
                                <!-- don't recommend: doesn't walk through code. just copy, pastes, and explains -->
                            </li>
                        </ul>
                    </div>
                    <div class="divider" style="margin-right: 1em;">
                        <p>I used React and Flask. Very busy this week. Didn't get much work done and redid the project
                            3 times. I couldn't get
                            the project to deploy, but I will make sure to follow a
                            deployment tutorial first next time.</p>
                    </div>
                </section>
                <div style="width: 85%; margin: auto">
                    <img class="fit-image" src="@assets/img/month/react.png">
                </div>
            </div>
            <div class="block" :style="{ backgroundColor: this.RandomColor() }">
                <h3>Unreal Engine</h3>
                <p>Ranking: 8/10</p>
                <section class="column-container">
                    <div class="divider-img" style="max-width: 80%;">
                        <img class="fit-image" src="@assets/img/month/UnrealEngine.png">
                    </div>
                    <div class="divider" style="max-width: 70%;">
                        <p>Very fun to work on. Unreal Engine loads really fast / Unity is TOO slow. Made the
                            scaffolding for something more so I hope to work on it
                            later and make an actual game.</p>
                    </div>
                </section>
            </div>
            <div class="block" :style="{ backgroundColor: this.RandomColor() }">
                <h3>Roblox</h3>
                <p>Ranking: 7/10</p>
                <section class="column-container">
                    <div class="divider-img" style="max-width: 80%;">
                        <img class="fit-image" src="@assets/img/month/roblox.png">
                    </div>

                    <div class="divider" style="max-width: 70%;">
                        <p>Roblox Studio is good for online games, but lacks many features most programming
                            langauges and engines have. I started a 3D game first, but couldn't finish in time
                            so I made a UI-focused game. Side Note: I finished making the game afterwards, though you
                            can only play it if you are friends with me on Roblox.</p>
                    </div>
                </section>
            </div>
        </div>

        <div style="margin-top: 2em" class="conclusion">
            <h2>Conclusion</h2>
            <p class="conclusion-text">Overall, I learned a lot, but my favorite has to be making the games.
                SQL
                and
                Fullstack were ok, but it
                felt more like a task to complete, since I didn't have a clear direction. I still need to learn to start
                with
                a smaller scope, because both Unreal and Roblox games were unfinished at the end of the week. It felt
                good learning new things and making a project out of it. I recommend everyone to try a similar "Month of
                Learning".</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            colors: ["#ffd7d1", "#f0d9c0", "#f0f5d3", "#dff2ce",
                "#b4dbd6", "#c5cdde", "#d2c5ed", "#dac3eb", "#e0cade"]
        }
    },
    methods: {
        RandomColor() {
            const randomIndex = Math.floor(Math.random() * this.colors.length)
            return this.colors[randomIndex]
        }
    }
}
</script>

<style scoped>
.grid {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5em;
    row-gap: 2em;
    max-width: 82%;
}

.grid>div.block {
    border: 2px solid black;
    border-radius: 3px;
    padding: 0.5em 1em 1em 1em;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
}

.column-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center
}

.divider {
    border: 2px solid #cdcdcd;
    border-radius: 2px;
    padding: 0.5em;
    position: relative;
    min-width: 35%;
    max-width: 60%;
    background-color: rgb(250, 250, 250);
}

/* same as divider, but no border or color */
.divider-img {
    position: relative;
    max-width: 100%;
}

.fit-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.conclusion {
    border: 2px solid grey;
    border-radius: 2px;
    padding: 1em;
    max-width: 65%;
    align-content: center;
    margin: auto;
    background-color: rgb(250, 250, 250);
}

.tooltip-text {
    visibility: hidden;
    min-width: 60px;
    max-width: 180px;
    background-color: rgb(236, 236, 236);
    color: #505050;
    text-align: center;
    font-size: small;
    border-radius: 5px;
    padding: 3px;
    position: absolute;
    z-index: 1;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
}
</style>