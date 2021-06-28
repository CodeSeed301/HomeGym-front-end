import React, { Component } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import deletePro from "../assets/images/deletePro.png";
export class RowCartSection extends Component {
    
    
    render() {
       const idx =this.props.idx
        
        return (
            <>
                <Row style={{ border: '1px solid whitesmoke', padding: '5px', margin: '5px 0' }}>
                    <Col>{this.props.name}</Col>
                    <Col>{this.props.qunatity}</Col>
                    <Col><img src={deletePro} alt="delete" onClick={()=>this.props.deleteMyitem(idx)} /></Col>
                    
                  </Row> 
            </>
        )
    }
}

export default RowCartSection
