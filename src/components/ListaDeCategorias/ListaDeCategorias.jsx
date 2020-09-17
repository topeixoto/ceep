import React, { Component } from "react";

class ListaDeCategorias extends Component {
  handleEventoInput(e) {
    if (e.key === "Enter") {
      const categoria = e.target.value;
      this.props.adicionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section>
        <ul>
          {this.props.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>;
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
