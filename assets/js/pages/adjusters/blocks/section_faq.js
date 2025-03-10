// Функция для кнопки All что бы отобразить весь FAQs на мобилке

export function seeAllFAQ() {
    let togglerBtn = document.querySelector('.faq .all');
    let faq_item = document.querySelectorAll('.faq_row > div');
    let showBorderItem = document.querySelectorAll(".faq_row > :nth-child(3)");

    if (togglerBtn) {
        togglerBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (faq_item.length > 0) {
                faq_item.forEach((item) => item.classList.add('show_faq'));
            }

            this.classList.add('hidden');

            showBorderItem.forEach((item) => {
                item.style.borderBottom = "1px solid #F1F1F4"; 
            });
        });
    }
}