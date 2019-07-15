import React, { useState } from "react";

import Modal from '../../Global/Modal';

const imagenDefault = "https://www.marketingmuses.com/wp-content/uploads/2018/01/invis-user.png";

const Agregar =({estatus,cerrar,agregar})=>{
    const [imagen,setImagen] = useState(imagenDefault)
    const [alias,setAlias]=useState('');
    const [nombre,setNombre] = useState('');

    const evCerrar=()=>{
        cerrar();
        setImagen(imagenDefault);
        setAlias("");
        setNombre("");
    }
    const evAgregar=()=>{
        alias && nombre ?( function(){
            agregar({imagen,alias,nombre});
            evCerrar();
        }()) : alert("Faltan Parametros !!!");
    }

    return estatus ? (
       <Modal cerrar={evCerrar} agregar={evAgregar} titulo={'Agregar Usuario.'} >
           <div class="row">
                <div class="col-sm-4" name="imagen"  style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
                    <img height="80" class="rounded" src={imagen} alt="Imagen Usuario." title="Imagen Usuario." />
                </div>
                <div class="col-sm-8">
                    <label class="btn btn-outline-info btn-block" style={{float:"right",marginTop:"30px"}}>Seleccionar Imagen.</label>
                </div>
                <div class="col-sm-8">
                    <label>Alias</label>
                    <input class="form-control" value={alias} placeholder="Agregar Alias..." onChange={e=>setAlias(e.target.value)} />
                </div>
                <div class="col-sm-4">
                    <i class="btn btn-outline-secondary btn-block" style={{float:"right",marginTop:"30px"}}>Comprobar Alias.</i>
                </div>
                <div class="col-sm-12">
                    <label>Nombre</label>
                    <input class="form-control" value={nombre} placeholder="Agregar Nombre..." onChange={e=>setNombre(e.target.value)} />
                </div>
           </div>
       </Modal> 
    ) :null
}


export default Agregar;