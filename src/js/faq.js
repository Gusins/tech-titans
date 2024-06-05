import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.accordion-container', {
	beforeOpen: function (currentElement) {
		if (!currentElement.previousElementSibling) return;
		currentElement.previousElementSibling.style.borderBottom = "none";
	},
	beforeClose: function (currentElement) {
		if (!currentElement.previousElementSibling) return;
		currentElement.previousElementSibling.style.borderBottom = "1px solid #ccc";
	},

});
acc.open(0);

export * from "./faq";