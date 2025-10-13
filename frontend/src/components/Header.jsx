import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logoUniversal.png';
import logoUniversal from '../assets/logoUniversal.png'

function Header() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
=======

  const [fotoPerfil, setFotoPerfil] = useState(logoUniversal);

  const handleInicioClick = () => {
    const role = localStorage.role;
    if (role === 'ADMIN') {
      navigate('/inicioAdmin');
    } else 
      if (role === 'SOCIO') {
      navigate('/inicioSocio');
    } else
      navigate('/inicio');
  };

  const handleClick = () => {
    const role = localStorage.role;
    if (role === 'ADMIN' || role === 'ADMINISTRATIVO') { 
      navigate('/versocios');
    } else {
      navigate('/contacto');
    }
  };

  const getRespuesta = () => {
    const role = localStorage.role;
    return (role === 'ADMIN' || role === 'ADMINISTRATIVO')
      ? "Ver socios"
      : "Contacto";
  };


>>>>>>> d957568317d3300a56f9769733c88cf9387a31b5
  const handleLogout = () => {
    logout();
    navigate('/');
  };


  return (
    <Navbar className="navbar-custom" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <Image src={logo} height="70" className="me-2" />
          <span className="d-none d-lg-inline">Asociación Cultural y Deportiva Universal</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 align-items-center">
            {isAuthenticated ? (
              <>
            {isAdmin && (
              <>
                <Nav.Link as={RouterLink} to="/inicio">Inicio</Nav.Link>
                <Nav.Link as={RouterLink} to="/versocios">Ver socios</Nav.Link>
              </>
            )}
            {!isAdmin && (
              <>
                <Nav.Link as={RouterLink} to="/inicioSocio">Inicio</Nav.Link>
                <Nav.Link as={RouterLink} to="/contacto">Contacto</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/perfil">Ver mi perfil</Nav.Link>
            <NavDropdown
              title={
                <Image
                  src={fotoPerfil}
                  alt="Perfil"
                  roundedCircle
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item onClick={handleLogout} className="text-danger fw-bold">Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
            </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
