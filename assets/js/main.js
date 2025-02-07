/*
    Prologue by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        wide: ['961px', '1880px'],
        normal: ['961px', '1620px'],
        narrow: ['961px', '1320px'],
        narrower: ['737px', '960px'],
        mobile: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Load Navigation
    $(document).ready(function () {
        // Dynamically load the navbar from nav.html
        $("#nav-placeholder").load("nav.html", function (response, status, xhr) {
            if (status === "error") {
                console.error("Error loading nav.html:", xhr.status, xhr.statusText);
            } else {
                console.log("Navigation loaded successfully.");
                highlightCurrentPage();
            }
        });
    });

    // Highlight the active page in the navigation
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split("/").pop().toLowerCase();
        $('#nav a').each(function () {
            const link = $(this).attr('href').toLowerCase();
            if (currentPage === "" || currentPage === "index.html" || link.includes(currentPage.split("?")[0])) {
                $(this).addClass('active');
            }
        });
    }

    // Smooth scroll for scrolly links
    $('.scrolly').scrolly({
        speed: 1000,
        offset: function () { return $nav.height(); }
    });

    // Toggle menu for mobile view
    $('#menu-toggle').on('click', function () {
        $('#nav').toggleClass('is-open');
    });

})(jQuery);
