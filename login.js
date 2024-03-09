document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.getElementById("loginContainer");
    const loginButton = document.querySelector(".btnlogin");

    loginButton.addEventListener("click", function() {
        // Fade out effect
        loginContainer.style.transition = "opacity 0.5s";
        loginContainer.style.opacity = 0;

        // After the fade-out, navigate to the home page
        setTimeout(function() {
            window.location.href = "home.html";
        }, 500); // 500 milliseconds, matching the transition duration
    });
});
