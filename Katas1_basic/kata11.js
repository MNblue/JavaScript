//Lea dos números y devuelva “Verdadero” si uno es negativo y el otro positivo. En caso contrario, que devuelva “Falso”.

let a = -1;
let b = -5;

function comparar(num1,num2){

    if((num1>=0&&num2<0)||(num1<0&&num2>=0)){
        return true;
    }else{
        return false;
    }
}

console.log(comparar(a,b));