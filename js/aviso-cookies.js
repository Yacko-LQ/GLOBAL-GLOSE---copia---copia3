
//click derecho desabilitado
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
});


//para manejar la aceptación de cookies PC/android

    document.addEventListener('DOMContentLoaded', function() {
        // Verifica si el aviso de cookies ya ha sido aceptado
        if (localStorage.getItem('cookies-aceptadas') === 'true') {
            document.getElementById('aviso-cookies-pc').style.display = 'none';
            document.getElementById('fondo-aviso-cookies-pc').style.display = 'none';
        } else {
            document.getElementById('aviso-cookies-pc').style.display = 'block';
            document.getElementById('fondo-aviso-cookies-pc').style.display = 'block';
        }

        // Maneja el clic en el botón de aceptación
        document.getElementById('btn-aceptar-cookies').addEventListener('click', function() {
            localStorage.setItem('cookies-aceptadas', 'true');
            document.getElementById('aviso-cookies-pc').style.display = 'none';
            document.getElementById('fondo-aviso-cookies-pc').style.display = 'none';
        });
    });
