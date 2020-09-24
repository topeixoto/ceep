import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = { categorias: [] };
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";

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

  handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  adicionarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.adicionarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.adicionarNota.bind(this)}>
        <select onChange={this.handleMudancaCategoria.bind(this)}>
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
