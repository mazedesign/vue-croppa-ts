import {VueConstructor} from 'vue'
import component from './cropper.vue'
import assign from 'object-assign'

const defaultOptions = {
  componentName: 'croppa'
}

const VueCroppa = {
  install: function (vue: VueConstructor, options: Record<string,any>) {
    options = assign({}, defaultOptions, options)
    let version = Number(vue.version.split('.')[0])
    if (version < 2) {
      throw new Error(`vue-croppa supports vue version 2.0 and above. You are using Vue@${version}. Please upgrade to the latest version of Vue.`)
    }
    let componentName = options.componentName || 'croppa'

    // registration
    vue.component(componentName, component)
  },

  component
}
export default {
  install: (vue: VueConstructor, options: Record<string,any>) => {
    vue.version
  }
  }