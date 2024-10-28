document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      
      const password = signupForm.querySelector('input[name="password"]').value;
      const confirmPassword = signupForm.querySelector('input[name="confirm_password"]').value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
      } else {
        
        window.location.href = 'menu.html';
      }
    });
  });
  