import { servicios } from "../servicios/service.js";

const form = document.querySelector("[data-form]")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-img]").value;
    const precio = document.querySelector("[data-precio]").value;
    const cantidad = document.querySelector("[data-cantidad]").value;
    const tipo = document.querySelector("[data-tipo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value
    const id = Math.floor(Math.random() * 10000);

    servicios.agregarProducto(nombre , imagen , precio , cantidad , id , tipo, descripcion).then((respuesta)  => {
        let href= "registroCompleto.html"
        window.open(href,"registro" , "width:200px , height:200px")
    }).catch((error) => console.log(error))
});

//Volver
const volver= document.getElementById('volver')
volver.addEventListener('click', ()=>window.history.back())