import Theme from './Theme.vue'
import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-theme', Theme)
  }
}
export default plugin

initPlugin(plugin)
