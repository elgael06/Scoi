import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alertas from './Alerts';
import Mensajes from './Mensajes';
import Usuario from './Usuario';

const Header = ({ usuario }) => {
  return (
    <nav  class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
       <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <ul class="navbar-nav ml-auto">
            <Alertas />
			<Mensajes />
			<Usuario usuario={usuario} />
          </ul>
    </nav>
  );
};

export default Header;
