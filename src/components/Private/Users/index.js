import React, { useState } from "react";

import Usuarios from './Usuarios';
import Agregar from './Agregar';
import BotonAgregar from './BotonAgregar';

const Users = () => {
  const [usuarios,setUsuarios] = useState([]);
  const [agregarModal,setAgregarModal] = useState(false);

  const agregar_usuario=(usuario)=>{
    let lista = usuarios.map(e=>e) || [];
    console.log("usuario=>",usuario)
    lista.push(usuario)
    setUsuarios(lista);
  }

  return (
    <div>
      <label>Lista De Usuarios</label>
      <hr />
      <Usuarios 
        usuarios={usuarios}
      />
      <Agregar  
        estatus={agregarModal} 
        agregar={agregar_usuario}
        cerrar={()=>setAgregarModal(false)}
      />
      <BotonAgregar 
        evento={()=>setAgregarModal(true)} 
      />
    </div>
  );
};

export default Users;
