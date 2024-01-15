


function Mascota (nombre, edad, color, patas){
    this.nombre = "Miki";
    this.edad = 9;
    this.color = "gris";
    this.patas = 4;
    this.saludar = function() {
        console.log('¡hola, soy '+this.nombre + '!');
    }
}

let gatito = new Mascota('Miki',9,'gris',4);

console.log(gatito.nombre);
console.log(gatito["edad"]);
gatito.saludar();

