import React, { Component } from 'react';
import './styles/login.css';
import {Users} from "../../api/mongoSettings";
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";

let checkUsername = true;
let checkPassword = true;

export default class login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            logFunc: this.props.logFunc,
            logueado: this.props.logueado
        };
        this.changeValue = this.changeValue.bind(this);
        this.signIn = this.signIn.bind(this);
        this.validate = this.validate.bind(this);
    }

    changeValue(e) {
        if (e.target.id === "username") {
            this.setState({
                username: e.target.value
            });
        } else if(e.target.id === "password") {
            this.setState({
                password: e.target.value
            });
        }
    }

    validate(){
        checkUsername = false;
        checkPassword = false;
        if(this.state.username != "")
            checkUsername = true;
        if(this.state.password != "")
            checkPassword = true;
        if(checkUsername && checkPassword)
            this.signIn();
        this.forceUpdate ()
    }

    signIn(){
        let user = Users.findOne({username: this.state.username});
        if(user!=null){
            if (this.state.password == user.password){
                this.setState({
                    username: user.username,
                    logueado: true
                });
                this.state.logFunc(user)
                Swal.fire({
                    type: 'success',
                    title: 'Bienvenido de nuevo ' + user.username,
                    text: '¡Diviértete en nuestra plataforma!',
                    timer: 2000
                });
            }
            else
                Swal.fire({
                    type: 'error',
                    title: 'Usuario o Contraseña incorrecta',
                    text: 'Vuelve a intentarlo',
                    timer: 1500
                });
        }
        else
            Swal.fire({
                type: 'error',
                title: 'Usuario o contraseña incorrecta',
                text: 'Vuelve a intentarlo.',
                timer: 2000
            });
    }

    render() {
        if (this.state.logueado) {
            return <Redirect  to={{
                pathname : '/main',
                state : {
                    user : this.state.username
                }
            }} />;
        }
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-2 spovent-logo">
                        <Link to="/">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div className="col-9">
                                    <strong id="brandName-login">Spovent</strong>
                                    <p id="return-home">Volver al Home</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 login-form">
                                <h3>Ingresar</h3>
                                {checkUsername ?
                                    <div className="form-group">
                                        <input id="username" type="text" className="form-control login-form-control" placeholder="Nombre de Usuario "
                                               onChange={this.changeValue}/>
                                    </div>
                                    :
                                    <div className="form-group">
                                        <input id="username" type="text" className="form-control login-form-control" placeholder="Nombre de Usuario "
                                               onChange={this.changeValue}/>
                                        <p id="checkUsername-login">*Rellena este campo</p>
                                    </div>
                                }
                                {checkPassword ?
                                    <div className="form-group">
                                        <input id="password" type="password" className="form-control login-form-control" placeholder="Contraseña "
                                               onChange={this.changeValue}/>
                                    </div>
                                    :
                                    <div className="form-group">
                                        <input id="password" type="password" className="form-control login-form-control" placeholder="Contraseña "
                                               onChange={this.changeValue}/>
                                        <p id="checkPassword-login">*Rellena este campo</p>
                                    </div>
                                }
                                <div className="form-group">
                                    <input type="button" className="btnSubmit" value="Ingresar" onClick={this.validate}/>
                                </div>
                                <div className="form-group">
                                    <a href="/register" className="btnForgetPwd">No tienes cuenta? Registrate aquí</a>
                                </div>
                            </div>
                            <div className="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

