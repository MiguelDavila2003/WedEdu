
(function(){
        // Seleccionamos el botón que abre el menú

    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
        // Seleccionamos el botón que cierra el menú
    const closeMenu = document.querySelector('.nav__close');

    // Añadimos un evento de clic al botón de abrir menú
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();
