export function copyrightYear() {
	const currentYear = new Date().getFullYear();
	return currentYear !== 2025 ? `2025 - ${currentYear}` : '2025';
}
