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

        // Obtener los parámetros de la URL
        const params = new URLSearchParams(window.location.search);

        // Redirigir a la página principal con los parámetros de la URL
        window.location.href = 'index.html?' + params.toString();
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
