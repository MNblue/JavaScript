
let mascotaPrototipo = {
    nombre : "",
    edad: 0,

    saludar: function() {
        console.log('¡hola, soy '+ this.nombre + '!');
    }
}


let miki = Object.create(mascotaPrototipo);

miki.nombre = 'Miki';
miki.edad = 9;
miki.color = 'gris';
miki.patas = 4;

miki.saludar();
console.log(miki.nombre);
console.log(miki["edad"]);
