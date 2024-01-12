//Lea 5 números por consola y devuelva el tercero mayor.

let contador = 0;
let arrayNumeros = [];

let readline = require('readline');
//the createInterface() method takes two arguments. The first argument will be for the standard input and the second one will be for reading the standard output.
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//El módulo Readline proporciona una forma de leer un flujo de datos, una línea a la vez.
function tresMayores() {
    console.log("contador:..............." + contador);
  
    rl.question("introduce numero: ", (respuesta) => {
      let numero = parseInt(respuesta);
  
      if (!isNaN(numero)) {
        arrayNumeros.push(numero);
        contador++;
  
        if (contador < 5) {
          tresMayores(); // Llamada recursiva para la siguiente iteración
        } else {
          console.log("Tres mayores números ingresados:", arrayNumeros.sort((a, b) => b - a).slice(0, 3));
          console.log("el tercer número mayor es: "+arrayNumeros[2]);
          rl.close();
        }
      } else {
        console.log("Por favor, introduce un número válido.");
        tresMayores(); // Llamada recursiva si la entrada no es un número válido
      }
    });
  }

tresMayores();



//console.log(arrayNumeros);
//console.log(arrayNumeros[2]);


