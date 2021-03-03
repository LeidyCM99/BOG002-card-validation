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

  // Poner numeros en un array 
  let adjuntarnumeros = [numero];

  // Separar los numeros e invertirlos
  let separar= numero.split("").reverse();
  console.log (separar);

  // Obtener un nuevo array con las posiciones impares
  let numerosImpares = [];
  for (let i = 1; i < separar.length; i = i + 2){
    numerosImpares [i] = separar [i];
    console.log (numerosImpares [i]);
  }
  // let resultadoImpar = separarImpares.reduce(function(a, b){ return a + b; });
  // console.log (resultadoImpar);
  
  // Obtener un nuevo array con las posiciones pares
  let numerosPares = [];
  for (let i = 0; i < separar.length; i = i + 2){
    numerosPares[i] = separar [i];
    console.log (numerosPares[i]);
  }

  // Multiplicar por 2 las posiciones pares
  let listaPares =  numerosPares.flatMap(x => [x * 2]);
  console.log (listaPares);

  // Sumar el resultado si es de dos dígitos
  for (let i = 0; i < listaPares.length; i = i + 1){
    let elementoActual = listaPares[i]
    if (elementoActual > 9){
      let numeroDerecho = elementoActual % 10
      let numeroIzquierdo = parseInt(elementoActual / 10)
      listaPares[i] = numeroIzquierdo + numeroDerecho
    }
  }
  console.log (listaPares);

  // let resultadoPar = listaPares.reduce(function(a, b){ return a + b; });
  // console.log (resultadoPar);

  // Sumar todos los dígitos
  let array = listaPares.concat(numerosImpares);
  console.log (array);

  let resultado= array.reduce(function(a, b){ return a + b; });
  console.log (resultado);

  // let resultado = listaPares+numerosImpares.reduce(function(a, b){ return a + b; });
  // console.log (resultado)
    
  
  // let array1 = [listaPares];
  // let array2 = [numerosImpares];
  // let array3 = []
  // for (let i=0; i<resultado.length; i++) {
  //   array3 = listaPares + numerosImpares
  // }
  // console.log (array3)

//   for (var i=0; i<array3.length; i++) {
// alert("Resultado " + i + " : " + array3[i]);



  // console.log (suma);



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
  
