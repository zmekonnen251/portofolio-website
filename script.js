const displayMenu = () => {
  const header = document.querySelector('header');
  const mobileMenuList = ['Portfolio', 'About', 'Contact'];
  document.querySelector('.nav').classList.add('dn');
  document.querySelector('body').classList.add('no-scroll');
  header.classList.add('h-100');
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
    document.querySelector('body').classList.remove('no-scroll');
    document.querySelector('header').classList.remove('h-100');
  }
};
const mobileMenu = document.querySelector('.nav img');
mobileMenu.addEventListener('click', displayMenu);

document.addEventListener('click', (event) => resetDefault(event));

/* works section */
const projectsData = () => {
  const projectsContainer = document.querySelector('.works');
  const cln = projectsContainer.cloneNode(true);
  const projectsDataObjectMobile = Array.from(cln.children).map(() => ({
    name: 'Multi Post Stories',
    closePopupSrc: './img/close-btn.png',
    ul: ['html', 'Bootstrap', 'Ruby on rails'],
    projectImgSrc: './img/project-img-mobile.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  }));
  const projectsDataObjectDesktop = Array.from(cln.children).map(() => ({
    name: 'Keeping track of hundreds  of components website',
    closePopupSrc: './img/close-btn.png',
    ul: ['html', 'Bootstrap', 'Ruby on rails'],
    projectImgSrc: './img/project-img-desktop.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  }));
  return [projectsDataObjectMobile, projectsDataObjectDesktop];
};

const popupProject = (event) => {
  const headlineLink = document.querySelector('#headline');
  headlineLink.click();
  const [mobilePopupsData, desktopPopusData] = projectsData();
  const projectBtns = document.querySelectorAll('.popup-btn');
  const popIndex = Array.from(projectBtns).indexOf(event.target);
  const projectPopups = document.querySelectorAll('.popup-container');
  if (projectPopups[popIndex].children[1].innerText.length) {
    projectPopups[popIndex].parentNode.classList.toggle('dn');
    document.querySelector('body').classList.toggle('no-scroll');
    document
      .querySelector('.works')
      .classList.toggle('w-100-no-padding-margin');
    document.querySelector('.headline').classList.toggle('blur-100vh');
    document.querySelector('header').classList.toggle('blur');
    return;
  }
  if (window.innerWidth >= 995) {
    projectPopups[popIndex].querySelector('.popup-heading').innerText = desktopPopusData[popIndex].name;
    projectPopups[popIndex].querySelector('.close-btn').src = desktopPopusData[popIndex].closePopupSrc;
    projectPopups[popIndex].querySelector('.popup-img').src = desktopPopusData[popIndex].projectImgSrc;
    projectPopups[popIndex].querySelector('.popup-description').innerText = desktopPopusData[popIndex].description;
    const ul = projectPopups[popIndex].querySelector('.popup-list');
    Array.from(ul.children).map((li, i) => {
      li.innerText = mobilePopupsData[popIndex].ul[i];
      return li.innerText;
    });
  } else {
    projectPopups[popIndex].querySelector('.popup-heading').innerText = mobilePopupsData[popIndex].name;
    projectPopups[popIndex].querySelector('.close-btn').src = mobilePopupsData[popIndex].closePopupSrc;
    projectPopups[popIndex].querySelector('.popup-img').src = mobilePopupsData[popIndex].projectImgSrc;
    projectPopups[popIndex].querySelector('.popup-description').innerText = mobilePopupsData[popIndex].description;
    const ul = projectPopups[popIndex].querySelector('.popup-list');
    Array.from(ul.children).map((li, i) => {
      li.innerText = mobilePopupsData[popIndex].ul[i];
      return li.innerText;
    });
  }
  projectPopups[popIndex].parentNode.classList.toggle('dn');
  document.querySelector('body').classList.toggle('no-scroll');
  document.querySelector('.works').classList.toggle('w-100-no-padding-margin');
  document.querySelector('.headline').classList.toggle('blur-100vh');
  document.querySelector('header').classList.toggle('blur');
};

const projectBtns = document.querySelectorAll('.popup-btn');

projectBtns[0].addEventListener('click', popupProject);
projectBtns[1].addEventListener('click', popupProject);
projectBtns[2].addEventListener('click', popupProject);
projectBtns[3].addEventListener('click', popupProject);
projectBtns[4].addEventListener('click', popupProject);
projectBtns[5].addEventListener('click', popupProject);
projectBtns[6].addEventListener('click', popupProject);

const removePopup = (event) => {
  if (event.target && event.target.className === 'close-btn') {
    event.target.parentNode.parentNode.classList.toggle('dn');
    document.querySelector('body').classList.toggle('no-scroll');
    document
      .querySelector('.works')
      .classList.toggle('w-100-no-padding-margin');
    document.querySelector('.headline').classList.toggle('blur-100vh');
    document.querySelector('header').classList.toggle('blur');
  }
};
document.addEventListener('click', removePopup);

const formSubmit = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('small');

const emailValidation = (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerText = 'Error: The email has to be in lowercase!';
    errorMessage.classList.toggle('dn');
    return errorMessage;
  }
  return formSubmit.submit();
};

formSubmit.addEventListener('submit', emailValidation);
