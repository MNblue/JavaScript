



function crearMascota(nombre, edad, color, patas) {
    return {
        nombre: "Miki",
        edad: 9,
        color: color,
        patas: 4,

        saludar: function () {
            console.log('¡hola, soy ' + this.nombre + '!');
        }
    }
}

    let gatito = crearMascota('Miki', 9, 'gris', 4);

    console.log(gatito.nombre);
    console.log(gatito["edad"]);
    gatito.saludar();