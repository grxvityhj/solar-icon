'use strict';

const BASE_URL = 'https://grxvityhj.github.io/solar-icon/icons';

async function generateSolarIcon(icon, type, iconName, iconWidth) {
  if (!iconName) return;

  const res = await fetch(`${BASE_URL}/${type}/${iconName}.svg`);
  const data = await res.text();

  if (!data.includes('svg')) return;

  icon.innerHTML = data !== undefined ? data : '';

  const svgPath = icon.querySelectorAll('path');
  const svgCircle = icon.querySelectorAll('circle');
  const svgRect = icon.querySelectorAll('rect');
  const svgEllipse = icon.querySelectorAll('ellipse');
  const svgG = icon.querySelectorAll('g');

  for (const path of svgPath) setSvg(path, iconWidth);

  if (svgCircle.length) {
    for (const circle of svgCircle) setSvg(circle, iconWidth);
  }

  if (svgRect.length) {
    for (const rect of svgRect) setSvg(rect, iconWidth);
  }

  if (svgEllipse.length) {
    for (const ellipse of svgEllipse) setSvg(ellipse, iconWidth);
  }

  if (svgG.length) {
    for (const g of svgG) setSvg(g, iconWidth);
  }
}

function setSvg(svgEl, iconWidth) {
  svgEl.getAttribute('stroke-width') &&
    svgEl.setAttribute('stroke-width', iconWidth);

  svgEl.getAttribute('stroke') && svgEl.setAttribute('stroke', 'currentColor');

  svgEl.getAttribute('fill') && svgEl.setAttribute('fill', 'currentColor');
}

window.addEventListener('load', () => {
  const solarIcon = document.querySelectorAll('.solar-icon');

  for (const icon of solarIcon) {
    const label = icon.getAttribute('icon').trim();
    const type = icon.getAttribute('type')
      ? icon.getAttribute('type').trim()
      : 'linear';
    const strokeWidth = icon.getAttribute('stroke-width')
      ? icon.getAttribute('stroke-width')
      : '1.5';

    const args = [icon, type, label, strokeWidth];

    generateSolarIcon(...args);
  }
});
