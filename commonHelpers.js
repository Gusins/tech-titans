import{a as m,i as f}from"./assets/vendor-1c96f17f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=r(s);fetch(s.href,e)}})();m.defaults.baseURL="https://portfolio-js.b.goit.study/api";f.settings({position:"center",transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft",timeout:3e3});const n=document.querySelector(".contacts-email"),v=document.querySelector(".form"),d=document.querySelector(".invalid-email"),u=document.querySelector(".invalid-text"),l=document.querySelector(".contacts-message"),g=document.querySelector(".modal-window"),L=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,y=document.querySelector(".modal-header"),h=document.querySelector(".modal-text"),b=function(){return L.test(n.value)},S=function(t){t.preventDefault();const i=t.target.user_email.value.trim(),r=t.target.user_message.value.trim();if(b()){if(r.length<10){u.classList.add("invalid");return}}else{n.classList.add("invalid"),d.classList.add("invalid");return}n.classList.remove("valid"),l.classList.remove("valid"),n.classList.remove("invalid"),d.classList.remove("invalid"),u.classList.remove("invalid"),m.post("/requests",{email:i,comment:r||"I`m interested in cooperation!"}).then(o=>{g.classList.remove("is-hidden"),y.innerHTML=`${o.data.title}`,h.innerHTML=`${o.data.message}`,v.reset()}).catch(o=>{f.error({title:o.code,message:o.message})})};l.addEventListener("input",t=>{if(t.target.value.trim().length<10){l.classList.remove("valid");return}l.classList.remove("invalid"),u.classList.remove("invalid"),l.classList.add("valid")});n.addEventListener("input",t=>{if(!L.test(t.target.value)){n.classList.remove("valid");return}n.classList.add("valid"),n.classList.remove("invalid"),d.classList.remove("invalid")});v.addEventListener("submit",S);const c=document.querySelector(".modal-window"),q=document.querySelector(".close");q.addEventListener("click",()=>{c.classList.add("is-hidden")});window.addEventListener("click",t=>{t.target===c&&c.classList.add("is-hidden")});window.addEventListener("keydown",t=>{t.key==="Escape"&&c.classList.add("is-hidden")});(()=>{const t=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),r=document.querySelectorAll('a[href^="#"]'),o=()=>{const e=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!e),i.classList.toggle("burger-active"),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open");const a=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[a](t)};i.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(t))});for(let e of r)e.addEventListener("click",function(a){a.preventDefault();const p=e.getAttribute("href");document.querySelector(p).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".menu-box-link").forEach(e=>{e.addEventListener("click",o)})})();
//# sourceMappingURL=commonHelpers.js.map
