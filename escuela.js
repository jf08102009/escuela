function acciondemibotton(tipo){
	switch(tipo){
		case 'm':
		var nombre = prompt("Nombre de la Materia");
		clickmateria(nombre)
		break;
		case 's':
		var piso = prompt("¿En que Piso?");
		var aula = prompt("¿En que Aula?");
		clicksalon(aula,piso)
		break;
		case 'c':
		var escuela = prompt("¿Nombre de la Escuela?");
		var cant_ninos = prompt("¿Cantidad de Ninos?");
		var cant_ninas=prompt("¿Cantidad de Niñas?");
		clickDireccion(escuela,cant_ninos,cant_ninas)
		break;
		}
	}
function clickmateria(nombre){
	alert("El nombre de la materia es: "+nombre)
	}
	
function clicksalon(piso,aula){
	alert("El salon queda en el piso : "+piso+' aula '+aula )
	}
function clickDireccion(escuela,cant_ninos,cant_ninas){
	
	var r="La escuela : "+escuela+' tine inscrito  '+cant_ninos+' niños y '+cant_ninas+' niñas';
	alert(r)
	}

