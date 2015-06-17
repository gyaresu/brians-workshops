import app from 'ampersand-app'
import Router from './router'

require('./styles/main.styl')

window.app = app.extend({
  init () {
    this.router = new Router()
  }
})

app.init()