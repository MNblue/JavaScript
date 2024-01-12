//Lea tu nombre y devuelva “¡Hola tuNombre! Tu nombre tiene n caracteres.” Donde n sea la cantidad de caracteres de tuNombre.

let myName = "maria";

function nombre(name){
    let numCaracteres = name.length;

    return "¡Hola "+name+"! Tu nombre tiene "+numCaracteres+" caracteres.";
}

console.log(nombre(myName));