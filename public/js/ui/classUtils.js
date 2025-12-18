// Adds & removes a class from an element on home page to show/hide element
export function addRemoveClass(element, add, remove) {
	element.classList.add(add);
	element.classList.remove(remove);
	if (remove === 'none') {
		element.removeAttribute('aria-hidden');
	}
	if (add === 'none') {
		element.setAttribute('aria-hidden', true);
	}
}

// Toggle display of settings form and thumbnails strip on board page
export function toggleDisplay(el, btn, str) {
	el.classList.toggle('onscreen');

	if (el.classList.contains('onscreen')) {
		btn.textContent = `Hide ${str}`;
	} else {
		btn.textContent = `Show ${str}`;
	}
}
