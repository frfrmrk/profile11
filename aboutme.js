document.addEventListener("DOMContentLoaded", function () {
    const aboutmebody = document.getElementById('aboutmebody');
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');
    const profileBanner = document.getElementById("profileBanner");
    const profileBanner1 = document.getElementById("profileBanner1");
    const profileBanner2 = document.getElementById("profileBanner2");
    const gotoaboutme = document.getElementById('gotoaboutme');
    const proceed1 = document.getElementById('proceed1');
    const goback1 = document.getElementById('goback1');

    gotoaboutme.addEventListener('click', function (){
        aboutmebody.scrollIntoView({ behavior: "smooth" });
    });

    tab1.addEventListener('click', function (){
        profileBanner.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    tab2.addEventListener('click', function (){
        profileBanner1.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    tab3.addEventListener('click', function (){
        profileBanner2.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    proceed1.addEventListener('click', function (){
        profileBanner1.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    goback1.addEventListener('click', function (){
        aboutmebody.scrollIntoView({ behavior: "smooth" });
    });

    // Add a class to make the element center on hover
    profileBanner.addEventListener('mouseover', function () {
        profileBanner.classList.add('center-on-hover');
    });

    profileBanner.addEventListener('mouseout', function () {
        profileBanner.classList.remove('center-on-hover');
    });

    // Add similar hover effects for other elements if needed
});

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
