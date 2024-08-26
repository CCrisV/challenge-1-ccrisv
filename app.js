function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function BtnEncriptar(){
    let TextoEntrada = document.getElementById('textoUsuario').value;
    /* ---alert de prueba ---*/
    let txt =TextoEntrada.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    alert(txt);

    asignarTextoElemento('main_salida','Primer Juego');
}