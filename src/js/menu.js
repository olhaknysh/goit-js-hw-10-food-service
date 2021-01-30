import menuItems from './menu.json';
import menuTemplate from './menu.hbs';

const containerRef = document.querySelector('.js-menu');
const markup = menuTemplate(menuItems);

containerRef.insertAdjacentHTML('beforeend', markup);
