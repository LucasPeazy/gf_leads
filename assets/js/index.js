// Общие модули
import { mobileMenuElementsTogller, mobileMenuToggler } from './header.js';

// Инициализация общих функций
mobileMenuElementsTogller();
mobileMenuToggler();

//  Путь страницы
const path = window.location.pathname;

//  Загрузка модулей
if (path.includes('/online-marketers')) {
  import('./pages/online-marketers/online-marketers.js').then((module) => {
    console.log('Модуль для online-marketers загружен');
  });
} else if (path.includes('/publishers')) {
  import('./pages/publishers/publishers.js').then((module) => {
    console.log('Модуль для publishers загружен');
  });
} else if (path.includes('/adjusters')) {
  import('./pages/adjusters/adjusters.js').then((module) => {
    console.log('Модуль для adjusters загружен');
  });
} else if (path.includes('/home')) {
   import('./pages/home/home.js').then((module) => {
    console.log('Модуль для home загружен');
  });
} else if (path.includes('/providers')) {
  import('./pages/providers/providers.js').then((module) => {
    console.log('Модуль для providers загружен');
  });
} else if (path.includes('/blogs')) {
  import('./pages/blogs/blogs.js').then((module) => {
    console.log('Модуль для blogs загружен');
  });
} else if (path.includes('/blog')) {
  import('./pages/blog/blog.js').then((module) => {
    console.log('Модуль для blog загружен');
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const headerNavLinks = document.querySelectorAll(".header__nav a");

  headerNavLinks.forEach(link => {
    const currentURL = window.location.href;
    const linkHref = link.getAttribute("href");
    const linkURL = new URL(linkHref, window.location.origin).href;

    if (linkURL === currentURL) {
      link.classList.add("active");

      const parentLi = link.closest("li");
      if (parentLi) {
        parentLi.classList.add("active");
      }

      const parentMenu = link.closest("ul.submenu");
      if (parentMenu) {
        const mainMenuParent = parentMenu.closest("li");
        if (mainMenuParent) {
          mainMenuParent.classList.add("active");
        }
      }
    }
  });

  const menuTopLinks = document.querySelectorAll(".menu_top a");

  menuTopLinks.forEach(link => {
    const currentURL = window.location.href;
    const linkHref = link.getAttribute("href");
    const linkURL = new URL(linkHref, window.location.origin).href;

    if (linkURL === currentURL) {
      link.classList.add("active");

      const parentLi = link.closest("li");
      if (parentLi) {
        parentLi.classList.add("active");
      }

      const parentMenu = link.closest("ul.submenu");
      if (parentMenu) {
        const mainMenuParent = parentMenu.closest("li");
        if (mainMenuParent) {
          mainMenuParent.classList.add("active");
        }
      }
    }
  });
});
