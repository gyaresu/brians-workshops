import React from 'react'

export default React.createClass({
  displayName: 'Home',
  render () {
    const {data} = this.props
    return (
      <div>
        <h1>{data}</h1>
      </div>
    )
  }
})