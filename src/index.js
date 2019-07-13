import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import React from "react"; //Importamos react

import AppRouters from './Routers';

ReactDOM.render( 
    <Router>
        < AppRouters / >
    </Router>,
     document.getElementById("app"));