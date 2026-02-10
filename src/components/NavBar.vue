<template>
  <div id="nav">
    <router-link class="route" to="/">Home</router-link>
    <router-link class="route" :to="{ name: 'CtC' }">Cash the Cache</router-link>
    <router-link class="route" :to="{ name: 'Fight' }">Fight Game</router-link>
    <router-link class="route" :to="{ name: 'OtherProjects' }">Other Projects</router-link>
  </div>
</template>

<style>
/* nav */
#nav {
  background-color: #e7e7e7;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  left: 0;
  right: 0;
  width: 100%;
}

#nav a {
  font-weight: bold;
  font-size: 1.5em;
  color: rgb(24, 44, 180);
}

#nav a:hover {
  filter: drop-shadow(0 0 1.2em #3f3f3faa);
  color: rgb(19, 29, 94);
}

#nav a.router-link-exact-active {
  /* nav selected */
  font-size: 1.75em;
  color: rgb(56, 189, 255);
  text-shadow: 2px 2px #ababab;
}

.route {
  margin: 1em;
}
</style>