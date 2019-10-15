import React from 'react';
import Event from './event';
import { Users, Events } from "../api/mongoSettings";

export default class EventosList extends React.Component {
    constructor(props) {
        super(props);
        let eventos=[];
        if(this.props.identificador===0){
            eventos=Events.find({});
        }else if(this.props.identificador===1){
            eventos=Users.findOne({username: this.props.username}).subscribedEvents;
        }else{
            eventos=Users.findOne({username: this.props.username}).offeredEvents;
        }
        this.state = {
            eventos: this.props.eventos,
            joinFunction: eventos
        }
    }


    render() {
        console.log(this.state);
        return (
            <div className="row">
                {this.state.eventos.map((e, i) => <Event key={i} event={e} joinFunction={this.state.joinFunction}/>)}
            </div>
        )
    };

}