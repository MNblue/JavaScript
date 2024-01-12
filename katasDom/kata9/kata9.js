/* Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro hasta
cinco veces máximo. */



function addCaja(){

    let cajaPadre;
    let numeroHijos = 0;
    let alturaPadre;
    let alturaHijos = "0px";
    let contador;
    let nodoTexto;
    
    nodoTexto = document.getElementById("contador");
    contador = parseInt(nodoTexto.textContent);

    cajaPadre = document.getElementById("cuadroPrincipal");

    //antes de añadir una nueva caja debemos verificar que hay espacio en la caja padre y si no lo hay agrandarla. 
    //en este caso solo tenemos en cuenta la altura, los hijos se añaden todos en 1 sola columna
    numeroHijos = cajaPadre.childElementCount;
    alturaHijos = (50*numeroHijos);
    alturaPadre = cajaPadre.style.height.slice(0,-2);

    if((parseInt(alturaHijos,10) >= parseInt(alturaPadre,10))&&(contador<5) ){
        //caja padre llena, debemos hacerla mas grande en altura.
        alturaPadre=parseInt(alturaPadre)+50;
        cajaPadre.style.height = alturaPadre+"px";
        //ahora si podemos añadir hijo
        addHijo(cajaPadre);
        contador ++;
        nodoTexto.textContent = contador;
        

    }else if(contador<5){
        //como hay espacio suficiente añadimos el hijo sin mas
        addHijo(cajaPadre);
        contador++;
        nodoTexto.textContent = contador;
    }else{
        alert("Ya no puedes crear mas cajitas");
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
