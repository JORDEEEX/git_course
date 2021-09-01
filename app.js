/*
//este es un comentario
var nombre='samuel';
console.log(nombre);
console.log(typeof(nombre));

var edad = 21;
console.log(edad);
console.log(typeof(edad));

var edad = 'cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 210.35;
console.log(sueldo);
console.log(typeof(sueldo));

var trabajoest = false;
console.log(trabajoest);
console.log(typeof(trabajoest));

var puestotraba;
console.log(puestotraba);

puestotraba = null;
console.log(puestotraba);
*/

//operadores matematicos
/*
 var edadAna, edadMaria, diferenciaEdad;
 var sumaEdad, yearAna, yearMaria, yearActual;
 edadAna=34;
 edadMaria=28;
 yearActual= 2021;
 diferenciaEdad=edadAna-edadMaria;
 sumaEdad=edadAna+edadMaria;
 yearAna=yearActual-edadAna;
 yearMaria=yearActual-edadMaria;
 console.log(diferenciaEdad);
 console.log(sumaEdad);
 console.log('año en que nacio Ana ' + yearAna);
 console.log('año en que nacio Maria ' + yearMaria);
 console.log(yearActual * 5);
 console.log(yearActual / 2);
 */

 // operadores logicos, unarios y de asignacion
 //logicos < > <= >= ==

var edadAna, edadMaria, diferenciaEdad;
edadAna=34;
edadMaria=28;
var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);
//unarios, ++  y --
//edadAna++
console.log(++edadAna)
//asignacion, +=, -=, *= /= %=
var a = 12;
var b = 5;
var c= a % 5; //residuo de una divison
console.log(c)

//a= a+b;
a+=b;
console.log(a)