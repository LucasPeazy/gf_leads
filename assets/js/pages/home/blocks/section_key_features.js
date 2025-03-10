// Функция для кнопки All что бы отобразить весь features на мобилке
export function seeAllItems(items = '.key_features__items > div',openerBtn = '.key_features .all a'){
    let allItems = document.querySelectorAll(items);
    let openerButton = document.querySelector(openerBtn);

    if(allItems.length > 0 && openerButton){
        openerButton.addEventListener('click', function(e){
            e.preventDefault();

            allItems.forEach((item) => item.style.display = 'block')
            openerButton.parentElement.classList.add('hidden')
        })
    }
}