import React, { Component } from 'react'
import { BrowserRouter, Route , Switch} from "react-router-dom";
import MainPage from './mainpage';
import Navbar from './navbar';
import Login from './login/login';
import Register from './login/register';
import NotFound from './notFound';
import Home from './slogan';
import './styles/spovent.css';
import Swal from "sweetalert2";

export default class spovent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logueado: false,
            usuario: "",
            notFound: false
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
        Swal.fire({
            type: 'success',
            title: 'Cerraste sesión exitosamente',
            text: 'Te estaremos esperando!',
            showConfirmButton: false,
            timer: 3500
        });
        this.setState({logueado: false, usuario: ""})
    }


    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/login">
                                <Login logueado={this.state.logueado} logFunc={this.loguear}/>
                            </Route>
                            <Route exact path="/register">
                                <Register logueado={this.state.logueado} logFunc={this.loguear}/>
                            </Route>
                            <Route path="*">
                                <Navbar logOutFunc={this.logOut} usuario={this.state.usuario} logueado={this.state.logueado}/>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/main"component={MainPage}/>
                                    <Route path="*">
                                        <NotFound />
                                    </Route>
                                </Switch>
                            </Route>
                        </Switch>

                    </div>
                </BrowserRouter>
        )
                        }
}
