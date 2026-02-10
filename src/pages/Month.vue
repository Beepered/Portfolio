<template>
    <section>
        <h1>Month of Code</h1>
        <h2>Each week of the month, I learn 1 new thing.</h2>

        <div class="grid" style="padding-top: 1.5em;">
            <div class="block">
                <h3>SQL / Databases</h3>
                <section class="container">
                    <div class="divider" style="margin-right: 1em;">
                        <p>Resources:</p>
                        <ul>
                            <li>
                                Caleb Curry's <a
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
                        <p><a href="https://github.com/Beepered/SQL-Practice">Link to project</a> for more details</p>
                    </div>
                </section>
            </div>
            <div class="block">
                <h3>Full-Stack</h3>
                <section class="container">
                    <div class="divider" style="margin-right: 1em;">
                        <p>Resources:</p>
                        <ul>
                            <li>
                                <p>Tech by Tim's </p><a href="https://www.youtube.com/watch?v=PppslXOR7TA&t=3364s">full
                                    stack tutorial <span class="tooltip-text">it's ok</span></a>
                            </li>
                            <li>
                                <p>freeCodeCamp's </p><a href="https://www.youtube.com/watch?v=PWG7NlUDVaA&t=2538s">FARM
                                    tutorial <span class="tooltip-text">absolutely horrible</span></a>
                                <!-- doesn't walk through code, just copy pastes and explains -->
                            </li>
                        </ul>
                    </div>
                    <div class="divider" style="margin-right: 1em;">
                        <p>Was very busy this week. Didn't get much work done and redid the project 3 times. I used
                            Flask and React.</p>
                    </div>
                </section>
            </div>
            <div class="block">
                <h3>Unreal Engine</h3>
                <section class="container">
                    <div class="divider" style="margin-right: 1em;">
                    </div>
                    <div class="divider" style="margin-right: 1em;">
                        <p>Blah blah</p>
                    </div>
                </section>
            </div>
            <div class="block">
                <h3>XXX</h3>
                <section class="container">
                    <div class="divider" style="margin-right: 1em;">
                    </div>
                    <div class="divider" style="margin-right: 1em;">
                        <p>Blah blah</p>
                    </div>
                </section>
            </div>
        </div>

        <div>
            <h2>Conclusion</h2>
        </div>
    </section>
</template>

<style scoped>
.grid {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5em;
    row-gap: 2em;
    max-width: 80%;
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

.divider {
    border: 2px solid #cdcdcd;
    border-radius: 2px;
    padding: 0.5em;
    position: relative;
    max-width: 50%;
    background-color: #f5f5f5;
}

.tooltip-text {
    visibility: hidden;
    max-width: 175px;
    background-color: rgb(236, 236, 236);
    color: #5d5d5d;
    text-align: center;
    font-size: small;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
}

.ex-img {
    max-height: 40%;
    height: auto;
    width: auto
}
</style>