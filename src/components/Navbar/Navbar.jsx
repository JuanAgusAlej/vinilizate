import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navBar.css';

function BasicExample() {
  const login = false;
  const admin = true;
  const categorias = [
    'Rock',
    'Rock',
    'ghfgh',
    'Rock',
    'Rocfgfghk',
    'Rock',
    'Rock',
    'Rock',
  ];

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
            {categorias?.map((categoria, i) => (
              <Nav.Link key={i}>
                <Link to={'/category/:id'}>
                  <i class="bi bi-vinyl"> {categoria}</i>
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
