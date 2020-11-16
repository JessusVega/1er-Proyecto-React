<<<<<<< HEAD
import React, { Component } from 'react';

class Slider extends Component {

    render() {

        return (

            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>

                {this.props.btn &&

                    <a href="#" className="btn-white">{this.props.btn}</a>

                }
=======
import React, {Component} from 'react';

class Slider extends Component{

    render(){

        return(
            
            <div id="slider" className="slider-big">
                <h1>{this.props.title}</h1>
                 <a href="#" className="btn-white">{this.props.btn}</a>
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
            </div>
        );
    }
}
export default Slider;