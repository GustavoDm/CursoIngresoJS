function Mostrar() {
    var importe=0;
    var contador = 1;
    var max= 0;
    var min= 0;
    var bandera= true;
    
    while (contador < 24) {

        importe = parseInt(prompt("Ingrese el importe del dia nº" + contador));
        console.log(importe)
        while (importe <= 0) {
            importe = parseInt(prompt("Importe incorrecto ingrese otro"));

        }
        if (bandera) {
            max = importe
            min = importe
            bandera = false
        }
        else if (importe > max) {
            max = importe

        }
        else if (importe < min) {
            min = importe
        }
        contador++
        




    }
    alert("el mayor importe fue de " + max + " y el menor de " + min)
}