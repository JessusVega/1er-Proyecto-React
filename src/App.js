
import './App.css';
<<<<<<< HEAD

=======
import Header from './Components/Header';
import Slider from './Components/slider';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
/*import SeccionPruebas from './Components/SeccionPruebas';
import Peliculas from './Components/Peliculas';*/
import Router from './Router';

function App() {
  var boton= "ASASD"
  return (
    <div className="App">
      
<<<<<<< HEAD
=======
      <header className="App-header">
      <Header/>  
      </header>
      <Slider
      title= "Habiaunavezunbarco chiquito"
      btn={boton}
      /> 
      <div className="center">

>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
        <Router></Router>
        {/*
           <Peliculas></Peliculas>
        */ }
      
<<<<<<< HEAD
      </div>
   
=======
        <Sidebar/>
      </div>

      <div className="clearfix"></div>
      <Footer/>
    </div>
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
  );
}

export default App;
