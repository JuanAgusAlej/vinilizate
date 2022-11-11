import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DiscoAdmin from '../../components/DiscoAdmin/DiscoAdmin';
import GeneroAdmin from '../../components/GeneroAdmin/GeneroAdmin';
import UsersAdmin from '../../components/UsersAdmin/UsersAdmin';

// import { deleteUsuario, getUsuario } from "../helpers/usuario";

import './pageAdmin.css';
// import "../style/admin.css";
const Admin = () => {
  axios.defaults.withCredentials = true;
    const url = process.env.REACT_APP_URL;
    const navigate = useNavigate()
  const [configUser, setConfigUser] = useState('admin');
  const [actualizar, setActualizar] = useState(false);
  const [urlUser, seturlUser] = useState();
  const { user } = useSelector((state) => state);
  useEffect(() => {
      if (!user || user.role !== 'admin') {
         navigate('/');
      }
      updateDatos(configUser);
      setActualizar(false);
    }, [configUser, actualizar]);
    
  const updateDatos = async (busqueda) => {
    try {
      const res = await axios(`${url}/${busqueda}`, {
        withCredentials: true,
      });
      seturlUser(res);
      console.log(res);
    } catch (error) {}
  };

  return (
    <div className="container admin-container shadow-lg my-5">
      <div className="row my-3 mt-2">
        <Button
          className="col-1"
          onClick={() => {
            setConfigUser('admin');
          }}>
          User
        </Button>
        <Button
          className="col-1"
          onClick={() => {
            setConfigUser('products');
          }}>
          Discos
        </Button>
        <Button
          className="col-1"
          onClick={() => {
            setConfigUser('genre');
          }}>
          Genero
        </Button>
      </div>
      {configUser === 'admin' ? (
        <UsersAdmin urlUser={urlUser} setActualizar={setActualizar} />
      ) : (
        <></>
      )}
      {configUser === 'genre' ? (
        <GeneroAdmin generos={urlUser} setActualizar={setActualizar} />
      ) : (
        <></>
      )}
      {configUser === 'products' ? (
        <DiscoAdmin discos={urlUser} setActualizar={setActualizar} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Admin;
