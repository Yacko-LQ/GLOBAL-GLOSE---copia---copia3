// Cerrar el menú lateral al seleccionar una sección
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
    });
});

// Alternar menú en dispositivos móviles
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});


// Mostrar la barra lateral y ocultar el botón al hacer clic en el botón de menú
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
    this.style.display = 'none'; // Ocultar el botón de menú
});

// Cerrar la barra lateral y volver a mostrar el botón al hacer clic en el botón de cierre
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-toggle').style.display = 'flex'; // Mostrar el botón de menú
});
