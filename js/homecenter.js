let botonForm = document.getElementById("botonForm");
let div4 = document.getElementById("div4");


let botonCerrar = document.getElementById("botonCerrar");

botonForm.addEventListener("click", mostrarForm);

botonCerrar.addEventListener("click", ocultarForm);

function mostrarForm() {
    div4.classList.add("transform5");
    div4.classList.remove ("transform4");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");
}
function ocultarForm(){
    div4.classList.remove("transform5");
    div4.classList.add("transform4");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar");

}






const buttonBusqueda = document.querySelector('.fa-solid fa-magnifying-glass');
const busqueda = document.querySelector('.buscar')
const contenido = document.querySelector('div5')

buttonBusqueda.addEventListener('click', () => {
    busqueda.classList.toggle('buscar')
});

ocultarbutton.addEventListener('click', buscar);

function buscar (){
    contenido.classList.add('presentacion2')
    contenido.classList.remove ('presentacion')
}
salirBot.addEventListener('click', );


function salir (){

}








let botonForm2 = document.getElementById("botonForm2");
let div5 = document.getElementById ("div5");

let botonCerrar2 = document.getElementById("botonCerrar2");

botonForm2.addEventListener("click", mostrarForm2);
botonCerrar.addEventListener("click", ocultarForm2);

function mostrarForm2(){
    div5.classList.add("presentacion2");
    div5.classList.remove("presentacion");
    botonCerrar2.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");
}
function ocultarForm2(){
    div4.classList.remove("presentacion2");
    div4.classList.add("presentacion");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar");

}
