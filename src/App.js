import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import Notas from "./dados/Notas";
import Categorias from "./dados/Categorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notas = new Notas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.items}
          adicionarNota={this.notas.adicionarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias.items}
            adicionarCategoria={this.categorias.adicionarCategoria}
          />
          <ListaDeNotas
            deletarNota={this.notas.deletarNota}
            notas={this.notas.items}
          />
        </main>
      </section>
    );
  }
}

export default App;
