// src/components/Menu.js
import React from 'react';

const Menu = ({getFondos,getMISFondos,getHistorial,misDatos}) => {
     
    return (
<nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            
            <li class="nav-item">
              <a class="nav-link" onClick={getFondos} style={{"cursor":"pointer"}}>
                <i class="menu-icon mdi mdi-floor-plan"></i>
                <span class="menu-title">Apertura de fondos</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" onClick={getMISFondos} style={{"cursor":"pointer"}} >
                <i class="menu-icon mdi mdi-file-document"></i>
                <span class="menu-title">Mis fondos</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" onClick={getHistorial} style={{"cursor":"pointer"}}>
                <i class="menu-icon  mdi mdi-chart-line"></i>
                <span class="menu-title">Historial de eventos</span>
              </a>
            </li> 
            
             
            <li class="nav-item">
              <a class="nav-link"  onClick={misDatos} style={{"cursor":"pointer"}}>
                <i class="menu-icon mdi mdi-account-circle-outline"></i>
                <span class="menu-title">Mis Datos</span>
                
              </a>
              
            </li>
           
            
          </ul>
        </nav>
);
};

export default Menu;