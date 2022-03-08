function restoDivisao(dividendo, divisor) {
  const parteInteira = Math.trunc(dividendo / divisor);
  const resto = dividendo % divisor;
  return { parteInteira, resto };
}

console.log(restoDivisao(5, 3));
