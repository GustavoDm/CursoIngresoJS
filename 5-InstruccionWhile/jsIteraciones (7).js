function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta=true;
	
	while (respuesta==true) {
		contador++
		var numero = parseInt(prompt("Ingrese el numero " + contador + " al recuadro"));
		while (isNaN(numero)) {
			var numero = parseInt(prompt("Ingrese el numero " + contador + " al recuadro"));
		}
		acumulador+=numero;
		repuesta=confirm("desea continuar");


	}




	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN