import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const UsersAdmin = ({ urlUser, setActualizar }) => {
  const MySwal = withReactContent(Swal);
  const url = process.env.REACT_APP_URL;

  const updateUsuario = (email, id) => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `convertir Admin el usuario ${email}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(`${url}/admin/${id}`);
        MySwal.fire('Update!', 'User Admin', 'success');
        setActualizar(true);
      }
    });
  };
  const newAdmin = () => {
    MySwal.fire({
      title: 'Crear Usuario',
      html: `<input type="text" id='name'  class="swal2-input" placeholder="Name">
            <input type="text" id='lastName'  class="swal2-input" placeholder="Lastname">
            <input type="email"  id='email'  class="swal2-input" placeholder="Emails">
            <input type="password" id='password'  class="swal2-input" placeholder="Password">
           `,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value;
        const lastName = Swal.getPopup().querySelector('#lastName').value;
        const email = Swal.getPopup().querySelector('#email').value;
        const password = Swal.getPopup().querySelector('#password').value;
        if (!name || !password || !lastName || !email) {
          Swal.showValidationMessage(`Completar los datos`);
        }

        const dato = {
          name: document.getElementById('name').value,
          lastName: document.getElementById('lastName').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        };
        return dato;
      },
    }).then(async (result) => {
      await axios.post(`${url}/admin/register`, result.value);
      MySwal.fire('Creado', 'User Admin', 'success');
      setActualizar(true);
    });
  };

  const borrarUsuario = (email, id) => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `Eliminar el usuario ${email}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${url}/admin/${id}`);
        MySwal.fire('Deleted!', 'Usuario eliminado', 'success');
        setActualizar(true);
      }
    });
  };

  return (
    <>
      <Button
        className="offset-10"
        variant="success"
        onClick={() => newAdmin()}>
        New Admin
      </Button>
      <div className="row">
        <div className="col">
          <table className="table table-striped mt-3 table-admin">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">configuration</th>
              </tr>
            </thead>
            <tbody>
              {urlUser?.data?.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.name}</td>
                  <td className="fw-light fs-6 text-center">
                    {usuario.lastName}
                  </td>
                  <td className="fw-light fs-6 text-center">{usuario.email}</td>
                  <td className="delete-btn">
                    <Button
                      variant="success"
                      onClick={() => updateUsuario(usuario.email, usuario.id)}>
                      Convertir Admin
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => borrarUsuario(usuario.email, usuario.id)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersAdmin;
