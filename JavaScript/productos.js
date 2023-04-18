import { servicios } from "../servicios/service.js";

const crearObjeto =  (nombre, imagen, precio, cantidad, id) => {
    const nuevaLinea = document.createElement('tr');
    const contenido = `
        <td>${nombre}</td>
        <td>$${precio}</td>
        <td>${cantidad}</td>
        <td><img src=${imagen} alt="Product_img" class="imgProducto"></td>
        <td class="button-delete ocultarDel"><button  type="button" id="button-delete">Eliminar</button></td>
    `;
    nuevaLinea.innerHTML = contenido;
    const btn = nuevaLinea.querySelector('button');
    btn.addEventListener("click", () => {
        servicios.eliminarProducto(id).then(respuesta =>{
            nuevaLinea.remove(); // eliminar la línea de la tabla si se elimina correctamente del servidor
        }).catch(error => alert ("ocurrió un error al eliminar el artículo"))
    })

    return nuevaLinea;
}

const table = document.querySelector("#tablaCuerpo");


servicios.listaProductos().then((data)=>{
    data.forEach(({ nombre, imagen, precio, cantidad, id }) => {
        const nuevotr = crearObjeto(nombre, imagen, precio, cantidad, id);
        table.appendChild(nuevotr);
    });
    const urlParams = new URLSearchParams(window.location.search);
    const tipocliente = urlParams.get('user');
    const ocultarInputs = (tipocliente) => {
      if (tipocliente === "client") {
        const inputs = document.querySelectorAll(".ocultar, .ocultarDel");
        inputs.forEach(input => {
          input.style.display = "none";
        });
      }
    };
  
    ocultarInputs(tipocliente);
}).catch((error) => {
    alert("ocurrió un error al cargar los artículos");
    console.error(error);
});

//Boton volver 
const btnVolver = document.getElementById("volver")

btnVolver.addEventListener("click", ()=>window.history.back())