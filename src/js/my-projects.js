// TODO: добавити посилання на зображення проектів, та їх назви в масив, та додавати по  3 штуки по кліку load more, зробити перевірку, якщо зображень в масиві немає - не відображати кнопку load more. Добавити transition, щоб анімувати виїзд проектів.
import a from "../img/my-projects/chego-2x.jpg";
const projects = [
	{
		img: {
			src: a,
			srcset: '/img/my-projects/wallet.jpg 1x, /img/my-projects/wallet-2x.jpg 2x',
			alt: 'wallet webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'wallet webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/green.jpg',
			srcset: '/img/my-projects/green.jpg 1x, /img/my-projects/green-2x.jpg 2x',
			alt: 'green harvest webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'green harvest webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/english.jpg',
			srcset: '/img/my-projects/english.jpg 1x, /img/my-projects/english-2x.jpg 2x',
			alt: 'English excellence webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'English excellence webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/power.jpg',
			srcset: '/img/my-projects/power.jpg 1x, /img/my-projects/power-2x.jpg 2x',
			alt: 'power pulse webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'power pulse webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/mimino.jpg',
			srcset: '/img/my-projects/mimino.jpg 1x, /img/my-projects/mimino-2x.jpg 2x',
			alt: 'mimino website'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'mimino website',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/vyshyvanka.jpg',
			srcset: '/img/my-projects/vyshyvanka.jpg 1x, /img/my-projects/vyshyvanka-2x.jpg 2x',
			alt: 'vyshyvanka vibes Landing Page'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'vyshyvanka vibes Landing Page',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/chego.jpg',
			srcset: '/img/my-projects/chego.jpg 1x, /img/my-projects/chego-2x.jpg 2x',
			alt: 'chego jewelry website'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'chego jewelry website',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/energy.jpg',
			srcset: '/img/my-projects/energy.jpg 1x, /img/my-projects/energy-2x.jpg 2x',
			alt: 'energy flow webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'energy flow webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/fruit.jpg',
			srcset: '/img/my-projects/fruit.jpg 1x, /img/my-projects/fruit-2x.jpg 2x',
			alt: 'fruitbox online store'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'fruitbox online store',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: '/img/my-projects/starlight.jpg',
			srcset: '/img/my-projects/starlight.jpg 1x, /img/my-projects/starlight-2x.jpg 2x',
			alt: 'starlight studio landing page'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'starlight studio landing page',
		link: 'https://github.com/Fovardell/tech-titans'
	}
];

const projectsPerLoad = 3;
let currentIndex = 0;

const refs = {
	projectsList: document.querySelector('.projects-list'),
	loadMoreBtn: document.querySelector('.projects-load')
};

function createProjectMarkup(project) {
	return `<li class="my-projects-card">
    <img class="my-projects-card-img" srcset="${project.img.srcset}" src="${project.img.src}" alt="${project.img.alt}" />
    <p class="my-projects-card-stack">${project.stack}</p>
    <div class="projects-card-container">
      <h3 class="projects-card-title">${project.title}</h3>
      <a class="projects-card-link" href="${project.link}" target="_blank">
        <span class="projects-card-link-span">VISIT</span>
        <svg class="projects-card-link-svg" width="24" height="24">
          <use href="/img/svg/spriteForEachOpt.svg#MyProjectVector"></use>
        </svg>
      </a>
    </div>
  </li>`;
};

function loadProjects() {
	const projectsToLoad = projects.slice(currentIndex, currentIndex + projectsPerLoad);
	const markup = projectsToLoad.map(createProjectMarkup).join('');
	refs.projectsList.insertAdjacentHTML('beforeend', markup);

	// Add animation
	const newCards = document.querySelectorAll('.my-projects-card:not(.loaded)');
	setTimeout(function () {
		newCards.forEach(function (card) {
			card.classList.add('loaded');
		});
	}, 10);

	currentIndex += projectsPerLoad;

	if (currentIndex >= projects.length) {
		refs.loadMoreBtn.style.display = 'none';
	}
};

refs.loadMoreBtn.addEventListener('click', loadProjects);

// Initial load projects
loadProjects();


export * from "./my-projects";