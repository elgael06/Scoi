import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu =({menu})=>{

    return(<li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target={`#${menu.id}`} aria-expanded="true" aria-controls={menu.id}>
          <i class={menu.icon}></i>
          <span>{menu.title}</span>
        </a>
        <div id={menu.id} class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">{menu.subtitle}:</h6>
            {
                menu.urls.map(e=><Url name={e.name} url={e.url} />)
            }
          </div>
        </div>
    </li>)
}

const Url=({ name,url})=>{
return <Link class="collapse-item" to={url}>{name}</Link>
}

export default Menu;