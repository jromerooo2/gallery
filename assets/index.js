$(document).ready(function () {
    if (window.innerWidth >= 768) {
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });

        $('.autoplay-two').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
        });

    } else {
        $('.ui-section-header--nav').click(function () {
            $('#ui-section-header--menu-id').prop("checked", false);
        });

        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });
        $('.autoplay-two').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
        });
    }
});