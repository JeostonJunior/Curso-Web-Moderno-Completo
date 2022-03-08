function removendoDecimais(valorDecimal, moeda = "R$") {
  return `${moeda} ${valorDecimal.toFixed(2)}`;
}

console.log(removendoDecimais(0.2200000004));
