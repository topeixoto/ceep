import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteIcon } from "../../assets/img/delete-icon.svg";

class Nota extends Component {
  apagar() {
    this.props.deletarNota(this.props.indice);
  }

  render() {
    return (
      <section className="nota">
        <header className="nota_cabecalho">
          <h3 className="nota_titulo">{this.props.titulo}</h3>
          <DeleteIcon onClick={this.apagar.bind(this)} />
        </header>
        <p className="nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default Nota;
