import React, { Component } from 'react';
import Slider from './slider';
import Sidebar from './Sidebar';
import Articles from './articles';

class Blog extends Component {

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
                        <Articles
                        home="true"
                        ></Articles>
                    </div>
                    <Sidebar
                   
                    />
                </div>

            </div>

        );
    }
}
export default Blog;