import React, { Component } from 'react';
import '../ui/styles/mainpage.css';
import CreateEvent from './createEvent';
import EventosList from './eventosList';
import { Users, Events } from "../api/mongoSettings";

export default class mainpage extends Component {
    state = {
        userlogged: (this.props.location.state !== undefined) ? this.props.location.state.user : -1,
        allEvents: [],
        confirmEvents: [],
        createdEvents: [],
        filteredEvents: this.props.location.state.filteredEvents !== undefined ? this.props.location.state.filteredEvents : []
    }
    join = (evento) => {
        let confirmados = this.state.confirmEvents;
        confirmados.push(evento);
        this.setState({
            confirmEvents: confirmados
        });
        let user=Users.findOne({username: this.state.userlogged});
        user.subscribedEvents.push(evento);
        console.log(user);
        Users.update( { username: user.username },user);
    }
    create = (evento) => {
        let todos = this.state.allEvents;
        console.log(this.state.allEvents);
        todos.push(evento);
        let creados = this.state.createdEvents;
        creados.push(evento);
        this.setState({
            allEvents: todos,
            createdEvents: creados
        });
        
        let user=Users.findOne({username: this.state.userlogged});
        user.eventsOffered.push(evento);
        Users.update( { username: user.username },user);
        Events.insert(evento);
        
    }
    componentDidMount() {
        this.getEvents(() => {
            return Users.findOne({ username: this.state.userlogged });
        })

    };
    getEvents(encontrar) {
        this.setState({
            allEvents: Events.find({}),
            confirmEvents: encontrar.suscribedEvents,
            createdEvents: encontrar.eventsOffered
        });
    }
    render() {
        return (
            <div id="main" className="container-fluid">
                <div className="row fullrow">
                    <div className="col-3 align-items-center cardsutil">
                        <button type="button" className="btn btn-spovent" data-toggle="modal" data-target="#exampleModal">
                            Crear un nuevo evento</button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <CreateEvent createFunction={this.create} />
                        </div>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">Todos</a>
                            <a className="nav-link" id="v-pills-willAssist-tab" data-toggle="pill" href="#v-pills-willAssist" role="tab" aria-controls="v-pills-willAssist" aria-selected="false">Asistiré</a>
                            <a className="nav-link" id="v-pills-created-tab" data-toggle="pill" href="#v-pills-created" role="tab" aria-controls="v-pills-created" aria-selected="false">Creados</a>
                            <a className="nav-link" id="v-pills-cancelados-tab" data-toggle="pill" href="#v-pills-cancelados" role="tab" aria-controls="v-pills-cancelados" aria-selected="false">Buscados</a>
                        </div>
                    </div>
                    <div className="col-9" >
                        <div className="tab-content contenidoPrincipal" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab">
                                <strong>Eventos</strong>
                                <EventosList eventos={this.state.allEvents} joinFunction={this.join} />
                            </div>
                            <div className="tab-pane fade" id="v-pills-willAssist" role="tabpanel" aria-labelledby="v-pills-willAssist-tab">
                                <strong>Eventos</strong> <i className="fa fa-angle-right"></i> Asistiré
                            <EventosList eventos={this.state.confirmEvents} joinFunction={this.join} />
                            </div>
                            <div className="tab-pane fade" id="v-pills-created" role="tabpanel" aria-labelledby="v-pills-created-tab">
                                <strong>Eventos</strong>  <i className="fa fa-angle-right"></i> Cree
                                <EventosList eventos={this.state.createdEvents} joinFunction={this.join} />
                            </div>
                            <div className="tab-pane fade" id="v-pills-cancelados" role="tabpanel" aria-labelledby="v-pills-cancelados-tab">
                                <strong>Eventos</strong> <i className="fa fa-angle-right"></i> Buscados recientemente
                                <EventosList eventos={this.state.filteredEvents} joinFunction={this.join} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
