export function toggleMenu(btn, nav) {
	/* Toggle active class */
	btn.classList.toggle('active');
	nav.classList.toggle('active');

	/* Toggle aria-expanded value */
	const menuOpen = nav.classList.contains('active');
	btn.setAttribute('aria-expanded', menuOpen);
}