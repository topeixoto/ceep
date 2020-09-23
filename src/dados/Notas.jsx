export default class Notas {
  constructor() {
    this.items = [];
    this.inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const nota = new Nota(titulo, texto, categoria);
    this.items.push(nota);
  }

  deletarNota(indice) {
    this.items.splice(indice, 1);
  }

  inscrever(func) {
    this.inscritos.push(func);
  }

  notificar() {
    this.inscrever.forEach((func) => func(this.items));
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
