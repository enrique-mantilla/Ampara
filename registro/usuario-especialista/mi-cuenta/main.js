

const cerrarSesion = document.getElementById("boton-cerrar-sesion");

cerrarSesion.addEventListener("click", function(e) {
    e.preventDefault(); // detiene la navegación automática
    const resultado = confirm("¿Estás seguro de continuar?");
    if (resultado) {
        // Si confirma, navegamos al href
        window.location.href = cerrarSesion.href;
    } else {
        console.log("Acción cancelada");
    }
});