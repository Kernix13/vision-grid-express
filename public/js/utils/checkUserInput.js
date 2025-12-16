export function checkUserInput(input, el) {
	// Characters that do not return any results from Unsplash
	const badCharacters = [
		' ',
		'_',
		'-',
		'>',
		'.',
		'|',
		';',
		'[',
		']',
		'{',
		'}',
		'(',
		')',
		'*',
		'`',
		'~',
		'"',
		':',
	];
	const value = input.value.trim();

	if (!value || (value.length === 1 && badCharacters.includes(value))) {
		// Render p.error-message in the form element
		const errorMsg = !value
			? 'Please enter a search term'
			: 'Invalid search term - please try again';

		el.textContent = errorMsg;
		input.value = '';
		return true;
	}
}
