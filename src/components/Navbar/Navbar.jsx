import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { categorySelected } from '../../app/category';
import useFetch from '../../hooks/useFetch';
import './navBar.css';

function BasicExample() {
  const login = false;
  const admin = true;
  const url = process.env.REACT_APP_URL;
  const categorias = useFetch(`${url}/genre/`);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)
  const handleClik = (id) => {
    dispatch(categorySelected(id));
  };

  console.log(categorias);
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Nav defaultActiveKey="/" className="flex-column navMarging">
        <Nav.Item className="boxItems">
          <Nav.Link className="hovverLink">
            <Link to={'/'}>
              <i class="bi bi-house"> Home</i>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={'/order'}>
              <i class="bi bi-receipt"></i> Ordenes
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={'/wish'}>
              <i class="bi bi-heart"></i> Lista de deseo
            </Link>
          </Nav.Link>
          <Nav.Link>
            {login ? (
              <i class="bi bi-power"> Cerrar Seccion</i>
            ) : (
              <Link to={'/login'}>
                <i class="bi bi-key"> Iniciar Seccion</i>
              </Link>
            )}
          </Nav.Link>
          {admin ? (
            <Nav.Link>
              <Link to={'/admin'}>
                <i class="bi bi-person-rolodex"> Administrar</i>
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
                  onClick={()=>handleClik(categoria.id)}>
                  <i class="bi bi-vinyl"> {categoria.genre}</i>
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
