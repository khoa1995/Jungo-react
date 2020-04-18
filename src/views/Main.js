import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Weather from './Weather';
import Burger from './Burger';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Weather}></Route>
                <Route exact path='/burger' component={Burger}></Route>
            </Switch>
        );
    }
}

export default Main;
