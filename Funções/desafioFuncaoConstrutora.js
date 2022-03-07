function Pessoa(nome) {
  this.nome = nome;

  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const pessoa = new Pessoa("Renato");
pessoa.falar();
