import app from 'ampersand-app'
import Router from './router'
import './styles/main.styl'

window.app = app

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()