
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

export function toggleDisplay(el, btn, str) {
  el.classList.toggle('onscreen');

  if (el.classList.contains('onscreen')) {
    btn.innerText = `Hide ${str}`;
  } else {
    btn.innerText = `Show ${str}`;
  }
}