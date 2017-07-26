function Mostrar() {
    var num = parseInt(prompt("ingrese un numero"));
    for (; num != 9;) {

        console.log(num)
        var num = parseInt(prompt("ingrese un numero"));
        if (num == 9) {
            break;
        }
        else {     //este else, enrealidad no hace nada, es lo mismo no ponerlo.
            var num = parseInt(prompt("ingrese un numero"));
        }
    }
}//FIN DE LA FUNCIÓN