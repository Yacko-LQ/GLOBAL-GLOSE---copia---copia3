document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const images = [
        '/Nuestros-Servicios/Img/Electricidad/pexels-kelly-1179532-2898199.jpg',
        '/Nuestros-Servicios/Img/Electricidad/pexels-brett-sayles-918986.jpg',
        
      
    ];
    let currentImage = 0;

    function changeImage() {
        hero.style.transition = 'background-image 1s ease-in-out'; // Efecto de transición
        currentImage = (currentImage + 1) % images.length;
        hero.style.backgroundImage = `url('${images[currentImage]}')`;
    }

    setInterval(changeImage, 3000); // Cambia de imagen cada 3 segundos
});