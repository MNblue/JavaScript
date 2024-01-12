// Haya un formulario con tres campos, una caja y un botón. El botón deberá crear el contenido de los tres campos dentro de la caja, a la vez.


function enviarTexto(){

    let texto1
    let texto2;
    let texto3;
    let textArea;

    //recuperamos los textos introducido por el usuario
    texto1 = document.getElementById('texto1').value;
    texto2 = document.getElementById('texto2').value;
    texto3 = document.getElementById('texto3').value;

    //asignamos el texto recuperado al textarea
    textArea = document.getElementById('areaTexto');
    textArea.value= texto1 +" "+ texto2+" " + texto3 + " ";

    // Evitamos que el formulario se envíe y la página se recargue
    return false;
}