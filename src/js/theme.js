const switchRef = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');

setBodyTheme();

switchRef.addEventListener('change', handleThemeSwitch);

function handleThemeSwitch() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.LIGHT) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function setBodyTheme() {
  const theme = localStorage.getItem('theme');

  if (!theme) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
  }

  if (theme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
  }

  if (theme === Theme.LIGHT) {
    bodyRef.classList.add(Theme.LIGHT);
  }
}
