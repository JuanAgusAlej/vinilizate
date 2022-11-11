import axios from 'axios';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categorySelected } from '../../app/category';
import { userLogin } from '../../app/user';
import useFetch from '../../hooks/useFetch';
import './navBar.css';
import Cookies from 'universal-cookie';

function BasicExample() {
  const urlApi = process.env.REACT_APP_URL;
  const { user } = useSelector((state) => state);
  const cookies = new Cookies();
  const url = process.env.REACT_APP_URL;
  const categorias = useFetch(`${url}/genre/`);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const res = await axios(`${urlApi}/users/me`, {
        withCredentials: true,
      });
      if (res.data) {
        dispatch(userLogin(res.data));
      }
    } catch (error) {}
  };

  useEffect(() => {
    login();
  },[]);

  const handleClik = (id) => {
    dispatch(categorySelected(id));
  };

  const logOut = () => {
    cookies.remove('token');
    dispatch(userLogin(''));
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Nav defaultActiveKey="/" className="flex-column navMarging">
        <Nav.Item className="boxItems">
          <Nav.Link className="hovverLink">
            <Link to={'/'}>
              <i className="bi bi-house"> Home</i>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={'/order'}>
              <i className="bi bi-receipt"></i> Ordenes
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={'/wish'}>
              <i className="bi bi-heart"></i> Lista de deseo
            </Link>
          </Nav.Link>
          <Nav.Link>
            {user ? (
              <i className="bi bi-power" onClick={() => logOut()}>
                {' '}
                Cerrar Seccion
              </i>
            ) : (
              <Link to={'/login'}>
                <i className="bi bi-key"> Iniciar Seccion</i>
              </Link>
            )}
          </Nav.Link>
          {user.role === 'admin' ? (
            <Nav.Link>
              <Link to={'/admin'}>
                <i className="bi bi-person-rolodex"> Administrar</i>
              </Link>
            </Nav.Link>
          ) : (
            <></>
          )}
        </Nav.Item>
        <Nav.Item className="boxItems nav-item">
          Categoria
          <Nav.Item className="categoryBox">
            {categorias.data?.map((categoria, i) => (
              <Nav.Link key={i}>
                <Link
                  to={`/category/${categoria.genre}`}
                  onClick={() => handleClik(categoria.id)}>
                  <i className="bi bi-vinyl"> {categoria.genre}</i>
                </Link>
              </Nav.Link>
            ))}
          </Nav.Item>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default BasicExample;
