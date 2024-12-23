// Basic form validation and error handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from submitting

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required!';
    } else {
        errorMessage.textContent = '';
        alert('Login Successful!');
        // Redirect to a different page after successful login (or any other action)
        window.location.href = 'dashboard.html'; // Placeholder for redirection
    }
});
