
import vueCascade from './components/vue-cascade.vue'

const Cascade = {
  install (Vue, options) {
    Vue.component(vueCascade.name, vueCascade)
  }
}

// if Vue is the window object, auto install it
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Cascade)
}

export default Cascade
