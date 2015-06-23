import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'Home',
  render () {
    const {data} = this.props
    return (
      <NavHelper className='container'>
        <div>
          <header role='banner'>
            <h1>{data}</h1>
          </header>
        </div>
      </NavHelper>
    )
  }
})