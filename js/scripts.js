/* Accordion */
jQuery(document).ready(function(jQuery) {
    jQuery('.accordionContent').hide();
    jQuery('.accordionBtn a').click(function() {
        if (jQuery(this).hasClass('selected')) {
            jQuery(this).removeClass('selected');
            jQuery(this).parent().next().slideUp();
        } else {
            jQuery('.accordionBtn a').removeClass('selected');
            jQuery(this).addClass('selected');
            jQuery('.accordionContent').slideUp();
            jQuery(this).parent().next().slideDown();
        }
        return false;
    });
});


$(document).ready(function() {
    $('.Menu ul ul').hide();
    $('.Menu ul li').click(function(e) { // inserted callback param "e" meaning "event"
        e.stopPropagation(); // stop click from bubbling up
        $(this).children('.subLink').toggle('slow');

    });
    $('.Menu li:has(ul)').addClass('myLink');
    $('.Menu ul ul').addClass('subLink');



    jQuery('.Menu ul li').click(function() {

        jQuery(this).toggleClass('openit');
    });
});

jQuery(document).ready(function(jQuery) {

});




$(document).ready(function() {

    'use strict';

    var c, currentScrollTop = 0,
        navbar = $('.headerWraper, .mobileIcon');

    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

});













jQuery('.mmOne').mouseover(function() {
    jQuery('.mmOne').addClass("active");
    jQuery('.mmOneW').addClass("show");


    jQuery('.mmTwo').removeClass("active");
    jQuery('.mmTwoW').removeClass("show");
    jQuery('.mmThree').removeClass("active");
    jQuery('.mmThreeW').removeClass("show");
    jQuery('.mmFour').removeClass("active");
    jQuery('.mmFourW').removeClass("show");

});

jQuery('.mmTwo').mouseover(function() {
    jQuery('.mmTwo').addClass("active");
    jQuery('.mmTwoW').addClass("show");

    jQuery('.mmOne').removeClass("active");
    jQuery('.mmOneW').removeClass("show");
    jQuery('.mmThree').removeClass("active");
    jQuery('.mmThreeW').removeClass("show");
    jQuery('.mmFour').removeClass("active");
    jQuery('.mmFourW').removeClass("show");

});

jQuery('.mmThree').mouseover(function() {
    jQuery('.mmThree').addClass("active");
    jQuery('.mmThreeW').addClass("show");

    jQuery('.mmOne').removeClass("active");
    jQuery('.mmOneW').removeClass("show");
    jQuery('.mmTwo').removeClass("active");
    jQuery('.mmTwoW').removeClass("show");
    jQuery('.mmFour').removeClass("active");
    jQuery('.mmFourW').removeClass("show");

});

jQuery('.mmFour').mouseover(function() {
    jQuery('.mmFour').addClass("active");
    jQuery('.mmFourW').addClass("show");

    jQuery('.mmOne').removeClass("active");
    jQuery('.mmOneW').removeClass("show");
    jQuery('.mmTwo').removeClass("active");
    jQuery('.mmTwoW').removeClass("show");
    jQuery('.mmThree').removeClass("active");
    jQuery('.mmThreeW').removeClass("show");

});


jQuery('.contentArea, .logo, .subfooter, .footerWrap, .videoBannerWrap, .homeBannerWrap').mouseover(function() {

    jQuery('.mmFour').removeClass("active");
    jQuery('.mmFourW').removeClass("show");
    jQuery('.mmOne').removeClass("active");
    jQuery('.mmOneW').removeClass("show");
    jQuery('.mmTwo').removeClass("active");
    jQuery('.mmTwoW').removeClass("show");
    jQuery('.mmThree').removeClass("active");
    jQuery('.mmThreeW').removeClass("show");



});




/* Search Icon */

jQuery('.searchIcon').click(function() {
    jQuery('.searchWrap').toggleClass("showit");
});





jQuery('.mobileIcon').click(function() {
    jQuery('.mobileIcon').toggleClass("active");
    jQuery('.mobileMenuWrap').toggleClass("active");
});






// Scroll to Top

jQuery('.toTop').click(function() {
    //window.scrollTo(0, 0);
    jQuery('html').animate({
        scrollTop: 0
    }, 'slow'); //IE, FF
    jQuery('body').animate({
        scrollTop: 0
    }, 'slow'); //chrome, don't know if Safari works
});


// Image Popup
jQuery(document).ready(function() {
    jQuery('.popup').magnificPopup({
        disableOn: 700,
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});



// read more text

const content = document.querySelector(".content-inner");
const contentFull = document.querySelector(".content-full");
const more = document.querySelector(".read-more");
let open = false;

if (more) {
  more.addEventListener("click", (e) => {
    if (open) {
      content.removeAttribute("style");
      e.target.innerText = "Read more";

      open = false;
    } else {
      content.style.maxHeight = `${contentFull.clientHeight}px`;
      e.target.innerText = "Read less";

      open = true;
    }
  });
}

  
  





