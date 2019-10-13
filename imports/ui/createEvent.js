import React from 'react';

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      lugar: "",
      fecha: "",
      deporte: "",
      cantidadPersonas: "",
      createFunction: this.props.createFunction
    }
    this.changeValue = this.changeValue.bind(this);
    this.create=this.create.bind(this);
  }
  create(){
    let ev={
      nombre:this.state.nombre,
      lugar:this.state.lugar,
      fecha:this.state.fecha,
      deporte:this.state.deporte,
      cantidadPersonas:this.state.cantidadPersonas
    };
    this.state.createFunction(ev);
  }
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
    } else{
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
            <div className="form-group mb-3">
              <label>Nombre Completo:</label>
              <input id="nombre" type="text" className="form-control" aria-label="nombre" placeholder="ej: Juan Sarmiento" varia-describedby="basic-addon1" value={this.state.nombre} onChange={this.changeValue}></input>
            </div>
            <div className="form-group-group mb-3">
              <label>Lugar:</label>
              <input id="lugar" type="text" className="form-control" aria-label="lugar" placeholder="ej: La caneca" varia-describedby="basic-addon1" value={this.state.lugar} onChange={this.changeValue}></input>
            </div>
            <div className="form-group mb-3">
              <label>Fecha:</label>
              <small className="form-text text-muted">dd/MM/aaaa</small>
              <input id="fecha" type="text" className="form-control" aria-label="fecha" placeholder="ej: 01/10/2019" varia-describedby="basic-addon1" value={this.state.fecha} onChange={this.changeValue}></input>

            </div>
            <div className="form-group mb-3">
              <label>Deporte:</label>
              <input id="deporte" type="text" className="form-control" aria-label="deporte" placeholder="ej: Tenis" aria-describedby="basic-addon1" value={this.state.deporte} onChange={this.changeValue}></input>
            </div>
            <div className="form-group mb-3">
              <label>Cantidad Personas:</label>
              <input id="cantidad" type="number" className="form-control" aria-label="cantidad" placeholder="ej: 5" aria-describedby="basic-addon1" value={this.state.cantidadPersonas} onChange={this.changeValue}></input>
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