// src/components/UserDetailsAxios.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetailsAxios = () => {
   
  const { userId } = useParams(); // Captura el userId de la URL
  const [userData, setUserData] = useState(null);

  const [users, setUser] = useState(null);
  const [funds, setFunds] = useState(null);
  const [bitacora, setBitacora] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Cargando detalles del usuario...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Seleccione un usuario para iniciar</h2>
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
                             <a class="nav-link" href={`/${datauser.idusuario}`} style={{"cursor":"pointer","border":"1px"}}>
                                  
                            
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
