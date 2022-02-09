// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma função com retorn0 em uma variavel
const Soma = function (a, b) {
  return a + b;
};

console.log(Soma(2, 3));

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

// Retorno Implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(8, 3));
