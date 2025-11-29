

const cerrarSesion = document.getElementById("boton-cerrar-sesion");

const eliminarCuenta = document.getElementById("boton-eliminar-cuenta")

const reportarProblema = document.getElementById("boton-reportar-problema");


cerrarSesion.addEventListener("click", function(e) {
    e.preventDefault(); // detiene la navegación automática
    const resultado = confirm("¿Está seguro de querer cerrar sesión?");
    if (resultado) {
        // Si confirma, se redirige a la landing page
        alert("Cerrando sesión...");
        window.location.href = cerrarSesion.href;
    }
});

eliminarCuenta.addEventListener("click", function(e) {
    e.preventDefault(); // detiene la navegación automática
    const resultado = confirm("¿Está seguro de eliminar su cuenta?");
    if (resultado) {
        // Si confirma, se redirige a la landing page
        alert("Eliminando cuenta...");
        window.location.href = eliminarCuenta.href;
    }
});


reportarProblema.addEventListener("click", function(e) {
    e.preventDefault();
    const respuesta = prompt("Informanos sobre tu problema:");

    if(respuesta !== null) {
        alert("Gracias por reportar el problema");
        window.location.href = reportarProblema.href;
    }
});