const express = require ('express'); 

const server = express();
server.use(express.json());
server.listen ('3000', () => {
    console.log('server on port 3000');
})
server.get ('/',  function (req, res){
    res.send('<h1> este es mkmer hola mundo usando aiusda </h1>');
    res.end();
});
server .get ('/mision', function(req, res ){
    res.send('<h1>Mision</h1> <p>nuestra mision es ser el mejor </p>');
});
server .get ('/vision', function(req, res ){
    res.send('<h1>vision</h1> <p>nuestra vision  es ser el mejor </p>');
});
server.post ('/SobreNosotros', function (req,res){
    res.send ("<h2>sobre nosotros. conozcanos</h2>")
});
server.put ('/contactanos', function (req,res){
    res.send ("<h2>contactenos somos buena gente :)</h2>")
});
server.delete ('/cerrrarSesion', function (req,res){
    res.send ("<h2>eliminar la informacion</h2>")
});


//json
server.get ('/json1',  function (req, res){
    res.json({
        name:"sebastian",
        lastName: "lopez"
    });
});     