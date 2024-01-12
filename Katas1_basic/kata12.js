//Lea 10 números y devuelva el mayor.

let arrayNumeros = [5,6,45,20,8,0,4,6,23,55,11];

function elMayor(numeros){
    let mayor = 0;

    for(i=0;i< numeros.length-1; i++){
        if(mayor < numeros[i]){
            mayor = numeros[i];
        }
    }
    return mayor;
}

console.log(elMayor(arrayNumeros));