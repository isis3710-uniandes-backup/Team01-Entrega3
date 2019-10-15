import React, { Component } from 'react'
import './styles/slogan.css';
export default class slogan extends Component {
    state = {
        logged : (this.props.location.state !== undefined) ? (this.props.location.state) : -1
    }
    render() {
        return (
            <div className="container">
                <div className="row h-100 fullHeight"  >
                    <div className="col-6 d-flex align-content-center flex-wrap">
                        <h1 id="slogan">Participa, encuentra y crea eventos deportivos.</h1>
                       {(this.state.logged === -1 || this.state.logged === false) ? <a className="btn btn-spoventPrincipal text-right" href="/login">Empecemos</a> : <a className="btn btn-spoventPrincipal text-right" href="/main">Continuemos</a>} 
                    </div>
                    <div className="col-6 d-flex align-content-center flex-wrap">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XeDG39sfihU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
