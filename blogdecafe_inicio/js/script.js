const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Corta la ejecución del código
    }

    // Enviar el formulario
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    error ? alerta.classList.add('error') : alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    // Desaparezca después de 5 segundos
    setTimeout(() => alerta.remove(), 5000);
}