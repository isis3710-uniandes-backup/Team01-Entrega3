import React, { Component } from 'react'

export default class event extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            nombre: this.props.event.name,
            lugar: this.props.event.address,
            fecha: [this.props.event.date.getMonth() + 1,
            this.props.event.date.getDate(),
            this.props.event.date.getFullYear()].join('/') + ' ' +
                [this.props.event.date.getHours(),
                this.props.event.date.getMinutes(),
                this.props.event.date.getSeconds()].join(':'),
            fecha2:this.props.event.date,
            descripcion: this.props.event.detail,
            deporte: this.props.event.sport,
            cantidadPersonas: this.props.event.people,
            joinFunction: this.props.joinFunction,
            disJoinFunction : this.props.disJoinFunction,
            inscrito : false
        }
        this.join = this.join.bind(this);
        this.disJoin = this.disJoin.bind(this);
    }
    join() 
    {
        const ev = {
            name: this.state.nombre,
            address: this.state.lugar,
            date: this.state.fecha2,
            sport: this.state.deporte,
            detail: this.state.descripcion,
            people: this.state.cantidadPersonas
        };
        this.setState({
            inscrito : true
        })
        this.state.joinFunction(ev);
    }
    disJoin() 
    {
        console.log(this.state);
        this.state.disJoinFunction(this.state.nombre);
    }
    render() {
        console.log(this.props.event)
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
                                    {
                                        this.props.id !== 2
                                            ?
                                            (this.props.id===0) ? (!this.state.inscrito) ? 
                                            <a href="#" onClick={this.join}>
                                                <img src="https://image.flaticon.com/icons/svg/189/189689.svg" alt="Boton Unirme" height="50" width="50" />
                                                <p>Unirme</p>
                                            </a> :  
                                               <p>Inscrito</p>
                                            :
                                            <a href="#" onClick={this.disJoin}>
                                                <img src="https://www.pngfind.com/pngs/m/3-31254_red-cross-mark-clipart-black-background-red-x.png" alt="Boton Salirme" height="50" width="50" />
                                                <p>Salirme</p>
                                            </a>
                                            : false
                                    }

                                </div>
                            </div>
                        </div>
                        <h5 className="card-text">{this.state.description}</h5>
                        <h5 className="card-text">{this.state.lugar}</h5>
                        <h5 className="card-text">{(this.state.fecha).toString()}</h5>
                        <h5 className="card-text">{this.state.deporte}</h5>
                        <h5 className="card-text">{this.state.cantidadPersonas} personas</h5>
                    </div>
                </div>
            </div>
        )
    }
}
