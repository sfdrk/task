
$(document).ready(function () {
    
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    $(".fa-bars").on("click", function () {
        $(this).toggleClass("fa-times");
        $(".dropdown").toggle();
    })
})