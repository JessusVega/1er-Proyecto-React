import React, { Component } from 'react';
import Slider from './slider';
import Sidebar from './Sidebar';

class Home extends Component {

    render() {
        
        return (

            <div id="home">
                <Slider
                    title="Bienvenido al blog"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                       
                    </div>
                    <Sidebar/>
                </div>

            </div>

        );
    }
}
export default Home