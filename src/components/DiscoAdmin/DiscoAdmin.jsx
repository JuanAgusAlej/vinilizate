import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useFetch from '../../hooks/useFetch';

const DiscoAdmin = ({ discos, setActualizar }) => {

  const MySwal = withReactContent(Swal);
  const url = process.env.REACT_APP_URL;
  const generos = useFetch(`${url}/genre`);
  console.log(generos);

  let selecter =
    "<select id='genero' class='swal2-input'> <option value='-1' selected>Elegir Genero</option>";

  const edit = (edit, id) => {
    MySwal.fire({
      title: `Cambiar ${edit}`,
      html: `<input type="text" id=${edit}  class="swal2-input" placeholder="Name">`,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const genre = Swal.getPopup().querySelector(`#${edit}`).value;
        if (!genre) {
          Swal.showValidationMessage(`Completar los datos`);
        }
        const dato = {
          [edit]: document.getElementById(edit).value,
        };
        return dato;
      },
    }).then(async (result) => {
      console.log(result.value);
      if (result.value) {
        await axios
          .put(`${url}/products/${id}`, result.value)
          .then((res) => console.log(res));
        MySwal.fire('Creado', 'Genero Nuevo', 'success');
        setActualizar(true);
      }
    });
  };
  const newDisco = () => {
    generos.data.map((genero) => {
      selecter += `<option value=${genero.id} >${genero.genre}</option>`;
    });
    selecter += '</select>';
    MySwal.fire({
      title: 'Crear Disco',
      html: `<input type="text" id='name'  class="swal2-input" placeholder="Name">
              <input type="text" id='img'  class="swal2-input" placeholder="imgen">
              <input type="number"  id='price'  class="swal2-input" placeholder="Precio">
              <input type="number" id='rating'  class="swal2-input" placeholder="rating">
              <input type="number" id='stock'  class="swal2-input" placeholder="stock">
              ${selecter}
              <input type="text" id='nameArtista'  class="swal2-input" placeholder="Nombre del artista">
              <input type="text" id='lastNameArtista'  class="swal2-input" placeholder="Apellido del artista">
             `,
      focusConfirm: false,
      confirmButtonText: 'Created',
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value;
        const img = Swal.getPopup().querySelector('#img').value;
        const price = Swal.getPopup().querySelector('#price').value;
        const rating = Swal.getPopup().querySelector('#rating').value;
        const stock = Swal.getPopup().querySelector('#stock').value;
        const genero = Swal.getPopup().querySelector('#genero').value;
        const nameArtista = Swal.getPopup().querySelector('#nameArtista').value;
        const lastNameArtista =
          Swal.getPopup().querySelector('#lastNameArtista').value;
        if (
          !name ||
          !img ||
          !price ||
          !rating ||
          !stock ||
          !nameArtista ||
          !lastNameArtista
        ) {
          Swal.showValidationMessage(`Completar los datos`);
        }
        if (price < 0 || stock < 0 || rating < 0) {
          Swal.showValidationMessage(`Los valores no pueden ser negativos`);
        }
        if (rating > 5) {
          Swal.showValidationMessage(`rating no puede ser mayor que 5`);
        }
        const dato = {
          disco: {
            name,
            img,
            price,
            rating,
            stock,
            
            },
          artista: {
            name: nameArtista,
            lastName: lastNameArtista,
            },
            genero,
        };
        return dato;
      },
    }).then(async (result) => {
      const { artista, disco, genero } = result.value;
      try {
          await axios.post(`${url}/artists`, artista).then((res) => {
            console.log(res.data.id)
          axios.post(`${url}/products/${res.data.id}/${genero}`, disco);
        });
      } catch (error) {
        console.error(error);
      }

      MySwal.fire('Creado', 'User Admin', 'success');
      setActualizar(true);
    });
  };

  const borrarUsuario = (name, id) => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: `Eliminar el usuario ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${url}/products/${id}`);
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
              disabled
        onClick={() => newDisco()}>
        New Disco
      </Button>
      <div className="row">
        <div className="col">
          <table className="table table-striped mt-3 table-admin">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Img</th>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">rating</th>
                <th scope="col">stock</th>
              </tr>
            </thead>
            <tbody>
              {discos?.data?.map((disco) => (
                <tr key={disco.id}>
                  <td>{disco.id}</td>
                  <td>
                    <img src={disco.img} className="img-table"></img>
                    <Button
                      variant="link"
                      onClick={() => edit('img', disco.id)}>
                      <i className="bi bi-pencil"></i>
                    </Button>
                  </td>
                  <td>
                    {disco.name}
                    <Button
                      variant="link"
                      onClick={() => edit('name', disco.id)}>
                      <i className="bi bi-pencil"></i>
                    </Button>
                  </td>
                  <td className="fw-light fs-6 text-center">
                    {disco.price}
                    <Button
                      variant="link"
                      onClick={() => edit('price', disco.id)}>
                      <i className="bi bi-pencil"></i>
                    </Button>
                  </td>
                  <td className="fw-light fs-6 text-center">
                    {disco.rating}
                    <Button
                      variant="link"
                      onClick={() => edit('rating', disco.id)}>
                      <i className="bi bi-pencil"></i>
                    </Button>
                  </td>
                  <td className="fw-light fs-6 text-center">
                    {disco.stock}
                    <Button
                      variant="link"
                      onClick={() => edit('stock', disco.id)}>
                      <i className="bi bi-pencil"></i>
                    </Button>
                  </td>
                  <td className="delete-btn">
                    <Button
                      variant="danger"
                      onClick={() => borrarUsuario(disco.name, disco.id)}>
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

export default DiscoAdmin;
