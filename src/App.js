//Importaciones de estilos y pagina principal
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
 //Funcioón para poder hacer las exportaciones 
function App() {
  return (
    <div className="App">
      {/* //Exportacion de Home */}
      <Home/>
     
    </div>
  );
}


export default App;
