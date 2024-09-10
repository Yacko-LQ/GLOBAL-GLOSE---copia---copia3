// Menú responsivo
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});



 //barra de navegacion lateral
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const hero = document.querySelector('.hero');
        const images = [
            'fondos_imagenes/about-7-150x150.jpg',
            'fondos_imagenes/pexels-yury-kim-181374-585419.jpg',
            'fondos_imagenes/pexels-denniz-futalan-339724-942540.jpg'
        ];
        let currentImage = 0;
    
        function changeImage() {
            hero.style.transition = 'background-image 1s ease-in-out'; // Efecto de transición
            currentImage = (currentImage + 1) % images.length;
            hero.style.backgroundImage = `url('${images[currentImage]}')`;
        }
    
        setInterval(changeImage, 3000); // Cambia de imagen cada 3 segundos
    });
    


// Botón de desplazamiento hacia arriba
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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


// Selecciona todos los enlaces que apunten a secciones internas de la página
const enlaces = document.querySelectorAll('.nav-links a, .sidebar-links a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto

        const destinoID = this.getAttribute('href'); // Obtener la referencia al destino
        const destino = document.querySelector(destinoID); // Seleccionar el destino

        // Ejecutar el desplazamiento suave hacia la sección
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
