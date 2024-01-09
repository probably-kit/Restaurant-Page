console.log('webpack is working');

import homeTab from './tabs/home';
import menuTab from './tabs/menu';
import contactTab from './tabs/contact';
import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  content.appendChild(homeTab());

  document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.classList.contains('nav-link')) {
      event.preventDefault();
      const tabId = event.target.dataset.tab;
      content.innerHTML = '';
      content.appendChild(tabId === 'home' ? homeTab() : (tabId === 'menu' ? menuTab() : contactTab()));
    }
  });
});
