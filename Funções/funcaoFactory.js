// Factory simples
/*
function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Julia",
  };
}

console.log(criarPessoa());
*/

function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

console.log(criarPessoa("Ana", "Julia"));
