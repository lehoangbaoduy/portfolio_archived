/*======== Window Load Function ========*/
$(document).ready(function(){

    /*======== Preloader Setup ========*/
    $(".loading-text").delay(1000).fadeOut("slow");
    $(".preloader").delay(2000).fadeOut("slow");
    $('#my-form-button').click(function() {
        $(".preloader-after").fadeOut("fast");
        document.querySelector("video").play();
    });

    /*======== Isotope Setup ========*/
    if ($('.portfolio-items').length) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();
        $filters.on('click', function() {
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
            });
        });
    }

    if (window.location.href.includes("home") || !window.location.href.includes("#")) {
        $('.wrapper').css('opacity', '1');
        $('.wrapper').css('z-index', '2');
    } else {
        $('.wrapper').css('opacity', '0');
        $('.wrapper').css('z-index', '0');
    }

    var btn = $('.menu-button');
            
    btn.click(function() {    
        if (window.location.href.includes("home") || !window.location.href.includes("#")) {
            $('.wrapper').css('opacity', '1');
            $('.wrapper').css('z-index', '2');
        } else {
            $('.wrapper').css('opacity', '0');
            $('.wrapper').css('z-index', '0');
        }
    })
});
/*======== Document Ready Function ========*/
$(document).ready(function() {
    "use strict";

    /*======== Text Slideshow Setup ========*/
    if($('.text-slideshow').length) {
        animateText();
    }

    /*======== SimpleBar Setup ========*/
    $('.pages-stack .page').each(function() {
        var $id = '#' + $(this).attr('id');
        new SimpleBar($($id)[0], {
            scrollbarMinSize: 15
        });
    });


    /*======== Portfolio Image Link Setup ========*/
    $('.portfolio-items .image-link').magnificPopup({
        type: 'image',
    });

    /*======== Portfolio Video Link Setup ========*/
    $('.portfolio-items .video-link').magnificPopup({
        type: 'iframe',
    });

    /*========Testimonials OwlCarousel Setup========*/
    $(".testimonials .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            992: {
                items: 2,
            },
        },
    });

    /*========Clients OwlCarousel Setup========*/
    $(".skills .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    });

    /*======== Contact Form Setup ========*/
    contactFormSetup();

});

/********** Function Contact Form Setup **********/
function contactFormSetup() {

    /*======== Check Field Have Value When Page Load ========*/
    $('.input-field').each(function() {
        if($(this).val()) {
            $(this).addClass('input--filled');
        } else {
            $(this).removeClass('input--filled');
        }
    });

    /*======== Check Field Have Value When Keyup ========*/
    $('.input-field').on('keyup', function() {
        if($(this).val()) {
            $(this).addClass('input--filled');
        } else {
            $(this).removeClass('input--filled');
        }
    });


    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#cf-name').val(),
            email = $('#cf-email').val(),
            message = $('#cf-message').val(),
            required = 0;


        $('.cf-validate', this).each(function() {
            if($(this).val() == '') {
                $(this).addClass('cf-error');
                required += 1;
            } else {
                if($(this).hasClass('cf-error')) {
                    $(this).removeClass('cf-error');
                    if(required > 0) {
                        required -= 1;
                    }
                }
            }
        });
        if( required === 0 ) {
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: {
                    cf_name: name,
                    cf_email: email,
                    cf_message: message
                },
                success: function(data) {
                    $("#contact-form .input-field").val("");
                    showAlertBox(data.status, data.responseText);
                },
                error: function(data) {
                    showAlertBox(data.status, data.responseText);
                }
            });
        }
    });
}

/********** Function Show Alert Box **********/
function showAlertBox(response, message) {
    var $alertBox = $('<div class="alert"></div>'),
        $alContainer = $('#contact-form .alert-container');
    if( response == 200 ) {
        $alertBox.addClass('alert-success').html(message);
        $alContainer.html($alertBox);
    } else {
        $alertBox.addClass('alert-danger').html(message);
        $alContainer.html($alertBox);
    }
    $alContainer.fadeIn(300).delay(2000).fadeOut(400);
}
