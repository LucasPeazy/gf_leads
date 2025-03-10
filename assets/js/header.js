function slideToggle(element, duration = 400) {
    const computedStyle = window.getComputedStyle(element);
    const display = computedStyle.display;
  
    // If the element is hidden, slide down
    if (display === "none") {
      element.style.display = "flex";
      const height = element.scrollHeight + "px";
      element.style.height = "0";
      element.style.overflow = "hidden";
      element.offsetHeight; // Trigger reflow
      element.style.transition = `height ${duration}ms ease-in-out`;
      element.style.height = height;
  
      // Clean up after animation
      setTimeout(() => {
        element.style.height = "";
        element.style.transition = "";
        element.style.overflow = "";
      }, duration);
    } else {
      // If the element is visible, slide up
      const height = computedStyle.height;
      element.style.height = height;
      element.offsetHeight; // Trigger reflow
      element.style.transition = `height ${duration}ms ease-in-out`;
      element.style.height = "0";
      element.style.overflow = "hidden";
  
      // Hide the element after the animation
      setTimeout(() => {
        element.style.display = "none";
        element.style.height = "";
        element.style.transition = "";
        element.style.overflow = "";
      }, duration);
    }
}

export function mobileMenuElementsTogller(){
    let menuElements = document.querySelectorAll('.mobile_menu .has_submenu');
    if(menuElements.length > 0){
        menuElements.forEach(function(item){
            item.addEventListener('click',function(e){
                e.preventDefault();
                
                let submenu = this.parentNode.querySelector('.submenu');
                
                if(this.classList.contains('opened')){
                    this.classList.remove('opened');
                }else{
                    this.classList.add('opened');
                }

                slideToggle(submenu, 300)
            })
        })
    }
}

export function mobileMenuToggler() {
    let hamburger = document.querySelector('.header__hamburger');
    let mobileMenu = document.querySelector('.mobile_menu');
    let logoSlogan = document.querySelector('.logo_slogan');
    let wrapper = document.querySelector('.wrapper');
    let header = document.querySelector(".header");
    let headerBlock = document.querySelector(".header_bottom_slogan");

    if (hamburger && mobileMenu && logoSlogan && header) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('opened');
            mobileMenu.classList.toggle('opened');
            logoSlogan.classList.toggle('show_slogan');  
            header.classList.toggle("hide_header");
            headerBlock.classList.toggle("hide_header");
        });
    }
}

