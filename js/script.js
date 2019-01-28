$(document).ready(function () {
    $(".burger").click(function () {

        $(".menunav").toggleClass("active_menu")
        $(".burger").toggleClass("activeburger")

      
    });
    //navbar change color
    $(".menunav li a").click(function(){
        $(this).parent().addClass('liactive').siblings().removeClass('liactive');
    })

    //progress About-right section
    $('#jq_1').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#7cb342',
        backgroundColor: '#EEEEEE',
        radius: '2px',
        height: '5px',
        width: '100%',
        duration: 1000
    });
    $('#jq_2').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: '#7cb342',
        backgroundColor: '#EEEEEE',
        radius: '2px',
        height: '5px',
        width: '100%',
        duration: 1000
    });
    $('#jq_3').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#7cb342',
        backgroundColor: '#EEEEEE',
        radius: '2px',
        height: '5px',
        width: '100%',
        duration: 1000
    });
    $('#jq_4').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#7cb342',
        backgroundColor: '#EEEEEE',
        radius: '2px',
        height: '5px',
        width: '100%',
        duration: 1000
    });


    //grid-Portfolio section
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });
     $(".category li a").click(function(e){
        $(this).parent().addClass('liactive').siblings().removeClass('liactive');
     });
    $(".category li").eq(0).click(function (e) {
        e.preventDefault();
        $('.grid').isotope({
            filter: ''
        });
    })
    $(".category li").eq(1).click(function (e) {
        e.preventDefault();
        $('.grid').isotope({
            filter: '.brand'
        });
    })
    $(".category li").eq(2).click(function (e) {
        e.preventDefault();

        $('.grid').isotope({
            filter: '.grapic'
        });
    })
    $(".category li").eq(3).click(function (e) {
        e.preventDefault();
        $('.grid').isotope({
            filter: '.web'
        });
    });

    //counter
    $('.counter').counterUp();

    
    //owl
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,

        autoplay: false,
        smartSpeed: 1500,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $(".menu").addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });

    //Scoll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.firstpage').fadeIn();
        } else {
            $('.firstpage').fadeOut();
        }
    });

    $('.firstpage').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
    //navbar change section
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
           $(this).parent().parent().parent().removeClass("active_menu");
           $(".burger").removeClass("activeburger")
           $(".burger").removeClass("active_menu")

        //    $(".burger").click(function () {
            
        //             $(".menunav").addClass("active12")
                  
        //         });
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 85
            }, 800, function () {

            });
        }
    });

    //scroll change logo
    var t = $(window); 
    
    t.on("scroll", function () {
     var o = t.scrollTop(),
            a = $(".menu"),
           e = $(".menu .logo> img");
        o > 100 ? (a.addClass("nav-scroll"), e.attr("src", "img/logo-dark.png")) : 
        (a.removeClass("nav-scroll"), e.attr("src", "img/logo-light.png"))
 });

});