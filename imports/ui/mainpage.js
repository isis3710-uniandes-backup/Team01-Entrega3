import React, { Component } from 'react';
import '../ui/styles/mainpage.css';


export default class mainpage extends Component {
    state = {
        allEvents : [],
        confirmEvents : [],
        createdEvents : [], 
        canceledEvents : []
    }
    render() {
        return (
            <div id="main" className="container-fluid">
                <div className="row fullrow">
                    <div className="col-3 align-items-center cardsutil">
                    <button className="btn btn-spovent" type="submit">Crear un nuevo evento</button>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">Todos</a>
                            <a className="nav-link" id="v-pills-willAssist-tab" data-toggle="pill" href="#v-pills-willAssist" role="tab" aria-controls="v-pills-willAssist" aria-selected="false">Asistiré</a>
                            <a className="nav-link" id="v-pills-created-tab" data-toggle="pill" href="#v-pills-created" role="tab" aria-controls="v-pills-created" aria-selected="false">Creados</a>
                            <a className="nav-link" id="v-pills-cancelados-tab" data-toggle="pill" href="#v-pills-cancelados" role="tab" aria-controls="v-pills-cancelados" aria-selected="false">Cancelados</a>
                        </div>
                    </div>
                    <div className="col-9" id="contenidoPrincipal" >
                        <div className="tab-content cardsutil" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab">{this.state.allEvents.map((e,i) => <H/> )}</div>
                            <div className="tab-pane fade" id="v-pills-willAssist" role="tabpanel" aria-labelledby="v-pills-willAssist-tab">{this.state.confirmEvents.map((e,i) => <H/>)}</div>
                            <div className="tab-pane fade" id="v-pills-created" role="tabpanel" aria-labelledby="v-pills-created-tab">{this.state.createdEvents.map((e,i) => <H/>)}</div>
                            <div className="tab-pane fade" id="v-pills-cancelados" role="tabpanel" aria-labelledby="v-pills-cancelados-tab">{this.state.canceledEvents.map((e,i) => <H/>)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
