import React, { useState } from "react";
import { Link } from "react-router-dom";
const Banda =()=>{

    return ( <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
    <div class="sidebar-brand-icon rotate-n-15">
      <i class="fas fa-compass"></i>
    </div>
    <div class="sidebar-brand-text mx-3">Aplicacion <sup>2</sup></div>
  </Link>);
}

export default Banda;