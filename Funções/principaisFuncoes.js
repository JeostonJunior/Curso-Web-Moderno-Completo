// Função é First-Class Object (Citizens)
// Higher-order function

// Criar Função literal
function functionLiteral() {}

// Armazenar em uma variavel
const functionVariavel = function () {};

// Armazenar em um array
const functionArray = [
  function (a, b) {
    return a + b;
  },
  functionLiteral,
  functionVariavel,
];
console.log(functionArray[0](2, 3));

// Armazenar em um atributo de objeto

const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

// Passar função como parametro

function run(fun) {
  fun();
}

run(function () {
  console.log("Executando");
});

// Uma função pode retornar/conter uma função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);

// Ou pode até armazenar em uma variavel e chamar novamente
const somar = soma(2, 3);
somar(5);
