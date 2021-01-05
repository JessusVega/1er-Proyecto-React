import React, {Component} from 'react';

class Pelicula extends Component{

    marcar=()=>{
        this.props.marcarFavorita(this.props.pelicula);
    }

    render(){
  
        const {titulo,image} = this.props.pelicula;

        return(
            <article className="article-item" id="article-template">
                                <div className="image-wrap">
                                    <img src={image} alt="pelicula"/>
                                </div>
            
                            <h2>{titulo}</h2>
                                <span className="date">
                                    Hace 5 minutos
                                </span>
                              

                                    <button onClick={this.marcar}>Marcar favorita</button>
                                <div className="clearfix"></div>
                            </article>
        );
    }
}
export default Pelicula