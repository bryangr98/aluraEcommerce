import { servicios } from "../servicios/service.js";
const divConjuntos = document.getElementById("productos__reelConjuntos");
const divBlusas = document.getElementById("productos__reelBlusas");
const divAccesorios = document.getElementById("productos__reelAccesorios")

const divProducto = (nombre, precio, imagen, id) => {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("producto__container");

  const contenido = `
    <picture class="picture__container">
        <h4 class="picture-titulo">${nombre}</h4>
        <img class="picture__img" src="${imagen}" alt="ropa">
        <p>$${precio}</p>
        <p>id:${id}</p>
        <p><a href="../pages/verProducto.html?product=${id}">Ver produto</a></p>
    </picture>
`;
  nuevoDiv.innerHTML = contenido;
  return nuevoDiv;
};

servicios.listaProductos().then((data) => {
  data.forEach(({ nombre, imagen, precio, id, tipo }) => {
    if (tipo === "conjunto") {
      const productoAdd = divProducto(nombre, precio, imagen, id);
      divConjuntos.appendChild(productoAdd);
    }else if(tipo ==="blusa"){
      const productoAdd = divProducto(nombre, precio, imagen, id);
      divBlusas.appendChild(productoAdd);
    }else if(tipo ==="accesorio"){
      const productoAdd = divProducto(nombre, precio, imagen, id);
      divAccesorios.appendChild(productoAdd);
    }
  });
}).catch((error) =>{
    alert("error",error)
});

  //Busqueda 

  const inputBusqueda = document.querySelector('#buscar__boton');
  const contenedorResultados = document.querySelector('#contenedor__resultados');

  inputBusqueda.addEventListener('input', () => {
    const valorBusqueda = inputBusqueda.value.toLowerCase();
    obtenerArticulos(valorBusqueda);
  });
  
  async function obtenerArticulos(valorBusqueda) {
    const listaArticulos = await servicios.listaProductos();
    const articulosFiltrados = listaArticulos.filter(articulo => {
      const nombreArticulo = articulo.nombre.toLowerCase();
      const idArticulo = articulo.id.toString();
      return nombreArticulo.includes(valorBusqueda) || idArticulo.includes(valorBusqueda);
    });
    mostrarResultados(articulosFiltrados);
  }
  
  function mostrarResultados(resultados) {
 if( inputBusqueda.value == ''){
      contenedorResultados.style.display = "none";
      return;
    }
  
    contenedorResultados.innerHTML = "";
    resultados.forEach((articulo) => {
      const divArticulo = document.createElement("div");
      divArticulo.classList.add("articulo");
      const content =`
      <a href="../pages/verProducto.html?product=${articulo.id}">
      <p>${articulo.nombre}</p>
      <p>$${articulo.precio}</p>
  </a>
      `
      divArticulo.innerHTML = content
      // const nombre = document.createElement("p");
      // nombre.innerText = articulo.nombre;
      // divArticulo.appendChild(nombre);
  
      // const precio = document.createElement("p");
      // precio.innerText = `$${articulo.precio}`;
      // divArticulo.appendChild(precio);
  
      contenedorResultados.appendChild(divArticulo);
    });
    contenedorResultados.style.display = "block";
  }
  
  //abrir producto 