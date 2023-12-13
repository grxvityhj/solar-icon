'use strict';

const generateSolarIcon = async function (icon, type, iconName, iconWidth) {
  if (!iconName) return;

  const URL = `https://grxvityhj.github.io/solar-icon/icon`;

  const res = await fetch(`${URL}/${type}/${iconName}.svg`);
  const data = await res.text();
  
  if (!data.includes('svg')) return;

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

const generator =() => {
    const activeSection = document.querySelector('.section--active');

    const solarIcon = activeSection.querySelectorAll('.solar-icon');

    for (const icon of solarIcon) {
      const label = icon.getAttribute('icon').trim();
      const type = icon.getAttribute('type') ? icon.getAttribute('type').trim() : 'linear';
      const strokeWidth = icon.getAttribute('stroke-width') ? icon.getAttribute('stroke-width') : '1.5';

      const args = [icon, type, label, strokeWidth];

      generateSolarIcon(...args);
    }
}

const iconContentAll = document.querySelectorAll('.icon-content');

iconContentAll.forEach(el => {
  el.addEventListener('click', e => {
    const modal = document.querySelector('.modal');
    const blockFull = document.querySelector('.block--full');
    const blockIcon = document.querySelector('.block--icon');

    const content = e.target.closest('.icon-content');
    const code = content.querySelector('.solar-icon');
    const type = code.getAttribute('type').trim();
    const strokeWidth = code.getAttribute('stroke-width') ? code.getAttribute('stroke-width').trim() : '';
    const icon = code.getAttribute('icon').trim();

    blockFull.innerHTML = `&lt;i class="solar-icon" type="${type}"${strokeWidth !== '' ? ` stroke-width="${strokeWidth}"` : ''} icon="${icon}"&gt;&lt;/i&gt;`;
    blockIcon.textContent = icon;

    modal.classList.add('active');
  });
});

const modalCloser = () => {
  const activeModalBg = document.querySelector('.modal-bg');

  if (!activeModalBg) return;

  activeModalBg.addEventListener('click', () => {
    document.querySelector('.modal.active').classList.remove('active');
  });
};


const clipboard = new Clipboard('.modal-btn');
const topBtn = document.querySelector('.top-btn');

const topBtnHandler = () => {

  if (!topBtn) return;

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

document.addEventListener('scroll', e => {
  const pos = window.scrollY - 50;
  const topBtn = document.querySelector('.top-btn');

  if (pos < 0) topBtn.style.display = 'none';
  if (pos > 100) {
    topBtn.style.display = 'flex';
    topBtn.style.opacity = '100%';
    return;
  }

  if (pos % 3 === 2) {
    topBtn.style.display = 'flex';
    topBtn.style.opacity = `${pos}%`;
  }
});

const tabContainer = document.querySelector('.tab');

tabContainer.addEventListener('click', e => {
  const tab = e.target.closest('.tab-item');
  const tabAll = document.querySelectorAll('.tab-item');
  const sectionAll = document.querySelectorAll('.section-icon');

  if (!tab) return;

  const nextTab = tab.textContent.trim();

  for (const item of tabAll) {
    item.classList.remove('tab--active');
  }

  for (const section of sectionAll) {
    section.classList.remove('section--active')
  }

  document.querySelector(`.tab--${nextTab}`).classList.add('tab--active');
  document.querySelector(`.section--${nextTab}`).classList.add('section--active');

  generator();
})

const btnIconAll = document.querySelectorAll('.modal-wrap .solar-icon');

for (const icon of btnIconAll) {
  const label = icon.getAttribute('icon').trim();
  const type = icon.getAttribute('type') ? icon.getAttribute('type').trim() : 'linear';
  const strokeWidth = icon.getAttribute('stroke-width') ? icon.getAttribute('stroke-width') : '1.5';

  const args = [icon, type, label, strokeWidth];

  generateSolarIcon(...args);
}

generator();
modalCloser();
topBtnHandler();
generateSolarIcon(topBtn, 'linear', 'chevron-up', '2');