//import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import Home from './home'
import Layout from './layout'
import Tabletop from 'Tabletop'
//import fs from 'fs'

function showInfo (data) {
  console.log(data)
  return data
}

let tt = Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8/pubhtml?gid=291196347&single=true', callback: showInfo } )

export default Router.extend({
  renderPage (Page, opts = {}) {
    const main = (
      <Layout tt={tt}>
        <Page {...opts}/>
      </Layout>
    )

    React.render(main, document.body)
  },

  routes: {
    '': 'home'
  },

  home () {
    React.render(<Home />, document.body)
  }
})

