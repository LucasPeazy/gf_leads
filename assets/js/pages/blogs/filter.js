export function filter() {
    console.log("Filter module loaded");

    const filterButtons = document.querySelectorAll(".filter-btn");
    const blogItems = document.querySelectorAll(".blog_item");
    const filterSelect = document.querySelector(".filter-select");

    console.log(`Found ${filterButtons.length} filter buttons`);
    console.log(`Found ${blogItems.length} blog items`);

    if (!blogItems.length) {
        console.error("Blog items not found");
        return;
    }

    // Функция фильтрации
    function applyFilter(filter) {
        blogItems.forEach(item => {
            const category = item.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                item.classList.remove("hidden_blog");
            } else {
                item.classList.add("hidden_blog");
            }
        });

        // Для кнопок: обновляем активный фильтр
        filterButtons.forEach(btn => {
            if (btn.getAttribute("data-filter") === filter) {
                btn.classList.add("active_filter");
            } else {
                btn.classList.remove("active_filter");
            }
        });

        // Для select: синхронизируем выбранное значение
        if (filterSelect) {
            filterSelect.value = filter;
        }
    }

    // Обработчик для кнопок
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            console.log(`Button clicked: ${filter}`);
            applyFilter(filter);
        });
    });

    // Обработчик для select
    if (filterSelect) {
        filterSelect.addEventListener("change", () => {
            const filter = filterSelect.value;
            console.log(`Select changed: ${filter}`);
            applyFilter(filter);
        });
    }
}
