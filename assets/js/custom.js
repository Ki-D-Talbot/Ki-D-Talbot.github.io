// Replace existing code with this simpler solution
(function($) {
  $(document).ready(function() {
    // Mobile dropdown toggle
    $('.mobile-menu-toggle').on('click', function(e) {
      e.preventDefault();
      $('.mobile-dropdown').slideToggle(200);
    });
    
    // Close mobile menu when clicking on a link
    $('.mobile-dropdown a').on('click', function() {
      $('.mobile-dropdown').slideUp(200);
    });
    
    // Close menu when clicking outside
    $(document).on('click', function(e) {
      if (!$(e.target).closest('#mobile-header').length) {
        $('.mobile-dropdown').slideUp(200);
      }
    });
  });
})(jQuery);