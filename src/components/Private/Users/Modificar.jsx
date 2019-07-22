import React, { useState } from "react";

import Modal from '../../Global/Modal';

const  Modificar =({usuario,estatus,cerrar,guardar})=>{
    const {id,alias,nombre,imagen} = usuario;

    const [alias_n,setAlias] = useState(alias);
    const [nombre_n,setNombre] = useState(nombre);
    const [imagen_n,setImagen] = useState(imagen);

    const ev_cerrar=()=>{
        cerrar();
        setImagen("");
        setAlias("");
        setNombre("");
    }

    const ev_guardar=()=>{
        alias && nombre ?( function(){
            guardar({
                id:id,
                imagen: imagen_n || imagen ,
                alias: alias_n || alias,
                nombre: nombre_n || nombre
            });
            ev_cerrar();
        }()) : alert("Faltan Parametros !!!");
    }

    const seleccionar_imagen=()=>{
        console.log("Seleccion Imagen");
        document.querySelector("#select-image").click();
    }

    const imgToBase64=(event)=>{
        let input = event.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImagen( e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    return  estatus ?  ( <Modal cerrar={ev_cerrar} agregar={ev_guardar} titulo={'Modificar Usuario.'} >
    <div class="row">
         <div class="col-sm-4" name="imagen"  style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
             <img height="80" class="rounded" src={imagen_n || imagen} alt="Imagen Usuario." title="Imagen Usuario." />
         </div>
         <div class="col-sm-8">
             <input type="file" id="select-image" onChange={imgToBase64} accept="image/png,image/jpeg" alt="..." style={{display:"none"}} />
             <label class="btn btn-outline-info btn-block" onClick={seleccionar_imagen} style={{float:"right",marginTop:"30px"}}>Seleccionar Imagen.</label>
         </div>
         <div class="col-sm-8">
             <label>Alias</label>
             <input class="form-control" value={alias_n || alias} placeholder="Modificar Alias..." onChange={e=>setAlias(e.target.value)} />
         </div>
         <div class="col-sm-4">
             <i class="btn btn-outline-secondary btn-block" style={{float:"right",marginTop:"30px"}}>Comprobar Alias.</i>
         </div>
         <div class="col-sm-12">
             <label>Nombre</label>
             <input class="form-control" value={nombre_n || nombre} placeholder="Modificar Nombre..." onChange={e=>setNombre(e.target.value)} />
         </div>
    </div>
</Modal> ) : null;
}

export default Modificar;