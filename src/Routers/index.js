import React,{useState} from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import App from '../components/App';
import Home from '../components/Global/Home';
import Users from '../components/Private/Users';
import PageError from '../components/Public/PageError';
import Login from '../components/Public/Login';

const AppRouters =()=>{
    const [ruta,setRuta] = useState("/");
    
    console.log(ruta);
    const AppHome       =({match})=>{ 
        setRuta(match.path);
        return<Home />;
    }
    const AppUsers      =({match})=>{
        setRuta(match.path);
        return<Users />;
    }
    const AppLogin      =({match})=>{
        setRuta(match.path);
        return<Login />;
    }
    const AppPageError  =({match})=>{
        setRuta("/PageError"); 
        return<PageError />;
    }

    return(<App>
        <Switch>
            <Route exact path = "/" component = {AppHome} /> 
            < Route exact path = "/users" component = {AppUsers} /> 
            <Route  exact path="/login"  component={AppLogin}/>
            <Route  component = {AppPageError}/>
        </Switch>
    </App>)
}

export default AppRouters;