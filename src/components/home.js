import React, { Component } from 'react'
import Timer from './timer'
import Elements from './h1'
export default class home extends Component {
  render() {
    return (
      <div className='header'>
      <div class="header-wrapper">
        <p><Timer/></p>
        <h1 class="title"><h1/></h1>
        <p>Count: <span class="count"> </span></p>
      </div>
      </div>
    )
  }
}
