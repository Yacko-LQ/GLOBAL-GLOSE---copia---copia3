// Abrir el menú lateral
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
});

// Cerrar el menú lateral con el botón de cierre
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});

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
