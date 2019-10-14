import React, { Component } from 'react';
import '../ui/styles/navbar.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
//import logo from "../ui/assets/spovent.png";
//import UserLogo from "../ui/assets/useroptions.png";


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: "",
            usuario: "",
            logueado: this.props.logueado,
            logOutFunc: this.props.logOutFunc
        }
        this.changeValue = this.changeValue.bind(this);
        this.cerrarSesion = this.cerrarSesion.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.logueado !== prevProps.logueado) {
            this.setState({
                logueado: this.props.logueado
            });
        }
    }
    cerrarSesion() {
        this.setState({
            usuario: "",
            logueado: false
        });
        this.state.logOutFunc();
        Swal.fire({
            title: 'Adios!',
            text: 'Tus eventos te estaran esperando!',
            timer: 3000
        })
    }
    changeValue(e) {
        this.setState({
            busqueda: e.target.value
        });
    }

    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light" value={this.state.usuario}>
                    <Link to="/"><img className="img-circle" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/400/2319488400_9ae772ff-d97b-4ad7-b074-2b095a18337a.png?cb=1570928773" id="logo" alt="Logo" width="100" height="40"></img></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input id="search" className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" value={this.state.busqueda} onChange={this.changeValue}></input>
                        </form>
                        <button type="button" className="btn btn-dark">
                        Buscar</button>
                        {this.state.logueado ? 
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <div className="btn-group dropdown">
                                    <button type="button" className="btn btnImagen dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="img-circle" src="https://image.flaticon.com/icons/svg/1301/1301464.svg" width="30" height="30"></img> 
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Ajustes de cuenta</a>
                                        <a className="dropdown-item" href="#" onClick={this.cerrarSesion}>Cerrar Sesión</a>
                                    </div>
                                </div>
                            </li>
                        </ul> : <ul className="nav navbar-nav ml-auto">
                                <div className="btn-group dropleft">
                                    <li className="nav-item ">
                                        <Link to="/login" >
                                            <button id="butlogin" type="button" className="btn btn-dark"> Inicia sesión </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register">
                                            <button id="butReg" type="button" className="btn btn-dark">Regístrate </button>
                                        </Link>
                                    </li>
                                </div>
                                </ul>
                        }
                    </div>
                </nav>
        )
    }
}
