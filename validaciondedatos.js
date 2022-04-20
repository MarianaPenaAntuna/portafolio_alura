document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
});

function validarFormulario(event){
    event.preventDefault();
    var nombre = document.getElementById("nombreapellido").value;
    var email = document.getElementById("correoelectronico").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre.length > 30) {
        alert(" el nombre supera la cantidad de caracteres permitidos");
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("los caracteres no corresponden a un email");
    } else if (asunto.length > 50) {
        alert (" el asunto supera la cantidad de caracteres permitidos");
    } else if (mensaje.lenght > 300) {
        alert("el mensaje supera la cantidad de caracteres permitidos");
    } return document.getElementById("btn").disabled = true;
};




