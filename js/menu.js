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
        closeSidebar();
    }
}

// Cerrar el menú lateral al seleccionar una sección
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', function() {
        closeSidebar();
    });
});

// Mostrar la barra lateral y ocultar el botón al hacer clic en el botón de menú
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
    this.style.display = 'none'; // Ocultar el botón de menú
});

// Ocultar el botón cuando el menú lateral está abierto
document.getElementById('sidebar').addEventListener('transitionend', function() {
    if (this.classList.contains('open')) {
        document.getElementById('sidebar-toggle').style.display = 'none'; // Ocultar el botón cuando el menú lateral esté abierto
    }
});

// Cerrar la barra lateral al hacer clic fuera de ella
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        closeSidebar();
    }
});

// Función para cerrar la barra lateral y mostrar el botón de menú
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-toggle').style.display = 'flex'; // Mostrar el botón de menú nuevamente
}


// Búsqueda dinámica en la barra lateral
document.getElementById('search-input').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let links = document.querySelectorAll('#sidebar-links li');

    links.forEach(function(link) {
        let text = link.textContent.toLowerCase();
        if (text.includes(filter)) {
            link.style.display = '';
        } else {
            link.style.display = 'none';
        }
    });
});
