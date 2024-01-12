function cambiaTexto(){
    let nodoTexto;
    let textoNuevo;


    nodoTexto = document.getElementsByTagName('p')[0];
    textoNuevo = prompt("cuál es el nuevo texto? :");
    nodoTexto.textContent = textoNuevo;

}