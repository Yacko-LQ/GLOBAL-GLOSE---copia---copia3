// Variables para el deslizamiento
let touchStartX = 0;
let touchEndX = 0;

// Función para manejar el inicio del toque
document.getElementById('sidebar').addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

// Función para manejar el final del toque
document.getElementById('sidebar').addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

// Función para manejar el gesto de deslizamiento
function handleGesture() {
    if (touchEndX < touchStartX) { // Si se desliza hacia la izquierda
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-toggle').style.display = 'flex'; // Mostrar el botón de menú
    }
}

// Cerrar el menú lateral al seleccionar una sección
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-toggle').style.display = 'flex'; // Mostrar el botón de menú nuevamente
    });
});

// Mostrar la barra lateral y ocultar el botón al hacer clic en el botón de menú
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
    this.style.display = 'none'; // Ocultar el botón de menú
});

// Mantener el botón activo mientras el usuario está en la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebar-toggle').style.display = 'flex'; // Mantener el botón visible al cargar la página
});

// Ocultar el botón cuando el menú lateral está abierto
document.getElementById('sidebar').addEventListener('transitionend', function() {
    if (this.classList.contains('open')) {
        document.getElementById('sidebar-toggle').style.display = 'none'; // Ocultar el botón cuando el menú lateral esté abierto
    }
});

// Función para ocultar la barra lateral al hacer clic fuera de ella
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('open');
        sidebarToggle.style.display = 'flex'; // Mostrar el botón de menú nuevamente
    }
});
