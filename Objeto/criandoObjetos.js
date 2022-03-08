// Usando a notação literal

const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funçoes construtoras

function Produto(nome, preco, desc) {
  // preço e desconto ficam encapsulados
  // nome fica publico
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Guaraná", 6.5, 0.15);
const p2 = new Produto("Celular", 1299.98, 0.1);
console.log("Função Construtora");
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("Renato", 5400, 6);
const f2 = criarFuncionario("Marisa", 8200, 4);
console.log("Função Factory");
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha.nome);

// Uma Função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
