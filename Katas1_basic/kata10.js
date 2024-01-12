//Lea dos números y devuelva “Verdadero” si los dos son positivos o los dos son negativos. En caso contrario, que devuelva “Falso”.

let numero1 = 4;
let numero2 = 9;

function compararNumeros(num1,num2){

    if((num1>=0&&num2>=0)||(num1<0 && num2<0)){
        return true;
    }else{
        return false;
    }
}

console.log(compararNumeros(numero1,numero2));