

let mascota = {
    nombre : "Miki",
    edad: 9,
    color: "gris",
    patas: 4,
    saludar: function() {
        console.log('¡hola, soy '+this.nombre + '!');
    }
}

console.log(mascota.nombre);
console.log(mascota["edad"]);
mascota.saludar();