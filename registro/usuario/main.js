

const activarSOS = document.getElementById("boton-sos");

if (activarSOS) {
    activarSOS.addEventListener("click", function(e) {
        e.preventDefault(); // detiene la navegación automática
        alert("La alerta ha sido enviada");
        window.location.href = activarSOS.href;
    });
}
