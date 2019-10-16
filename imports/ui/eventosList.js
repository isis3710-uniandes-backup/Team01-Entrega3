import React from 'react';
import Event from './event';
import { Users, Events } from "../api/mongoSettings";

export default class EventosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            eventosReales : [],
            joinFunction: this.props.joinFunction,
            disJoinFunction: this.props.disJoinFunction,
            criteria: ""
        }
    }

    componentDidMount() {
        let ev = [];
        let ev2 = Users.findOne({ username: this.props.username }).subscribedEvents;
        let ev3 = Users.findOne({ username: this.props.username }).eventsOffered;
        if (this.props.identificador === 0) {
            ev = Events.find({}).fetch();
            let dif = [];
            for (let i = 0; i < ev.length; i++) {
                let existe = false;
                for (let j = 0; j < ev2.length; j++) {
                    if (ev[i].name === ev2[j].name) {
                        existe = true;
                    }
                }
                if (!existe) {
                    dif.push(ev[i]);
                }
            }
            let dif2 = [];
            for (let i = 0; i < dif.length; i++) {
                let existe = false;
                for (let j = 0; j < ev3.length; j++) {
                    if (dif[i].name === ev3[j].name) {
                        existe = true;
                    }
                }
                if (!existe) {
                    dif2.push(dif[i]);
                }
            }
            ev = dif2;

        }
        else if (this.props.identificador === 1) {
            ev = ev2;
        } else {
            ev = ev3;
        }

        this.setState({
            eventos: ev,
            eventosReales : ev
        });
    }
    componentDidUpdate(prevProps) 
    {

        if (this.props.createdEvent !== prevProps.createdEvent && this.props.identificador === 2) 
        {
            let ev = this.state.eventos;
            ev.push(this.props.createdEvent);
            this.setState({
                eventos: ev
            });
        }  
          if (this.props.joinedEvent !== prevProps.joinedEvent && this.props.identificador === 1) 
        {
            let ev = this.state.eventos;
            ev.push(this.props.joinedEvent);
            this.setState({
                eventos: ev
            })
        }
        else if (this.props.joinedEvent !== prevProps.joinedEvent && this.props.identificador === 0) 
        {
            let ev = this.state.eventos;
            console.log(this.props.joinedEvent);
           ev = ev.filter( e => {return e._id !== this.props.joinedEvent._id })
            this.setState({
                eventos: ev
            })
        }

         if (this.props.disJoinedEvent !== prevProps.disJoinedEvent && this.props.identificador === 1) 
         {
            let ev = this.state.eventos;
            console.log(this.props.disJoinedEvent);
            ev = ev.filter( e => {return e._id !== this.props.disJoinedEvent._id})
            this.setState({
                eventos: ev
            })
        }
       else  if (this.props.disJoinedEvent !== prevProps.disJoinedEvent && this.props.identificador === 0) {
            let ev = this.state.eventos;
            ev.push(this.props.disJoinedEvent);
            this.setState({
                eventos: ev
            })
        }

    }
    filtering = e => {
        let criteria = e.target.value;
        let filtered = this.state.eventosReales;
        let filtr = filtered.filter(
            element => {
                console.log(element.name.includes(criteria));
                return element.name.includes(criteria);
            }
        );
        if(criteria === '')
        {
            filtr = this.state.eventosReales;
        }
        this.setState({
            eventos: filtr,
            criteria : criteria
        });
    }

    render() {
        return (
            <div>
                <input className="form-control" type="text" id="myInput" onChange={this.filtering} value={this.state.criteria} placeholder="Busca por el nombre del evento deportivo.." />
                <div className="row">
                    {this.state.eventos.map((e, i) => <Event key={i} event={e} criteria={this.state.criteria} joinFunction={this.state.joinFunction} disJoinFunction={this.state.disJoinFunction} id={this.props.identificador} />)}
                </div>
            </div>
        )
    };

}
