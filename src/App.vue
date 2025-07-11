<template>
  <section v-if="!page_loaded">
    <ProgressBar @progress_complete="page_loaded = true" />
    <p>loading...</p>
  </section>

  <!--
  <div class="tooltip">Hover over me
    <span class="tooltiptext">What is the junk in my trunk</span>
  </div>
  -->

  <section id="loaded" v-if="page_loaded">
    <h1>Brendan's Portfolio</h1>
    <a href="">ART</a>
    <p>Hey-o! This is Brendan Trieu's portfolio, a place where I delve further into my projects the process and a bunch
      of other random stuff.</p>
    <p>As a game designer, I like to play games, make games, and talk about games. I am also very passionate about
      drawing and animating which you can see in my games.</p>
    <p>Click around and read! If not, sit around and lets talk. Umm... come here often?</p>

    <blockquote>{{ quote }} - Brendan Trieu</blockquote> <!-- make quote change randomly -->


    <p><b>Links</b></p>
    <ol>
      <!--
      <li><a href="https://www.linkedin.com/in/brendan-trieu-882753266/">Linkedin</a><img
          src="/assets/icons/linkedin.png" class="icon"></li>
      -->

      <!--
          <li><a href="https://luminice-star.itch.io/">itch.io</a><img src="/assets/icons/itchio.png" class="icon"></li>
      <li><a href="https://github.com/Beepered">Github</a><img src="/assets/icons/github.png" class="icon"></li>
      <li><a href="mailto:bktrieu@gmail.com">Email</a><img src="/assets/icons/email.jpg" class="icon"></li>
      -->
    </ol>

  </section>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'

export default {
  name: 'App',
  components: {
    ProgressBar
  },
  data() {
    return {
      quote: "",
      page_loaded: false,
    }
  },
  methods: {
    RandomQuote() {
      let quote = "The fish that leaps the highest, tastes the greatest"
      this.quote = quote;
    }
  },
  beforeMount() {
    this.RandomQuote();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.icon {
  width: 4%;
}
</style>
