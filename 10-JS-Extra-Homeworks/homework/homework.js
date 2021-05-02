// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matrizFinal=[];
  for(var clave in objeto){
    matrizFinal.push([clave,objeto[clave]]);
  }
  return matrizFinal;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*creo objeto vacio donde voy a almacenar todo
    recorro el string por vueltas (for in)
      miro el char de turno a ver si hay una clave que se llame asi (if)
        caso verdadero: el valor de esa clave +1
        caso falso: creo la clave con valor 1
  */
  var cantidades={};
  var letra;
  for(var i=0; i<string.length; i++){
    letra=string.charAt(i);
    if(cantidades[letra] === undefined){
      cantidades[letra]=1;
    }else{
      cantidades[letra]+=1;
    }
  }
  return cantidades;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas="";
  var minusculas="";
  for(var i=0; i<s.length; i++){
    if(s.charAt(i).toUpperCase() === s.charAt(i)){
      mayusculas += s.charAt(i);
    }else{
      minusculas += s.charAt(i);
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*
  hago bucle con toda la frase
    detecto espacios en blanco
    guardo el texto que hay entre los espacios
    guardo el texto dado vuelta en una variable
    acumulo los valores de esa variable en una nueva
  */
  var palabra="";
  var invertida="";
  var caracterActual="";
  for(var i=0; i<str.length; i++){
    caracterActual=str.charAt(i);
    palabra+=caracterActual; //"hola "
    if(caracterActual == " "){
      for(var j=palabra.length-2; j>=0; j--){
        invertida+=palabra.charAt(j);
      }
      invertida+=" ";
      palabra="";
    }else if(i+1 == str.length){
      for(var j=palabra.length-1; j>=0; j--){
        invertida+=palabra.charAt(j);
      }
    }
  }
  return invertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num=""+numero;
  var invertido="";
  for(i=num.length-1; i>=0; i--){
    invertido+=num.charAt(i);
  }
  if(num === invertido){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena="";
  for(i=0; i<cadena.length; i++){
    if(cadena.charAt(i) != "a" && cadena.charAt(i) != "b" && cadena.charAt(i) != "c"){
      nuevaCadena+=cadena.charAt(i);
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /* ["hola","ho","holass","holas","hola","holas","ho"]

     ["hola"]
     ["ho","hola","holas","holass","hola","holas","ho"]
     ["ho","hola","hola","holas","holass","holas","ho"]
     ["ho","hola","hola","holas","holas","holass","ho"]
     ["ho","ho","hola","hola","holas","holas","holass"];
  */
  arr.sort(function (a,b){
    if(a.length < b.length){
      return -1;
    }else if(a.length > b.length){
      return 1;
    }
    return 0;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arregloFinal=[];
  arreglo1.forEach(num1 => {
    arreglo2.forEach(num2 => {
      if(num1 === num2){
        arregloFinal.push(num1);
      }
    });
  });
  return arregloFinal;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

