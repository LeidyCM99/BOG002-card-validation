const validator = {
  // ...
};

// // MASKIFY
// let InputTarjeta = document.querySelector("#InsertarNumeroTarjeta")
// InputTarjeta.addEventListener("keyup", function maskify(InputTarjeta){
//   return InputTarjeta.replace(/.(?=.{4})/g, "#");
// }

let InputTarjeta = document.querySelector("#InsertarNumeroTarjeta").value;
console.log (InputTarjeta)
let ultimoDigito = InputTarjeta.slice(-4);
let maskify = "########" + ultimoDigito;
console.log (maskify)


export default validator;
