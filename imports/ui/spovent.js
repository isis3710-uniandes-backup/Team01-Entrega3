import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './mainpage';
import Navbar from './navbar';
import Login from './login/login';
import Register from './login/register';


export default class spovent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logueado: false,
            usuario: ""
        }
        
        this.loguear = this.loguear.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.logueado !== prevProps.logueado) {
            this.setState({
                logueado: this.props.logueado
            });
        }
    }

    loguear(usuario){
        this.setState({
            logueado: true,
            usuario: usuario.username
        });
    }

    logOut(){
        this.setState({
            logueado: false,
            usuario: ""
        });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                        <div>
                            <Navbar logOutFunc={this.logOut} logueado={this.state.logueado}/>
                            <Route exact path="/" component={MainPage} />
                            <Route exact path="/login" >
                                <Login logueado={this.state.logueado} logFunc={this.loguear} />
                            </Route>
                            <Route exact path="/register" >
                                <Register logueado={this.state.logueado} logFunc={this.loguear} />
                            </Route>
                        </div>
                </BrowserRouter>
            </div>
        )
    }
}
