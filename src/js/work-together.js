// TODO: відображати модалку, при успішному виконанні


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";
iziToast.settings({
	position: 'center',
	transitionIn: 'bounceInLeft',
	transitionOut: 'fadeOutLeft',
	timeout: 3000
});
// ======================== Валідація форми ================
const userEmail = document.querySelector('.contacts-email');
const form = document.querySelector('.form');
const invalidEmail = document.querySelector(".invalid-email");
const invalidText = document.querySelector(".invalid-text");
const userMessage = document.querySelector(".contacts-message");
const modal = document.querySelector('.modal-window');
const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const modalTitle = document.querySelector(".modal-header");
const modalText = document.querySelector(".modal-text");
const isEmailValid = function () {
	return pattern.test(userEmail.value);
};
const formSubmit = function (event) {
	event.preventDefault();
	const inputedEmail = event.target.user_email.value.trim();
	const inputedComment = event.target.user_message.value.trim();
	if (!isEmailValid()) {
		userEmail.classList.add('invalid');
		invalidEmail.classList.add('invalid');
		return;
	} else if (inputedComment.length < 10) {
		invalidText.classList.add('invalid');
		return;
	}
	userEmail.classList.remove('valid');
	userMessage.classList.remove('valid');
	userEmail.classList.remove('invalid');
	invalidEmail.classList.remove('invalid');
	invalidText.classList.remove('invalid');
	axios.post('/requests', {
		email: inputedEmail,
		comment: inputedComment ? inputedComment : "I`m interested in cooperation!"
	}).then(response => {
		modal.classList.remove("is-hidden");
		modalTitle.innerHTML = `${response.data.title}`;
		modalText.innerHTML = `${response.data.message}`;
		form.reset();
	}).catch(error => {
		iziToast.error({
			title: error.code,
			message: error.message
		});
	});
};

userMessage.addEventListener("input", (e) => {
	if (e.target.value.trim().length < 10) {
		userMessage.classList.remove('valid');
		return;
	}
	userMessage.classList.remove('invalid');
	invalidText.classList.remove('invalid');

	userMessage.classList.add('valid');

});

userEmail.addEventListener("input", (e) => {
	if (!pattern.test(e.target.value)) {
		userEmail.classList.remove('valid');
		return;
	}
	userEmail.classList.add('valid');
	userEmail.classList.remove('invalid');
	invalidEmail.classList.remove('invalid');
});

form.addEventListener("submit", formSubmit);
// ======================== Валідація форми ================



export * from "./work-together";