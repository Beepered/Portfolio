<!-- "npm run deploy" to update/deploy github pages version -->

<script setup>
import LoadingBar from '@components/LoadingBar.vue'
import NavBar from '@components/NavBar.vue';
import BottomBar from '@components/BottomBar/BottomBar.vue';
</script>

<template>
  <transition name="GrowFade" @after-leave="page_loaded = true">
    <div v-if="!progress_complete" class="progress-bar">
      <LoadingBar @loading_complete="progress_complete = true" />
    </div>
  </transition>
  <div v-if="!progress_complete" class="skip-container">
    <!-- Skip loading on click -->
    <p class="skip-loading" @click="progress_complete = true">Skip Loading</p>
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
  watch: { // idiotically, difficult way to change background color
    $route: {
      handler(to) {
        const body = document.body;
        const color = to.meta.backgroundColor || 'white'; // Default color
        body.style.backgroundColor = color;
      },
      immediate: true,
    },
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

.skip-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
}

.skip-loading {
  width: 10%;
  color: rgb(200, 200, 200);
  border: 1px solid rgb(190, 190, 190);
  background-color: rgb(250, 250, 250);
  border-radius: 3px;
  padding: 0.2em;
  cursor: pointer;
}

/*--------- TRANSITIONS  ---------*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.GrowFade-leave-active {
  animation: GrowFade-in 1.2s;
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
