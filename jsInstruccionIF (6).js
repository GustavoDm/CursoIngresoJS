function Mostrar()
{
//tomo la edad  
var age;
age=document.getElementById("edad").value;
if(age>17)
{
alert("Eres mayor de edad")
}
else
{
    if(age>13)
    {
    alert("Eres adolecente")

    }
    else
    {
        alert("Eres niño")
    }
}

}//FIN DE LA FUNCIÓN