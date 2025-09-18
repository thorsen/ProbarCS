function changeGreeting() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = greeting.textContent === 'Hello World' ? '¡Hola Mundo!' : 'Hello World';
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('formError');
    if (!name || !email) {
        error.textContent = 'Por favor, completa todos los campos.';
        return false;
    }
    error.textContent = '';
    alert('Formulario enviado correctamente');
    return true;
}