import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class AdminConatiner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
      <div className='admin-container'>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Tableau de bort</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Bricoleurs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Demandeur</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      
    );
  }
}
</div> );
    }
}
 
export default AdminConatiner;