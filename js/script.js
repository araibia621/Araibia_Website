document.addEventListener('DOMContentLoaded', function () {

	const backdropEl = document.querySelector('.backdrop');
	const accordionHeaders = document.querySelectorAll('.accordion-header');

	accordionHeaders.forEach(header => {
		header.addEventListener('click', function () {
			const accordion = this.closest('.accordion');
			const content = accordion.querySelector('.accordion-content');
			const isOpen = accordion.classList.contains('open');

			accordionHeaders.forEach(otherHeader => {
				const otherAccordion = otherHeader.closest('.accordion');
				if (otherAccordion !== accordion) {
					otherAccordion.classList.remove('open');
					otherHeader.setAttribute('aria-expanded', 'false');
				}
			});

			if (isOpen) {
				accordion.classList.remove('open');
				this.setAttribute('aria-expanded', 'false');
			} else {
				accordion.classList.add('open');
				this.setAttribute('aria-expanded', 'true');
			}
		});
	});

	if (backdropEl !== null) {
		backdropEl.addEventListener('click', function () {
			hideBackdrop();
			closePricingAiAgent();
		});
	}

});

function toggleMenu() {

	let el = document.querySelector('.primary-navigation');

	if (el.classList.contains('active')) {
		el.classList.remove('active');
	}
	else {
		el.classList.add('active');
	}

}


function showBackdrop() {
	let el = document.querySelector('.backdrop');
	el.classList.add('active');
}

function hideBackdrop() {
	let el = document.querySelector('.backdrop');
	el.classList.remove('active');
}

function showPricingAiAgent() {
	let modalEl = document.querySelector('#pricing-ai-agent');
	modalEl.classList.remove('hide');
	showBackdrop();
}

function closePricingAiAgent() {
	let modalEl = document.querySelector('#pricing-ai-agent');
	modalEl.classList.add('hide');
	hideBackdrop();
}