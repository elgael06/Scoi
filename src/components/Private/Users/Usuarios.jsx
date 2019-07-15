import React, { useState } from "react";

const Usuarios =({usuarios})=>{

    return(<div class="border-left-primary" style={{height:"550px",padding:"10px",overflow:"auto"}}>
        {
            usuarios.map(e=><Usuario usuario={e} />)
        }
    </div>);
}

const Usuario =({usuario})=><div class="card " style={{marginTop:"10px"}}>
<div class="card-body">
    <div class="row">
            <div name="imagen" class="col-sm-3 bg-secondary rounded" style={{alignItems:"center",display:"flex",marginTop:"10px", alignItems:"center",alignContent:"center",justifyContent:"center"}}>
                <img src={usuario.imagen} alt="usuario" height="90" class="rounded" />
            </div>
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-sm-12">
                        <label>Nombre</label>
                        <i class="form-control">{usuario.nombre}</i>
                    </div>
                    <div class="col-sm-9">
                        <label>Alias</label>
                        <i class="form-control">{usuario.alias}</i>
                    </div>
                    <div class="col-sm-3">
                        <i class="btn btn-primary btn-circle" style={{marginTop:"30px", float:"right"}}>
                            <span class="fas fa-user-cog"></span></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;

export default Usuarios; 