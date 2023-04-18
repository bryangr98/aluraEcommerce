const nombre = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")
const submit = document.getElementById("submit")

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    const nombreValor = nombre.value
    const mensajeValor = mensaje.value
    const telefono = '7352328096'; 

    const mensajeURL = encodeURIComponent(`${nombreValor} dice: ${mensajeValor}`);
    window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeURL}`, '_blank');

})