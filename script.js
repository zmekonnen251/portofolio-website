const mobileMenu = document.querySelector('.nav img');
const header = document.querySelector('header');
const mobileMenuList = ['Portfolio', 'About', 'Contact'];

const displayMenu = () => {
  document.querySelector('.nav').classList.add('dn');
  const nav = document.createElement('nav');
  nav.className = 'mobile-nav-container';
  const xIcon = document.createElement('img');
  xIcon.src = './img/x-Icon.png';
  xIcon.alt = 'x icon';
  const ul = document.createElement('ul');
  ul.className = 'mobile_nav';
  for (let i = 0; i < 3; i += 1) {
    const element = document.createElement('li');
    element.className = 'mobile-item-list';
    const anchorTag = document.createElement('a');
    anchorTag.innerText = mobileMenuList[i];
    anchorTag.href = `#${mobileMenuList[i].toLowerCase()}`;
    anchorTag.className = 'mobile_menu_links';
    element.appendChild(anchorTag);
    ul.appendChild(element);
  }
  nav.appendChild(xIcon);
  nav.appendChild(ul);
  header.appendChild(nav);
};

const resetDefault = (event) => {
  if (
    (event.target
      && event.target.parentNode.className === 'mobile-nav-container')
    || (event.target && event.target.className === 'mobile_menu_links')
  ) {
    document.querySelector('.mobile-nav-container').remove();
    document.querySelector('.nav').classList.remove('dn');
  }
};
mobileMenu.addEventListener('click', displayMenu);

document.addEventListener('click', (event) => resetDefault(event));
