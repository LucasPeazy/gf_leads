
function fadeIn(element, duration = 400) {
    element.style.opacity = 0; // Start with opacity 0
    element.style.display = "block"; // Ensure the element is displayed

    let startTime = performance.now();

    function animateFadeIn(currentTime) {
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1
        element.style.opacity = progress;

        if (progress < 1) {
            requestAnimationFrame(animateFadeIn);
        }
    }

    requestAnimationFrame(animateFadeIn);
}

function fadeOut(element, duration = 400) {
    let startTime = performance.now();

    function animateFadeOut(currentTime) {
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1
        element.style.opacity = 1 - progress;

        if (progress < 1) {
            requestAnimationFrame(animateFadeOut);
        } else {
            element.style.display = "none"; // Hide the element completely
        }
    }

    requestAnimationFrame(animateFadeOut);
}

export function initAffiliateProgrammTabs(){
    let tabLinks = document.querySelectorAll('.tab__header .tab_item');
    let tabContents = document.querySelectorAll('.tab__content .content_item');
    if(tabLinks.length > 0){
        tabLinks.forEach(function(item){

            item.addEventListener('click',function(e){
                e.preventDefault();

                let target = this.getAttribute('href');

                tabLinks.forEach((linkItem) => linkItem.classList.remove('active'));
                this.classList.add('active')

                tabContents.forEach((contentItem) => {
                    contentItem.classList.remove('active')
                    contentItem.style.opacity = 0;
                    contentItem.style.display = 'none';
                });

                fadeIn(document.querySelector(target),300)
                // document.querySelector(target).classList.add('active');
                
            })

        })
    }
}

export function initAffiliateProgrammSliders(config) {
    let sliders = document.querySelectorAll(config.sliderSelector);

    sliders.forEach((slider, index) => {
        let swiper = new Swiper(slider, {
            // effect: 'fade', // Use fade effect
            slidesPerView: 1,
            navigation: {
                nextEl: `${config.navigationSelector}[data-slider="${index}"] .nav_next`,
                prevEl: `${config.navigationSelector}[data-slider="${index}"] .nav_prev`,
            },
            pagination: {
                el: `${config.paginationSelector}[data-slider="${index}"]`,
                clickable: true,
                renderBullet: function (bulletIndex, className) {
                    // Add numbers to pagination bullets
                    return `<span class="${className}">${bulletIndex + 1}</span>`;
                },
            },
            on: {
                slideChange: function () {
                    let activeIndex = swiper.realIndex; // Get real index of the active slide
                    let stepItems = document.querySelectorAll(
                        `${config.stepContentSelector}[data-slider="${index}"] .step__item`
                    );

                    // Remove active class from all step items
                    stepItems.forEach((item) => item.classList.remove('active'));

                    // Add active class to the corresponding step item
                    if (stepItems[activeIndex]) {
                        stepItems[activeIndex].classList.add('active');
                    }
                },
            },
            
        });
    });
}