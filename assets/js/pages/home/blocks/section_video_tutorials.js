function updateModalPadding() {
    const header = document.querySelector(".header");
    const modal = document.querySelector(".modal");

    if (header && modal) {
        const headerHeight = header.offsetHeight;
        modal.style.paddingTop = `${headerHeight}px`;
    }
}

export function popUpVideo() {
    // Обработчик клика на ссылку (Play)
    document.querySelectorAll(".tutorial_item .play").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const videoUrl = button.getAttribute("data-video");
            const modal = document.getElementById("videoModal");
            const modalVideo = document.getElementById("modalVideo");

            updateModalPadding(); // Обновляем отступ модального окна

            modalVideo.src = videoUrl;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";

            modalVideo.play();
        });
    });

    // Обработчик клика на картинку
    document.querySelectorAll(".tutorial_item .tutorial_image img").forEach((image) => {
        image.addEventListener("click", (e) => {
            e.preventDefault();

            const videoUrl = image.getAttribute("data-video");
            const modal = document.getElementById("videoModal");
            const modalVideo = document.getElementById("modalVideo");

            updateModalPadding(); // Обновляем отступ модального окна

            modalVideo.src = videoUrl;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";

            modalVideo.play();
        });
    });

    // Обработчик для закрытия модального окна
    const modal = document.querySelector(".modal");
    modal.addEventListener("click", (e) => {
        // Проверяем, что клик был именно по фону модального окна, а не по дочерним элементам
        if (e.target === modal) {
            closeModal();
        }
    });

    // Предотвращаем закрытие модального окна при клике на видео
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.addEventListener("click", (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
    });

    function closeModal() {
        const modalVideo = document.getElementById("modalVideo");

        modalVideo.pause();
        modalVideo.src = "";
        modal.style.display = "none";

        document.body.style.overflow = "";
    }

    updateModalPadding();
}

export function tutorialVideosToggler() {
    let togglerBtn = document.querySelector('.tutorials_all .btn');
    let videos = document.querySelectorAll('.tutorials_row > div');
    if (togglerBtn) {
        togglerBtn.addEventListener('click', function (e) {
            e.preventDefault();

            if (videos.length > 0) {
                videos.forEach((item) => item.classList.add('active'))
            }

            this.classList.add('hidden');
        });
    }
}
