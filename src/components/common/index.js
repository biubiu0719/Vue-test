import NewMessage from './new_message/index.js'

const components = [
  NewMessage,
]

const install = function(Vue = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  NewMessage
}