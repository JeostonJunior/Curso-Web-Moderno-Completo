function classificandoTriangulos(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é Equilátero");
  } else if (
    (ladoA === ladoB && ladoB !== ladoC) ||
    (ladoB === ladoC && ladoC !== ladoA) ||
    (ladoC === ladoA && ladoA !== ladoB)
  ) {
    console.log("O triângulo é Isósceles");
  } else {
    console.log("O triângulo é Escaleno");
  }
}

classificandoTriangulos(5, 2, 5);
