import React, { Component } from 'react';
import './styles/login.css';
import {Users} from "../../api/mongoSettings";

export default class login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.changeValue = this.changeValue.bind(this);
        this.signIn = this.signIn.bind(this);
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

    signIn(){
        console.log(this.state.username);
        let user = Users.findOne({username: this.state.username});
        if(user!=null)
            console.log("Logeado")
        else
        {
            console.log("Username or password incorrect");
        }
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 login-form">
                        <h3>Login</h3>

                        <div className="form-group">
                            <input id="username" type="text" className="form-control" placeholder="Username " onChange={this.changeValue}/>
                        </div>
                        <div className="form-group">
                            <input id="password" type="password" className="form-control" placeholder="Password " onChange={this.changeValue}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" onClick={this.signIn}/>
                        </div>
                        <div className="form-group">
                            <a href="#" className="btnForgetPwd">Forget Password?</a>
                        </div>

                    </div>
                    <div className="logo">
                        <div className="img-logo">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

