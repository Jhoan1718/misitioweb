"use strict"

var edadUsuaurio =9;
var destinoUsuario = "Cartagena";
var aerolineaUsuaurio = "latam";
var destinoDescuento = "Cartagena"
var aerolineaDescuento = "latam"
var costoTiquete = 250000;
var descuento  = .10;
var costofinal = 0;
var descuentoUsuario = "";

if ( edadUsuaurio <11 || edadUsuaurio>=70 ); {
 costoTiquete = costoTiquete - (costoTiquete * descuento)
 descuentoUsuario = "edad";
    if (destinoUsuario === destinoDescuento) {
    costoTiquete = costoTiquete - (costoTiquete * descuento)
    descuentoUsuario = descuentoUsuario + ", destino";
     }
     if (aerolineaUsuaurio === aerolineaDescuento) {
     costoTiquete = costoTiquete - (costoTiquete * descuento)
     descuentoUsuario += "y por aerolinea"
   }
if (destinoUsuario != "") {
    console.log
}
}


/* sistema de votacion */

var edad = 18

if ( edad >=18  ) {
    console.log ("puede votar el usuario");
}
else {
    console.log ("el usuario no puede votar")
}