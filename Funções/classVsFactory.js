/*
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const pessoa = new Pessoa("Renato");
pessoa.falar();
*/

const pessoaFactory = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const pessoa = pessoaFactory("Albani");
pessoa.falar();
