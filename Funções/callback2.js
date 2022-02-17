const notas = [7, 8, 9, 10, 5, 4, 3, 2];

//sem Callback

const notasBaixas = [];

for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

//Com Callback

const notasBaixas2 = notas.filter((nota) => nota < 7); //Com Arrow
const notasBaixas3 = notas.filter(function (nota) {
  return nota < 7;
});

// Codigo mais elegante

const notasMenorQue7 = (nota) => nota < 7;
const notasBaixas4 = notas.filter(notasMenorQue7);

// Com função

const notaMenor7 = (notas) => {
  let notasMenorQue7 = (nota) => nota < 7;
  let notasBaixas5 = notas.filter(notasMenorQue7);
  console.log(notasBaixas5);
};

console.log(notasBaixas2);
console.log(notasBaixas3);
console.log(notasBaixas4);
notaMenor7(notas);
