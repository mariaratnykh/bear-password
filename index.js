const input = document.querySelector('input');
const bearMovingParts = [document.querySelector('.nose'), document.querySelector('.eyes'), document.querySelector('.jaws')];

input.addEventListener('input', (evt) => {
  const style = createBearStyles(evt.target.value);
  bearMovingParts.forEach(bearOrgan => setStylesForElement(bearOrgan, style));
})

function setStylesForElement(elem, styles) {
  Object.entries(styles).forEach(styleItem => {
    elem.style[styleItem[0]] = styleItem[1];
  })
}

function createBearStyles (inputString) {
  if(inputString.length === 0) return { transform: ''};
  if(inputString.length < 12) {
    return {
      transform: `translateX(-${12 - inputString.length}px) translateY(5px)`,
    }
  }
  if(inputString.length === 12) {
    return {
      transform: `translateX(0px) translateY(5px)`,
    }
  }
  if(inputString.length > 12) {
    return {
      transform: `translateX(${inputString.length - 12}px) translateY(5px)`,
    }
  }
}