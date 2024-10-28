document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const resetPasswordForm = document.getElementById('reset-password-form');
  
   
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign-up successful! Redirecting to home...');
        window.location.href = 'index.html';
      });
    }
  
   
    if (signinForm) {
      signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign-in successful! Redirecting to admin...');
        window.location.href = 'admin.html';
      });
    }
  
 
    if (resetPasswordForm) {
      resetPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password reset successful! Redirecting to sign-in...');
        window.location.href = 'signin.html';
      });
    }
  });
  