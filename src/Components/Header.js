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

        );
    }
}
export default Header;