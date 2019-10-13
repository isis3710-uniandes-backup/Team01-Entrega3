import React, { Component } from 'react'

export default class event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.event.name,
            lugar: this.props.event.address,
            fecha: this.props.event.date,
            descripcion: this.props.event.description,
            deporte: this.props.event.sport,
            cantidadPersonas: this.props.event.people,
            joinFunction: this.props.joinFunction
        }
        this.join=this.join.bind(this);  
    }
    join(){
        const ev={
          name:this.state.nombre,
          address:this.state.lugar,
          date:this.state.fecha,
          sport:this.state.deporte,
          detail:this.state.descripcion,
          people:this.state.cantidadPersonas
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
                        <h5 className="card-text">{this.state.description}</h5>
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
