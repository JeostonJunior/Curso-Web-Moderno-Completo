function operacaoComValoresEmParametro(valor1, valor2) {
  let soma = valor1 + valor2;
  let subtracao = valor1 - valor2;
  let multiplicacao = valor1 * valor2;
  let divisao = valor1 / valor2;

  return { soma, subtracao, multiplicacao, divisao };
}

console.log(operacaoComValoresEmParametro(10, 5));
