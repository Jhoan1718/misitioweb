const fs= require("fs");

//mi primero callback

fs.readFile('\Prueba.txt',  'UTF-8',(err,data)=>{
    if(err){
        console.log("Error:" ,err);
    }
    else{
        console.log(data);
    }

});
let insertarTexto = "holis vengo desde node.js V2"
fs.writeFile('\Prueba.txt', insertarTexto, function(err){
    if(err){
        console.log("Error",err);
}
else{
    console.log("Operacion finalizada con exito");
}
});
