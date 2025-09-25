<!-- "npm run deploy" to update/deploy github pages version -->

<script setup>
import LoadingBar from '@components/LoadingBar.vue'
import NavBar from './components/NavBar.vue';
import BottomBar from './components/BottomBar/BottomBar.vue';
</script>

<template>
  <div class="progress-bar">
    <transition name="GrowFade" @after-leave="page_loaded = true">
      <section v-if="!progress_complete">
        <LoadingBar @progress_complete="progress_complete = true" />
      </section>
    </transition>
  </div>

  <!-- router -->
  <transition name="fade">
    <section v-if="page_loaded">
      <NavBar></NavBar>

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
  components: { LoadingBar },
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

.progress-bar {
  position: absolute;
  top: 50%;
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
