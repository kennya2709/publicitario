import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Footer =()=>{
    
return(
    
    <Navbar bg="dark" variant="dark">
    

            <Navbar.Text className="center">     © 2023 Copyright: Luckycondoms.com</Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <ion-icon  name="logo-instagram"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
              <Nav.Item>
                {/* Link al login */}
               
              
        <Nav.Link href="/Login">Registrate</Nav.Link>
      </Nav.Item>
              </Navbar.Text>
              
            </Navbar.Collapse>
    </Navbar>
   

)
}

export default Footer