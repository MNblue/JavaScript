//Lea tres números y devuelva el mayor.

let a = 5;
let b = 8;
let c = 11;

function numeroMayor(num1, num2, num3){

    if((num1>num2)&&(num1>num3)){
        return num1;
    }else if(num2>num3){
        return num2;
    }else{
        return num3;
    }
}

console.log(numeroMayor(a,b,c));