import React, { Component } from 'react'
import Slider from './Slider';
import HomeSections from './HomeSections';


export class Home extends Component {
    render() {
        return (
            <div style={{ width:'100%' , minHeight:'100vh'}}>
             <Slider />
             <HomeSections />
         </div>
        )
    }
}

export default Home
