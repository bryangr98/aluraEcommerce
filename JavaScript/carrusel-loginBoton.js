//Carrusel
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
//Login boton
  const boton = document.getElementById("login__boton");
boton.addEventListener("click", () => {
    window.location.href = "../pages/login.html"; // Redireccionar a la página de inicio de sesión
});

//Ir Productos
const irLink = () => {
  const linkProductos = document.getElementsByClassName("linkProductos");
  const content = `
    <p><a href="./pages/productos.html?user=client"> ver mas &#8680;</a></p>
  `;
  for (let i = 0; i < linkProductos.length; i++) {
    linkProductos[i].innerHTML = content;
  }
};
irLink();

