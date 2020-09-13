import React, { Component } from "react";
import "./estilo.css";

class Nota extends Component {
  render() {
    return (
      <section className="nota">
        <header className="nota_cabecalho">
          <h3 className="nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default Nota;
