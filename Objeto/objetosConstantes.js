// Uso do Object.freeze para tornar um objeto constantes

// -> ponteiro
// 456 or 321 endereço de mémoria

// Pessoa -> 456 -> {...}

const pessoa = { nome: "Renata" };

pessoa.nome = "Ana";

console.log(pessoa);

Object.freeze(pessoa);

pessoa.nome = "Maria";

// o objeto tornou-se a constante, ou seja, o objeto agora é constante e imutavel
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Jade" });

pessoaConstante.nome = "Agatha";

console.log(pessoaConstante);
