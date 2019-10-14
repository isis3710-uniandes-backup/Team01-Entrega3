import React, { Component } from 'react'
import { BrowserRouter, Route , Switch} from "react-router-dom";
import MainPage from './mainpage';
import Navbar from './navbar';
import Login from './login/login';
import Register from './login/register';
import NotFound from './notFound';
import Home from './slogan';

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
        this.setState({
            logueado: false,
            usuario: ""
        });
    }


    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Navbar logOutFunc={this.logOut} logueado={this.state.logueado}/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/main" component={MainPage}/>
                            <Route exact path="/login">
                                <Login logueado={this.state.logueado} logFunc={this.loguear}/>
                            </Route>
                            <Route exact path="/register">
                                <Register logueado={this.state.logueado} logFunc={this.loguear}/>
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
        )
                        }
}
