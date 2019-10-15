import React, { Component } from 'react';
import '../ui/styles/navbar.css';
import { Link } from "react-router-dom";
import {Events} from "../api/mongoSettings";




export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: "",
            filtrados: [],
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
    }
    changeValue(e) {
        this.setState({
            busqueda: e.target.value
        });
    }

    filtrar(){
        let eventsByName = Events.find({name: this.state.busqueda});
        let eventsBySport = Events.find({sport: this.state.busqueda});

        if(eventsByName!=null){
            this.setState(
                {filtrados: eventsByName}
            )
        }
        else if (eventsBySport!=null){
            this.setState(
                {filtrados: eventsBySport}
            )
        }
        else{
            console.log("No existen eventos")
        }
    }

    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light" value={this.state.usuario}>
                    <Link to={{
                        pathname : "/",
                        state : this.state.logueado}}><strong id="brandName">Spovent</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input id="search" className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" value={this.state.busqueda} onChange={this.changeValue}></input>
                        </form>
                        {console.log("filtered events "+ this.state.filtrados)}
                        {console.log("busqueda "+ this.state.busqueda)}
                        <Link  onClick={this.filtrar}  to={{
                                pathname : '/',
                                state : {
                                    filteredEvents : this.state.filtrados
                                }}} id="buscarButton" className="btn btn-navbar" 
                                type="submit" >Buscar</Link>
                        {this.state.logueado ? 
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <div className="btn-group dropleft">
                                    <button type="button" className="btn btnImagen dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="img-circle" src="https://image.flaticon.com/icons/svg/1301/1301464.svg" width="30" height="30"></img> 
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/" onClick={this.cerrarSesion}>Cerrar Sesión</a>
                                    </div>
                                </div>
                            </li>
                        </ul> : <ul className="nav navbar-nav ml-auto">
                                <div className="btn-group dropleft">
                                    <li className="nav-item ">
                                        <Link to="/login" >
                                            <button id="butlogin" type="button" className="btn btn-navbar"> Inicia sesión </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register">
                                            <button id="butReg" type="button" className="btn btn-navbar">Regístrate </button>
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
