import React from "react";

const Modal =({titulo, cerrar,agregar,children})=>{

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
                    <label>{titulo}</label>
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

export default Modal;
