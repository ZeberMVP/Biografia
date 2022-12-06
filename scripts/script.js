document.querySelector("form").addEventListener("submit", function (event) {

    event.preventDefault();// parar envío
    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const duda = event.target.duda.value;
    let validated = true;

    if (nombre.length < 5) {
        alert("Nombre muy corto");
        validated = false;
    }

    if (!email.includes("@") && !email.endsWith(".com")) {
        alert("Falta @ email y/o .com al final");
        validated = false;
    }

    if (duda.length < 1) {
        alert("¿Qué me quieres preguntar?");
        validated = false;
    }
    // Comprobación final - Todo validado
    if (validated) {
        alert("ÉXITO - Formulario correcto y enviado")
        event.target.submit();
    }
})