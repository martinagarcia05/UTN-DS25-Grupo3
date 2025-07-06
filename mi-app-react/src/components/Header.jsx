import '../styles/Header.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/logoUniversal.png';
import avatar from '../assets/react.svg'; 
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Header() {
  const navigate = useNavigate();

  // Maneja el click en "Inicio"
  const handleInicioClick = () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      navigate('/inicio');
    } else {
      navigate('/inicioSocio');
    }
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Image src={logo} height="70" />
          Asociación Cultural y Deportiva Universal
        </Navbar.Brand>
        <Nav className="ms-auto gap-4 align-items-center">
          <Nav.Link as="span" onClick={handleInicioClick} style={{ cursor: 'pointer' }}>
            Inicio
          </Nav.Link>
          <Nav.Link href="/novedades">Novedades</Nav.Link>
          <Nav.Link href="/cuotas-admin">Cuota</Nav.Link>
          <Nav.Link href="/perfil">Mi perfil</Nav.Link>
          <Image src={avatar} width={35} height={35} roundedCircle />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
