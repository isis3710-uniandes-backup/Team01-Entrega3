import React, { Component } from 'react';
import './styles/register.css'
import {Users} from "../../api/mongoSettings";
//import { Users } from '../../api/mongoSettings';

export default class register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            name: "",
            lastName: "",
            email: "",
            password: ""
            };
        this.changeValue = this.changeValue.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    changeValue(e) {
        if (e.target.id === "username") {
            this.setState({
                username: e.target.value
            });
        }else if(e.target.id === "name") {
            this.setState({
                name: e.target.value
            });
        }
        else if(e.target.id === "lastname") {
            this.setState({
                lastName: e.target.value
            });
        }
        else if(e.target.id === "email") {
            this.setState({
                email: e.target.value
            });
        }
        else if(e.target.id === "password") {
            this.setState({
                password: e.target.value
            });
        }
    }

    signUp(){
        Users.insert({username: this.state.username, name: this.state.name, lastName: this.state.lastName, email: this.state.email, password: this.state.password})
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row" id="login">
                    <div className="col-md-6 offset-md-3 login-form">
                        <h3>Register</h3>

                        <form >
                            <div className="form-group">
                                <input id="username" type="text" className="form-control" placeholder="Username " onChange={this.changeValue}></input>
                            </div>
                            <div className="form-group">
                                <input id="name" type="text" className="form-control" placeholder="Name " onChange={this.changeValue}/>
                            </div>
                            <div className="form-group">
                                <input id="lastname" type="text" className="form-control" placeholder="LastName " onChange={this.changeValue}/>
                            </div>
                            <div className="form-group">
                                <input id="email" type="text" className="form-control" placeholder="Email " onChange={this.changeValue}/>
                            </div>
                            <div className="form-group">
                                <input id="password" type="password" className="form-control" placeholder="Password" onChange={this.changeValue}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Sign up" onClick={this.signUp}/>
                            </div>
                            <div className="form-group">
                                <a href="#" className="btnForgetPwd">Forget Password?</a>
                            </div>
                        </form>

                    </div>
                    <div className="logo">
                        <div className="img-logo-register">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
