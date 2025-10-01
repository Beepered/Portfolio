<template>
    <p>Nav</p>
    <div id="nav">
        <ul v-show="!mobile" class="navigation">
            <router-link class="route" to="/">Home</router-link>
            <router-link class="route" to="/About">About Me</router-link>
            <div class="dropdown">
                <button class="dropbtn">Portfolio</button>
                <div class="dropdown-content">
                    <router-link to="/CtC">Cash the Cache</router-link>
                    <router-link to="/Fight">Fight Game</router-link>
                    <router-link to="/Poke">Pokedex</router-link>
                </div>
            </div>
        </ul>
        <div class="icon">
            <i @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav }"></i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <router-link class="route" to="/">Home</router-link>
                <router-link class="route" to="/About">About Me</router-link>
                <div class="dropdown">
                    <button class="dropbtn">Portfolio</button>
                    <div class="dropdown-content">
                        <router-link to="/CtC">Cash the Cache</router-link>
                        <router-link to="/Fight">Fight Game</router-link>
                        <router-link to="/Poke">Pokedex</router-link>
                    </div>
                </div>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {};
</script>


<style>
/* nav */
</style>