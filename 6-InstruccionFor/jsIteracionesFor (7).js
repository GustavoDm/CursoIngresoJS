function Mostrar() {
    var num = parseInt(prompt("Ingrese un numero ATR"))
    var contador = 0;
    for (i = 1; i <= num; i++) {


        if (num % i == 0) {
            console.log(num);
            contador++
        }




    }

    alert(contador)




}//FIN DE LA FUNCIÓN