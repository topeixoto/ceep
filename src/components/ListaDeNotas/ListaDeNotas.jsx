import React, { Component } from "react";
import Nota from "../Nota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Nota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
