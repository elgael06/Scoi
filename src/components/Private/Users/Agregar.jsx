import React, { useState } from "react";

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
       <Modal cerrar={evCerrar} agregar={evAgregar} >
           <div class="row">
                <div class="col-sm-4" name="imagen"  style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
                    <img height="80" class="rounded" src={imagen} alt="Imagen Usuario." title="Imagen Usuario." />
                </div>
                <div class="col-sm-8">
                    <label class="btn btn-outline-info btn-block" style={{float:"right",marginTop:"30px"}}>Seleccionar Imagen.</label>
                </div>
                <div class="col-sm-8">
                    <label>Alias</label>
                    <input class="form-control" value={alias} onChange={e=>setAlias(e.target.value)} />
                </div>
                <div class="col-sm-4">
                    <i class="btn btn-outline-secondary btn-block" style={{float:"right",marginTop:"30px"}}>Comprobar Alias.</i>
                </div>
                <div class="col-sm-12">
                    <label>Nombre</label>
                    <input class="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} />
                </div>
           </div>
       </Modal> 
    ) :null
}

const Modal =({cerrar,agregar,children})=>{

    return (
        <div 
        style={{display:"flex",
            position:"fixed",
            top:"0",
            left:"0",
            right:"0",
            bottom:"0",
            justifyContent:"center",
            alignItems:"center",
            alignContent:"center",
            background:"rgba(194, 214, 214,.5)",
            zIndex:"9999"}}>
            <div class="card animated--grow-in"
             style={{
                maxHeight:"95%",
                width:"100%",
                maxWidth:"750px"}}>
                <div class="card-header">
                    <span style={{float:"right"}} class="text-gray-500" onClick={cerrar}>Cerrar</span>
                    <label>Agregar Usuario.</label>
                </div>
                <dvi class="card-body">
                    {children}
                </dvi>
                <div class="card-footer">
                    <i class="btn btn-success btn-icon-split" onClick={agregar}>
                        <span class="icon text-white-50">
                            <i class="fas fa-save"></i>
                        </span>
                        <span class="text"> Guardar</span>
                    </i>
                    <i class="btn btn-danger btn-icon-split" style={{float:"right"}} onClick={cerrar}>
                        <span class="icon text-white-50">
                            <i class="fas fa-window-close"></i>
                        </span>
                        <span class="text">Cancelar</span>
                    </i>
                </div>
            </div>
        </div>
    );   
}

export default Agregar;