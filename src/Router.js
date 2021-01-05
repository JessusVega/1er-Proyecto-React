import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import SeccionPruebas from './Components/SeccionPruebas';
import Peliculas from './Components/Peliculas';
import Sidebar from './Components/Sidebar';
import Error from './Components/Error';
import Slider from './Components/slider';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Home';
import Home from './Components/Blog';
import Formulario from './Components/Formulario';
import Search from './Components/Search';
import Article from './Components/article';
import CreateArticle from './Components/createArticle';
import EditArticle from './Components/editArticle';


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
                <Route exact path="/blog/articulo/:id" component={Article}></Route>

                <Route exact path="/blog/crear" component={CreateArticle}></Route>
                <Route exact path="/blog/editar/:id" component={EditArticle}></Route>
                
                <Route exact path="/blog/busqueda/:search" component={Search}></Route>
                <Route exact path="/redirect/:search" render={
                    (props)=>{
                        var search = props.match.params.search;
                        return(<Redirect to ={
                            '/blog/busqueda/'+search
                        }></Redirect>)
                        
                    }
                }></Route>


                <Route exact path="/formulario" component={Formulario}></Route>
                <Route exact path="/peliculas" component={Peliculas}></Route>


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