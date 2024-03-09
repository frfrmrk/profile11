document.addEventListener('DOMContentLoaded', function () {
    // Get the clickable element
    var clickableElement = document.querySelector('.card1');

    // Add click event listener
    clickableElement.addEventListener('click', function () {
        // Add fade-out class to the body
        document.body.classList.add('fade-out');

        // Wait for the fade-out transition to complete
        setTimeout(function () {
            // Navigate to profile.html
            window.location.href = 'profile.html';
        }, 500); // 0.5 seconds delay

        // Optional: Add fade-in class after the delay
        setTimeout(function () {
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }, 1000); // 1 second delay
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the clickable element
    var clickableElement = document.querySelector('.card2');

    // Add click event listener
    clickableElement.addEventListener('click', function () {
        // Add fade-out class to the body
        document.body.classList.add('fade-out');

        // Wait for the fade-out transition to complete
        setTimeout(function () {
            // Navigate to profile.html
            window.location.href = 'aboutme.html';
        }, 500); // 0.5 seconds delay

        // Optional: Add fade-in class after the delay
        setTimeout(function () {
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }, 1000); // 1 second delay
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the clickable element
    var clickableElement = document.querySelector('.card3');

    // Add click event listener
    clickableElement.addEventListener('click', function () {
        // Add fade-out class to the bodys
        document.body.classList.add('fade-out');

        // Wait for the fade-out transition to complete
        setTimeout(function () {
            // Navigate to profile.html
            window.location.href = 'contact.html';
        }, 500); // 0.5 seconds delay

        // Optional: Add fade-in class after the delay
        setTimeout(function () {
            document.body.classList.remove('fade-out');
            document.body.classList.add('fade-in');
        }, 1000); // 1 second delay
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Add click event listener to the back to home button
//     var backButton = document.getElementById('aboutbacktohome');
//     backButton.addEventListener('click', function (event) {
//         // Prevent the default behavior of the button
//         event.preventDefault();

//         // Add the fade-out class to initiate the fade-out transition
//         document.body.classList.add('fade-out');

//         // After a short delay, navigate to the home page
//         setTimeout(function () {
//             window.location.href = 'login.html'; // Replace 'home.html' with your actual home page URL
//         }, 500); // Adjust the delay (in milliseconds) based on your transition duration
//     });

//     // Listen for the transitionend event to know when the fade-out is complete
//     document.body.addEventListener('transitionend', function (event) {
//         // Check if the event is for the opacity property
//         if (event.propertyName === 'opacity') {
//             // Remove the fade-out class and add the fade-in class
//             document.body.classList.remove('fade-out');
//             document.body.classList.add('fade-in');
//         }
//     });
// });

