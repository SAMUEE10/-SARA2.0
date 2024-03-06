const backgroundImages = [
    'url(imagenes/imagen_inicio_1.jpg)',
    'url(imagenes/imagen_inicio_2.jpg)',
    'url(imagenes/imagen_inicio_3.jpg)',
];

let currentImageIndex = 0;

function cambiarImagenFondo() {
    const backgroundContainer = document.querySelector('.background-images');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundContainer.style.backgroundImage = backgroundImages[currentImageIndex];
    backgroundContainer.classList.add('fade-in');
    setTimeout(() => {
        backgroundContainer.classList.remove('fade-in');
    }, 1000);
}

setInterval(cambiarImagenFondo, 5000);

// Usuarios y contraseñas
const usuarios = {
    "usuario1": "contraseña1",
    "usuario2": "contraseña2",
    "usuario3": "contraseña3"
};

// Función para mostrar el modal de términos y condiciones
function mostrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Función para cerrar el modal de términos y condiciones
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Función para validar el formulario con aceptar términos y condiciones
function validarFormulario() {
    const aceptarTerminos = document.getElementById('aceptar-terminos');
    if (!aceptarTerminos.checked) {
        mostrarMensaje('Por favor, acepta los términos y condiciones para continuar.');
        return false;
    }

    // Validar que al menos uno de los roles esté seleccionado
    const estudiante = document.getElementById('estudiante');
    const docente = document.getElementById('docente');
    if (!estudiante.checked && !docente.checked) {
        mostrarMensaje('Por favor, selecciona al menos un rol (estudiante o docente) para continuar.');
        return false;
    }

    // Aquí va el resto de la lógica de validación del formulario
}

// Función para mostrar el mensaje de que la función estará disponible próximamente
function mostrarMensajeProximamente() {
    mostrarMensaje('La función de registro estará disponible próximamente.');
}

// Función para mostrar mensajes de notificación
function mostrarMensaje(mensaje) {
    const mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.className = 'mensaje-notificacion';
    document.body.appendChild(mensajeElemento);
    setTimeout(() => {
        mensajeElemento.classList.add('fade-out');
        setTimeout(() => {
            mensajeElemento.remove();
        }, 1000);
    }, 3000);
}

// Función para iniciar sesión
function iniciarSesion() {
    const usuarioInput = document.getElementById('usuario').value;
    const contraseñaInput = document.getElementById('contraseña').value;

    if (usuarioInput in usuarios) {
        if (usuarios[usuarioInput] === contraseñaInput) {
            // Autenticación exitosa
            alert('Inicio de sesión exitoso');
            // Aquí puedes redirigir a otra página o realizar otras acciones después del inicio de sesión
        } else {
            // Contraseña incorrecta
            alert('Contraseña incorrecta');
        }
    } else {
        // Usuario no encontrado
        alert('Usuario no encontrado');
    }
}
