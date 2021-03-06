import validator from './validator.js';

// console.log(validator);

// MOSTRAR PANTALLAS

function Mostrar(){
  document.getElementById("cajavalido").style.display = "block";}

function Invalido(){
  document.getElementById("cajaInvalido").style.display = "block";}

function Ocultar () {
document.getElementById("cajaPrincipal").style.display = "none";}

function OcultarCompras(){
  document.getElementById("cajaCompras").style.display = "none";
  document.getElementById("cajaPrincipal").style.display = "block";}

  let BotonContinuar = document.getElementById("ContinuarCompra");
  BotonContinuar.addEventListener("click", OcultarCompras);

// OBTENER DATOS 

function ObtenerNumero (event){
  event.preventDefault()
  let numero = document.getElementById("InsertarNumeroTarjeta").value;
  let ResutadoIsValid = validator.isValid(numero); 
  if (ResutadoIsValid) {
    Mostrar ();
    Ocultar ();
    let mensajenumero = document.querySelector("#TextoValido");
    let Guardando = validator.maskify(numero);
    mensajenumero.textContent = Guardando;
  } 
  else  {
    // añadir el numero a la tarjeta en pantalla
    Invalido();
    Ocultar (); 
    let mensajenumero = document.querySelector("#TextoTarjeta");
    let Guardando = validator.maskify(numero);
    mensajenumero.textContent = Guardando;
    alert("numero invalido")} 
  }    
 
  let BotonValidar = document.getElementById("form");
  BotonValidar.addEventListener("submit", ObtenerNumero);

// BOTÓN REDIRECCIONAR PANTALLA 2

function Redireccionar () {
  window.open("https://open.spotify.com/show/4PW2LRsOMXqTE4vY6m0Mp7?si=SJags5c-TsWfPVbjI6LyZg");
}
let BotonRedireccionar = document.getElementById("Redireccionar");
BotonRedireccionar.addEventListener("click", Redireccionar);

// BOTON ATRÁS PANTALLA 3

function Regresar () {
  document.getElementById("cajaInvalido").style.display = "none";
  document.getElementById("cajaPrincipal").style.display = "block";
}
let BotonRegresar = document.getElementById("atras");
BotonRegresar.addEventListener("click", Regresar);

// // TARJETA DATOS 

// Numero de la tarjeta 

let InputNumero = document.querySelector("#InsertarNumeroTarjeta");

InputNumero.addEventListener("keyup", function (){
  let InputTarjeta = document.querySelector("#InsertarNumeroTarjeta").value;
  let Guardando = validator.maskify(InputTarjeta);
  
  let mensajenumero = document.querySelector("#NumeroT");
  mensajenumero.innerText = Guardando;

  if (Guardando== "") {
    mensajenumero.innerText = "xxxx xxxx xxxxx xxxx";  }
});

// Nombre  

let InputNombre = document.querySelector("#Nombre");
InputNombre.addEventListener("keyup", function () {

  let Nombre = InputNombre.value;
  let Mensajenombre = document.querySelector("#NombreDeUsuario");
  Mensajenombre.innerText = Nombre;

  if (Nombre == "") {
    Mensajenombre.innerText = "Nombre y apellido";  }
});

// Numero de identificacion

let InputDocumento = document.querySelector("#Documento");
InputDocumento.addEventListener("keyup", function () {

  let Documento = InputDocumento.value;
  let Mensajedocumento = document.querySelector("#NumeroDeDocumento");
  Mensajedocumento.innerText = Documento;

  if (Documento == "") {
    Mensajedocumento.innerText = "Numero de documento";  }
});

// Codigo cvv 

let InputCVV = document.querySelector("#cvv");
InputCVV.addEventListener("keyup", function () {
  let CVV = InputCVV.value;
  let MensajeCVV = document.querySelector("#IngresoCVV");
  MensajeCVV.innerText = CVV;

  if (InputCVV == "") {
    MensajeCVV.innerText = "CVV";}
});




