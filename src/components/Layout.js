// src/components/Layout.js

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import MainContent from './MainContent';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MyModal from './Modal'; // Asegúrate de que la ruta sea correcta
import { Button } from 'react-bootstrap'; // Importa Button de react-bootstrap 

const Layout = () => {

    const { userId } = useParams(); // Captura el userId de la URL
    const [userData, setUserData] = useState(null);
  
    const [user, setUser] = useState(null);
    const [datauser, setDataUser] = useState([]);
    const [funds, setFunds] = useState([]);
    const [fundsAll, setFundsAll] = useState([]);
    const [bitacora, setBitacora] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const [loadingC, setLoadingC] = useState(true);
    const [errorC, setErrorC] = useState("");
    const [datosGenericos, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}users/${userId}`);
        setUser(response.data);
        const responseFunds = await axios.post(`${process.env.REACT_APP_API_URL}funds/getfunds/?user_id=${userId}`);
        if(responseFunds){
            setFunds(responseFunds.data);
        }

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchUser();
    }, [userId]);
  
    if (loading) return <p>Cargando detalles del usuario...</p>;
    if (error) return <p>Error: {error}</p>;
 
/* EVENTOS */

    const handleClose = () => setShowModal(false);
    const handleShow = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const getHistorial = async () => {
        setLoadingC(true);
        setErrorC(""); // Resetear error antes de hacer la consulta
        try {
           
            const responseBitacora = await axios.post(`${process.env.REACT_APP_API_URL}funds/gettraza/?user_id=${userId}`);
            if(responseBitacora){
                 setBitacora(responseBitacora.data);
                 setFundsAll([]);
                 setFunds([]);
                 setDataUser([]);
            } 
        } catch (err) {
            setErrorC('Error al cargar los datos');
        } finally {
            setLoadingC(false);
        }
    };

    const getFondos = async () => {
        setLoadingC(true);
        setErrorC(""); // Resetear error antes de hacer la consulta
        try {
           
            const todoslosfondos = await axios.post(`${process.env.REACT_APP_API_URL}funds`);
            if(todoslosfondos){
                setFundsAll(todoslosfondos.data);
                setFunds([]);
                setBitacora([]);
                setDataUser([]);
            } 
        } catch (err) {
            setErrorC('Error al cargar los datos');
        } finally {
            setLoadingC(false);
        }
    };

    const getMISFondos = async () => {
        setLoadingC(true);
        setErrorC(""); // Resetear error antes de hacer la consulta
        try {
           
            const responseFunds = await axios.post(`${process.env.REACT_APP_API_URL}funds/getfunds/?user_id=${userId}`);
            if(responseFunds){
                setFunds(responseFunds.data);
                setFundsAll([]);
                setBitacora([]);
                setDataUser([]);
            } 
        } catch (err) {
            setErrorC('Error al cargar los datos');
            handleShow('Error al cargar los datos');
        } finally {
            setLoadingC(false);
        }
    };
    

    const vincularFondo = async (idFondo) => {
        
        console.log(idFondo)
        setLoadingC(true);
        setErrorC(""); // Resetear error antes de hacer la consulta
        try {
           
           
            axios.post(`${process.env.REACT_APP_API_URL}funds/subscribe/?fund_id=${idFondo}&user_id=${user.id}`)
            .then(response => {
                
                handleShow(response.data.message);
            })
            .catch(error => {
                //console.error('Hubo un error al suscribir al fondo:', error.response.data.detail);
                handleShow(error.response.data.detail);
                
            }); 

        } catch (err) {
             handleShow('Error al cargar los datos');
        } finally {
            setLoadingC(false); 
        }
    };

    const desvincularFondo = async (idFondo) => {
        
        
        setLoadingC(true);
        setErrorC(""); // Resetear error antes de hacer la consulta
        try {
           
           
            axios.post(`${process.env.REACT_APP_API_URL}funds/unsubscribe/?fund_id=${idFondo}&user_id=${user.id}`)
            .then(response => {
                
                handleShow(response.data.message);
                getMISFondos();
            })
            .catch(error => {
                //console.error('Hubo un error al suscribir al fondo:', error.response.data.detail);
                handleShow(error.response.data.detail);
                
            }); 

        } catch (err) {
             handleShow('Error al cargar los datos');
        } finally {
            setLoadingC(false); 
        }
    };
    


    const misDatos = async (idFondo) => {
        
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}users/${userId}`);
            setDataUser(response.data);
            setFunds([]);
            setFundsAll([]);
            setBitacora([]);
    
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
    };
    

    
    return (
        <body class="with-welcome-text">
     
        {/* Archivos CSS  */}
            <link rel="stylesheet" href="/assets/css/style.css" />
            <link rel="stylesheet" href="assets/vendors/feather/feather.css"/>
            <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css"/>
            <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css"/>
            <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="assets/vendors/typicons/typicons.css"/>
            <link rel="stylesheet" href="assets/vendors/simple-line-icons/css/simple-line-icons.css"/>
            <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css"/>
            <link rel="stylesheet" href="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css"/>
            
            {/* Plugin css for this page */}
            <link rel="stylesheet" href="assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css"/>
            <link rel="stylesheet" type="text/css" href="assets/js/select.dataTables.min.css"/>
            {/* End plugin css for this page */}
            {/* inject:css */}
            <link rel="stylesheet" href="assets/css/style.css"/>
            {/* endinject */}
            <link rel="shortcut icon" href="assets/images/favicon.png" />
        <header>
            {/* Agrega tu navbar o encabezado aquí */}
            <h1>Investment Funds App</h1>
        </header>

        
        
        <div class="container-scroller">
        
        {/* partial:partials/_navbar.html */}
          
            <Header user={user}  />
            
            <MyModal show={showModal} handleClose={handleClose} content={modalContent} />
   

        {/* partial */}
        <div class="container-fluid page-body-wrapper">
            {/* partial:partials/_sidebar.html */}
            
            <Menu getFondos={getFondos} getMISFondos={getMISFondos} getHistorial={getHistorial} misDatos={misDatos}/>
    

            {/* partial */}
        
            <MainContent fundsAll={fundsAll}  loadingC={loadingC} vincularFondo={vincularFondo} funds={funds} desvincularFondo={desvincularFondo} bitacora={bitacora} datauser={datauser}/>

            {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
        {/* plugins:js */}
        <script src="assets/vendors/js/vendor.bundle.base.js"></script>
        <script src="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
        {/* endinject */}
        {/* Plugin js for this page */}
        <script src="assets/vendors/chart.js/chart.umd.js"></script>
        <script src="assets/vendors/progressbar.js/progressbar.min.js"></script>
        {/* End plugin js for this page */}
        {/* inject:js */}
        <script src="assets/js/off-canvas.js"></script>
        <script src="assets/js/template.js"></script>
        <script src="assets/js/settings.js"></script>
        <script src="assets/js/hoverable-collapse.js"></script>
        <script src="assets/js/todolist.js"></script>
        {/* endinject */}
        {/* Custom js for this page*/}
        <script src="assets/js/jquery.cookie.js" type="text/javascript"></script>
        <script src="assets/js/dashboard.js"></script>
        {/* <script src="assets/js/Chart.roundedBarCharts.js"></script> */}
        {/* End custom js for this page*/}
    
    





        {/*Scripts */}
        
        </body>
    );
};

export default Layout;
