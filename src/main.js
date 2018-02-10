import Vue from 'vue';
import * as svgicon from 'vue-svgicon';

import App from './App';

Vue.config.productionTip = false;

Vue.use(svgicon, {
  classPrefix: `AppIcon-`,
});

// eslint-disable-next-line no-new
new Vue({
  el: `#app`,
  render: h => h(App),
});
