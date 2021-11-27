import App from "./components/app"
import { ready, objectAssign } from "./helper/polyfills"

const addPolyfills = () => {
  objectAssign()
}

addPolyfills()

ready(() => {
  const app = new App()
  app.init()
  app.render()
})

// Hot Module Replacement
// see https://parceljs.org/features/development/#hot-reloading
if (module.hot) {
  module.hot.accept()
}
