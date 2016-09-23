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
		alert("Pulsaron el bonton coordin...")
		break;
		}
	}
function clickmateria(nombre){
	alert("El nombre de la materia es: "+nombre)
	}
	
function clicksalon(piso,aula){
	alert("El salon queda en el piso : "+piso+' aula '+aula )
	}

