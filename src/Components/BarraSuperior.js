//Importaciones de react y bootstrap
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';

export default class BarraSuperior extends Component {
  render() {
    return (
      <div>
        {/* Colores de la barra */}
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Asegura tu aventura</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.instagram.com/lucky.condoms/">Instagram</Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100091094502118">Facebook</Nav.Link>
            <Nav.Link href="http://172.20.10.2/stop?do=)robojaxSpeed4">Servicio</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
        <br />
        <Outlet/>

      </div>
    )
  }
}
