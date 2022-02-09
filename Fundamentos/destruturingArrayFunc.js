function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const random = ([min = 0, max = 1000]) => {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

console.log(rand([10, 500]));
console.log(random([, 200]));
console.log(random([]));
