// Функция для кнопки All что бы отобразить весь Benefits на мобилке
export function seeAllBenefits(items = '.benefit_item', openerBtn = '.benefits .all a') {
    let allItems = document.querySelectorAll(items);
    let openerButton = document.querySelector(openerBtn);

    if (allItems.length > 0 && openerButton) {
        openerButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Находим родительский элемент `.col` для каждого `.benefit_item`
            allItems.forEach((item) => {
                let col = item.closest('.col'); // Ищем ближайший .col
                if (col) {
                    col.classList.add('show_benefit'); // Добавляем класс .visible к .col
                }
            });

            // Скрываем кнопку "Show All"
            openerButton.parentElement.classList.add('hidden');
        });
    }
}
