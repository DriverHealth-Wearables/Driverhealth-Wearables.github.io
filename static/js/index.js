$(document).ready(function() {
    
    // Initialize standard Bulma slider if present
    if (typeof bulmaSlider !== 'undefined' && typeof bulmaSlider.attach === 'function') {
        bulmaSlider.attach();
    }

    // Interactive Tab Switcher for the Physiological Findings Showcase
    $('.tabs li').on('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tab navigation items
        $('.tabs li').removeClass('is-active');
        
        // Add active class to the current clicked tab
        $(this).addClass('is-active');
        
        // Hide all physiological analysis tab panels
        $('.tab-content').addClass('is-hidden');
        
        // Retrieve target panel id and reveal it
        var targetTab = $(this).data('tab');
        $('#' + targetTab).removeClass('is-hidden');
    });

});
