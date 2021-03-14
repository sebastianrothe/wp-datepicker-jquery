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

// Hot Module Replacement https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
