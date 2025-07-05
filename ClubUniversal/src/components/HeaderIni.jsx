import '../styles/Header.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/logoUniversal.png';


function Header() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Image src={logo} height="70" />
          <span>Asociación Cultural y Deportiva Universal</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto gap-4 align-items-center">
            <Nav.Link href="/">Iniciar sesión</Nav.Link>
            <Nav.Link href="/registro">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;