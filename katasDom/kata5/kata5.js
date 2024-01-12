function subrayar(){

    let elemento;
    let subrayado;

    elemento = document.getElementsByName('parrafo1')[0];

    subrayado = elemento.style.textDecoration;

    if(subrayado=="underline"){
        elemento.style.textDecoration = "";
    }else{
        elemento.style.textDecoration = "underline";
    }

}

