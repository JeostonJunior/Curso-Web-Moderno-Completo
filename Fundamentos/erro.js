// const imprimirNomeGritado = (obj) => {
//   console.log(obj.name.toUpperCase() + "!!!");
// };

// const obj = { name: "Ronaldo" };

// imprimirNomeGritado(obj);

const tratarErroELancar = (error) => {
  throw new Error("....");
};

const imprimirNomeGritado = (obj) => {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (error) {
    tratarErroELancar(error);
  } finally {
    console.log("Final");
  }
};

const obj = { nome: "Ronaldo" };

imprimirNomeGritado(obj);
