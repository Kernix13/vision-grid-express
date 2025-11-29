export function menuButton(btn, nav) {
	/* Toggle active class */
	btn.classList.toggle('active');
	nav.classList.toggle('active');

	/* Toggle aria-expanded value */
	const menuOpen = nav.classList.contains('active');
	btn.setAttribute('aria-expanded', menuOpen);
}

export function closeMenu(btn, nav) {
	btn.classList.remove('active');
	nav.classList.remove('active');

	const menuOpen = nav.classList.contains('active');
	btn.setAttribute('aria-expanded', menuOpen);
}
