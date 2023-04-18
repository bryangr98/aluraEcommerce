import { servicios } from "../servicios/service.js"

const email = document.getElementById("form__email")
const password = document.getElementById("form__password")
const enter = document.getElementById("submit")

function successCallback(result) {
  if (result.length > 0) {
    const nombreCliente = result[0].nombreCliente;
    // agregar el nombre del cliente al URL de la página de destino
    window.location.href = `../pages/administrador.html?admin=${nombreCliente}`;
  } else
  {
    console.log("Login incorrecto");
  }
}

enter.addEventListener("click", (event) => {
  event.preventDefault()
  servicios.leerCliente({correo: email.value, contrasenia:password.value}).then(successCallback)
});
