//Lea 10 nombres y los devuelva ordenados alfabéticamente.

let arrayNombres = ["Aitor", "maria", "Elena", "juan", "Carlos", "Luis","sandra","Sara","Miki"];

function ordenarNombres(nombres){
    // Aplicar toLowerCase a cada elemento del array
    var arrayMinusculas = nombres.map(function(elemento) {
            return elemento.toLowerCase();
    });
    
    arrayMinusculas.sort();

    return arrayMinusculas;

}

console.log(ordenarNombres(arrayNombres));