



function crearMascota(nombre, edad, color, patas) {
    return {
        nombre: nombre,
        edad: edad,
        color: color,
        patas: patas,

        saludar: function () {
            console.log('¡hola, soy ' + this.nombre + '!');
        }
    }
}

    let gatito = crearMascota('Miki', 9, 'gris', 4);

    console.log(gatito.nombre);
    console.log(gatito["edad"]);
    gatito.saludar();