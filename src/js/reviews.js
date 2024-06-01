//todo: Зробити фунцію,та експортувати її в main.js
import axios, { Axios } from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export * from './reviews';

document.addEventListener('DOMContentLoaded', () => {
  const baseURL = 'https://portfolio-js.b.goit.study/api';
  let arrInfo = [];

  async function fetchData() {
    try {
      const response = await fetch(`${baseURL}/reviews/`);
      const data = await response.json();
      arrInfo = data;
      console.log(arrInfo);
      updateUI(arrInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function updateUI(data) {
    const slider = document.querySelectorAll('.swiper-slide');
    console.log(slider);
    const reviewsToShow = data.slice(0, 6);
    reviewsToShow.forEach((element, index) => {
      const markup = `
            <p class="swiper-text">${element.review}</p>
            <div class="swiper-img-title">
            <img src="${element.avatar_url}" alt="${element.author}" class="swiper-img">
            <h2 class="swiper-title">${element.author}</h2></div>`;
      slider[index].insertAdjacentHTML('beforeend', markup);
    });
  }

  fetchData();
});

const swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  allowSlideNext: false,
  allowTouchMove: false,
  centerInsufficientSlides: true,
  flipEffect: {
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  clickable: true,
  watchSlidesProgress: true,
  longSwipes: false,
  cssMode: true,
  slidesPerView: 1,
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  edgeSwipeDetection: true,
});
swiper.slideNext();
