import App from './components/app'
import { ready, objectAssign } from './helper/polyfills'

const addPolyfills = () => {
  objectAssign()
}

addPolyfills()

ready(function() {
  const app = new App()
  app.init()
  app.render()
})
