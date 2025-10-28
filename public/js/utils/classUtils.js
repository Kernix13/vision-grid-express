
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