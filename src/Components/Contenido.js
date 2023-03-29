//Importaciones
import React from 'react';
import sicolog from './sicolog.png' //Logo de sico
import prudence from './prudence.png' //Logo de prudence
import Button from 'react-bootstrap/Button'; //Botones
import Example from './Example'//Importacion de carrusel
import './style.css'; //Importacion de losestilos
import { Container } from "react-bootstrap";
//Función (Es donde se ubica el contenido)
function Contenido() {
  return (
<Container className="mt-">
 
   
    <div class="container">
              
              <div class="row justify-content-md-center" >
                <div class="col-4"><h4>Misión</h4> <br></br><p>Accesibilidad para comprar preservativos con el propósito de ahorrar tiempo, prevenir enfermedades de transmisión sexual y los embarazos no deseados; Todo esto haciéndolo de manera anónima, esto está dirigido para todo aquel que lo necesite.</p></div>
                <div class="col-4"><h4>Visión</h4><br></br> <p>En un tiempo aproximados de dos años (2025) se pondrá a disposición del público una máquina expendedora de preservativos en las farmacias, universidades y preparatorias.</p></div>
              </div> 
          </div>
    
  
          </Container>
  );

}

//Exportación de la pagina
export default Contenido