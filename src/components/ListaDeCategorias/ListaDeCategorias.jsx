import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  handleEventoInput(e) {
    if (e.key === "Enter") {
      const categoria = e.target.value;
      this.props.adicionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="categorias">
        <ul className="categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li className="categorias_item" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
