import React, { useState } from "react";

const Mensajes =()=>{

    return (<li class="nav-item dropdown no-arrow mx-1 ">
        <a class="nav-link dropdown-toggle text-white" href="#"
            id="messagesDropdown" 
            role="button" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
        <i class="fas fa-envelope fa-fw"></i>
        <span class="badge badge-primary badge-counter">0</span>
        </a>
        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">
                Message Center
            </h6>
            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
        </div>
  </li>);
}

export default  Mensajes;