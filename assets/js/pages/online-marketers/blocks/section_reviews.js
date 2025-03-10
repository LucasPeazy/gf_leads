// Слайдер для секции reviews
export function reviewsSlider(){
    let reviewsSwiper = new Swiper(".reviews_slider", {
        slidesPerView: 2,
        spaceBetween: 28,
        loop: true,
        navigation: {
            nextEl: '.reviews_navigation .nav_next',
            prevEl: '.reviews_navigation .nav_prev',
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
                autoHeight: true
            },
            768:{
                slidesPerView: 2,
            }
        }
    });
}