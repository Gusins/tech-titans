import{a as y,i as h}from"./assets/vendor-1c96f17f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const u=[{img:{src:"./img/my-projects/wallet.jpg",srcset:"./img/my-projects/wallet.jpg 1x, ./img/my-projects/wallet-2x.jpg 2x",alt:"wallet webservice"},stack:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/green.jpg",srcset:"./img/my-projects/green.jpg 1x, ./img/my-projects/green-2x.jpg 2x",alt:"green harvest webservice"},stack:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/english.jpg",srcset:"./img/my-projects/english.jpg 1x, ./img/my-projects/english-2x.jpg 2x",alt:"English excellence webservice"},stack:"React, JavaScript, Node JS, Git",title:"English excellence webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/power.jpg",srcset:"./img/my-projects/power.jpg 1x, ./img/my-projects/power-2x.jpg 2x",alt:"power pulse webservice"},stack:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/mimino.jpg",srcset:"./img/my-projects/mimino.jpg 1x, ./img/my-projects/mimino-2x.jpg 2x",alt:"mimino website"},stack:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/vyshyvanka.jpg",srcset:"./img/my-projects/vyshyvanka.jpg 1x, ./img/my-projects/vyshyvanka-2x.jpg 2x",alt:"vyshyvanka vibes Landing Page"},stack:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/chego.jpg",srcset:"./img/my-projects/chego.jpg 1x, ./img/my-projects/chego-2x.jpg 2x",alt:"chego jewelry website"},stack:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/energy.jpg",srcset:"./img/my-projects/energy.jpg 1x, ./img/my-projects/energy-2x.jpg 2x",alt:"energy flow webservice"},stack:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/fruit.jpg",srcset:"./img/my-projects/fruit.jpg 1x, ./img/my-projects/fruit-2x.jpg 2x",alt:"fruitbox online store"},stack:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"./img/my-projects/starlight.jpg",srcset:"./img/my-projects/starlight.jpg 1x, ./img/my-projects/starlight-2x.jpg 2x",alt:"starlight studio landing page"},stack:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/Fovardell/tech-titans"}],v=3;let l=0;const m={projectsList:document.querySelector(".projects-list"),loadMoreBtn:document.querySelector(".projects-load")},w=function(e){return`<li class="my-projects-card">
    <img class="my-projects-card-img" srcset="${e.img.srcset}" src="${e.img.src}" alt="${e.img.alt}" />
    <p class="my-projects-card-stack">${e.stack}</p>
    <div class="projects-card-container">
      <h3 class="projects-card-title">${e.title}</h3>
      <a class="projects-card-link" href="${e.link}" target="_blank">
        <span class="projects-card-link-span">VISIT</span>
        <svg class="projects-card-link-svg" width="24" height="24">
          <use href="./img/sprite.svg#icon-arrow"></use>
        </svg>
      </a>
    </div>
  </li>`},j=function(){const i=u.slice(l,l+v).map(w).join("");m.projectsList.insertAdjacentHTML("beforeend",i);const o=document.querySelectorAll(".my-projects-card:not(.loaded)");setTimeout(function(){o.forEach(function(r){r.classList.add("loaded")})},10),l+=v,l>=u.length&&(m.loadMoreBtn.style.display="none")};m.loadMoreBtn.addEventListener("click",j);j();y.defaults.baseURL="https://portfolio-js.b.goit.study/api";h.settings({position:"center",transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft",timeout:3e3});const c=document.querySelector(".contacts-email"),f=document.querySelector(".form"),g=document.querySelector(".invalid-email"),p=document.querySelector(".invalid-text"),n=document.querySelector(".contacts-message"),k=document.querySelector(".modal-window"),L=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,S=document.querySelector(".modal-header"),x=document.querySelector(".modal-text"),E=function(){return L.test(c.value)},q=function(e){e.preventDefault();const i=e.target.user_email.value.trim(),o=e.target.user_message.value.trim();if(E()){if(o.length<10){p.classList.add("invalid");return}}else{c.classList.add("invalid"),g.classList.add("invalid");return}c.classList.remove("valid"),n.classList.remove("valid"),c.classList.remove("invalid"),g.classList.remove("invalid"),p.classList.remove("invalid"),y.post("/requests",{email:i,comment:o||"I`m interested in cooperation!"}).then(r=>{k.classList.remove("is-hidden"),S.innerHTML=`${r.data.title}`,x.innerHTML=`${r.data.message}`,f.reset()}).catch(r=>{h.error({title:r.code,message:r.message})})};n.addEventListener("input",e=>{if(e.target.value.trim().length<10){n.classList.remove("valid");return}n.classList.remove("invalid"),p.classList.remove("invalid"),n.classList.add("valid")});c.addEventListener("input",e=>{if(!L.test(e.target.value)){c.classList.remove("valid");return}c.classList.add("valid"),c.classList.remove("invalid"),g.classList.remove("invalid")});f.addEventListener("submit",q);const d=document.querySelector(".modal-window"),J=document.querySelector(".close");J.addEventListener("click",()=>{d.classList.add("is-hidden")});window.addEventListener("click",e=>{e.target===d&&d.classList.add("is-hidden")});window.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.add("is-hidden")});(()=>{const e=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),o=document.querySelectorAll('a[href^="#"]'),r=()=>{const t=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!t),i.classList.toggle("burger-active"),e.classList.toggle("is-open"),document.body.classList.toggle("modal-open");const a=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[a](e)};i.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(e))});for(let t of o)t.addEventListener("click",function(a){a.preventDefault();const b=t.getAttribute("href");document.querySelector(b).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".menu-box-link").forEach(t=>{t.addEventListener("click",r)})})();
//# sourceMappingURL=commonHelpers.js.map
