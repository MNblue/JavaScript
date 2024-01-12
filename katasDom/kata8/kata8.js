

function addCaja(){

    let cajaPadre;
    let numeroHijos = 0;
    let alturaPadre;
    let alturaHijos = "0px";
    

    cajaPadre = document.getElementById("cuadroPrincipal");

    //antes de añadir una nueva caja debemos verificar que hay espacio en la caja padre y si no lo hay agrandarla. 
    //en este caso solo tenemos en cuenta la altura, los hijos se añaden todos en 1 sola columna
    numeroHijos = cajaPadre.childElementCount;
    alturaHijos = (50*numeroHijos);
    alturaPadre = cajaPadre.style.height.slice(0,-2);

    if(parseInt(alturaHijos,10) >= parseInt(alturaPadre,10) ){
        //caja padre llena, debemos hacerla mas grande en altura.
        alturaPadre=parseInt(alturaPadre)+50;
        cajaPadre.style.height = alturaPadre+"px";
        //ahora si podemos añadir hijo
        addHijo(cajaPadre);
    }else{
        //como hay espacio suficiente añadimos el hijo sin mas
        addHijo(cajaPadre);
    }

}

function addHijo(cajaPadre){
    let cajaHijo;

    cajaHijo = document.createElement('div');
    document.body.appendChild(cajaHijo);
    cajaHijo.style.width = '50px';
    cajaHijo.style.height = '50px';
    cajaHijo.style.backgroundColor = 'pink';

    cajaPadre.appendChild(cajaHijo);


}