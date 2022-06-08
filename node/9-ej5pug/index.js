//llamamos al modulo express 
const express = require ('express');
const app= express();
app.set('views','./vistas');
app.set('view engine', 'pug');  //motor de plantilla /pug  / js  


// configuracion de ruta por defecto

app.get ('/', function(req, res ){
 //mostrar el mensaje =    /* res.send("aplicacion iniciada"); */
    res.render('index');
});
app.listen('3000', function(){
    console.log("aplicacion iniciada en el puerto 3000");
});