import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ChooseUser from './ChooseUser';

function Pages() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/chooseuser' exact component={ChooseUser} />
            <Route path='/chooseuser/signup' exact component={Signup} />
            
        </Switch>
    )
}

export default Pages
