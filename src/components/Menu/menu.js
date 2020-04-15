import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './menu.scss'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="menu-wrapper">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Weather</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
         );
    }
}
 
export default Menu;


