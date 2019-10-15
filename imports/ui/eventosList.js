import React from 'react';
import Event from './event';
import { Users, Events } from "../api/mongoSettings";

export default class EventosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            joinFunction: this.props.joinFunction
        }
    }

    componentDidMount() {
        let ev = [];
        let ev2 = Users.findOne({ username: this.props.username }).subscribedEvents;
        let ev3 = Users.findOne({ username: this.props.username }).eventsOffered;
        if (this.props.identificador === 0) {
            ev = Events.find({}).fetch();
            let dif = [];
            console.log(ev);
            for (let i = 0; i < ev.length; i++) {
                let existe = false;
                for (let j = 0; j < ev2.length; j++) {
                    if (ev[i].name === ev2[j].name) {
                        existe = true;
                    }
                }
                if(!existe){
                    dif.push(ev[i]);
                }
            }
            console.log(dif);
            let dif2 = [];
            for (let i = 0; i < dif.length; i++) {
                let existe = false;
                for (let j = 0; j < ev3.length; j++) {
                    if (dif[i].name === ev3[j].name) {
                        existe = true;
                    }
                }
                if(!existe){
                    dif2.push(ev[i]);
                }
            }
            console.log(dif2);
            ev=dif2;
            
        } else if (this.props.identificador === 1) {
            ev = ev2;
        } else {
            ev = ev3;
        }

        this.setState({
            eventos: ev
        });
    }
    componentDidUpdate(prevProps) {

        if (this.props.evento !== prevProps.evento && this.props.identificador === 2) {
            console.log(this.props.evento);
            let ev = this.state.eventos;
            ev.push(this.props.evento);
            this.setState({
                eventos: ev
            })
        }
    }

    render() {
        return (
            <div className="row">
                {this.state.eventos.map((e, i) => <Event key={i} event={e} joinFunction={this.state.joinFunction} id={this.props.identificador} />)}
            </div>
        )
    };

}