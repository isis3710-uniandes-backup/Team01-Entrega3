import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      lugar: "",
      fecha: new Date(),
      deporte: "",
      cantidadPersonas: "",
      descripcion: "",
      createFunction: this.props.createFunction
    }
    this.changeValue = this.changeValue.bind(this);
    this.create = this.create.bind(this);
  }
  create() {
    if(this.state.nombre!==""&&this.state.lugar!==""&&this.state.date!==""&&this.state.sport!==""&&this.state.people!=="")
    {
    const ev = {
      name: this.state.nombre,
      address: this.state.lugar,
      date: this.state.fecha,
      sport: this.state.deporte,
      detail: this.state.descripcion,
      people: this.state.cantidadPersonas
    };
    this.state.createFunction(ev);
  }else{
    Swal.fire({
      type: 'error',
      title: 'Campo(s) vacio(s)',
      text: 'Rellena todos los campos requeridos para poder crear tu evento',
      timer: 1500
  });
  }
  }
  setSelectedDate = date => {
    this.setState({
        fecha: date
    })
};
  changeValue(e) {
    if (e.target.id === "lugar") {
      this.setState({
        lugar: e.target.value
      });
    } else if (e.target.id === "nombre") {
      this.setState({
        nombre: e.target.value
      });
    } else if (e.target.id === "deporte") {
      this.setState({
        deporte: e.target.value
      });
    } else if (e.target.id === "fecha") {
      this.setState({
        fecha: e.target.value
      });
    } else if (e.target.id === "descripcion") {
      this.setState({
        descripcion: e.target.value
      });
    } else {
      this.setState({
        cantidadPersonas: e.target.value
      });
    }

  }

  render() {
    return (

      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Nuevo Evento</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <TextField
                  required
                  id="nombre"
                  label="Nombre"
                  defaultValue={this.state.nombre}
                  onChange={this.changeValue}
                  margin="normal"
                />
                <TextField
                  id="descripcion"
                  label="Info adicional"
                  defaultValue={this.state.descripcion}
                  onChange={this.changeValue}
                  margin="normal"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDateTimePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Fecha"
                      disablePast="true"
                      format="MM/dd/yyyy HH:mm"
                      value={this.state.fecha}
                      onChange={this.setSelectedDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
              <div className="col-md-6">
                <TextField
                  required
                  id="lugar"
                  label="Ubicacion"
                  defaultValue={this.state.lugar}
                  onChange={this.changeValue}
                  margin="normal"
                />
                <TextField
                  required
                  id="deporte"
                  label="Deporte"
                  defaultValue={this.state.deporte}
                  onChange={this.changeValue}
                  margin="normal"
                />
                <TextField
                  required
                  id="cantidad"
                  label="Cantidad de Personas"
                  defaultValue={this.state.cantidadPersonas}
                  onChange={this.changeValue}
                  margin="normal"
                  type="number"
                  min="0"
                  step="1"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={this.create} data-dismiss="modal">Crear</button>
            </div>
          </div>
        </div>
      </div >
    );

  }

}
