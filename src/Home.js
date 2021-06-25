import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider';
import Footer from './Footer';
import HomeSections from './HomeSections';
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div style={{ width:'100%' , minHeight:'100vh'}}>
            <Header />
             <Slider />
             <HomeSections />
             <Footer />
         </div>
        )
    }
}

export default Home
