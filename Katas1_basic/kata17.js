//Lea una cantidad arbitraria de nombres y devuelva la suma de todos sus caracteres.

let arrayNombres = ["Aitor","Carmen","Carlos","vanesa","Lorena"];


function nombres(nombres){

    let contador = 0;
    
    for(i=0;i<nombres.length;i++){
            contador += nombres[i].length;
    }

    return contador;
}

console.log("el total de carácteres es: "+nombres(arrayNombres));