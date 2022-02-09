const notas = [6, 7, 8, 9, 10, 3];

for (let i in notas) {
  console.log(`Nota ${i} =`, notas[i]);
}

console.log("Saiu do laço For\n");

const pessoa = {
  nome: "Ana",
  sobrenome: "Clara",
  idade: "21",
  peso: "65.3",
};

for (let atributo in pessoa) {
  console.log(`${atributo} =`, pessoa[atributo]);
}
console.log("\nSaiu do laço For\n");
