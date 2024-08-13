
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});

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


//para manejar la aceptación de cookies PC

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
