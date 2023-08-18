var fotografia=function(nombre){
    document.getElementById('foto').src="img/"+ nombre + ".jpg"
}
function cambioColor(color) {
    var tituloElement = document.getElementById("principal"); 
    tituloElement.style.backgroundColor = color;
}

function texto() {
    var textomemeElement = document.getElementById("textomeme"); 
    var tituloElement = document.getElementById("texto"); 
    
    tituloElement.textContent = textomemeElement.value; 
}
function enviarNombre() {
    var nombreCompleto = document.getElementById("nombreCompleto"); 
    document.getElementById("resultadoNombre").innerHTML=nombreCompleto
}






