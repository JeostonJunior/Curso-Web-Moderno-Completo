const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();

/*
function minhaFuncao(props) {
  console.log(props);
}

function exec(props) {
  minhaFuncao(props);
}

exec(valor);
*/
