import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = { notas: [], categorias: ["Trabalho", "Esporte"] };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novasNotas = [...this.state.notas, novaNota];
    const novoeEtado = { notas: novasNotas };
    this.setState(novoeEtado);
  }

  deletarNota(indice) {
    const novasNotas = this.state.notas;
    novasNotas.splice(indice, 1);
    const novoEstado = { notas: novasNotas };
    this.setState(novoEstado);
  }

  adicionarCategoria(categoria) {
    const categorias = [...this.state.categorias, categoria];
    const novoEstado = { ...this.state.notas, categorias: categorias };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
