// Create this file if it doesn't exist
(function($) {
    $(document).ready(function() {
        // Force the menu toggle to work on both touch and click
        $('#headerToggle').on('touchstart click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('body').toggleClass('header-visible');
            return false;
        });

        // Close mobile menu when a nav item is clicked
        $('#nav a').on('click', function() {
            if (window.innerWidth < 960) {
                $('body').removeClass('header-visible');
            }
        });

        // Close menu when clicking outside
        $('#main, #footer').on('click touchstart', function() {
            if ($('body').hasClass('header-visible') && window.innerWidth < 960) {
                $('body').removeClass('header-visible');
            }
        });

        // Make sure menu icon is visible on mobile
        if (window.innerWidth < 960 && $('#headerToggle').length === 0) {
            $('<div id="headerToggle"><a href="#header" class="toggle">Menu</a></div>').appendTo('body');
        }

        // Add this inside your document ready function
        if (!localStorage.getItem('menuHintShown') && window.innerWidth < 960) {
            var hint = $('<div id="menuHint">Tap here for menu</div>').css({
                position: 'fixed',
                top: '50px',
                left: '10px',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                zIndex: '10000',
                animation: 'pulse 2s infinite'
            }).appendTo('body');
            
            $('<style>@keyframes pulse {0% {opacity: 0.5;} 50% {opacity: 1;} 100% {opacity: 0.5;}}</style>').appendTo('head');
            
            setTimeout(function() {
                hint.fadeOut(500, function() {
                    $(this).remove();
                });
                localStorage.setItem('menuHintShown', 'true');
            }, 5000);
        }
    });
})(jQuery);