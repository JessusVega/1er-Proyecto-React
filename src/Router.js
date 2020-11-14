import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './Components/SeccionPruebas';
import Peliculas from './Components/Peliculas';
import Sidebar from './Components/Sidebar';
import Error from './Components/Error';
import Slider from './Components/slider';

class Router extends Component{

render(){

    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Peliculas}></Route>
                <Route exact path="/index.html" component={Peliculas}></Route>
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
        </BrowserRouter>
    );
}
}
export default Router;