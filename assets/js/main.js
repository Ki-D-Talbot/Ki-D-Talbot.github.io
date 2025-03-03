// assets/js/main.js

// Basic JavaScript for site functionality

document.addEventListener('DOMContentLoaded', function() {
    // Toggle the mobile navigation menu when the hamburger is clicked
    var hamburger = document.getElementById('hamburger-menu');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            var nav = document.getElementById('nav');
            if (nav) {
                nav.classList.toggle('open');
            }
        });
    }
});
