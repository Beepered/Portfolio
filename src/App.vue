<!-- Run npm run deploy to update/deploy github pages version -->

<script setup>
import ProgressBar from '@components/ProgressBar.vue'
</script>

<template>
  <transition name="fade" mode="in-out" @after-leave="page_loaded = true">
    <section v-if="!progress_complete">
      <ProgressBar @progress_complete="progress_complete = true" />
    </section>
  </transition>

  <!-- router -->
  <transition name="fade">
    <section v-if="page_loaded">
      <div id="nav">
        <router-link to="/">Home</router-link> |

      </div>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'App',
  components: { ProgressBar },
  data() {
    return {
      progress_complete: false,
      page_loaded: false,
    }
  },
  methods: {

  }
}</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #273d53;
}

/* nav */
#nav {
  background-color: #ececec;
  padding: 2%;
}

#nav a {
  font-weight: bold;
  font-size: larger;
  color: rgb(20, 42, 181);
}

#nav a:hover {
  filter: drop-shadow(0 0 2em #ff0101aa);
}

/* nav selected */
#nav a.router-link-exact-active {
  font-size: xx-large;
  color: rgb(56, 189, 255);
  text-shadow: 2px 2px #bebebe;
}

/*--------- TRANSITIONS  ---------*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
