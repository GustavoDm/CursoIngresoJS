function Mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;
	while (respuesta == true) {
		contador++
		var numero = parseInt(prompt("Ingrese el numero " + contador + " al recuadro"));
		while (isNaN(numero)) {
			var numero = parseInt(prompt("Ingrese el numero " + contador + " al recuadro"));
		}
         
		repuesta = confirm("desea continuar");


	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}
//FIN DE LA FUNCIÓN