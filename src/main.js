import Vue from 'vue'
import App from './App.vue'

var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: function () {
      return EventBus;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
