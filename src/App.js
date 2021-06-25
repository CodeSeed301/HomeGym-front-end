import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider';
import Footer from './Footer';
import HomeSections from './HomeSections';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div style={{ width:'100%' , minHeight:'100vh'}}>
         <Header />
        
          {/* <h1>Hello from App</h1> */}
          <Slider />
          <HomeSections />
          <Footer />
          
      </div>
    )
  }
}

export default App

