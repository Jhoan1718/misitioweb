const os= require("os");
console.log("identificacion del equipo");
console.log("Procesador", os.cpus());
console.log("Arquitectura",os.platform(), os.cpus());
console.log("Memoria disponible: ", os.freemem());
console.log( os.hostname());
console.log( os.uptime());
