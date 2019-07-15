import React, { useState } from "react"; //Importamos react

import Header from "./Global/Header";
import Sidebar from './Global/Sidebar'

import usuario from '../manejadores/usuario';
import menus from '../manejadores/menus';

const App = ({children}) => {
  return (
    <div id="wrapper">
      <Sidebar menus={menus}/>
    <div id="content-wrapper" class="d-flex flex-column">
      <Header usuario={usuario} />
      <div id="content">
        <div class="container-fluid" style={{minHeight:"967px"}}>
        {children}
      </div>
      <footer class="sticky-footer bg-white" style={{display:"block"}}>
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Aplicacion<sup>2</sup> 2019 <strong>By elgael</strong></span>
          </div>
        </div>
      </footer>
    </div>
    </div>
    </div>
  );
};

export default App;
