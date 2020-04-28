$(function () {


    //============ TYPED JS===============

    var typed = new Typed('.type', {
        strings: [
      "Confirmed-2,790,986",
      "Recovored-782,382",
            "Deaths-195,920",

  ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });


    // ================SLIDER================
    $('.slider_wrapper2').slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        dots: true
    });


    //============ SMOOTH SCROLL JS===============

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 700
    });




    /*============PRELODER js============*/

   $(window).load(function() {
   $('.preloader').fadeOut('slow');
});


    // ============= BACK TO TOP JS =============

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    //========== MOBILE MENU JS ==========


    //    Animation on Scroll js
    AOS.init({
        offset: 120,
        duration: 700
    });



  $('#date-input').dateDropper();   

});
