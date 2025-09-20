document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Login form submitted (not really, though)!');
        });
    }

    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Signup form submitted (not really, though)!');
        });
    }
});
