// Call & Apply

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

function produto(nome, preco, desc) {
  return {
    nome,
    preco,
    desc,
    getPreco,
  };
}

const produtos = produto("Notebook", 2500, 0.1);

// chamando getPreco a partir do objeto pessoa
console.log(produtos.getPreco());

// usando a funcao call passando o const produtos como parametro
console.log(getPreco.call(produtos));

const carro = { preco: 49990, desc: 0.2 };

// o call e o apply a diferença é como os parametros são passados
console.log(getPreco.call(carro, 0.17, "$"));

// apply espera que os parametros estejam dentro de um array
console.log(getPreco.apply(carro, [0.17, "$"]));
