function ocultar(){

    let texto;
    let propiedadOculo;
    
    texto = document.getElementById('texto');
    propiedadOculo = texto.style.display;

    if(propiedadOculo=='none'){
        texto.style.display = '';
    }else{
        texto.style.display = 'none';
    }

}