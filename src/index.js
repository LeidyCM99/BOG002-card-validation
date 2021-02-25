// import validator from './validator.js';

// console.log(validator);
// MOSTRAR PANTALLAS



// // TARJETA DATOS 

// function mostrarnumero(){
//    numero = document.getElementById( 'InsertarNumeroTarjeta').value;
//     ;
// }
// siguiente.addEventListener("click", mostrarnumero);

  
  // nombra el input con la variable
let InputNumero = document.querySelector("#InsertarNumeroTarjeta")

// añade al input un evento por letra digitada y en el evento la funcion 
    InputNumero.addEventListener("keyup", function(){
      // le doy valor al input y un creo otra variable
      let tarjeta = InputNumero.value; 

      // nombro el texto con una variable
      let mensajenumero = document.querySelector("#NumeroT");

      // Uno la variable del input con la variable del texto de la tarjeta
      // y edito lo que hay dentro del texto con inner
      mensajenumero.innerText = tarjeta;

      if (tarjeta == "") {
        mensajenumero.innerText = "xxxx xxxx xxxxx xxxx";
        
      }
    });

    

