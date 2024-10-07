// src/components/MainContentFunds.js
import React from 'react';

const MainContentFunds = ({fundsAll,loadingC,vincularFondo,funds,desvincularFondo,bitacora,datauser}) => {
  return (
<div id="contenedor">

    
    {fundsAll.length > 0  ? ( 
        <div><h4>/Fondos disponibles</h4>
            {fundsAll.map((item, index) => (
                <div class="row"> 
                <div class="col-lg-8 d-flex flex-column">
                        <div class="row flex-grow">
                        <div class="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div class="card card-rounded">
                            <div class="card-body">
                                <div class="d-sm-flex justify-content-between align-items-start">
                                <div>
                                    <h4 class="card-title card-title-dash">{item.nombre}</h4>
                                    <h5 class="card-subtitle card-subtitle-dash">Categoria: {item.categoria} </h5>
                                </div>
                                <div id="performanceLine-legend"></div>
                                </div>
                                <div class="chartjs-wrapper mt-4">
                                <canvas id="performanceLine" width=""></canvas>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex flex-column">
                        <div class="row flex-grow">
                        <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div class="card bg-primary card-rounded">
                            <div class="card-body pb-0"  onClick={(e)=>vincularFondo(item.idfondo)} style={{"cursor":"pointer"}}>
                                 
                                <h4 class="card-title btn btn-success card-title-dash text-white mb-4">Suscribir a este fondo</h4>
                                <div class="row">
                                <div class="col-sm-4">
                                    <p class="status-summary-ight-white mb-1">Valor Inversión</p>
                                    <h2 class="text-info">$ {item.valor}</h2>
                                </div>
                                <div class="col-sm-8">
                                    <div class="status-summary-chart-wrapper pb-4">
                                    <canvas id="status-summary"></canvas>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
 
                </div>
            ))}
        </div>
    ) : (
        !loadingC && <p> </p>
    )}

    {funds.length > 0 ? ( 
        <div><h4>/Mis Fondos</h4>
            {funds.map((item, index) => (
                <div class="row"> 
                <div class="col-lg-8 d-flex flex-column">
                        <div class="row flex-grow">
                        <div class="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div class="card card-rounded">
                            <div class="card-body">
                                <div class="d-sm-flex justify-content-between align-items-start">
                                <div>
                                    <h4 class="card-title card-title-dash">{item.nombre}</h4>
                                    <h5 class="card-subtitle card-subtitle-dash">Categoría:{item.categoria}</h5>
                                </div>
                                <div id="performanceLine-legend"></div>
                                </div>
                                <div class="chartjs-wrapper mt-4">
                                <canvas id="performanceLine" width=""></canvas>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex flex-column">
                        <div class="row flex-grow">
                        <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div class="card bg-success card-rounded">
                            <div class="card-body pb-0"  onClick={(e)=>desvincularFondo(item.idfondo)} style={{"cursor":"pointer"}}>
                                 
                                <h4 class="card-title card-title-dash  btn btn-primary text-white mb-4">Retirarse de este Fondo</h4>
                                <div class="row">
                                <div class="col-sm-4">
                                    <p class="status-summary-ight-white mb-1">Valor Inversión</p>
                                    <h2 class="text-primary">$ {item.valor}</h2>
                                </div>
                                <div class="col-sm-8">
                                    <div class="status-summary-chart-wrapper pb-4">
                                    <canvas id="status-summary"></canvas>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
 
                </div>
            ))}
        </div>
    ) : (
        !loadingC && <p> </p>
    )}



{bitacora.length > 0 ? ( 
        <div>/Historial de Eventos
            {bitacora.map((item, index) => (
                <div class="row"> 
                    <div class="col-lg-12 d-flex flex-column">
                        <div class="row flex-grow">
                            <div class="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                <div class="card card-rounded">
                                <div class="card-body">
                                    <div class="d-sm-flex justify-content-between align-items-start">
                                        <div>
                                            <h4 class="card-title card-title-dash">Evento: {item.accion}</h4>
                                            <h5 class="card-subtitle card-subtitle-dash"><b>Evento: </b>{item.accion} <b>|</b> <b>Tipo:</b>{item.tipo}  <b>|</b>   <b>Fecha del evento:</b> {item.fecha}  <b>|</b>   <b>Fondo:</b>  {item.fund.nombre}  </h5>
                                        </div>
                                        <div id="performanceLine-legend"></div>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    ) : (
        !loadingC && <p> </p>
    )}


{ typeof datauser.nombres!="undefined" ? ( 
         <div>/Mis datos
         {datauser!=null ? (   
            
            
            
                <div class="row"> 
                    


                    <div className="card mt-6" style={{ width: '18rem' }}>
                        <img
                            src="https://via.placeholder.com/100"
                            className="card-img-top rounded-circle mx-auto mt-3"
                            alt="Foto de Perfil"
                            style={{ width: '100px', height: '100px' }}
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">{datauser.nombres}</h5>
                            <p className="card-text">ID: {datauser.identificacion}</p> 
                            <p className="card-text">Correo: {datauser.email}</p>
                            <p className="card-text">Saldo base: <b> $ {datauser.saldo_base}</b></p>
                             
                        </div>
                    </div>


                </div>
         ):( !loadingC && <p> </p>)
        }
       </div> 
    ) : (
        !loadingC && <p> </p>
    )}



    
    </div>
  );
};

export default MainContentFunds;