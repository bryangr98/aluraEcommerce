const listaProductos = () =>
  fetch("http://localhost:5500/articulo").then((respuesta) => respuesta.json());

const agregarProducto = async (
  nombre,
  imagen,
  precio,
  cantidad,
  id,
  tipo,
  descripcion
) => {
  const respuesta = await fetch("http://localhost:5500/articulo", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      imagen,
      precio,
      cantidad,
      id,
      tipo,
      descripcion,
    }),
  });
  if (respuesta.ok) {
    return respuesta.body;
  } else {
    throw new Error("no se pudo ccrear el producto");
  }
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:5500/articulo/${id}`, {
    method: "DELETE",
  });
};

const editarProducto = (id) =>{
  return fetch (`http://localhost:5500/articulo/${id}`,{
    method:'PUT'
  })
}
//CLIENTE
const listacliente = () =>
  fetch("http://localhost:5500/cliente").then((respuesta) => respuesta.json());

const agregarcliente = (nombreCliente, contraseña, tipoCliente) => {
  return fetch("http://localhost:5500/cliente", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ nombreCliente, contraseña, tipoCliente }),
  });
};

const leerCliente = (datos) => {
  return fetch (`http://localhost:5500/cliente?correo=${datos.correo}&contrasenia=${datos.contrasenia}`,{
    method: "GET",
  })
  .then(res =>res.json())
  .then(data => data)
  .catch((err)=>console.log(err,"error"))
}



export const servicios = {
  listaProductos,
  agregarProducto,
  eliminarProducto,
  listacliente,
  agregarcliente,
  leerCliente,
};
