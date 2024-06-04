
import wallet from "../img/my-projects/wallet.jpg";
import wallet2 from "../img/my-projects/wallet-2x.jpg";
import green from "../img/my-projects/green.jpg";
import green2 from "../img/my-projects/green-2x.jpg";
import english from "../img/my-projects/english.jpg";
import english2 from "../img/my-projects/english-2x.jpg";
import power from "../img/my-projects/power.jpg";
import power2 from "../img/my-projects/power-2x.jpg";
import mimino from "../img/my-projects/mimino.jpg";
import mimino2 from "../img/my-projects/mimino-2x.jpg";
import vyshyvanka from "../img/my-projects/vyshyvanka.jpg";
import vyshyvanka2 from "../img/my-projects/vyshyvanka-2x.jpg";
import chego from "../img/my-projects/chego.jpg";
import chego2 from "../img/my-projects/chego-2x.jpg";
import energy from "../img/my-projects/energy.jpg";
import energy2 from "../img/my-projects/energy-2x.jpg";
import fruit from "../img/my-projects/fruit.jpg";
import fruit2 from "../img/my-projects/fruit-2x.jpg";
import starlight from "../img/my-projects/starlight.jpg";
import starlight2 from "../img/my-projects/starlight-2x.jpg";
import arrowSvg from "../img/sprite.svg";
const projects = [
	{
		img: {
			src: wallet,
			srcset: `${wallet} 1x, ${wallet2} 2x`,
			alt: 'wallet webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'wallet webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${green}`,
			srcset: `${green} 1x, ${green2} 2x`,
			alt: 'green harvest webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'green harvest webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${english}`,
			srcset: `${english} 1x, ${english2} 2x`,
			alt: 'English Exellence website'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'English Exellence website',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${power}`,
			srcset: `${power} 1x, ${power2} 2x`,
			alt: 'power pulse webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'power pulse webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${mimino}`,
			srcset: `${mimino} 1x, ${mimino2} 2x`,
			alt: 'mimino website'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'mimino website',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${vyshyvanka}`,
			srcset: `${vyshyvanka} 1x, ${vyshyvanka2} 2x`,
			alt: 'vyshyvanka vibes Landing Page'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'vyshyvanka vibes Landing Page',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${chego}`,
			srcset: `${chego} 1x, ${chego2} 2x`,
			alt: 'chego jewelry website'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'chego jewelry website',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${energy}`,
			srcset: `${energy} 1x, ${energy2} 2x`,
			alt: 'energy flow webservice'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'energy flow webservice',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${fruit}`,
			srcset: `${fruit} 1x, ${fruit2} 2x`,
			alt: 'fruitbox online store'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'fruitbox online store',
		link: 'https://github.com/Fovardell/tech-titans'
	},
	{
		img: {
			src: `${starlight}`,
			srcset: `${starlight} 1x, ${starlight2} 2x`,
			alt: 'starlight studio landing page'
		},
		stack: 'React, JavaScript, Node JS, Git',
		title: 'starlight studio landing page',
		link: 'https://github.com/Fovardell/tech-titans'
	}
];

function createProjectMarkup(project) {
	return `<li class="my-projects-card">
	<div class="projects-card-img-container">
        <img class="my-projects-card-img" srcset="${project.img.srcset}" src="${project.img.src}" alt="${project.img.alt}" />
    </div>
    <p class="my-projects-card-stack">${project.stack}</p>
    <div class="projects-card-container">
      <h3 class="projects-card-title">${project.title}</h3>
      <a class="projects-card-link" href="${project.link}" target="_blank">
        <span class="projects-card-link-span">VISIT</span>
        <svg class="projects-card-link-svg" width="24" height="24">
          <use href="${arrowSvg}#MyProjectVector"></use>
        </svg>
      </a>
    </div>
  </li>`;
};
const projectsPerLoad = 3;
let currentIndex = 0;
const refs = {
	projectsList: document.querySelector('.projects-list'),
	loadMoreBtn: document.querySelector('.projects-load')
};
``;
const loadProjects = function () {
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