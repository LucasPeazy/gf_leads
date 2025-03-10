let blogSwiper = null;

// Функция для инициализации слайдера
export function blogToSlider() {
    const mainBlock = document.querySelector('.blog_with_cases'); // Основной блок
    const wrapperBlock = document.querySelector('.blog_with_cases .row'); // Внутренний контейнер (для wrapper)
    const sliderItems = document.querySelectorAll('.blog_with_cases .row .col-md-6, .blog_with_cases .row .col-xl-4'); // Элементы слайда

    if (!mainBlock || !wrapperBlock || sliderItems.length === 0) {
        console.error("Не удалось найти необходимые элементы для слайдера!");
        return;
    }

    function initSwiper() {
        if (window.innerWidth <= 767) {
            if (!blogSwiper) {

                // Добавляем нужные классы для Swiper
                mainBlock.classList.add('swiper');
                wrapperBlock.classList.add('swiper-wrapper');
                sliderItems.forEach((item) => item.classList.add('swiper-slide'));

                // Инициализация Swiper
                blogSwiper = new Swiper('.blog_with_cases', {
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
            // Уничтожение слайдера на больших экранах
            if (blogSwiper) {

                blogSwiper.destroy();
                blogSwiper = null;

                // Убираем классы Swiper
                mainBlock.classList.remove('swiper');
                wrapperBlock.classList.remove('swiper-wrapper');
                sliderItems.forEach((item) => item.classList.remove('swiper-slide'));
            }
        }
    }

    // Проверка на наличие всех элементов перед инициализацией Swiper
    if (mainBlock && wrapperBlock && sliderItems.length > 0) {
        // Инициализация слайдера при загрузке страницы
        initSwiper();

        // Повторная инициализация при изменении размера экрана
        window.addEventListener('resize', initSwiper);
    } else {
        console.error("Не все элементы для слайдера были найдены.");
    }
}
