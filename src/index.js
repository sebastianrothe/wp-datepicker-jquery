import App from './components/app'
import { ready } from './helper/polyfills'

ready(function() {
  const app = new App()
  app.init()
  app.render()
})
