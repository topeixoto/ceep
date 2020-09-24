import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };

    this.novasCategorias = this.novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.novasCategorias);
  }

  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

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
          {this.props.categorias.items.map((categoria, index) => {
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
