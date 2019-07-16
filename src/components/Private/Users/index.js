import React, { useState } from "react";

import Usuarios from './Usuarios';
import Agregar from './Agregar';
import BotonAgregar from './BotonAgregar';
import Modificar from './Modificar';

const modelo_usuario ={
  id:0,
  imagen:"",
  alias:"",
  nombre:""
};

const Users = ({match}) => {
  const [usuarios,setUsuarios] = useState([]);
  const [agregarModal,setAgregarModal] = useState(false);
  const [modificarModal,setModificarModal] = useState(false);
  const [usuario,setUsuario] = useState(modelo_usuario);
  console.log("Path=>",match.path);
  
  const agregar_usuario=(usuario)=>{
    let lista = usuarios.map(e=>e) || [];
    usuario["id"] = lista.length+1;
    lista.push(usuario)
    setUsuarios(lista);
  }

  const modificar_usuario=(seleccion)=>{
    let lista = usuarios.map(e=>e.id == seleccion.id ? seleccion : e ) || [];
    setUsuarios(lista);
    setUsuario(modelo_usuario);
  }
  const seleccionar_usuario= seleccion =>{
      setUsuario(seleccion);
      setModificarModal(true);
  }

  return (
    <div style={{height:"100%"}}>
      <label>Lista De Usuarios</label>
      <hr />
      <Usuarios 
        usuarios={usuarios}
        modificar={seleccionar_usuario}
      />
      <Agregar  
        estatus={agregarModal} 
        agregar={agregar_usuario}
        cerrar={()=>setAgregarModal(false)}
      />
      <Modificar 
        usuario={usuario}
        estatus={modificarModal}
        cerrar={()=>setModificarModal(false)}
        guardar={modificar_usuario}
      />
      <BotonAgregar 
        evento={()=>setAgregarModal(true)} 
      />
    </div>
  );
};

export default Users;
