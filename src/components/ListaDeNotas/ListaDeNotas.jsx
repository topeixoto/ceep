import React, { Component } from "react";
import Nota from "../Nota";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };

    this.novasNotas = this.novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this.novasNotas);
  }

  novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Nota
                indice={index}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
                deletarNota={this.props.deletarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
