import React, { Component } from "react";
import Nota from "../Nota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Estudo", "Férias").map((categoria, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Nota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
