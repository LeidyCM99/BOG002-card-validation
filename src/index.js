// import validator from './validator.js';

// console.log(validator);


// MOSTRAR PANTALLAS

function Mostrar(){
  document.getElementById("cajavalido").style.display = "block";
}

function Ocultar () {
document.getElementById("cajaPrincipal").style.display = "none";
}

// OBTENER DATOS 

function ObtenerNumero (){
  let numero = document.getElementById("InsertarNumeroTarjeta").value;
  // let adjuntarnumeros = [numero];
  let separar= numero.split(/(\d)/).reverse();
  console.log (separar); 
  Mostrar ();
  Ocultar ();
  EspacioNombre();
  }    
  let BotonValidar = document.getElementById("ValidarTarjeta");
  BotonValidar.addEventListener("click", ObtenerNumero);

// ESPACIOS VACIOS 

function EspacioNombre(){
  // let Nombre = document.getElementById("Nombre").value;
  // if (document.getElementById("Nombre")=="") {
    alert("Por favor complete todos los campos");}

// BOTON REDIRECCIONAR PANTALLA 2

let LinkSpotify;

function Redireccionar () {
  LinkSpotify = window.open("https://open.spotify.com/show/4PW2LRsOMXqTE4vY6m0Mp7?si=SJags5c-TsWfPVbjI6LyZg");
}
let BotonRedireccionar = document.getElementById("Redireccionar");
BotonRedireccionar.addEventListener("click", Redireccionar);


// BOTON ATRÁS PANTALLA 3

function Regresar () {
  document.getElementById("cajaInvalido").style.display = "none";
}
let BotonRegresar = document.getElementById("atras");
BotonRegresar.addEventListener("click", Regresar);

// // TARJETA DATOS 



  
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

    let InputNombre = document.querySelector("#Nombre")

        InputNombre.addEventListener("keyup", function(){
        let Nombre = InputNombre.value;
        let Mensajenombre = document.querySelector("#NombreDeUsuario");
        Mensajenombre.innerText = Nombre;


        if (Nombre == ""){
          Mensajenombre.innerText = "Nombre y apellido";
        }

      });
       let InputDocumento = document.querySelector("#Documento")

         InputDocumento.addEventListener("keyup", function(){
         let Documento = InputDocumento.value;
         let Mensajedocumento= document.querySelector(".NumeroDeDocumento");
         Mensajedocumento.innerText = Documento;
       });

       let InputCVV = document.querySelector("#cvv")

       InputCVV.addEventListener("keyup", function(){
       let CVV = InputCVV.value;
       let MensajeCVV= document.querySelector(".IngresoCVV");
       MensajeCVV.innerText = CVV;
     });


// function mostrarnumero(){
//    numero = document.getElementById( 'InsertarNumeroTarjeta').value;
//     ;
// }
// siguiente.addEventListener("click", mostrarnumero);
// ESPACIOS VACIOS 



  


// // TARJETA DATOS 

// function mostrarnumero(){
//    numero = document.getElementById( 'InsertarNumeroTarjeta').value;
//     ;
// }
// siguiente.addEventListener("click", mostrarnumero);
     

     

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
   



