// Used in index.js and indexEvents.js
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

// Used in board.js and boardEvents.js
export function toggleDisplay(el, btn, str) {
	el.classList.toggle('onscreen');

	if (el.classList.contains('onscreen')) {
		btn.textContent = `Hide ${str}`;
	} else {
		btn.textContent = `Show ${str}`;
	}
}
