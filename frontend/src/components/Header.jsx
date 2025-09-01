import '../styles/Header.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/logoUniversal.png';
import avatar from '../assets/react.svg'; 
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import MiPerfil from '../pages/MiPerfil';
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

function Header() {
  const navigate = useNavigate();

  const handleInicioClick = () => {
<<<<<<< HEAD
    const role = localStorage.getItem('rol');
=======
    const role = localStorage.getItem('role');
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    if (role === 'admin') {
      navigate('/inicio');
    } else {
      navigate('/inicioSocio');
    }
  };

  return (
    <Navbar className="navbar-custom" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <Image src={logo} height="70" className="me-2" />
          <span className="d-none d-lg-inline">Asociación Cultural y Deportiva Universal</span>
        </Navbar.Brand>

        {/* Toggle para móvil */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 align-items-center">
            <Nav.Link as="span" onClick={handleInicioClick} style={{ cursor: 'pointer' }}>
              Inicio
            </Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
            <Nav.Link href="/perfil">Mi perfil</Nav.Link>
            <Image src={avatar} width={35} height={35} roundedCircle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
