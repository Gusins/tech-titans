const switchBtn = document.querySelector('.switch-theme ');
switchBtn.addEventListener('click', switchTheme);
function switchTheme() {
	switchBtn.classList.toggle('dark');
	document.body.classList.toggle('dark-theme');
}


export * from "./switch-theme";