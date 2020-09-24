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
          categorias={this.categorias}
          adicionarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
          />
          <ListaDeNotas
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
