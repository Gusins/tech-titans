const switchBtn = document.querySelector('.switch-theme ');
switchBtn.addEventListener('click', switchTheme);
const value = localStorage.getItem('theme');
if (value) {
	document.body.classList.add('dark-theme');
	switchBtn.classList.add('dark');
} else {
	switchBtn.classList.remove('dark');
	localStorage.removeItem('theme', 'dark');
}

function switchTheme() {
	if (!document.body.classList.contains('dark-theme')) {
		switchBtn.classList.add('dark');
		document.body.classList.add('dark-theme');
		localStorage.setItem('theme', 'dark');

		return;
	}
	switchBtn.classList.remove('dark');
	document.body.classList.remove('dark-theme');
	localStorage.removeItem('theme', 'dark');
}



export * from "./switch-theme";
