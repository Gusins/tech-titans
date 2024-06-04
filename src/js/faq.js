import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
	beforeOpen: function (currentElement) {
		if (!currentElement.previousElementSibling) return;
		currentElement.previousElementSibling.style.borderBottom = "none";
	},
	beforeClose: function (currentElement) {
		if (!currentElement.previousElementSibling) return;
		currentElement.previousElementSibling.style.borderBottom = "1px solid #ccc";
	}
});


export * from "./faq";