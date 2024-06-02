import axios, { Axios } from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export * from './reviews';

const fetchData = async function () {
  try {
    const response = await axios.get(
      `https://portfolio-js.b.goit.study/api/reviews/`
    );
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Fetching reviews failed: ${error.message}`);
  }
};

const swiper = new Swiper('#reviews-swiper', {
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1279: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});
const slider = document.querySelector('.swiper-wrapper');
fetchData()
  .then(reviews => {
    const markup = reviews
      .map(({ author, avatar_url, review }) => {
        return `
            <li class="swiper-slide">
                <p class="swiper-text">${review}</p>
                <div class="swiper-img-title">
                    <img
                        class="swiper-img"
                        src="${avatar_url}"
                        alt="author photo"/>
                    <h3 class="swiper-title">${author}</h3>
                </div>
                </li>`;
      })
      .join('');
    slider.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => {
    slider.insertAdjacentHTML(
      'beforeend',
      `<p class="slider-error-text">Not found</p>`
    );
    errorMassage('Error fetching reviews');
  });

function errorMassage(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  setTimeout(() => {
    notification.style.display = 'none';
    notification.style.margin = '0 auto';
  }, 3000);
}

fetchData();
