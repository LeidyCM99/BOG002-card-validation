import validator from './validator.js';

console.log(validator);





// MOSTRAR PANTALLAS

function Mostrar(){
  document.getElementById("cajavalido").style.display = "block";
}

function Ocultar () {
document.getElementById("cajaPrincipal").style.display = "none";

}
// ESPACIOS VACIOS 

function validar() {
  var Numerotarjeta = document.getElementById("InsertarNumeroTarjeta").value


if (Numerotarjeta == ""){
    alert("Debes llenar el campo");
       let deshabilitar= BotonValidar.addEventListener("click", ObtenerNumero);
          deshabilitar.disable = true;
  return false

}else {
    alert("pago realizado")
  return false
}
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
  let resultadoImpar = separarImpares.flatMap(x=> [x-1]);
  console.log (resultadoImpar);
  
  // Obtener un nuevo array con las posiciones pares
  let numerosPares = [];
  for (let i = 0; i < separar.length; i = i + 2){
    numerosPares[i] = separar [i];
    console.log (numerosPares[i]);
  }

  // Multiplicar por 2 las posiciones pares
  // let multiplicar =  numerosPares.flatMap(x => [x * 2]);
  // console.log (multiplicar);

  // multiplicar.forEach(function (elemento) {
    
  //   console.log (elemento)
  // });

   
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
    
  
  validar ();
  Mostrar ();
  Ocultar ();
  
  }    
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

  let BotonValidar = document.getElementById("ValidarTarjeta");
  BotonValidar.addEventListener("click", ObtenerNumero);




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

// Numero de la tarjeta 

  

let InputNumero = document.querySelector("#InsertarNumeroTarjeta") 
    InputNumero.addEventListener("keyup", function(){


      let tarjeta = InputNumero.value; 
      let mensajenumero = document.querySelector("#NumeroT");
      mensajenumero.innerText = tarjeta;

      if (tarjeta == "") {
        mensajenumero.innerText = "xxxx xxxx xxxxx xxxx";
        
      }
    });
// Nombre  

    let InputNombre = document.querySelector("#Nombre")
        InputNombre.addEventListener("keyup", function(){
          
        let Nombre = InputNombre.value;
        let Mensajenombre = document.querySelector("#NombreDeUsuario");
        Mensajenombre.innerText = Nombre;


        if (Nombre == ""){
          Mensajenombre.innerText = "Nombre y apellido";
        }
      });

// Numero de identificacion

       let InputDocumento = document.querySelector("#Documento")

         InputDocumento.addEventListener("keyup", function(){
         let Documento = InputDocumento.value;
         let Mensajedocumento= document.querySelector(".NumeroDeDocumento");
         Mensajedocumento.innerText = Documento;
       });
// Codigo cvv 
       let InputCVV = document.querySelector("#cvv")

       InputCVV.addEventListener("keyup", function(){
       let CVV = InputCVV.value;
       let MensajeCVV= document.querySelector(".IngresoCVV");
       MensajeCVV.innerText = CVV;
     });


