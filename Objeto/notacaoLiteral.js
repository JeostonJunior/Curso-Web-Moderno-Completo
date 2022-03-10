// Uso desnecessario de duplicidade na declaração do objeto

const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };

console.log(obj1, obj2);

// declarando atributos através de uma variavel já declarada

const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;

console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  //versão tradicional
  funcao1: function () {
    //...
  },
  // versão mais nova, reduzida
  funcao2() {
    //...
  },
};
