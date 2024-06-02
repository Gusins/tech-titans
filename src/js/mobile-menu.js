// export const CHANGE_HTML_FOR_HERO = () => {
//     const HERO_MAIN_DIV = document.querySelector('.hero-main-div');
//     const EXISTING_ELEMENT = document.querySelector('.hero-main-open');

//     if (EXISTING_ELEMENT) {
//         EXISTING_ELEMENT.remove();
//         HERO_MAIN_DIV.style.display = "block";
//     } else {
//         let NEW_ELEMENT = document.createElement('div');
//         NEW_ELEMENT.className = 'hero-main-open';
//         NEW_ELEMENT.innerHTML = `
//              <div class="menu-items-div">
//                 <button id="closeModalBtn">☰</button>
//                 <ul class="menu-items-opens">
//                      <li class="header-menu-li"><a href="#about-me">About me</a></li>
//                     <li class="hero-social-li"><a href="https://www.facebook.com/goITclub/">Projects</a></li>
//                     <li class="hero-social-li"><a href="#">Contacts</a></li>
//                 </ul>
//             </div>
//         `;

//         HERO_MAIN_DIV.style.display = "none"; 
//         HERO_MAIN_DIV.parentNode.insertBefore(NEW_ELEMENT, HERO_MAIN_DIV); 
//     }
// };


export const CHANGE_HTML_FOR_HERO = () => {
    const HERO_MAIN_DIV = document.querySelector('.hero-main-div');
    const EXISTING_ELEMENT = document.querySelector('.hero-main-open');
    const OPEN_MODAL_BTN = document.getElementById('openModalBtn');
  
    if (EXISTING_ELEMENT) {
      EXISTING_ELEMENT.remove();
      HERO_MAIN_DIV.style.display = "block";
    
      OPEN_MODAL_BTN.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    } else {
      let NEW_ELEMENT = document.createElement('div');
      NEW_ELEMENT.className = 'hero-main-open';
      NEW_ELEMENT.innerHTML = `
        <ul class="menu-items-opens">
          <li class="hero-social-li"><a href="#about-me">About me</a></li>
          <li class="hero-social-li"><a href="#projects">Projects</a></li>
          <li class="hero-social-li"><a href="#contacts">Contacts</a></li>
        </ul>
      `;
  
      HERO_MAIN_DIV.style.display = "none"; 
      HERO_MAIN_DIV.parentNode.insertBefore(NEW_ELEMENT, HERO_MAIN_DIV);
   
      OPEN_MODAL_BTN.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M6 6L18 18M6 18L18 6" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    }
  };
  
  

  
  