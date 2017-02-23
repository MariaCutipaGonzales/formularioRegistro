function mostrarDatos(){
	var nombre=document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var direcc = document.getElementById("direc").value;

	var inputAll = document.getElementsByClassName("all");
 
if (inputAll[0].value.length == 0 || inputAll[1].value.length == 0 || inputAll[2].value.length == 0 || inputAll[3].value.length == 0) {
	alert("vacios");
}else{

	document.getElementById("result").innerHTML= 
        "<ul>" + 
          "<li>Nombre: " + nombre + "</li>" +
          "<li>Apellido: " + apellido + "</li>" +
          "<li>DNI: " + dni + "</li>" +
          "<li>Dirección: " + direcc + "</li>" +
        "</ul>";
	}
}

