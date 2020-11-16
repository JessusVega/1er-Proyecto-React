<<<<<<< HEAD
import React, { Component } from 'react';
import logo from '../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                    </span>
                    </div>


                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog"activeClassName="active"> Blog</NavLink>

                            </li>
                            <li>
                                <NavLink to="/formularios"activeClassName="active">Formulario</NavLink>

                            </li>
                            <li>
                                <NavLink to="/pagina1"activeClassName="active">Pagina1</NavLink>

                            </li>
                            <li>
                                <NavLink to="/pagina2"activeClassName="active">Pagina 2</NavLink>

                            </li>
                        </ul>
                    </nav>


                    <div className="clearfix"></div>
                </div>
            </header>
=======
import React, {Component} from 'react';
import logo from '../assets/images/react.svg';

class Header extends Component{
    render(){
        return(
            <header id="header">
            <div className="center">
               
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>React
                    </span>
                </div>
                
               
                <nav id="menu">
                    <ul>
                        <li>
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="asd">Blog</a>
                        </li>
                        <li>
                            <a href="formulario.html">Formulario</a>
                        </li>
                        <li>
                            <a href="#">Pagina 1</a>
                        </li>
                        <li>
                            <a href="#">Pagina 2</a>
                        </li>                            
                    </ul>
                </nav>

               
                <div className="clearfix"></div>
            </div>
        </header>
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e

        );
    }
}
export default Header;