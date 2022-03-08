// Coleção dinamica de ares chave/valor
/*
const produto = new Object();
produto.nome = "Cadeira";
produto["Marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["Marca do produto"];

console.log(produto);
*/
const carro = {
  modelo: "Supra",
  valor: 45000,
  proprietario: {
    nome: "Jack",
    idade: 23,
    endereco: {
      logradouro: "Rua Luciano",
      numero: 148,
    },
  },
  condutor: [
    {
      nome: "Jack",
      idade: 23,
    },
  ],
  calculaValorSeguro: function () {
    //blablabla
  },
};
/*
console.log(carro);
console.log(carro.proprietario);
console.log(carro.proprietario.endereco);
*/
carro["proprietario"]["endereco"]["logradouro"];
console.log(carro);
/*
delete carro.condutor;
delete carro.calculaValorSeguro;
console.log(carro);
*/
