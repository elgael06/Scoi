import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageError=()=>{
    return(<div class="text-center">
    <div class="error mx-auto" data-text="404">404</div>
    <p class="lead text-gray-800 mb-5">Page Not Found</p>
    <p class="text-gray-500 mb-0 ">Parece que has encontrado un fallo en la  matrix ...</p>
    <Link to="/" class="error mx-auto" style={{fontSize:"20px"}}  data-text=" Regresar"> Regresar </Link>
  </div>);
}
export default PageError;