function BtnEncriptar(){
    let TextoEntrada = document.getElementById('textoUsuario').value;
    /* ---alert de prueba ---*/
    let txt =TextoEntrada.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    

    if(txt == ""){
        alert("Ingrese texto porfavor");
    }else{
        document.getElementById("SalidaTexto").value = txt;
        document.getElementById("ImgMuneco").style.visibility = 'hidden';
        document.getElementById("DivText").style.visibility = 'hidden';
    }


}