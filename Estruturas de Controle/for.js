let contador = 1;
while (contador <= 10) {
  console.log(`Contador = ${contador}`);
  contador++;
}
console.log("Saiu do laço while\n");

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}
console.log("Saiu do laço for\n");

const notas = [6, 7, 8, 9, 10, 3];
for (let i = 0; i < notas.length; i++) {
  console.log(`Nota = ${notas[i]}`);
}
console.log("Saiu do laço for\n");
