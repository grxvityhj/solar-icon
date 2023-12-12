'use strict';

const generateSolarIcon = async function (icon, type, iconName, iconWidth) {
  if (!iconName) return;

  const URL = `https://grxvityhj.github.io/solar-icon/icon`;

  const res = await fetch(`${URL}/${type}/${iconName}.svg`);
  const data = await res.text();

  icon.innerHTML = data !== undefined ? data : '';
  
  const svgPath = icon.querySelectorAll('path');
  const svgCircle = icon.querySelectorAll('circle');

  for (const path of svgPath) {
    path.getAttribute('stroke-width') &&
      path.setAttribute('stroke-width', iconWidth);

    path.getAttribute('stroke') &&
      path.setAttribute('stroke', 'currentColor');

    path.getAttribute('fill') && path.setAttribute('fill', 'currentColor');
  }

  if (svgCircle.length) {
    for (const circle of svgCircle) {
      circle.getAttribute('stroke-width') &&
        circle.setAttribute('stroke-width', iconWidth);

      circle.getAttribute('stroke') &&
        circle.setAttribute('stroke', 'currentColor');

      circle.getAttribute('fill') && circle.setAttribute('fill', 'currentColor');
    }
  }
};

window.addEventListener('load', () => {
  const solarIcon = document.querySelectorAll('.solar-icon');

  for (const icon of solarIcon) {
    const label = icon.getAttribute('icon').trim();
    const type = icon.getAttribute('type') ? icon.getAttribute('type').trim() : 'linear';
    const strokeWidth = icon.getAttribute('stroke-width') ? icon.getAttribute('stroke-width') : '1.5';

    const args = [icon, type, label, strokeWidth];

    generateSolarIcon(...args);
  }
});