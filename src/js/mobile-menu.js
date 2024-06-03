(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		openMenuBtn.classList.toggle('burger-active');
		mobileMenu.classList.toggle('is-open');
		document.body.classList.toggle('modal-open');

	};
	openMenuBtn.addEventListener('click', toggleMenu);
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
	});
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
	const menuLinks = document.querySelectorAll('.menu-box-link');
	menuLinks.forEach(link => {
		link.addEventListener('click', toggleMenu);
	});
})();


export * from "./mobile-menu";