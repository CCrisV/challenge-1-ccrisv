function BtnEncriptar(){
    let TextoEntrada = document.getElementById('textoUsuario').value;
    let txt =TextoEntrada.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    

    if(txt == ""){
        alert("Ingrese texto porfavor");
        document.getElementById("SalidaTexto").value = "";
        document.getElementById("BtnCopiar").style.visibility = 'hidden';
        document.getElementById("ImgMuneco").style.visibility = 'visible';
        document.getElementById("DivText").style.visibility = 'visible';
    }
    else if(TextoEntrada !== txt){
        alert("El texto ingresado no debe tener acentos ni caracteres especiales");
        document.getElementById("SalidaTexto").value = "";
        document.getElementById("BtnCopiar").style.visibility = 'hidden';
        document.getElementById("ImgMuneco").style.visibility = 'visible';
        document.getElementById("DivText").style.visibility = 'visible';
    }
    else if(TextoEntrada !== TextoEntrada.toLowerCase()){
        alert("El texto ingresado no debe tener mayusculas");
        document.getElementById("SalidaTexto").value = "";
        document.getElementById("BtnCopiar").style.visibility = 'hidden';
        document.getElementById("ImgMuneco").style.visibility = 'visible';
        document.getElementById("DivText").style.visibility = 'visible';
    }
    else{
        txt = txt.replace(/e/mg,"enter");
        txt = txt.replace(/i/mg,"imes");
        txt = txt.replace(/a/mg,"ai");
        txt = txt.replace(/o/mg,"ober");
        txt = txt.replace(/u/mg,"ufat");
        document.getElementById("SalidaTexto").value = txt;
        document.getElementById("ImgMuneco").style.visibility = 'hidden';
        document.getElementById("DivText").style.visibility = 'hidden';
        document.getElementById("BtnCopiar").style.visibility = 'visible';
    }
}

function BtnDesencriptar(){
    let TextoEntrada = document.getElementById('textoUsuario').value;
    let txt =TextoEntrada.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    

    if(txt == ""){
        alert("Ingrese texto porfavor");
        document.getElementById("SalidaTexto").value = "";
        document.getElementById("BtnCopiar").style.visibility = 'hidden';
        document.getElementById("ImgMuneco").style.visibility = 'visible';
        document.getElementById("DivText").style.visibility = 'visible';
    }
    else if(TextoEntrada !== txt){
        alert("El texto ingresado no debe tener acentos ni caracteres especiales");
        document.getElementById("SalidaTexto").value = "";
        document.getElementById("BtnCopiar").style.visibility = 'hidden';
        document.getElementById("ImgMuneco").style.visibility = 'visible';
        document.getElementById("DivText").style.visibility = 'visible';
    }
    else if(TextoEntrada !== TextoEntrada.toLowerCase()){
        alert("El texto ingresado no debe tener mayusculas");
        document.getElementById("SalidaTexto").value = "";
        document.getElementById("BtnCopiar").style.visibility = 'hidden';
        document.getElementById("ImgMuneco").style.visibility = 'visible';
        document.getElementById("DivText").style.visibility = 'visible';
    }
    else{
        txt = txt.replace(/enter/mg,"e");
        txt = txt.replace(/imes/mg,"i");
        txt = txt.replace(/ai/mg,"a");
        txt = txt.replace(/ober/mg,"o");
        txt = txt.replace(/ufat/mg,"u");
        document.getElementById("SalidaTexto").value = txt;
        document.getElementById("ImgMuneco").style.visibility = 'hidden';
        document.getElementById("DivText").style.visibility = 'hidden';
        document.getElementById("BtnCopiar").style.visibility = 'visible';
    }
}
function BtnCopiar(){
        document.querySelector(".main_salida").select();
        document.execCommand('copy');
}