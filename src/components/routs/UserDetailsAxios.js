// src/components/UserDetailsAxios.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MyModal from '../Modal';
const UserDetailsAxios = () => {
   
  const { userId } = useParams(); // Captura el userId de la URL
  const [userData, setUserData] = useState(null);

  const [users, setUser] = useState(null);
  const [funds, setFunds] = useState(null);
  const [bitacora, setBitacora] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  
  const handleClose = () => setShowModal(false);
  const handleShow = (content) => {
      setModalContent(content);
      setShowModal(true);
  };
  const dataFunds = [
    {
      "nombre": "FPV_BTG_PACTUAL_RECAUDADORA",
      "valor": 75000,
      "categoria": "FPV"
    },
    {
      "nombre": "FPV_BTG_PACTUAL_ECOPETROL",
      "valor": 125000,
      "categoria": "FPV"
    },
    {
      "nombre": "DEUDAPRIVADA",
      "valor": 50000,
      "categoria": "FIC"
    },
    {
      "nombre": "FDO-ACCIONES",
      "valor": 250000,
      "categoria": "FIC"
    },
    {
      "nombre": "FPV_BTG_PACTUAL_DINAMICA",
      "valor": 100000,
      "categoria": "FPV"
    }
  ];

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}users/`);
      setUser(response.data);
 
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const precargaFOndos = async () => {
         
    try { 
      let dataFundsT=dataFunds.length
      for (let i = 0; i < dataFundsT; i++) {       
        axios.post(`${process.env.REACT_APP_API_URL}funds/`,{
          "nombre":  dataFunds[i].nombre,
          "valor": dataFunds[i].valor,
          "categoria": dataFunds[i].categoria
        })
        .then(response => {
            
            
        })
        .catch(error => {
            console.error('Hubo un error al suscribir al fondo:', dataFunds[i].nombre);
             
        });
        
      } 
    } catch (err) {
         handleShow('Error al cargar los datos');
    } finally {
      handleShow('Se han cargado los fondos de inversión exitosamente');
    }
};







  if (loading) return <p>Cargando detalles del usuario...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
     
      <button onClick={precargaFOndos} className="btn btn-primary">
          Haz clic aquí para Precargar Fondos
      </button>
      <MyModal show={showModal} handleClose={handleClose} content={modalContent} />
      {users.length ? (
        <div>
           {users.map((datauser, index) => (
              <div>
                  


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
                             <p>
                             <a class="nav-link" href={`/${datauser.idusuario}`} style={{"cursor":"pointer","border":"1px","color":"blue"}}>
                                   
                                  Ir a portal
                              </a>
                             </p>
                        </div>
                    </div>


                </div>

              </div>
           ))}

        </div>
      ) : (
        <p>Por favor agregar usuario desde el swagger.</p>
      )}
    </div>
  );
};

export default UserDetailsAxios;
