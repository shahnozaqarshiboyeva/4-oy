import React, { Component } from 'react'
export default class modal extends Component {


  render() {
    return (
      <div className='Card'>
                <div className='modal'>
          <h1>Auto test</h1>
          <form action='./Home'>
            <select id='section1'required>
              <option value="0" hidden>Kategoriyani tanlang</option>
              <option value="3">Qiyin</option>
            </select>
            <select id='section2'>
              <option value="0" hidden>Vaqtni tanlang</option>
              <option value="3">9</option>
            </select>
        <button type='submit' onClick={this.handleClick}>O'yin</button>
          </form>
        </div>
      </div>
    )
  }
}


