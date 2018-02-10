<template>
  <div id="app">
    <h1>Dynamically Loading SVG Icons<br>with Vue.js</h1>

    <h2>Always loaded</h2>
    <div>
      <svgicon v-if="showTheatre" name="theatre" height="3em"></svgicon>
    </div>
    <button @click="showTheatre = !showTheatre">Toggle Theatre Icon</button>

    <h2>Loaded if needed</h2>
    <h3>svgicon + watch</h3>
    <div>
      <svgicon v-if="showMagicHat" name="magic-hat" height="3em"></svgicon>
    </div>
    <button @click="showMagicHat = !showMagicHat">Toggle Magic Hat Icon</button>

    <h3>AppIcon wrapper component</h3>
    <div>
      <app-icon v-if="showMusic" name="music" size="l" fill></app-icon>
    </div>
    <button @click="showMusic = !showMusic">Toggle Music Icon</button>

    <footer>
      <small>
        Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">
        <abbr title="Creative Commons BY 3.0">CC 3.0 BY</abbr></a>
      </small>
    </footer>
  </div>
</template>

<script>
import AppIcon from './components/AppIcon';

import(/* webpackChunkName: "svgicon-theatre" */ `./components/icons/theatre`);

export default {
  name: `App`,
  components: {
    AppIcon,
  },
  data() {
    return {
      showTheatre: false,
      showMagicHat: false,
      showMusic: false,
    };
  },
  watch: {
    showMagicHat(value) {
      if (value) import(/* webpackChunkName: "svgicon-magic-hat" */ `./components/icons/magic-hat`);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
  max-width: 42em;
  margin-right: auto;
  margin-left: auto;
  padding: 2em;
}

footer {
  margin-top: 3em;
}
</style>
