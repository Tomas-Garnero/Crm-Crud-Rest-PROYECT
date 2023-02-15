import { obtenerCliente } from "./API.js";

(function() {

    // Campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const empresaInput = document.querySelector("#empresa");
    const telefonoInput = document.querySelector("#telefono");
    const emailInput = document.querySelector("#email");
    const idInput = document.querySelector("#id");

    document.addEventListener("DOMContentLoaded", async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get("id"));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);
    });

    function mostrarCliente(cliente) {
        const { nombre, empresa, telefono, email, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        emailInput.value = email;
        idInput.value = id;
    }
})();