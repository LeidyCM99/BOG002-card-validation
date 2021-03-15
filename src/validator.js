const validator = { 
isValid() , Maskify() 
} ;

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

Maskify();function Maskify(Numero) {

  let ultimoDigito = Numero.slice(-4);
  let enmascarado = "#### #### #### " + ultimoDigito;

  return enmascarado;
}




export default validator;

