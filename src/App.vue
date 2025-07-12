<template>
  <transition name="fade" @transitionend="page_loaded = true">
    <section v-if="page_loading">
      <ProgressBar @progress_complete="page_loaded = true" />
      <p>loading...</p>
    </section>
  </transition>
  <p>seseses</p>
  <section v-if="page_loaded">
    <h1>Brendan's Portfolio</h1>
    <p>Hey-o! This is Brendan Trieu's portfolio, a place where I delve further into my projects the process and a
      bunch
      of other random stuff.</p>
    <p>As a game designer, I like to play games, make games, and talk about games. I am also very passionate about
      drawing and animating which you can see in my games.</p>
    <p>Click around and read! If not, sit around and lets talk. Umm... come here often?</p>

    <QuoteGenerator></QuoteGenerator>

    <p><b>Links</b></p>
    <ol>

      <li><a href="https://www.linkedin.com/in/brendan-trieu-882753266/">Linkedin</a><img
          src="@assets/icons/linkedin.png" class="icon"></li>
      <li><a href="https://luminice-star.itch.io/">itch.io</a><img src="@assets/icons/itchio.png" class="icon"></li>
      <li><a href="https://github.com/Beepered">Github</a><img src="@assets/icons/github.png" class="icon"></li>
      <li><a href="mailto:bktrieu@gmail.com">Email</a><img src="@assets/icons/email.jpg" class="icon"></li>
    </ol>

  </section>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import QuoteGenerator from './components/QuoteGenerator.vue';

export default {
  name: 'App',
  components: {
    ProgressBar,
    QuoteGenerator
  },
  data() {
    return {
      page_loading: true,
      page_loaded: false,
    }
  },
  methods: {

  },
  beforeMount() {

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
  margin-top: 60px;
}

.icon {
  padding-left: 1%;
  width: 4%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.shrink-enter-active,
.shrink-leave-active {
  transition: all 0.5s ease-out;
  max-height: 400px;
}

.shrink-enter,
.shrink-leave-to {
  max-height: 0;
}
</style>
