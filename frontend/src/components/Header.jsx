import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logoUniversal.png';
import logoUniversal from '../assets/logoUniversal.png'
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const navigate = useNavigate();
  const {  isAuthenticated, isAdmin, isSocio, isAdministrativo, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

const fotoPerfil = user?.fotoUrl || defaultProfilePic; // Usa la foto del usuario o una por defecto

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
            {isAdmin ? (
              <>
                <Nav.Link as={RouterLink} to="/inicio">Inicio</Nav.Link>
                <Nav.Link as={RouterLink} to="/versocios">Ver socios</Nav.Link>
              </>
            ) : isSocio ? (
              <>
                <Nav.Link as={RouterLink} to="/inicioSocio">Inicio</Nav.Link>
                <Nav.Link as={RouterLink} to="/contacto">Contacto</Nav.Link>
              </>
            ): isAdministrativo ? (
              <>
                <Nav.Link as={RouterLink} to="/inicio">Inicio</Nav.Link>
                <Nav.Link as={RouterLink} to="/versocios">Ver socios</Nav.Link>
              </>
            ) : null}

            <Nav.Link as={RouterLink} to="/perfil">Ver mi perfil</Nav.Link>
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
              </>
            ) : (
              <>
                {navigate('/')}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
