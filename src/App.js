import React, { Component } from 'react'
import signs from './components/signs'
import Home from './components/home'
import Modal from './components/modal'
import './App.css'
export default class App extends Component {
state={
  signs:signs,
  

}
  render() {
    return (
      <div>
        <Modal/>
        <div className='cardss'>
        <Home/>
<signs/>
<section className='div'>
      {
      this.state.signs.map(item=>{
        return <div>
         <img src={item.symbol_img}/>
        </div>
})}
</section>
 </div>
        </div>
    )
  }
}

