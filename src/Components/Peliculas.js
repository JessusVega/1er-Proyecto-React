import React, {Component} from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state={
        peliculas:[
            { titulo:'Donnie Darko', image: 'https://alienationmentale.files.wordpress.com/2011/10/donnie-darko-719479l.jpg'},
            { titulo:'Arrival', image: 'https://www.newdvdreleasedates.com/images/posters/large/arrival-2016-04.jpg'},
            { titulo:'12 Monkeys', image: 'https://televisionpromos.com/wp-content/uploads/2015/01/12-Monkeys-Season-1-Artwork-Key-Art-Syfy-TV-series.jpg'},

        ],
        nombre: 'Jesus Vega',
        favorita: {}
    }

    Cambiartitulo =() =>{
        var {peliculas} = this.state;
        peliculas[0].titulo = "Conejo asesino";

        this.setState({
            peliculas: peliculas
        })

    }

    marcarFavorita =(pelicula) =>{
        console.log("Favorita marcada");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })
    }
    render(){

        var pStyles={
            background: 'green',
            color:'white',
            padding: '10px'
        }

        return(
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>

                <p>
                    <input type="button" value="Cambiar titulo" onClick={this.Cambiartitulo}></input>
                </p>

                {this.state.favorita.titulo ?(
                    <p className="favorita" style={pStyles}>
                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>) : (
                        <p>No hay pelicula favorita</p>
                    )

                }
                
              
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula,i)=>{
                            return(
                                <Pelicula key ={i} 
                                pelicula={pelicula}
                                marcarFavorita ={this.marcarFavorita}></Pelicula>
                            )
                        })
                    }
                </div>
            </div>
            
        );
    }
}
export default Peliculas;