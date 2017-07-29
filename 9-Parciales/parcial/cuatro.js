function Mostrar()
{
var numUno, numDos;
numUno=parseInt(prompt("ingrese un numero por favor"));
numDos=parseInt(prompt("Ingrese otro numero por favor"));

if(numUno==numDos)
{
    document.write(numUno*numDos);
}
else if(numUno>numDos){
document.write(numUno-numDos)

}
else
{
document.write(numUno+numDos);
}
}
