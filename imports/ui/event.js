import React, { Component } from 'react'
import Swal from "sweetalert2";
import {Users} from "../api/mongoSettings";

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
            disJoinFunction: this.props.disJoinFunction,
            _id:  this.props.event._id,
            inscrito : false
        }
        this.join = this.join.bind(this);
        this.disJoin = this.disJoin.bind(this);
    }
    join() 
    {
        this.setState({
            cantidadPersonas:parseInt(this.state.cantidadPersonas)-1
        });
        let ev = {
            name: this.state.nombre,
            address: this.state.lugar,
            date: this.state.fecha2,
            sport: this.state.deporte,
            detail: this.state.descripcion,
            people: this.state.cantidadPersonas,
            _id: this.state._id
        };
        this.setState({
            inscrito : true
        })
        this.state.joinFunction(ev);
    }

    disJoin() {
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Piensalo Bien!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Quiero desuscribirme!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    type: 'success',
                    title: 'Te has desuscrito exitosamente' ,
                    showConfirmButton: false,
                    timer: 1500
                });
                this.setState({
                    cantidadPersonas:parseInt(this.state.cantidadPersonas)+1
                });
                let ev = {
                    name: this.state.nombre,
                    address: this.state.lugar,
                    date: this.state.fecha2,
                    sport: this.state.deporte,
                    detail: this.state.descripcion,
                    people: this.state.cantidadPersonas,
                    _id: this.state._id
                };
                this.state.disJoinFunction(ev);
                this.setState({
                    inscrito : false
                })
            }
        });
    }
    componentDidUpdate(prevPros)
    {
        if(this.props.criteria !== prevPros.criteria)
        {
            this.setState({
                nombre : this.props.event.name,
                lugar : this.props.event.address,
                fecha : [this.props.event.date.getMonth() + 1,
                    this.props.event.date.getDate(),
                    this.props.event.date.getFullYear()].join('/') + ' ' +
                        [this.props.event.date.getHours(),
                        this.props.event.date.getMinutes(),
                        this.props.event.date.getSeconds()].join(':'),
                deporte : this.props.event.sport,
                cantidadPersonas : this.props.event.people
            })
        }
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
                                    {
                                        this.props.id !== 2
                                            ?
                                            (this.props.id===0) ? (!this.state.inscrito) ? 
                                            <a href="#" onClick={this.join}>
                                                <img src="https://image.flaticon.com/icons/svg/189/189689.svg" alt="Boton Unirme" height="50" width="50" />
                                                <p>Unirme</p>
                                            </a> :
                                                <a href="#" onClick={this.disJoin}>
                                                    <img src="https://www.pngfind.com/pngs/m/3-31254_red-cross-mark-clipart-black-background-red-x.png" alt="Boton Salirme" height="50" width="50" />
                                                    <p>Salirme</p>
                                                </a>
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
