document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple demo authentication
    if (email === 'admin@quiz.com' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Use admin@quiz.com / admin123');
    }
});

// Check if already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'index.html';
}