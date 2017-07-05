function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	   num = Math.floor(Math.random()*10)+1;
	   console.log(num)
	   if(num>=9)
	   {
		   alert("EXCELENTE");
	   }
            else
			{ 
			     if(num>4)
	             {
                 alert("APROBO");
	             }
			     else
			     {
                 alert("Vamos que la proxima se puede");
			     }
			}
}//FIN DE LA FUNCIÓN