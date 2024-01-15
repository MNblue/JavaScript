function Mascota (nombre, edad, color, patas){
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.patas = patas;
    this.saludar = function() {
        console.log('¡hola, soy '+this.nombre + '!');
    }
}

let gatito = new Mascota('Miki',9,'gris',4);

console.log(gatito.nombre);
console.log(gatito["edad"]);
gatito.saludar();


let gatito2 = new Mascota('Gisidoro',5,'multicolor',4);
let gatito3 = new Mascota('Gblankito',8,'blanco',4);
let gatito4 = new Mascota('fufu',2,'negro',3);
let gatito5 = new Mascota('tommy',5,'rallado',4);

function ordenarGatitos(gatito, gatito2,gatito3, gatito4, gatito5){

    console.log([gatito.edad, gatito2.edad, gatito3.edad, gatito4.edad, gatito5.edad].sort());

}

ordenarGatitos(gatito, gatito2, gatito3, gatito4, gatito5);


// un array es un objeto
let cadenita = new Array(3);
cadenita[0] = "hola";
console.log(cadenita);