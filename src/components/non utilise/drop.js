import React, { Component } from 'react';
import CustomMenu from './customMenu'
import CustomToggle from './customToggle'
import {  Dropdown  } from 'react-bootstrap';

class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Dropdown className="a">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Choisir la categorie
        </Dropdown.Toggle>
    
        <Dropdown.Menu  classname="b" as={CustomMenu}>
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    

     )
  }
}
 


export default  Drop