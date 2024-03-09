document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the back to home button
    var backButton = document.getElementById('aboutbacktohome');
    backButton.addEventListener('click', function (event) {
        // Prevent the default behavior of the button
        event.preventDefault();

        // Add the fade-out class to initiate the fade-out transition
        document.body.classList.add('fade-out');

        // After a short delay, navigate to the home page
        setTimeout(function () {
            window.location.href = 'home.html'; // Replace 'home.html' with your actual home page URL
        }, 500); // Adjust the delay (in milliseconds) based on your transition duration
    });

    // Listen for the transitionend event to know when the fade-out is complete
    document.body.addEventListener('transitionend', function (event) {
        // Check if the event is for the opacity property
        if (event.propertyName === 'opacity') {
            // Remove the fade-out class and add the fade-in class
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }
    });
});
