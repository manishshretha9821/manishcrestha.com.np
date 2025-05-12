/*!
 * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    // Proper separate event listeners for each modal
    $('#portfolioModal1').on('hidden.bs.modal', function (e) {
        window.location.href = 'https://manishcrestha.com.np/';
    });
    $('#portfolioModal2').on('hidden.bs.modal', function (e) {
        window.location.href = 'https://manishcrestha.com.np/';
    });
    $('#portfolioModal3').on('hidden.bs.modal', function (e) {
        window.location.href = 'https://manishcrestha.com.np/';
    });
    $('#portfolioModal4').on('hidden.bs.modal', function (e) {
        window.location.href = 'https://manishcrestha.com.np/';
    });
    $('#portfolioModal5').on('hidden.bs.modal', function (e) {
        window.location.href = 'https://manishcrestha.com.np/';
    });
    $('#portfolioModal6').on('hidden.bs.modal', function (e) {
        window.location.href = 'https://manishcrestha.com.np/';
    });

})(jQuery); // End of use strict

// -------------------- Protection Starts Here --------------------

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I/J/C, and Ctrl+U
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});
