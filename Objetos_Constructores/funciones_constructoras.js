


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

