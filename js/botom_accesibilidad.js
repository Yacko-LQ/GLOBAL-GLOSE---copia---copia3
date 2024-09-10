document.getElementById('accesibilidad-btn').addEventListener('click', function() {
    document.getElementById('accesibilidad-menu').classList.add('visible');
    this.style.display = 'none'; // Oculta el botón
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById('accesibilidad-menu');
    const btn = document.getElementById('accesibilidad-btn');

    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('visible'); // Oculta el menú
        btn.style.display = 'flex'; // Muestra el botón de nuevo
    }
});


// Función para abrir/cerrar el menú de accesibilidad
document.getElementById('accesibilidad-btn').addEventListener('click', function() {
    const menu = document.getElementById('accesibilidad-menu');
    if (menu.classList.contains('oculto')) {
        menu.classList.remove('oculto');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('oculto');
    }
});

// Función para aumentar el tamaño de la fuente
function aumentarFuente() {
    document.body.style.fontSize = '1.2em';
}

// Función para disminuir el tamaño de la fuente
function disminuirFuente() {
    document.body.style.fontSize = '0.8em';
}

function modoOscuro() {
    document.body.classList.add('modo-oscuro');
    document.body.classList.remove('modo-claro');
    restablecerContraste();
}

function modoOscuro() {
    document.body.classList.add('modo-oscuro');
    document.body.classList.remove('modo-claro');
    restablecerContraste();
}

// Función para activar/desactivar alto contraste
function altoContraste() {
    document.body.classList.toggle('alto-contraste');
}

// Función para restablecer las configuraciones de accesibilidad
function restablecer() {
    document.body.style.fontSize = '';
    document.body.classList.remove('alto-contraste');
}

// Cerrar el menú de accesibilidad al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('accesibilidad-menu');
    const btnAccesibilidad = document.getElementById('accesibilidad-btn');
    if (!menu.contains(event.target) && !btnAccesibilidad.contains(event.target)) {
        menu.classList.remove('visible');
        menu.classList.add('oculto');
    }
});





