import app from 'ampersand-app'
import Router from './router'
import './styles/main.styl'
import Sheet from './models/spreadsheet'

var data = new Sheet(1, function (sheet) { return sheet })

window.app = app

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
    this.data = data
  }
})

app.init()