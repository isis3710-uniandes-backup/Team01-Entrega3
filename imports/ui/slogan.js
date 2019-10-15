import React, { Component } from 'react'
import './styles/slogan.css';
export default class slogan extends Component {
    render() {
        return (
            <div className="container">
                <div className="row h-100 fullHeight"  >
                    <div className="col-6 d-flex align-content-center flex-wrap">
                        <h1 id="slogan">Participa, encuentra y crea eventos deportivos.</h1>
                        <a className="btn btn-spoventPrincipal text-right" href="/login">Empecemos</a>
                    </div>
                    <div className="col-6 d-flex align-content-center flex-wrap">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XeDG39sfihU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
