import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const GeneroAdmin = ({generos, setActualizar}) => {
  const MySwal = withReactContent(Swal);
  const url = process.env.REACT_APP_URL;
 
  const newGenero = () => {
      MySwal.fire({
      title: 'Crear Genero',
      html: `<input type="text" id='genre'  class="swal2-input" placeholder="Name">`,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const genre = Swal.getPopup().querySelector('#genre').value;
        if (!genre) {
          Swal.showValidationMessage(`Completar los datos`);
        }
        const dato = {
            genre: document.getElementById('genre').value,
        };
        return dato;
      },
    }).then(async (result) => {
      await axios.post(`${url}/genre`, result.value);
      MySwal.fire('Creado', 'Genero Nuevo', 'success');
      setActualizar(true);
    });
  };

  const borrarUsuario = (genre, id) => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `Eliminar el genero: ${genre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${url}/genre/${id}`);
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
        onClick={() => newGenero()}>
        New Genero
      </Button>
      <div className="row">
        <div className="col">
          <table className="table table-striped mt-3 table-admin">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Genero</th>
                <th scope="col">configuration</th>
              </tr>
            </thead>
            <tbody>
              {generos?.data?.map((genero) => (
                <tr key={genero.id}>
                  <td>{genero.id}</td>
                  <td className="fw-light fs-6 text-center">{genero.genre}</td>
                  <td className="delete-btn">
                    <Button
                      variant="danger"
                      onClick={() => borrarUsuario(genero.genre, genero.id)}>
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

export default GeneroAdmin;
