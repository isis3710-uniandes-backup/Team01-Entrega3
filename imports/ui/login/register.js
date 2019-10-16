import React, { Component } from 'react';
import './styles/register.css'
import {Users} from "../../api/mongoSettings";
import { Redirect } from 'react-router';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
let check = false;
let checkUsername = true;
let checkName = true;
let checkLastName = true;
let checkEmail = true;
let checkPassword = true;

export default class register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            name: "",
            lastName: "",
            email: "",
            password: "",
            logFunc: this.props.logFunc,
            logueado: this.props.logueado
            };
        this.changeValue = this.changeValue.bind(this);
        this.signUp = this.signUp.bind(this);
        this.validate = this.validate.bind(this);
    }

    changeValue(e) {
        if (e.target.id === "username") {
            this.setState({
                username: e.target.value
            });
            if(e.target.id != "")
                checkUsername = true;
            let intro = document.getElementsByClassName('register-form-control-username');
            if(intro!=null && this.usernameCheck(e.target.value)) {
                intro.username.style.color = '#ff0054';
                check = true;
            }
            else if(intro!=null && check) {
                intro.username.style.color = '#000';
                check = false;
            }
        }else if(e.target.id === "name") {
            this.setState({
                name: e.target.value
            });
            if(e.target.id != "")
                checkName = true;
        }
        else if(e.target.id === "lastname") {
            this.setState({
                lastName: e.target.value
            });
            if(e.target.id != "")
                checkLastName = true;
        }
        else if(e.target.id === "email") {
            this.setState({
                email: e.target.value
            });
            if(e.target.id != "")
                checkEmail = true;
        }
        else if(e.target.id === "password") {
            this.setState({
                password: e.target.value
            });
            if(e.target.id != "")
                checkPassword = true;
        }
    }

    usernameCheck(username){
        let user = Users.findOne({username: username});
        return user==null ? false:true;
    }

    validate(){
        checkUsername = false;
        checkEmail = false;
        checkName = false;
        checkLastName = false;
        checkPassword = false;
        if(this.state.username != "")
            checkUsername = true;
        if(this.state.name != "")
            checkName = true;
        if(this.state.lastName != "")
            checkLastName = true;
        if(this.state.email != "")
            checkEmail = true;
        if(this.state.password != "")
            checkPassword = true;
        if(checkUsername && checkPassword && checkEmail && checkName && checkLastName)
            this.signUp();
        this.forceUpdate ()
    }

    signUp(){
        let userFind = Users.findOne({username: this.state.username});
        if(userFind==null) {
            let user = {
                username: this.state.username,
                name: this.state.name,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                eventsOffered: [],
                subscribedEvents: []
            };
            let id = Users.insert(user);
            user._id = id;
            this.setState({logueado: true})
            this.state.logFunc(user)
            Swal.fire({
                type: 'success',
                title: 'Registro exitoso ' + user.username,
                text: 'Disfruta nuestros servicios!',
                timer: 3000
            });
        }
        else
            Swal.fire({
                type: 'error',
                title: 'Ya esta en uso el nombre de usuario: ' + userFind.username,
                text: 'Vuelve a intentarlo',
                timer: 2000
            });
    }

    render() {
        if (this.state.logueado) {
            return <Redirect to={{
                pathname : '/main',
                state : {
                    user : this.state.username
                }
            }} />;
        }
        return (
            <div className="container register-container">
                <div className="row" id="login">
                    <div className="col-md-2 spovent-logo-register">
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
                            <div className="col-md-6 offset-md-3 register-form">
                                <h3>Registrarse</h3>

                                <div className="form-group">
                                    <input id="username" required type="text" className="form-control register-form-control-username" placeholder="Username "
                                           onChange={this.changeValue} title="Completa este campo."></input>
                                    {checkUsername ? check == true ? <p id="validation">Ya esta en uso este usuario, intenta con otro.</p> : <div/> :
                                    <p id="validation">*Rellena este campo</p>}
                                </div>
                                    <div className="form-group">
                                        <input id="name" required type="text" className="form-control" placeholder="Nombre "
                                               onChange={this.changeValue} title="Completa este campo."/>
                                        {checkName ? <div/>:<p id="validation">*Rellena este campo</p>}
                                    </div>
                                    <div className="form-group">
                                        <input id="lastname" required type="text" className="form-control" placeholder="Apellidos "
                                               onChange={this.changeValue} title="Completa este campo."/>
                                        {checkLastName ? <div/>:<p id="validation">*Rellena este campo</p>}
                                    </div>
                                    <div className="form-group">
                                        <input id="email" required type="text" className="form-control" placeholder="Correo "
                                               onChange={this.changeValue} title="Completa este campo."/>
                                        {checkEmail ? <div/>:<p id="validation">*Rellena este campo</p>}
                                    </div>
                                    <div className="form-group">
                                        <input id="password" required type="password" className="form-control" placeholder="Contraseña "
                                               onChange={this.changeValue} title="Completa este campo."/>
                                        {checkPassword ? <div/>:<p id="validation">*Rellena este campo</p>}
                                    </div>
                                    <div className="form-group text-center ">
                                        <input type="button" className="btnSubmit" value="Registrarse" onClick={this.validate}/>
                                    </div>

                            </div>
                            <div className="logo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
