import React, { useState } from "react";

const BotonAgregar=({evento})=>{

    return(<span  style={{display:"block",position:"fixed", bottom:"10px",right:"10px"}}>
        <i class="btn btn-success btn-circle" style={{float:"right"}} 
            onClick={evento}>
                <span class="fas fa-plus"></span>
            </i>
    </span>);
}

export default BotonAgregar;