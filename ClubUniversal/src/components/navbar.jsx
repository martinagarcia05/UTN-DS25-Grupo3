import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
    <NavbarBootstrap style={{ backgroundColor: '#378F22' }} expand="lg" variant="dark" className="shadow-sm py-3">
      <div className="container-fluid"> 
        <NavbarBootstrap.Brand as={Link} to="/" className="d-flex align-items-center text-white"> 
          <img
            src=''
            alt="Logo Universal"
            className="d-inline-block align-text-top me-2 rounded-full"
            style={{ minWidth: '40px', minHeight: '40px' }}
          />
          <span className="fw-bold text-white text-lg">Asociación Cultural y Deportiva Universal</span>
        </NavbarBootstrap.Brand>

        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">Iniciar sesión</Nav.Link>
            <Nav.Link as={Link} to="/registro" className="text-white">Registrarse</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </div>
    </NavbarBootstrap>
  );
}

export default Navbar;