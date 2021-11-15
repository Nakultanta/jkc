/*banner*/
$('.owl-carousel.bannerCarousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>"
  ],
    autoplay: false,
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

/*Brand and Prdocuts*/
$('.owl-carousel.brandCarousel-1').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    dots: true,
    navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>"
  ],
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        668: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-carousel.brandCarousel-2').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    dots: true,
    navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>"
  ],
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        668: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-carousel.brandCarousel-3').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    dots: true,
    navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>"
  ],
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        668: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


/*about*/

$(document).ready(function () {

    $('ul.tabs.aboutTab li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs.aboutTab li').removeClass('current');
        $('.tab-content.aboutContent').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $(".videoContainerOverlay").click(function () {
        $(this).remove();
        $(".corporateFilm")[0].src += "&mute=1";
    });

    $('ul.tabs.brands li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs.brands li').removeClass('current');
        $('.tab-content.tabContentBrand').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    
    $('ul.tabs.newsTab li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs.newsTab li').removeClass('current');
        $('.tab-content.newsContent ').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })




})
