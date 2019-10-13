import React, { Component } from 'react'

export default class event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.event.nombre,
            lugar: this.props.event.lugar,
            fecha: this.props.event.fecha,
            deporte: this.props.event.deporte,
            cantidadPersonas: this.props.event.cantidad,
            joinFunction: this.props.joinFunction
        }
        this.join=this.join.bind(this);  
    }
    create(){
        let ev={
          nombre:this.state.nombre,
          lugar:this.state.lugar,
          fecha:this.state.fecha,
          deporte:this.state.deporte,
          cantidadPersonas:this.state.cantidadPersonas
        };
        this.state.joinFunction(ev);
      }
    render() {
        return (
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="card-tittle">
                            <div className="row">
                                <div className="col-8">
                                    <strong>{this.state.nombre}</strong>
                                </div>
                                <div className="col-4 text-center">
                                    {<a href="#" onClick={this.join}>
                                    <img src="https://image.flaticon.com/icons/svg/189/189689.svg" alt="Boton Unirme" height="50" width="50"/> 
                                        <p>Unirme</p>
                                    </a>
                                    }
                                </div>
                            </div>
                        </div>
                        <h5 className="card-text">{this.state.lugar}</h5>
                        <h5 className="card-text">{this.state.fecha}</h5>
                        <h5 className="card-text">{this.state.deporte}</h5>
                        <h5 className="card-text">{this.state.cantidadPersonas} personas</h5>
                    </div>
                </div>
            </div>
        )
    }
}
