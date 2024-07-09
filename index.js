function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let logo = document.getElementById("logo");

    let textoCifrado = texto
                        .replace(/a/gi, "ai")
                        .replace(/e/gi,"enter")
                        .replace(/i/gi, "imes")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    if (texto.length != 0){

        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo. textContent = "";
        logo.src = "./imagenes/2_imagen.jpg";
    } else {
        logo.scr = "./imagenes/1_imagen.jpg";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa al texto que deseas encriptar o desecriptar";
        alert ("Debes ingresar algun texto ") ;
    }


}