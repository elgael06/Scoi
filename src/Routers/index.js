import React from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import App from '../components/App';
import Home from '../components/Global/Home';
import Users from '../components/Private/Users';
import PageError from '../components/Public/PageError';
import Login from '../components/Public/Login';

const AppRouters =()=>
<App>
    <Switch>
        <Route exact path = "/" component = {Home} /> 
        < Route exact path = "/users" component = {Users} /> 
        <Route  exact path="/login"  component={Login}/>
        <Route  component = { PageError}/>
    </Switch>
</App>;

export default AppRouters;