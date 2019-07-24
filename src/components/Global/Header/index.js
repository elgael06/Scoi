import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alertas from './Alerts';
import Mensajes from './Mensajes';
import Usuario from './Usuario';

const Header = ({ usuario ,salir}) => {
  return (
    <nav  class="navbar navbar-expand navbar-dark bg-dark text-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
      </button>
      <ul class="navbar-nav ml-auto text-white">
        <Alertas />
			  <Mensajes />
			  <Usuario usuario={usuario} salir={salir} />
      </ul>
    </nav>
  );
};

export default Header;
