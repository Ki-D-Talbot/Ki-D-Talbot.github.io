// Fetch and inject nav.html
fetch('nav.html')
    .then(response => response.text())
    .then(navHTML => {
        document.getElementById('nav-placeholder').innerHTML = navHTML;

        // Hamburger Menu Toggle (moved inside the fetch)
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const navPlaceholder = document.getElementById('nav-placeholder');

        hamburgerMenu.addEventListener('click', () => {
            navPlaceholder.classList.toggle('open');
        });
    });

// Update current time
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

setInterval(updateClock, 1000);