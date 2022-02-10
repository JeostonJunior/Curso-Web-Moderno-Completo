const pessoa = {
  saudacao: "Bom Dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falei = pessoa.falar;
falei();

const falei2 = pessoa.falar.bind(pessoa);
falei2();
