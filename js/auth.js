window.addEventListener('load', async function() {
    // Initialize Clerk
    await window.Clerk.load();

    const signInDiv = document.getElementById('sign-in');
    const signUpDiv = document.getElementById('sign-up');
    const switchAuthBtn = document.getElementById('switch-auth');
    let isSignIn = true;

    // Mount the sign-in component
    window.Clerk.mountSignIn(signInDiv);
    
    // Mount the sign-up component
    window.Clerk.mountSignUp(signUpDiv);

    // Switch between sign-in and sign-up
    switchAuthBtn.addEventListener('click', () => {
        isSignIn = !isSignIn;
        signInDiv.style.display = isSignIn ? 'block' : 'none';
        signUpDiv.style.display = isSignIn ? 'none' : 'block';
        switchAuthBtn.textContent = isSignIn ? 'Create an account' : 'Back to login';
    });

    // Handle authentication state changes
    window.Clerk.addListener(({ user }) => {
        if (user) {
            // User is signed in, redirect to your main application
            window.location.href = 'https://www.gsdistance.org/dashboard';
        }
    });
});
