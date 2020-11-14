import React, {Component} from 'react';

class SeccionPruebas extends Component{

    contador =0;

    state={
        contador: 0
    };

    sumar=(e)=>{
        this.setState({
            contador:(this.state.contador+1)
        })
    };

    restar=(e)=>{
        this.setState({
            contador:(this.state.contador-1)
        })

    }
    render(){
        return(
            <section id="content">
                <h2 classNameName="subheader">Últimos artículos</h2>
                
            

                <div id="articles">
                    <article classNameName="article-item" id="article-template">
                    
                        <h2>Articulo de prueba</h2>
                        <span className="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>

                        <div className="clearfix"></div>
                    </article>

                </div>
                <p>
                    {this.state.contador}
                </p>
                <p>
                    <input type="button" value ="Sumar" onClick={this.sumar}></input>
                    <input type="button" value ="Restar" onClick={this.restar}></input>

                </p>
            </section>
        );
    }
}
export default SeccionPruebas;