/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var numlar;
var numanch;
var rad;
function Rectangulo () 
{
var perimetro;
numlar=parseInt(document.getElementById("Largo").value);
numanch=parseInt(document.getElementById("Ancho").value);
perimetro=((numlar+numanch)*2)*3
alert(perimetro)
}
function Circulo () 
{
var circ;
numlar=parseInt(document.getElementById("Largo").value);
numanch=parseInt(document.getElementById("Ancho").value);
rad=parseInt(document.getElementById("Radio").value);
circ=(Math.PI*2)*3
alert(circ)	
}
function Materiales () 
{
var cal;
var cemen;    
numlar=parseInt(document.getElementById("Largo").value);
numanch=parseInt(document.getElementById("Ancho").value);	
cal= (numlar + numanch)*3
cemen= (numlar+numanch)*2
alert("se necesitan "+cemen+" de cemento "+" y "+cal+" de cal" )
}