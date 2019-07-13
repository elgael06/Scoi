import React, { useState } from "react";
import { Link } from "react-router-dom";

import Banda from './Banda';
import Menu from './Menu';
import menus from '../../../manejadores/menus';
const Sidebar =()=>{

    return (<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Banda/>
            <hr class="sidebar-divider my-0" />
             <li class="nav-item active">
                <Link class="nav-link" to="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
            </li>
            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                Menus
            </div>
            {
                menus.map(menu=><Menu menu={menu} />)
            }           
          <hr class="sidebar-divider d-none d-md-block" />

        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>);
}


export default Sidebar;