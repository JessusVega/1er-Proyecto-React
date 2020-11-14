
import './App.css';
import Header from './Components/Header';
import Slider from './Components/slider';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
/*import SeccionPruebas from './Components/SeccionPruebas';
import Peliculas from './Components/Peliculas';*/
import Router from './Router';

function App() {
  var boton= "ASASD"
  return (
    <div className="App">
      
      <header className="App-header">
      <Header/>  
      </header>
      <Slider
      title= "Habiaunavezunbarco chiquito"
      btn={boton}
      /> 
      <div className="center">

        <Router></Router>
        {/*
           <Peliculas></Peliculas>
        */ }
      
        <Sidebar/>
      </div>

      <div className="clearfix"></div>
      <Footer/>
    </div>
  );
}

export default App;
