

class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.Marca = marca ;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}
let auto = new Automovil (" Apple Iphone 12", "̶$6̶`̶0̶0̶0̶.̶0̶0̶0̶", "$ 5'000.000", "img/Iphone1.jpg");

function validarMazda () {
    alert(auto.Marca + "" + auto.Modelo + ""  + " El automovil que necesitas¡¡");
    
    mostrarVehiculo();
}
function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("main_content");
    let contentAuto   = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "div");
    

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);
    marcaAuto.setAttribute("class", "label1");


    let modeloAuto  =  document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);
    modeloAuto.setAttribute("class", "label2");

    let precioAuto = document.createElement("label");
    contentAuto.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "label3");


    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "img");
}

let toyota = new Automovil ("Apple Iphone 12 pro", "En 36x $141.667 ", "$ 5'100.000", "img/iphone2.jpg");

function validarToyota () {
    alert (toyota.Marca + " " + toyota.Modelo + " " + "El auto perfecto para salir de paseo con tu familia o amigos¡¡")

    mostrarToyota ();
}

function mostrarToyota () {
    let contenedorPrinToyota = document.getElementById("main_content");
    let contentToyota        = document.createElement("div");
    contenedorPrinToyota.appendChild(contentToyota);
    contentToyota.setAttribute("class", "div");

    let marcaToyota = document.createElement("label");
    contentToyota.appendChild(marcaToyota);
    let textToyotaMarca = document.createTextNode(toyota.Marca);
    marcaToyota.appendChild(textToyotaMarca);
    marcaToyota.setAttribute("class", "label1");


    let modeloToyota = document.createElement("label");
    contentToyota.appendChild(modeloToyota);
    let textModelToyota = document.createTextNode(toyota.Modelo);
    modeloToyota.appendChild(textModelToyota);
    modeloToyota.setAttribute("class", "label2");


    let precioToyota = document.createElement("label");
    contentToyota.appendChild(precioToyota);
    let textPrecioToyota = document.createTextNode(toyota.Precio);
    precioToyota.appendChild(textPrecioToyota);
    precioToyota.setAttribute("class", "label3");


    let imgToyota = document.createElement("img");
    contentToyota.appendChild(imgToyota);
    imgToyota.setAttribute("src", toyota.Imagen)
    imgToyota.setAttribute("class", "img");
}
 let chevrolet = new Automovil ("Celular Apple Iphone 12 (128gb)", "̶$̶4̶'̶3̶2̶8̶.̶2̶3̶5̶", "$2'679.000", "img/Iphone3.png");
 function validarChevrolet() {
     alert (chevrolet.Marca + " " + chevrolet.Modelo + " " + "El auto mas eficaz en la carretera¡¡")

     mostarChevrolet();
 }

function mostarChevrolet () {
    let contenedorPrincChevrolet = document.getElementById("main_content");
    let contnedorChevrolet = document.createElement("div");
    contenedorPrincChevrolet.appendChild(contnedorChevrolet);
    contnedorChevrolet.setAttribute("class", "div");

    let marcaChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(marcaChevrolet);
    let textMarcaChevrolet = document.createTextNode(chevrolet.Marca);
    marcaChevrolet.appendChild(textMarcaChevrolet);
    marcaChevrolet.setAttribute("class", "label1");

    let modeloChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(modeloChevrolet);
    let textModeloChevrolet = document.createTextNode(chevrolet.Modelo);
    modeloChevrolet.appendChild(textModeloChevrolet);
    modeloChevrolet.setAttribute("class", "label2");

    let precioChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(precioChevrolet);
    let textPrecioChevrolet = document.createTextNode(chevrolet.Precio);
    precioChevrolet.appendChild(textPrecioChevrolet);
    precioChevrolet.setAttribute("class", "label3");

    let imgChevrolet = document.createElement("img");
    contnedorChevrolet.appendChild(imgChevrolet);
    imgChevrolet.setAttribute("src", chevrolet.Imagen)
    imgChevrolet.setAttribute("class", "img");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Iphone 12" ) {
            mostrarVehiculo(auto);
            mostrarToyota(toyota);
            mostarChevrolet(chevrolet);
        }
        else if (busqueda == "Iphone 12" ) {
            mostrarVehiculo(auto);}
        

        if (busqueda == "Iphone 12 pro") {
            mostrarToyota(toyota);}

        else if (busqueda == "Iphone 12 128") {
            mostarChevrolet(chevrolet);
        }
            
        else {
              this.true;
        } 
        return this. false.alert("no se han encontrado resultados."); 
    }
})


function limpiarVentana () {
    document.getElementById("main_content").innerHTML = "" ;
}   