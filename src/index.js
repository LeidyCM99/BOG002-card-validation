// import validator from './validator.js';

// console.log(validator);

// //PRUEBA BOTÓN
// function Prueba(){
//   let mensaje = prompt ("Hola");
// }


// MOSTRAR PANTALLAS

function Mostrar(){
    document.getElementById("cajavalido").style.display = "block";
  }

function Ocultar () {
  document.getElementById("cajaPrincipal").style.display = "none";
}

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

// const NumeroTarjeta= document.getElementById( 'NumeroT');
// NumeroTarjeta = tarjeta;




