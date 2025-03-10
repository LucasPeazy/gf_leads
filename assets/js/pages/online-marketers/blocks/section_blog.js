
let blogSwiper = null; 
// Слайдер для blog
export function blogToSlider() {
    const mainBlock = document.querySelector('.blog_block');
    const wrapperBlock = document.querySelector('.blog_block .row');
    const sliderItems = document.querySelectorAll('.blog_block .row .col-md-6');
 // Инициализация слайдера
    function initSwiper() {
        if (window.innerWidth <= 767) {
            if (!blogSwiper && mainBlock && wrapperBlock && sliderItems.length > 0) { // Медиа запросы для слайдера
                mainBlock.classList.add('swiper');
                wrapperBlock.classList.add('swiper-wrapper');
                sliderItems.forEach((item) => item.classList.add('swiper-slide'));

                blogSwiper = new Swiper(".blog_block", {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    loop: true,
                    autoHeight: true,
                    navigation: {
                        nextEl: '.navigation .nav_next',
                        prevEl: '.navigation .nav_prev',
                    },
                });
            }
        } else {

            if (blogSwiper) {
                blogSwiper.destroy();
                blogSwiper = null;

                mainBlock.classList.remove('swiper');
                wrapperBlock.classList.remove('swiper-wrapper');
                sliderItems.forEach((item) => item.classList.remove('swiper-slide'));
            }
        }
    }

    initSwiper();

    window.addEventListener('resize', initSwiper);
}
