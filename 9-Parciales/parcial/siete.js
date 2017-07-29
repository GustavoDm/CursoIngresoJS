function Mostrar() {
    var nota;
    var sexo;
    var contador = 0;
    var acumulador= 0;
   var promedio;
   var min= 10;
    while (contador < 5) {
      contador++
        nota = parseInt(prompt("Ingrese la nota n°" + contador));
    

        while (nota < 0 || nota > 10) {
            nota = parseInt(prompt("valor incorrecto ingrese la nota n°" + contador));
        


        }
        sexo = prompt("ingrese su sexo")
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("valor incorrecto, ingrese su sexo");

        }
        if(nota<min)
        {
            min=nota
        }

   acumulador+=nota
console.log(acumulador)
console.log(contador)
 }
 promedio= acumulador/contador
 alert("el promedio de notas es de " +(promedio))
 alert("la nota mas baja fue de " + min)

}

