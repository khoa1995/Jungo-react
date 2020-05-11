import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Weather from './Weather';
import Burger from './Burger';
import logo from '../assests/image/logo_burger.png'

class Main extends Component {
    render() {
        return (
            // <Switch>
            //     <Route exact path='/' component={Weather}></Route>
            //     <Route exact path='/burger' component={Burger}></Route>
            // </Switch>
            <div className="main">
                <div className="burger-logo">
                    <img alt="logo" src={logo}/>
                </div>
                <Burger/>
            </div>
        );
    }
}

export default Main;
