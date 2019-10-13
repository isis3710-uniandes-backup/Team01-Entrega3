import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './mainpage';
import Navbar from './navbar';


export default class tutofinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logueado: false,
            usuario: ""
        }
        
        this.loguear = this.loguear.bind(this);
    }
    loguear(usuario){
        this.setState({
            logueado: !this.state.logueado,
            usuario: usuario
        });
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                        <div>
                            <Navbar logFunc={this.loguear}/>
                            <Route component={MainPage} />
                        </div>
                </BrowserRouter>
            </div>
        )
    }
}