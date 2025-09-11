<template>
    <section>
        <h1 class="title">Secret Room</h1>
        <p>Congrats! You found the secret room.</p>
        <p>Either you <b>cheated</b> or are really cool.</p>
        <p>Here. Have a coookie</p>
        <div @click="Click">
            <img src="@assets/img/cookie.png" alt="O" style="width:40%">
        </div>
        <p class="count" v-if="cookie_given">{{ count }}</p>

    </section>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            autoClicks: 0,
            cookie_given: false,
        }
    },
    methods: {
        Click() {
            this.count++;
            this.cookie_given = true;
        },
        Update() {

        }
    },
    mounted() {
        this.Update()
    }
}
</script>

<style>
.title {
    color: rgb(73, 200, 141)
}

.count {
    font-size: 1.5em;
}
</style>