//Haya un formulario con un campo, una caja y un botón. El botón deberá crear el contenido del formulario dentro de la caja.

function enviarTexto(){

    let texto;
    let textArea;

    //recuperamos el texto introducido por el usuario
    texto = document.getElementById('textoInicial').value;

    //asignamos el texto recuperado al textarea
    textArea = document.getElementById('areaTexto');
    textArea.value= texto;

    // Evitamos que el formulario se envíe y la página se recargue
    return false;
}