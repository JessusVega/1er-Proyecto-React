import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './Components/SeccionPruebas';
import Peliculas from './Components/Peliculas';
import Sidebar from './Components/Sidebar';
import Error from './Components/Error';
import Slider from './Components/slider';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Home from './Components/Home';

class Router extends Component{

render(){

    return(
        <BrowserRouter>
            <header className="App-header">
                <Header/>  
            </header>
               
        <div className="center">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>

                <Route exact path="/blog" component={Blog}></Route>
                <Route exact path="/ruta-prueba" component={SeccionPruebas}></Route>
                <Route exact path="/segunda-ruta" component={Sidebar}></Route>
                <Route component={Error}></Route>

                <Route exact path="/asd" render={() => {
                        <React.Fragment>
                            <h2>EXOSQUELETON</h2>
                            <Slider></Slider>
                        </React.Fragment>
                 }}/>
            </Switch>
            </div>
          
      <div className="clearfix"></div>
            <Footer/>
        </BrowserRouter>
    );
}
}
export default Router;