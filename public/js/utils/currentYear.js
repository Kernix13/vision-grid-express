export function copyrightYear() {
	const currentYear = new Date().getFullYear();
	if (currentYear !== 2025) {
    return `2025 - ${currentYear}`;
	} else {
		return '2025';
	}
} 