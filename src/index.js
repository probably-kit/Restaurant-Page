console.log('webpack is working');

import homeTab from './tabs/home';
import menuTab from './tabs/menu';
import contactTab from './tabs/contact';
import './styles/main.css';

function createTabNavigation() {
  const tabs = { home: homeTab, menu: menuTab, contact: contactTab };
  const content = gitdocument.getElementById('content');

  for (let tab in tabs) {
    const btn = document.createElement('button');
    btn.innerText = tab;
    btn.addEventListener('click', () => {
      content.innerHTML = '';
      content.appendChild(tabs[tab]());
    });
    document.body.appendChild(btn);
  }
}

createTabNavigation();

