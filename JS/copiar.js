
function copiarPortapapeles(){
    var copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');  

}
 //botn copiar
 botonCopiar.onclick = copiarPortapapeles;