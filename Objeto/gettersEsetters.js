const sequencia = {
  _valor: 1, // convenção, objeto privado
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

// Aplicando  o get e set, chamando para uso pratico
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

// como o valor da sequencia é menor que o valor atual, ele continua a conta ignorando o valor menor
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);
