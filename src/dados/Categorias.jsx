export default class Categorias {
  constructor() {
    this.items = [];
    this.inscritos = [];
  }

  inscrever(func) {
    this.inscritos.push(func);
  }

  desinscrever(func) {
    this.inscritos = this.inscritos.filter((f) => f !== func);
  }

  notificar() {
    this.inscritos.forEach((func) => func(this.items));
  }

  adicionarCategoria(categoria) {
    this.items.push(categoria);
    this.notificar();
  }
}
