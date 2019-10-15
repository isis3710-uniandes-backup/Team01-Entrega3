import React, { Component } from 'react';
import './styles/notFound.css'

export default class notFound extends Component {

    render() {
        return (
            <div id="notfound" className="container-fluid">
                <div className="row notfound">
                    <div className="col-6 d-flex align-content-center justify-content-center flex-wrap notfound-404">
                            <h1>404 NOT FOUND</h1>
                    </div>
                    <div className="col-6 d-flex align-content-center flex-wrap">
                        <h2>Oops! Esta página no pudo ser encontrara</h2>
                        <p>Lo siento pero la página que estas buscando no existe, fue removida o no esta disponible temporalmente.</p>
                        <a className="btn btn-dark" href="/">Ir al HomePage</a>
                    </div>
                </div>
            </div>
        )
    }
}
