// Novo Recurso do ES2015

const pessoa = {
  nome: "Ana",
  idade: "18",
  endereco: {
    logradouro: "Rua 123",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;

console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep = true },
} = pessoa;
console.log(logradouro, numero, cep);
