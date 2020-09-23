export default class Categorias {
  constructor() {
    this.items = [];
    this.inscritos = [];
  }

  inscrever(func) {
    this.inscritos.push(func);
  }

  notificar() {
    this.inscrever.forEach((func) => func(this.items));
  }

  adicionarCategoria(categoria) {
    this.items.push(categoria);
  }
}
