window.addEventListener('load', async function() {
    // Initialize Clerk
    await window.Clerk.load();

    const signInDiv = document.getElementById('sign-in');
    const signUpDiv = document.getElementById('sign-up');
    const params = new URLSearchParams(window.location.search);
    let isSignUp = params.get('signUp') || 'false';

    if (isSignUp === 'true') {
        window.Clerk.mountSignUp(signUpDiv);
    }
    else {
        window.Clerk.mountSignIn(signInDiv);
    }

    signInDiv.style.display = isSignUp === 'true' ? 'none' : 'block';
    signUpDiv.style.display = isSignUp === 'true' ? 'block' : 'none';

    // Handle authentication state changes
    window.Clerk.addListener(({ user }) => {
        if (user) {
            // Redirect to success page after successful authentication
            window.location.href = '/success.html';
        }
    });
});