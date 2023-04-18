import { servicios } from "../servicios/service.js";

const cuerpo = document.getElementById('cuerpo');

const verProducto = (nombre, imagen, precio, descripcion) => {
  const content = ` 
    <div class="imagen">
      <img
        src=${imagen}
        alt="imgProducto"
        class="imagen"
      />
    </div>
    <div class="textos">
      <div class="nombre"> <h2>${nombre}</h2></div>
      <div class="precio"> <h3>$${precio}</h3></div>
      <div class="descripcion">
        <p>${descripcion}</p>
      </div>
    </div>
  `
  cuerpo.innerHTML = content;
};

const getProductById = async (productId) => {
    const productos = await servicios.listaProductos();
    return productos.find(p => p.id === parseInt(productId));
  };
  

const params = new URLSearchParams(window.location.search);
const productId = params.get('product');

getProductById(productId)
  .then((producto) => {
    if (producto) {
      verProducto(producto.nombre, producto.imagen, producto.precio, producto.descripcion);
    } else {
      cuerpo.innerHTML = 'Producto no encontrado';
    }
  })
  .catch((error) => {
    console.error(error);
    cuerpo.innerHTML = 'Ha ocurrido un error al buscar el producto';
  });

  //Volver 
  const volver = document.getElementById('volver')
  volver.addEventListener('click', () => window.history.back())