import React, { Component } from 'react';
import Slider from './slider';
import Sidebar from './Sidebar';

class Home extends Component {

    render() {

        return (

            <div id="home">
                <Slider
                    title="Habiaunavezunbarco chiquito"
                    btn="Ir al blog"
                    size="slider-big"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos Articulos</h1>
                    </div>
                    <Sidebar
                    blog="true"
                    />
                </div>

            </div>

        );
    }
}
export default Home