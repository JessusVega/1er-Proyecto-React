import React, {Component} from 'react';

class Sidebar extends Component{

    render(){

        return(
            
            <aside id="sidebar">
<<<<<<< HEAD
                {this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
=======
                <div id="nav-blog" className="sidebar-item">
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear artículo</a>
                </div>

<<<<<<< HEAD
                }
                

=======
>>>>>>> 3b3da2b935d7cd6d6022102a9f6571dbb6212a9e
                <div id="search" className="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form>
                            <input type="text" name="search" />
                            <input type="submit" name="submit" value="Buscar" className="btn" />
                        </form>
                </div>
            </aside>
        );
    }
}
export default Sidebar;