"use strict"
/* perimer forma de declarar un aarys  */
 var usuario1 = new Array ();
 usuario1 [0] = 1;
 usuario1 [1] = 1004083140;
 usuario1 [2] = "Roberto";
 usuario1 [3] = "Gómez";
 usuario1 [4] = "2012-11-25";
 usuario1 [5] = "Cartagena";
 usuario1 [6] = "Latam";

 /* segunda forma  */
 var usuario2 = new Array (2, "1004083140", "Johan Sebastian", "2010-05-03", "San Andres", "Avianca");

 /* tercera froma */
 var usuario3 = [3,"100408640", "sebastian", "2003-05-03", "cartagena", "America Airlines" ]

 console.log ("nombre usuario 1: "+ usuario1 [2]);
 console.log ("nombre usuario 2: "+ usuario2 [2]);
 console.log ("nombre usuario 3: "+ usuario3 [2]);

 /* sitema que me permita contar los caracteres de una fase  
 si el usuario supero el tope, imformar a travez de un mensaje*/
 /*  length= longitud de caracteres */ 
  var mensajeUsuario  = "no mames we";
  var longitudMensajeUsuario = mensajeUsuario.length;

  if ( longitudMensajeUsuario >20) {
      console.log ("el mensaje exede los caracteres permitiddos" );

  }
  else if (longitudMensajeUsuario <20 ) {
      console.log ("el mensaje se envio correctamente ");
  }
  else {
      console.log ("ha ocurrido un error ")
  }
  
