function Carro(velocidadeMax = 200, delta = 5) {
  // Metodo Privado
  let velocidadeAtual = 0;

  // Metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMax) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMax;
    }
  };

  //Metodo publico get
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();

console.log(uno.getVelocidadeAtual());

const supra = new Carro(350, 20);
supra.acelerar();
console.log(supra.getVelocidadeAtual());
