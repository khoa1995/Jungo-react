import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/">Weather</NavLink></li>
                    <li><NavLink to="/burger">Burger</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
