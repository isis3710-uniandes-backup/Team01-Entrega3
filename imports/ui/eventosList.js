import React from 'react';
import Event from './event';

export default class EventosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: this.props.eventos,
            joinFunction: this.props.joinFunction
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