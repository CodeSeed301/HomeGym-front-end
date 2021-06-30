import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

export class addItemModal extends Component {


  render() {
    return (
      <>
        <Modal show={this.props.showAddItemModal} >
          <Modal.Header style={{background:'rgb(238, 238, 238)',fontFamily:'Poppins',color:'#333333'}}>
            <Modal.Title >Added Successfully</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    )
  }
}

export default addItemModal
