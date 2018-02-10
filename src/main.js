import Vue from 'vue';
import * as svgicon from 'vue-svgicon';

import App from './App';

Vue.config.productionTip = false;

// We install `vue-svgicon` as plugin
// and configure it to prefix all CSS
// classes with `AppIcon-`.
Vue.use(svgicon, {
  classPrefix: `AppIcon-`,
});

// eslint-disable-next-line no-new
new Vue({
  el: `#app`,
  render: h => h(App),
});
