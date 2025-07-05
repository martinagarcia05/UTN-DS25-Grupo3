import '../styles/Header.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/Logo.png';
import avatar from '../assets/react.svg';

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
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
            <Nav.Link href="/cuotas-admin">Cuota</Nav.Link>
            <Nav.Link href="/perfil">Mi perfil</Nav.Link>
            <Image src={avatar} width={35} height={35} roundedCircle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;