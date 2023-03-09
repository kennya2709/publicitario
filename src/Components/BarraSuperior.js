//Importaciones de react y bootstrap
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default class BarraSuperior extends Component {
  render() {
    return (
      <div>
        {/* Colores de la barra */}
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* Importación de la imagen y sus estilos */}
           
            {/* Texto ubicado en el navbar */}
            <Navbar.Brand className="center">     Asegura tu aventura</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Deposite $10.00
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />

      </div>
    )
  }
}
