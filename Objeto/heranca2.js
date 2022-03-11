// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = "0"; // não recomendado o uso desse atributo

const avo = { attr1: "A" }; // aponta para Object.prototype
const pai = { __proto__: avo, attr2: "B", attr3: "3" };
const filho = { __proto__: pai, attr3: "C" };
// console.log(filho.attr1);
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}KM/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, //shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

// referência o filho(ferrari, volvo) com o objeto pai (carro)
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

ferrari.aceleraMais(100);
ferrari.aceleraMais(100);
console.log(ferrari.status());
console.log(volvo.status());
volvo.aceleraMais(100);
console.log(volvo.status());
