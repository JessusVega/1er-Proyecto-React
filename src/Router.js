import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './Components/SeccionPruebas';
import Peliculas from './Components/Peliculas';
import Sidebar from './Components/Sidebar';
import Error from './Components/Error';
import Slider from './Components/slider';
<<<<<<< HEAD
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Home from './Components/Home';
=======
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e

class Router extends Component{

render(){

    return(
        <BrowserRouter>
<<<<<<< HEAD
            <header className="App-header">
                <Header/>  
            </header>
               
        <div className="center">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>

                <Route exact path="/blog" component={Blog}></Route>
=======
            <Switch>

                <Route exact path="/" component={Peliculas}></Route>
                <Route exact path="/index.html" component={Peliculas}></Route>
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
                <Route exact path="/ruta-prueba" component={SeccionPruebas}></Route>
                <Route exact path="/segunda-ruta" component={Sidebar}></Route>
                <Route component={Error}></Route>

                <Route exact path="/asd" render={() => {
                        <React.Fragment>
                            <h2>EXOSQUELETON</h2>
                            <Slider></Slider>
                        </React.Fragment>
                 }}/>
<<<<<<< HEAD
            </Switch>
            </div>
          
      <div className="clearfix"></div>
            <Footer/>
=======


            </Switch>
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
        </BrowserRouter>
    );
}
}
export default Router;