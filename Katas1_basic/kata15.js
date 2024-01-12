//Lea 10 números y devuelva los negativos.

function numNegativos(){

    let arrayNum = [10, 345, 0, -2, 34,-27,1,-8,9,-245];
    let arrayAuxiliar = [];

    for(i=0;i<arrayNum.length ;i++){
        if(arrayNum[i]<0){
            arrayAuxiliar.push(arrayNum[i]);
            // console.log(arrayNum[i]);
            // console.log(i);
        }
    }
    return arrayAuxiliar;
}

console.log(numNegativos());