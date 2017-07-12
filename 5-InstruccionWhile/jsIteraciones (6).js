function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var num;
	var prom;


	while (contador < 5) {
		contador++
		num = parseInt(prompt("ingrese un numero"));
		console.log(num)
		while (isNaN(num)) {
			num = parseInt(prompt("Numero incorrecto pro favor ingrese otro"));
	
		}
		acumulador += num;

	                    }
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;



}//FIN DE LA FUNCIÓN