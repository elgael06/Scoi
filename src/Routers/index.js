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

import usuario from '../manejadores/usuario';

const AppRouters =()=>{
    const [ruta,setRuta] = useState("/");
    const [acceso,setAcceso] = useState(false);
    
    console.log(ruta);
    const AppHome=({match})=>{ 
        setRuta(match.path);
        return<Home />;
    }
    const AppUsers=({match})=>{
        setRuta(match.path);
        return<Users />;
    }
    const AppLogin=({match})=>{
        setRuta(match.path);
        return<Login />;
    }
    const AppPageError=()=>{
        setRuta("/PageError"); 
        return<PageError />;
    }

    return acceso ?(<App usuario={usuario}>
        <Switch>
            <Route exact path = "/" component = {AppHome} /> 
            <Route exact path = "/users" component = {AppUsers} />
            <Route  component = {AppPageError}/>
        </Switch>
    </App>) : <Switch>
        <Route component={AppLogin}/>
    </Switch>;
}

export default AppRouters;