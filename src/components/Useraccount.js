import React, { Component } from 'react';

import UserNav from './Usernav'
import SideNav from './sidenav'
import UserMain from './usermain'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <UserNav />
            <SideNav />
            <UserMain />
            <Footer />
        </div> );
    }
}
 
export default User;