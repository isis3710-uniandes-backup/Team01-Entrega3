import React, { Component } from 'react';
import './styles/notFound.css'

export default class notFound extends Component{

    render(){
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Oops! Esta página no pudo ser encontrara</h2>
                    <p>Lo siento pero la página que estas buscando no existe, fue removida o no esta disponible temporalmente.</p>
                    <a href="/">Ir al HomePage</a>
                </div>
            </div>
        )
    }
}
