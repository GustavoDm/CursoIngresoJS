function Mostrar() {


  
        var num = parseInt(prompt("Ingrese un numero ATR"))
        var contador = 0;
        for (i = 1; i <= num; i++) 
        {


            if (num % i == 0) 
            {

                contador++
            }
            
        }
  if (contador == 2) 
            {
                alert("es primo")

            }

            else 
            {
                alert("no es primo")
            }
    

    }//FIN DE LA FUNCIÓN