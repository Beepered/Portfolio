<!-- Run npm run deploy to update/deploy github pages version -->

<script setup>
import ProgressBar from '@components/ProgressBar.vue'
import NavBar from './components/NavBar.vue';
import BottomBar from './components/BottomBar/BottomBar.vue';
import Nav from './components/Nav.vue';
</script>

<template>
  <transition name="GrowFade" @after-leave="page_loaded = true">
    <section v-if="!progress_complete">
      <ProgressBar @progress_complete="progress_complete = true" />
    </section>
  </transition>

  <!-- router -->
  <transition name="fade">
    <section v-if="page_loaded">
      <NavBar></NavBar>
      <!-- <Nav></Nav> -->

      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>

      <BottomBar></BottomBar>
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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #273d53;
}

/*--------- TRANSITIONS  ---------*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.GrowFade-leave-active {
  animation: GrowFade-in 1.3s;
}

@keyframes GrowFade-in {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
