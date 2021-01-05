import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';
import Global from '../Global';
import Sidebar from './Sidebar';

//validacion y alertas

class CreateArticle extends Component {
    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentDidMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido',
                alpha_num_space: 'Solo puedes introducir letras, numeros y espacios'
            }
        });
    }
    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        })
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {
        e.preventDefault();
        this.changeState();

        if (this.validator.allValid()) {

            //peticion HTTP
            axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting',

                        })

                        swal(
                            'Articulo creado',
                            'El articulo ha sido creado correctamente',
                            'success'
                        )
                        //subir imagen
                        if (this.state.selectedFile !== null) {
                            //sacar el id del articulo
                            var articleId = this.state.article._id;

                            //crear form-data y añadir fichero
                            const formData = new FormData();
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )
                            //peticion ajax
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success',

                                        })
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed',

                                        })
                                    }
                                })
                        }

                    } else {
                        this.setState({
                            status: 'failed'
                        })
                    }
                })

        } else {
            this.validator.showMessages();
            this.forceUpdate();
            this.setState({
                status: 'failed'
            })
        }
    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog"></Redirect>;
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear articulo</h1>

                    <form className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group" >
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}></input>
                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea type="text" name="content" ref={this.contentRef} onChange={this.changeState} />
                            {this.validator.message('content', this.state.article.content, 'required')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange}></input>
                        </div>

                        <input type="submit" value="guardar" className="btn btn-success"></input>
                    </form>
                </section>

                <Sidebar></Sidebar>
            </div>
        )
    }
}
export default CreateArticle;