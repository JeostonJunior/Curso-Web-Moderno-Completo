// IIFE -> Immediately Invoked Function Expression

/*
(function () {
  console.log("Será executado na hora!");
  console.log("Foge do escopo mais abrangente");
})();
*/

// Erro por falta de ;
/*
const self = this

(function IIFE(){
    console.log(self === this)
}

)()

*/

// Codigo correto

const self = this;

(function IIFE() {
  console.log(self === this);
})();
