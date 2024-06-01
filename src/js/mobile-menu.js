export const CHANGE_HTML_FOR_HERO = () => {
    const HERO_MAIN_DIV = document.querySelector('.hero-main-div');
    const EXISTING_ELEMENT = document.querySelector('.hero-main-open');

    if (EXISTING_ELEMENT) {
        EXISTING_ELEMENT.remove();
        HERO_MAIN_DIV.style.display = "block";
    } else {
        let NEW_ELEMENT = document.createElement('div');
        NEW_ELEMENT.className = 'hero-main-open';
        NEW_ELEMENT.innerHTML = `
            <ul class="menu-items-opens">
                <li class="hero-social-li"><a href="https://www.instagram.com/goitclub/">About me</a></li>
                <li class="hero-social-li"><a href="https://www.facebook.com/goITclub/">Projects</a></li>
                <li class="hero-social-li"><a href="#">Contacts</a></li>
            </ul>
        `;

        HERO_MAIN_DIV.style.display = "none"; 
        HERO_MAIN_DIV.parentNode.insertBefore(NEW_ELEMENT, HERO_MAIN_DIV); 
    }
};
