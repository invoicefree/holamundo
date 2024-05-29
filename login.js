document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Credenciales estáticas para la demostración
    const validUsername = 'usuario';
    const validPassword = 'contraseña';

    if (username === validUsername && password === validPassword) {
        // Guardar información de sesión
        sessionStorage.setItem('loggedIn', true);
        // Redirigir a la página principal
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
