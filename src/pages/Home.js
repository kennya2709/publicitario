//Esta es la pagina principal
//Importaciones de la Navbar y estilos

import React from 'react'
import BarraSuperior from '../Components/BarraSuperior'
import Contenido from '../Components/Contenido'
import Example from '../Components/Example';//Importacion de carrusel
import Footer from '../Components/Footer'
//Declaración de funciones
function Home() {
  return (
    // Etiqueta anomina
    <>
    {/* Exportaciones de archivos, sobre la navbar y el contenido */}
    <BarraSuperior/>
    
    <Example/>
    <Contenido/>
    <Footer/>
          </>
  )
}
 
// Exportaciones de la pagina actual
export default Home