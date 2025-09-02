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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
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
