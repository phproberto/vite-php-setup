import { createApp } from 'vue'
import './index.css'

// If you are build a SPA with a single <div id="app"></div> entry you would:
// import App from './App.vue'
// createApp(App).mount('#app')


// The example here is to have multiple Vue apps sprinkled throughout your page
// So we would instantiate any known components by their own
import HelloWorld from './components/HelloWorld.vue'

for (const el of document.getElementsByClassName('vue-app')) {

  createApp({
    template: el.innerHTML,
    components: {
      HelloWorld
      // add here all components that should be available to in-browser template compilation
    }
  }).mount(el)

}
