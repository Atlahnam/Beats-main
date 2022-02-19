$(document).ready(function(){

    const slider = $(".product__list").bxSlider({
        pager: false,
        controls:false
    });

    $(".product__control-left--prev").click(e => {
        e.preventDefault();
        slider.goToPrevSlide();
    })

    $(".product__control-right--next").click(e => {
        e.preventDefault();
        slider.goToNextSlide();
    })
});

