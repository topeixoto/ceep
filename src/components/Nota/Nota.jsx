import React, { Component } from "react";
import "./estilo.css";

class Nota extends Component {
  render() {
    return (
      <section className="nota">
        <header className="nota_cabecalho">
          <h3 className="nota_titulo">Título</h3>
        </header>
        <p className="nota_texto">Escreva uma nota</p>
      </section>
    );
  }
}

export default Nota;
