import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap'; // Agregué Container
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logoUniversal.png';
import logoReact from '../assets/react.svg'; 

function Header() {
  const navigate = useNavigate();

  const [fotoPerfil, setFotoPerfil] = useState(logoReact);

  const handleInicioClick = () => {
    const role = localStorage.getItem('rol');
    if (role === 'admin') {
      navigate('/inicio');
    } else {
      navigate('/inicioSocio');
    }
  };

  const handleClick = () => {
    const role = localStorage.getItem('rol');
    if (role === 'admin') { 
      navigate('/versocios');
    } else {
      navigate('/contacto');
    }
  }

  const getRespuesta = () => {
    const role = localStorage.getItem('rol');
    return role === 'admin' ? "Ver socios" : "Contacto";
  }

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol'); 
    navigate('/');
  };

  const actualizarFoto = () => {
    const usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      const fotoPath = usuario?.socio?.fotoCarnet;
      if (fotoPath) {
        setFotoPerfil(`http://localhost:3000${fotoPath}`);
      } else {
        setFotoPerfil(logoReact);
      }
    } else {
      // Si no hay usuario, se pone el logo por defecto
      setFotoPerfil(logoReact);
    }
  };

  useEffect(() => {
    actualizarFoto();
    window.addEventListener('profileUpdated', actualizarFoto);
    return () => {
      window.removeEventListener('profileUpdated', actualizarFoto);
    };
  }, []);

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
            <Nav.Link as="span" onClick={handleInicioClick} style={{ cursor: 'pointer' }}>
              Inicio
            </Nav.Link>
            <Nav.Link as="span" onClick={handleClick}>{getRespuesta()}</Nav.Link>
            <Nav>
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
                <NavDropdown.Item as={Link} to="/socio-edit-form">Modificar Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
