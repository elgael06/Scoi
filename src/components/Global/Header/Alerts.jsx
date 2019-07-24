import React, { useState } from "react";

const Alertas =()=>{

return (<li class="nav-item dropdown no-arrow mx-1">
	<a class="nav-link dropdown-toggle text-white"
		href="#" id="alertsDropdown" 
		role="button" 
		data-toggle="dropdown" 
		aria-haspopup="true" 
		aria-expanded="false">
		<i class="fas fa-bell fa-fw"></i>
		<span class="badge badge-primary badge-counter">0</span>
		</a>
		<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
		<h6 class="dropdown-header">
		Alerts Center
		</h6>
		<a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
	</div>
</li>)
}

export default Alertas;