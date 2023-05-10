// variables boton
var botonUno = document.querySelector("#boton_ecriptar");
var botonCopiar = document.querySelector("#btn-copiar");

// declaracion variables/accion
var encriptacionExitosa = "Texto encriptado:";
var desencriptacionExitosa = "Texto desencriptado:";

var si = "";
var no = "none";

function resultado(ver) {
  document.getElementById("con-resultado").style.display = ver;
  document.getElementById("btn-copiar").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

document.getElementById("toy").style.display = "";

resultado(no);

function encriptar() {
  document.getElementById("toy").style.display = "none";
  var msjEncriptado = "";
  var mensaje = document.querySelector("#introducir-texto").value;
  // condicional no mayusculas
  var mayus = /[A-Z]/g;
  // condicional caracteres especiales
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'1234567890]/g;

  if (mensaje == "") {
    alert("No debe estar vacio");
    document.getElementById("toy").style.display = "";
    resultado(no)
  } else if (mensaje.match(mayus) != mensaje.match(mayus)) {
    alert("No puede contener mayusculas");
    document.getElementById("toy").style.display = "";
  } else if (mensaje.match(caracteres) != mensaje.match(caracteres)) {
    alert("Caracteres especiales o numeros no son compatibles");
    document.getElementById("toy").style.display = "";
  } else {
    // condicionales
    for (var i = 0; i < mensaje.length; i++) {
      if (mensaje[i] == "a") {
        var encriptando = mensaje[i].replace("a", "ai",);
        msjEncriptado = msjEncriptado + encriptando;
      } else if (mensaje[i] == "e") {
        var encriptando = mensaje[i].replace("e", "enter");
        msjEncriptado = msjEncriptado + encriptando;
      } else if (mensaje[i] == "i") {
        var encriptando = mensaje[i].replace("i", "imes");
        msjEncriptado = msjEncriptado + encriptando;
      } else if (mensaje[i] == "o") {
        var encriptando = mensaje[i].replace("o", "ober");
        msjEncriptado = msjEncriptado + encriptando;
      } else if (mensaje[i] == "u") {
        var encriptando = mensaje[i].replace("u", "ufat");
        msjEncriptado = msjEncriptado + encriptando;
      } else {
        msjEncriptado = msjEncriptado + mensaje[i];
      }
    }
    document.getElementById("titulo-resultado").innerHTML = encriptacionExitosa;
    document.getElementById("resultado").innerHTML = msjEncriptado;
    document.getElementById("introducir-texto").value = "";
    resultado(si)
  }
}


// accion boton
botonUno.onclick = encriptar;


