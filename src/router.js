import Router from 'ampersand-router'
import React from 'react'
import Home from './pages/home'

export default Router.extend({

  routes: {
    '': 'home'
  },

  home () {
    const data = 'thing'
    React.render(<Home data={data}/>, document.body)
  }
})