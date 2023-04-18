import { servicios } from "../servicios/service.js"
//carrusel
const prevButton = document.querySelector(".boton__antes");
const nextButton = document.querySelector(".boton__despues");
const carouselImages = document.querySelector(".banner__carrusel");


let counter = 0;
const size = carouselImages.children[0].clientWidth;

carouselImages.style.transform = "translateX(" + (-size * counter) + "px)";

nextButton.addEventListener("click", () => {
  if (counter >= carouselImages.children.length - 1) {
    carouselImages.style.transition = "none";
    counter = 0;
    carouselImages.style.transform = "translateX(" + (-size * counter) + "px)";
  } 
  else {
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselImages.style.transform = "translateX(" + (-size * counter) + "px)";
  }
});

prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselImages.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselImages.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselImages.addEventListener("transitionend", () => {
  if (carouselImages.children[counter].id === "last-clone") {
    carouselImages.style.transition = "none";
    counter = carouselImages.children.length - 2;
    carouselImages.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if (carouselImages.children[counter].id === "first-clone") {
    carouselImages.style.transition = "none";
    counter = carouselImages.children.length - counter;
    carouselImages.style.transform = "translateX(" + (-size * counter) + "px)";
  }
});
//Saludo

// obtener el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const nombreCliente = urlParams.get('admin');

// agregar el nombre del cliente al saludo
const saludoDiv = (nombreCliente) => {
  const botonSaludo = document.getElementById("botonSaludo");
  botonSaludo.classList.replace("login", "div__saludo");
  const contenido = `
    <p>Hola:  </p>
    <p>${nombreCliente}</p>
  `;
  botonSaludo.innerHTML = contenido;
  return botonSaludo;
}
saludoDiv(nombreCliente);
//AddProduct link
const addProduct = document.getElementById("addProduct")
addProduct.addEventListener("click",(e) =>{
    window.location.href = `../pages/agregarProducto.html?user=admin`
})

//Linkear a productos.html

const irLink = () => {
    const linkProductos = document.getElementsByClassName("linkProductos");
    const content = `
      <p><a href="./productos.html?user=admin"> ver mas &#8680;</a></p>
    `;
    for (let i = 0; i < linkProductos.length; i++) {
      linkProductos[i].innerHTML = content;
    }
  };
  irLink();