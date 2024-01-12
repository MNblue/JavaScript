// Haya un recuadro, un botón que permita crear cajas dentro de ese recuadro y otro botón
// que permita eliminarlas, de una en una.

let contador;


function addCaja(){

    let cajaPadre;
    let numeroHijos = 0;
    let anchuraHijos = "0px";
    let nodoTexto;
    let anchuraPadre;
    
    nodoTexto = document.getElementById("contador");
    contador = parseInt(nodoTexto.textContent);

    cajaPadre = document.getElementById("cuadroPrincipal");

    //antes de añadir una nueva caja debemos verificar que hay espacio en la caja padre y si no lo hay agrandarla. 
    //en este caso solo tenemos en cuenta la anchura, los hijos se añaden todos en 1 sola fila
    numeroHijos = cajaPadre.childElementCount;
    anchuraHijos = (50*numeroHijos);
    anchuraPadre = cajaPadre.style.width.slice(0,-2);
  

    if(parseInt(anchuraHijos,10) >= parseInt(anchuraPadre,10) ){
         anchuraPadre=parseInt(anchuraPadre)+50;
        cajaPadre.style.width = anchuraPadre+"px";
        //ahora si podemos añadir hijo
        addHijo(cajaPadre);
        contador ++;
        nodoTexto.textContent = contador;
        

    }else{
        //como hay espacio suficiente añadimos el hijo sin mas
        addHijo(cajaPadre);
        contador++;
        nodoTexto.textContent = contador;
    }

}

function addHijo(cajaPadre){
    let cajaHijo;

    cajaHijo = document.createElement('div');
    document.body.appendChild(cajaHijo);
    cajaHijo.textContent = contador;
    cajaHijo.style.width = '50px';
    cajaHijo.style.height = '50px';
    cajaHijo.style.backgroundColor = 'pink';

    cajaPadre.appendChild(cajaHijo);

}


function deleteCaja(){

    let cajitas;
    let padre;
    let caja;
    let nodoTexto;
    let cajaPadre;
    
    //elminar hijo
    padre = document.getElementById("cuadroPrincipal");
    cajitas = padre.childNodes;
    caja = cajitas[cajitas.length-1];
    padre.removeChild(caja);
    //actualizar contador
    contador --;
    nodoTexto = document.getElementById("contador");
    nodoTexto.textContent = contador;
    //actualizar anchura de la caja grande, pero solo si es mayor a 200px más pequeña no la hacemos
    cajaPadre = document.getElementById("cuadroPrincipal");
    anchuraPadre = cajaPadre.style.width.slice(0,-2);
    if(anchuraPadre>200){
        anchuraPadre=parseInt(anchuraPadre)-50;
        cajaPadre.style.width = anchuraPadre+"px";
    }
}