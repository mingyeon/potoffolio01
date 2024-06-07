$(function () {
    $('.main_visual_slide .itm').slick({
        arrows: false,
    });

    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide .itm').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide .itm').slick('slickNext')
    });

    $('.main_product .itm').slick({
        arrows: false,
    });

})

