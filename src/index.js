// import validator from './validator.js';

// console.log(validator);


// MOSTRAR PANTALLAS

function Mostrar(){
  document.getElementById("cajavalido").style.display = "block";
}

function Ocultar () {
document.getElementById("cajaPrincipal").style.display = "none";

}
// OBTENER DATOS OPCION 3

function ObtenerNumero (){
  let numero = document.getElementById("InsertarNumeroTarjeta").value;
  console.log (numero);
  Mostrar ();
  Ocultar ();
  }
  let BotonValidar = document.getElementById("ValidarTarjeta");
  BotonValidar.addEventListener("click", ObtenerNumero);

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

    

// console.log(validator);

// //PRUEBA BOTÓN
// function Prueba(){
//   let mensaje = prompt ("Hola");
// }




//   // OBTENER DATOS OPCION 1

// function ObtenerNumero(){
//   let numero = localStorage.getItem('numero');
//   console.log (numero);
// } 

// // OBTENER DATOS OPCION 2

// // var tarjeta = ""

// function Datos (){
//   var tarjeta = document.getElementById('InsertarNumeroTarjeta');
// }
   




// // TARJETA DATOS 

// const NumeroTarjeta= document.getElementById( 'NumeroT');
// NumeroTarjeta = tarjeta;




