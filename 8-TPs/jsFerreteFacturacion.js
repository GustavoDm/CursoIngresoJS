/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var numuno;
var numdos;
var numtres;

function Sumar () 
{
var suma;
numuno= parseInt(document.getElementById("PrecioUno").value);
numdos=parseInt(document.getElementById("PrecioDos").value);
numtres=parseInt(document.getElementById("PrecioTres").value);
suma=numuno+numdos+numtres
alert("el precio es " + suma)
}
function Promedio () 
{
var promedio;
numuno= parseInt(document.getElementById("PrecioUno").value);
numdos=parseInt(document.getElementById("PrecioDos").value);
numtres=parseInt(document.getElementById("PrecioTres").value);
promedio=(numuno+numdos+numtres)/3
alert(promedio)
}
function PrecioFinal () 
{
var final;
numuno= parseInt(document.getElementById("PrecioUno").value);
numdos=parseInt(document.getElementById("PrecioDos").value);
numtres=parseInt(document.getElementById("PrecioTres").value);
final=(numuno+numdos+numtres)*1.21 
alert(final)
}