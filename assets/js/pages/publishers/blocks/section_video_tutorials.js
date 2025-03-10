// Функция обновления верхнего отступа модального окна относительно высоты хедера
function updateModalPadding() {
    const header = document.querySelector(".header"); // Находим элемент хедера
    const modal = document.querySelector(".modal"); // Находим модальное окно

    if (header && modal) {
        const headerHeight = header.offsetHeight; // Получаем высоту хедера
        modal.style.paddingTop = `${headerHeight}px`; // Устанавливаем отступ сверху для модального окна
    }
}

// Функция для работы с popup видео
export function popUpVideo() {
    // Добавляем обработчик клика на элементы с классом "play" внутри .tutorial_item
    document.querySelectorAll(".tutorial_item .play").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            const videoUrl = button.getAttribute("data-video"); // Получаем URL видео из атрибута data-video
            const modal = document.getElementById("videoModal"); // Находим модальное окно по ID
            const modalVideo = document.getElementById("modalVideo"); // Находим видео внутри модального окна

            updateModalPadding(); // Обновляем отступ модального окна

            modalVideo.src = videoUrl; // Устанавливаем URL видео
            modal.style.display = "flex"; // Отображаем модальное окно
            document.body.style.overflow = "hidden"; // Отключаем скролл страницы

            modalVideo.play(); // Запускаем воспроизведение видео
        });
    });

    // Добавляем обработчик клика на изображения внутри .tutorial_item
    document.querySelectorAll(".tutorial_item .tutorial_image img").forEach((image) => {
        image.addEventListener("click", (e) => {
            e.preventDefault(); // Отменяем стандартное поведение

            const videoUrl = image.getAttribute("data-video"); // Получаем URL видео из атрибута data-video
            const modal = document.getElementById("videoModal"); // Находим модальное окно по ID
            const modalVideo = document.getElementById("modalVideo"); // Находим видео внутри модального окна

            updateModalPadding(); // Обновляем отступ модального окна

            modalVideo.src = videoUrl; // Устанавливаем URL видео
            modal.style.display = "flex"; // Отображаем модальное окно
            document.body.style.overflow = "hidden"; // Отключаем скролл страницы

            modalVideo.play(); // Запускаем воспроизведение видео
        });
    });

    // Добавляем обработчик клика на фон модального окна для его закрытия
    const modal = document.querySelector(".modal");
    modal.addEventListener("click", (e) => {
        if (e.target === modal) { // Проверяем, что клик был именно по фону
            closeModal(); // Закрываем модальное окно
        }
    });

    // Предотвращаем закрытие модального окна при клике на видео
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.addEventListener("click", (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
    });

    // Функция для закрытия модального окна
    function closeModal() {
        const modalVideo = document.getElementById("modalVideo");

        modalVideo.pause(); // Останавливаем воспроизведение видео
        modalVideo.src = ""; // Очищаем источник видео
        modal.style.display = "none"; // Скрываем модальное окно

        document.body.style.overflow = ""; // Включаем скролл страницы
    }

    updateModalPadding(); // Обновляем отступ модального окна при вызове функции
}

// Функция для отображения скрытых видео и скрытия кнопки
export function tutorialVideosToggler() {
    let togglerBtn = document.querySelector('.tutorials_all .btn'); // Находим кнопку
    let videos = document.querySelectorAll('.tutorials_row > div'); // Находим все видео

    if (togglerBtn) {
        togglerBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            if (videos.length > 0) {
                videos.forEach((item) => item.classList.add('active')); // Добавляем класс active ко всем видео
            }

            this.classList.add('hidden'); // Скрываем кнопку после клика
        });
    }
}
