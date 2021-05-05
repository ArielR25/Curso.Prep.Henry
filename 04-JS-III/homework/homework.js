// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  /*
  for(i=0; i<array.length ; i++){
    array[i]+=1;
  }
  return array;
  */
 /*
  for(var numero in array){
   array[numero]+=1;
 }
 return array;
 */
 return array.map(function(x){
   return x+1;
 });
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  /*
  var miFrase = palabras[0];
  for(i=1; i<palabras.length; i++){
    miFrase+=" ";
    miFrase += palabras[i];
  }
  return miFrase;
  */
 return palabras.reduce(function(anterior,actual){
   return anterior+" "+actual;
 });
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  /*
  for(i=0; i<array.length; i++){
    if(elemento == array[i]){
      return true;
    }
  }
  return false;
  */
  return array.some(function(x){
    if(x===elemento){
      return true;
    }
    return false;
  });
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  /*
  var total = 0;
  for(i=0; i<numeros.length; i++){
    total += numeros[i];
  }
  return total;
  */
  return numeros.reduce(function(previo,actual){
    return previo+actual;
  });
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  /*
  var totalSuma = 0;
  for(i=0; i<resultadosTest.length; i++){
    totalSuma += resultadosTest[i];
  }
  return totalSuma/resultadosTest.length;
  */
 return agregarNumeros(resultadosTest)/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  /*
  var mayor;
  mayor = numeros[0];
  for(i=1; i<numeros.length; i++){
    if(mayor < numeros[i]){
      mayor = numeros[i];
    }
  }
  return mayor;*/
  return numeros.reduce(function(previo,actual){
    return previo>=actual?previo:actual;
  });
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  /*
  var numero = 1;
  if(arguments.length == 0){
    return 0;
  }else{
    for(i=0; i<arguments.length; i++){
      numero *=arguments[i];
    }
    return numero;
  }*/
  return arguments.length===0?0:Array.from(arguments).reduce(function(anterior,actual){
    return anterior*actual;
  },1);
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  /*
  var cantidad=0;
  for(i=0; i<arreglo.length; i++){
    if(arreglo[i]>18){
      cantidad++;
    }
  }
  return cantidad;
  */
  return arreglo.reduce(function(anterior,actual){
    if(actual>18){
      return anterior+1;
    }else{
      return anterior;
    };
  },0);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia == 1 || numeroDeDia == 7){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n += "";
  if(n[0] == 9){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  /*
  for(i=0; i<arreglo.length-1; i++){
    if(arreglo[i] != arreglo[i+1]){
      return false;
    }
  }
  return true;
  */
  return arreglo.every(function(x){
    if(arreglo[0]===x){
      return true;
    }else{
      return false;
    }
  });
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var emn=[];
  for(i=0; i<array.length; i++){
    if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
      emn.push(array[i]);
      if(emn.length == 3){
        return emn;
      }
    }
  }
  return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  /*
  var mayoresACien=[];
  for(i=0; i<array.length; i++){
    if(array[i] > 100){
      mayoresACien.push(array[i]);
    }
  }
  return mayoresACien;
  */
  return array.filter(x=>x>100);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arrayNumeros=[];
  for(i=0; i<10; i++){
    numero+=2;
    arrayNumeros[i]=numero;
    if(i == 9){
      return arrayNumeros;
    }
    if(i == numero){
      break;
    }
  }
  return "Se interrumpió la ejecución";
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arrayNum=[];
  for(i=0; i<10; i++){
    if(i==4){
      continue;
    }
    numero+=2;
    arrayNum.push(numero);
  }
  return arrayNum;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
