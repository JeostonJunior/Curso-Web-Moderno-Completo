let comparaComThis = function (params) {
  console.log(this === params);
};

comparaComThis(global);

const obj = {};

comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrowFunction = (param) => console.log(this === param);
comparaComThisArrowFunction(global);
comparaComThisArrowFunction(module.exports);

comparaComThisArrowFunction = comparaComThisArrowFunction.bind(obj);
comparaComThisArrowFunction(obj);
comparaComThisArrowFunction(module.exports);
