function normalFunctionDobro(a) {
  return 2 * a;
}

// Arrow function

const arrowFuntionDobro = (a) => 2 * a;
console.log(arrowFuntionDobro(Math.PI));

let ola = function () {
  return "Olá";
};

ola = () => "Olá";
ola = _ => "Olá"; // Possui um parametro
console.log(ola());
