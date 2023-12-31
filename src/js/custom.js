const strokeInput = document.querySelector('.stroke-input');

strokeInput.addEventListener('input', () => {
  const pathAll = document.querySelectorAll('.section-icon path');
  const circleAll = document.querySelectorAll('.section-icon circle');
  const iconAll = document.querySelectorAll('.section-icon .solar-icon');
  const customWidth = strokeInput.value.trim();

  const reg = /^[+]?\d+(\.\d+)?$/;

  function setStrokeWidth(elements, strokeWidth = '1.5') {
    for (const el of elements) {
      el.getAttribute('stroke-width') && el.setAttribute('stroke-width', strokeWidth);
    }
  }

  if (customWidth === '') {
    setStrokeWidth(iconAll);
    setStrokeWidth(pathAll);
    setStrokeWidth(circleAll);
  };
  
  if (!reg.test(customWidth)) return;

  setStrokeWidth(iconAll, customWidth);
  setStrokeWidth(pathAll, customWidth);
  setStrokeWidth(circleAll, customWidth);
});