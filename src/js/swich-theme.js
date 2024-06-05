const swithBtn = document.querySelector('.swich-theme ');
swithBtn.addEventListener('click', swithTheme);
function swithTheme() {
	swithBtn.classList.toggle('dark');
	document.body.classList.toggle('dark-theme');
}


export * from "./swich-theme";