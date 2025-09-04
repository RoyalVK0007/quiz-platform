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

// Admin panel shortcut
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        console.log('Admin shortcut triggered');
        window.location.href = 'admin-login.html';
    }
});

// Show shortcut hint in console
console.log('Admin shortcut: Ctrl+Alt+A');