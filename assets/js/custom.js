// Create this file if it doesn't exist
(function($) {
    $(document).ready(function() {
        // Close mobile menu when a nav item is clicked
        $('#nav a').on('click', function() {
            if (window.innerWidth < 960) {
                $('body').removeClass('header-visible');
            }
        });
    });
})(jQuery);