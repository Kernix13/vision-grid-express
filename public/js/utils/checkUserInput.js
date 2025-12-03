export function checkUserInput(input, el) {
  const badCharacters = [' ',	'_',	'-',	'>',	'.',	'|',	';',	'[',	']',	'{',	'}',	'(',	')',	'*',	'`',	'~',	'"',	':'];
  
	if (input.value === '' || badCharacters.includes(input.value)) {
		const errorMsg = input.value === '' 
			? "Please enter a search term"
			: "Invalid search term - please try again";
		el.textContent = errorMsg;
		input.value = '';
		input.blur();
		return false;
	}
  return true;
}