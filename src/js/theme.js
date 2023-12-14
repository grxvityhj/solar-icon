'use strict';

localStorage.theme && document.documentElement.setAttribute('data-theme', localStorage.theme);

const themeBtn = document.querySelector('.theme-btn');

function setTheme() {
  let theme =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  return theme;
}

function handleThemeBtn(){
  if (!themeBtn) return;
  themeBtn.addEventListener('click', setTheme);
}


handleThemeBtn();