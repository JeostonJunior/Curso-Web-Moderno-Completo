//Closures é um escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas à função

// Contexto léxico em ação!

/*
const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();

console.log(minhaFuncao());
*/

/*
function soma(x) {
  return (y) => x + y;
}

const somaX = soma(2);
const somaY = somaX(3);

console.log(somaY);
*/

function retornaNome() {
  let nome = "Renato";
  return () => nome;
}

const retornouNome = retornaNome();
console.log(retornouNome());
