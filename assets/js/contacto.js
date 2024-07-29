document.getElementById('contactForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('correo');
    var emailError = document.getElementById('emailError');
    
    // Expresión regular para verificar que el correo electrónico contenga "@gmail.com"
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    if (!emailRegex.test(emailInput.value)) {
        // Mostrar mensaje de error y evitar el envío del formulario
        emailError.style.display = 'block';
        event.preventDefault(); // Previene el envío del formulario
    } else {
        // Ocultar mensaje de error si el correo es válido
        emailError.style.display = 'none';
    }
});
