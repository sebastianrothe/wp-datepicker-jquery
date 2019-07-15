import 'core-js/stable'
import 'regenerator-runtime/runtime'

import App from './components/app'
import { ready, objectAssign } from './helper/polyfills'

const addPolyfills = () => {
  objectAssign()
}

addPolyfills()

ready(() => {
  const app = new App()
  app.init()
  app.render()
})
