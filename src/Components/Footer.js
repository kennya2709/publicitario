import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png' //Logo de sico

const Footer =()=>{
    
return(
    
    <Navbar bg="dark" variant="dark">
    
{/* Copyright*/}
            <Navbar.Text className="center">© 2023 Copyright: Luckycondoms.com</Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              
              
              <Nav.Item>
                {/* Importacion de logo */}
                
              
       
      </Nav.Item>
              </Navbar.Text>
              
            </Navbar.Collapse>
    </Navbar>



)
}

export default Footer