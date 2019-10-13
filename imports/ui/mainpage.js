import React, { Component } from 'react';
import '../ui/styles/mainpage.css';
import CreateEvent from './createEvent';
import EventosList from './eventosList';


export default class mainpage extends Component {
    state = {
        allEvents: [],
        confirmEvents: [],
        createdEvents: [],
        canceledEvents: []
    }
    join =() =>{
        this.setState({
            confirmEvents: [...this.state.confirmEvents, evento]
          });
    }
    create = (evento) => {
        console.log(evento);
        this.setState({
            allEvents: [...this.state.allEvents, evento],
            createdEvents: [...this.state.createdEvents, evento]
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
                            <CreateEvent createFunction={this.create}/>
                        </div>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">Todos</a>
                            <a className="nav-link" id="v-pills-willAssist-tab" data-toggle="pill" href="#v-pills-willAssist" role="tab" aria-controls="v-pills-willAssist" aria-selected="false">Asistiré</a>
                            <a className="nav-link" id="v-pills-created-tab" data-toggle="pill" href="#v-pills-created" role="tab" aria-controls="v-pills-created" aria-selected="false">Creados</a>
                            <a className="nav-link" id="v-pills-cancelados-tab" data-toggle="pill" href="#v-pills-cancelados" role="tab" aria-controls="v-pills-cancelados" aria-selected="false">Cancelados</a>
                        </div>
                    </div>
                    <div className="col-9" >
                        <div className="tab-content contenidoPrincipal" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab">
                                Eventos
                             <EventosList eventos={this.state.allEvents} joinFunction={this.join} />
                            </div>
                            <div className="tab-pane fade" id="v-pills-willAssist" role="tabpanel" aria-labelledby="v-pills-willAssist-tab">
                                Eventos <i className="fa fa-angle-right"></i> Asistiré
                            <EventosList eventos={this.state.confirmEvents} joinFunction={this.join} />
                            </div>
                            <div className="tab-pane fade" id="v-pills-created" role="tabpanel" aria-labelledby="v-pills-created-tab">
                                Eventos <i className="fa fa-angle-right"></i> Cree
                                <EventosList eventos={this.state.createdEvents} joinFunction={this.join} />
                            </div>
                            <div className="tab-pane fade" id="v-pills-cancelados" role="tabpanel" aria-labelledby="v-pills-cancelados-tab">
                                Eventos <i className="fa fa-angle-right"></i> Cancelados
                                <EventosList eventos={this.state.canceledEvents} joinFunction={this.join} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
