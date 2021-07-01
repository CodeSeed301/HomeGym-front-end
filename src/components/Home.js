import React, { Component } from 'react'
import Slider from './Slider';
import HomeSections from './HomeSections';


export class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
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
