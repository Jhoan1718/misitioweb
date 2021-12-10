"use strict"
var fechaActual = new Date ();
console.log (fechaActual);

/* metodos para deacomponer la fecha  */

var anyoActual = fechaActual.getFullYear ();
console.log ("Año Actual" + anyoActual);
var mesActual = fechaActual.getMonth ();
console.log ("mes actual: " + (mesActual +1));
var diaActual = fechaActual.getDate ();
console.log ("dia actual:" + diaActual);
var diaSemana = fechaActual.getDay ();
console.log ("dia semana:" + diaActual);
var HoraActual = fechaActual.getHours ();
console.log("Hora actual:" + HoraActual);
var minutosActual = fechaActual.getMinutes ();
console.log("minutos actual:" + minutosActual);
var segundosActual = fechaActual.getSeconds ();
console.log("segundos actual:" + segundosActual);
var msActual = fechaActual.getMilliseconds ();
console.log("miliseguendos actual:" + msActual);
var ms1970 = fechaActual.getTime ();
console.log("Ms actual:" + ms1970);

/* console.log("Hoy es" + 10 del mes 12 del año 2021. Son las 16:40); */

var diaActual = fechaActual.getDate ();
var mesActual = fechaActual.getMonth (); 
var anyoActual = fechaActual.getFullYear ();
console.log ("hoy es" + (" " ) + diaActual +(" ") + ("del mes")+ (" ") + (mesActual + 1) + (" ") +("son las") + (" ") + HoraActual + (":")+ minutosActual );


/* especifica una fecha */
var diasSemanas = ["domiengo", "lunes",  "martes", "miercoles", "jueves", "viernes", "sabado"];
var diaSemanaStr = diaSemana [diaSemana];






