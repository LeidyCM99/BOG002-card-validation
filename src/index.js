import validator from './validator.js';

console.log(validator);


// MOSTRAR PANTALLAS

function Mostrar(){
  document.getElementById("cajavalido").style.display = "block";}

function Invalido(){
  document.getElementById("cajaInvalido").style.display = "block";

function Ocultar () {
document.getElementById("cajaPrincipal").style.display = "none";}

// OBTENER DATOS 


function ObtenerNumero (){
  let numero = document.getElementById("InsertarNumeroTarjeta").value;


  let ResutadoIsValid = isValid(numero); 

  if (ResutadoIsValid) {
    Mostrar ();
    Ocultar ();
    
  } 
  else  {
    // añadir el numero a la tarjeta en pantalla
    Invalido();
    Ocultar ();
    
    
    let mensajenumero = document.querySelector("#TextoTarjeta");
    let Guardando = Maskify(numero);
    mensajenumero.textContent = Guardando;
    alert("numero invalido")
  }   
  
     
 

    // alert("numero invalido")
}
 
  let BotonValidar = document.getElementById("ValidarTarjeta");
  BotonValidar.addEventListener("click", ObtenerNumero);

  

// BOTÓN REDIRECCIONAR PANTALLA 2

function Redireccionar () {
  window.open("https://open.spotify.com/show/4PW2LRsOMXqTE4vY6m0Mp7?si=SJags5c-TsWfPVbjI6LyZg");
}
let BotonRedireccionar = document.getElementById("Redireccionar");
BotonRedireccionar.addEventListener("click", Redireccionar);


// BOTON ATRÁS PANTALLA 3

function Regresar () {
  document.getElementById("cajaInvalido").style.display = "none";
  document.getElementById("cajaPrincipal").style.display = "block"
}
let BotonRegresar = document.getElementById("atras");
BotonRegresar.addEventListener("click", Regresar);


// // TARJETA DATOS 

// Numero de la tarjeta 

let InputNumero = document.querySelector("#InsertarNumeroTarjeta");

InputNumero.addEventListener("keyup", function ()
{

  let InputTarjeta = document.querySelector("#InsertarNumeroTarjeta").value;
  let Guardando=Maskify(InputTarjeta);
  
  let mensajenumero = document.querySelector("#NumeroT");
  mensajenumero.innerText = Guardando;

  if (Guardando== "") {
    mensajenumero.innerText = "xxxx xxxx xxxxx xxxx";
  }
});

// Nombre  

let InputNombre = document.querySelector("#Nombre").value
InputNombre.addEventListener("keyup", function () {

  let Nombre = InputNombre.value;
  let Mensajenombre = document.querySelector("#NombreDeUsuario");
  Mensajenombre.innerText = Nombre;

  if (Nombre == "") {
    Mensajenombre.innerText = "Nombre y apellido";
  }
});

// Numero de identificacion

let InputDocumento = document.querySelector("#Documento");
InputDocumento.addEventListener("keyup", function () {

  let Documento = InputDocumento.value;
  let Mensajedocumento = document.querySelector("#NumeroDeDocumento");
  Mensajedocumento.innerText = Documento;


if (Documento== "") {
  Mensajedocumento.innerText = "Numero de documento";
}});

// Codigo cvv 

let InputCVV = document.querySelector("#cvv");
  InputCVV.addEventListener("keyup", function () {
  let CVV = InputCVV.value;
  let MensajeCVV = document.querySelector("#IngresoCVV");
  MensajeCVV.innerText = CVV;


if (CVV == "") {
  MensajeCVV.innerText = "CVV";}});


// ESPACIOS VACIOS 

// function validar()  {
  
  // let Numerotarjeta = document.getElementById("InsertarNumeroTarjeta").value

function isValid(NumeroDeTarjeta){ 
  // Separar los numeros e invertirlos
  let separar= NumeroDeTarjeta.split("").reverse();
  console.log (separar);

  // Obtener un nuevo array con las posiciones impares
  let numerosImpares = [] ;
  for (let i = 0; i < separar.length; i = i + 2){
    numerosImpares[i] = separar [i]
    console.log(numerosImpares[i]);
    }
    
  let listaImpares = numerosImpares.flatMap(x => [x * 1]);
  console.log (listaImpares);

  // Obtener un nuevo array con las posiciones pares
  let numerosPares = [];
  for (let i = 1; i < separar.length; i = i + 2){
    numerosPares[i] = separar [i];
    console.log (numerosPares[i]);
  }
   
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

  // Sumar todos los dígitos
  let array = listaPares.concat(listaImpares);
  console.log (array);

  let resultado= array.reduce(function(a, b){ return a + b; });
  console.log (resultado);

  let validacion =resultado%10;
  console.log( validacion);

  // Mostrar pantallas dependiendo del resultado
  if (validacion == 0) {  return true;
    
  } 
  else { return false;
    
  } 

}
      function Maskify (Numero){

      
          let ultimoDigito = Numero.slice(-4);
          let enmascarado = "#### #### #### " + ultimoDigito;
          
          return enmascarado;
         
        }
}
