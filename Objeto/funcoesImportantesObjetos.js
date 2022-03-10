const pessoa = {
  nome: "Ana",
  idade: 23,
  peso: 58,
};

console.log("Object Keys\n");
console.log(Object.keys(pessoa));
console.log("Object Values\n");
console.log(Object.values(pessoa));
console.log("Object Entries\n");
console.log(Object.entries(pessoa));
console.log("Object Assign\n");
console.log(Object.assign(pessoa));

console.log("Object Assign ForEach\n");
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "22/02/2001",
});

pessoa.dataNascimento = "14/03/2014";

console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
// Concatenação dos elementos em um objeto

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);
