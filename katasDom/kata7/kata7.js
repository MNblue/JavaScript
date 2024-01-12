

function crearCaja() {

    let padre;
    let hijo;


    padre = document.getElementById('recuadro');


    if (padre.childElementCount == 0) {

        hijo = document.createElement('div');
        document.body.appendChild(hijo);
        hijo.style.width = '50px';
        hijo.style.height = '50px';
        hijo.style.backgroundColor = 'pink';

        padre.appendChild(hijo);
    }

}