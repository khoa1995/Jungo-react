import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/"></NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to="/">Weather</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/burger">Burger</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
