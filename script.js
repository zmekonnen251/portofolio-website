const projectData = [
  {
    type: 'multi post',
    name: 'COVID-19 Stats',
    screen_shoots: 'img/project_screen_shots/covid19.gif',
    description: `COVID-19 Stats is a single-page app that delivers up-to-date information on COVID-19 in-country, continent, and global total data. The date input filter allows the user to retrieve data on any given date. React, Redux, and Tailwind CSS were used to create the app.
`,
    used_technologies: [
      'Reac.js',
      'Redux',
      'Tailwind CSS',
      'JavaScript',
      'Git',
    ],
    img: ['img/img_placeholder.png', 'img/project_screen_shots/covid19.gif'],
    links: {
      source: 'https://github.com/zmekonnen251/covid19-stats',
      live: 'https://covidstatupdate.netlify.app/',
    },
  },
  {
    type: 'regular',
    name: 'Leader Board',
    screen_shoots: 'img/img_placeholder.png',
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a standard dummy text.`,
    used_technologies: ['HTML', 'CSS', 'JavaScript'],
    img: [
      'img/project_screen_shots/tibeb_mobile.png',
      'img/project_screen_shots/tibeb_desktop.png',
    ],
    links: {
      source: 'https://github.com/zmekonnen251/lea',
      live: 'https://covidstatupdate.netlify.app/',
    },
  },
  {
    type: 'regular',
    name: 'Tibeb Front-end BootCamp',
    screen_shoots: 'img/img_placeholder.png',
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a standard dummy text.`,
    used_technologies: ['HTML', 'CSS', 'JavaScript'],
    img: [
      'img/project_screen_shots/tibeb_mobile.png',
      'img/project_screen_shots/tibeb_desktop.png',
    ],
    links: {
      source: 'https://github.com/zmekonnen251/Tibeb-FrontEnd-Bootcamp',
      live: 'https://zmekonnen251.github.io/Tibeb-FrontEnd-Bootcamp/src/',
    },
  },
  {
    type: 'regular',
    name: 'Todo List',
    screen_shoots: 'img/img_placeholder.png',
    description: `The project is a To-do list web app. It has basic CRUD operations, such as adding, removing, and editing tasks from the list. Don't worry about the storage. Your lists will be in your browser's local storage. I used JavsScript ,Css ,Html and Webpack to build this project.`,
    used_technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    img: [
      'img/project_screen_shots/to-do-list1.png',
      'img/project_screen_shots/todo.gif',
    ],
    links: {
      source: 'https://github.com/zmekonnen251/To-Do-List',
      live: 'https://wonderful-carson-a4a22b.netlify.app/',
    },
  },
  {
    type: 'regular',
    name: 'Space Travelers Hub',
    description: `The Space-Travelers-Hub is a web application that displays real-time data from the SpaceX API. Users can book rockets, dragons, and join selected space missions. You may also cancel any reservations that you wish.`,
    used_technologies: ['React.js', 'Redux', 'HTML', 'CSS', 'JavaScript'],
    img: [
      'img/project_screen_shots/space-traveler-mobile.png',
      'img/project_screen_shots/space-travelers.png',
    ],
    links: {
      source: 'https://github.com/mwafrika/space_traveller_hub',
      live: 'https://space-traveller.netlify.app',
    },
  },

  {
    type: 'regular',
    name: 'Lets Chill',
    description: `Let's Chill is a web application that generates random movies from the tv Maze API.`,
    used_technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Git'],
    img: [
      'img/project_screen_shots/mobile-home.png',
      'img/project_screen_shots/letschil1.gif',
    ],
    links: {
      source: 'https://github.com/Nemwel-Boniface/let-sChill',
      live: 'https://mystifying-haibt-69e737.netlify.app/',
    },
  },
  {
    type: 'regular',
    name: 'Space Travelers Hub',
    description: `The Space-Travelers-Hub is a web application that displays real-time data from the SpaceX API. Users can book rockets, dragons, and join selected space missions. You may also cancel any reservations that you wish.`,
    used_technologies: ['React.js', 'Redux', 'HTML', 'CSS', 'JavaScript'],
    img: [
      'img/project_screen_shots/space-traveler-mobile.png',
      'img/project_screen_shots/space-travelers.png',
    ],
    links: {
      source: 'https://github.com/mwafrika/space_traveller_hub',
      live: 'https://space-traveller.netlify.app',
    },
  },
];

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
    (event.target &&
      event.target.parentNode.className === 'mobile-nav-container') ||
    (event.target && event.target.className === 'mobile_menu_links')
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
    projectPopups[popIndex].querySelector('.popup-heading').innerText =
      desktopPopusData[popIndex].name;
    projectPopups[popIndex].querySelector('.close-btn').src =
      desktopPopusData[popIndex].closePopupSrc;
    projectPopups[popIndex].querySelector('.popup-img').src =
      desktopPopusData[popIndex].projectImgSrc;
    projectPopups[popIndex].querySelector('.popup-description').innerText =
      desktopPopusData[popIndex].description;
    const ul = projectPopups[popIndex].querySelector('.popup-list');
    Array.from(ul.children).map((li, i) => {
      li.innerText = mobilePopupsData[popIndex].ul[i];
      return li.innerText;
    });
  } else {
    projectPopups[popIndex].querySelector('.popup-heading').innerText =
      mobilePopupsData[popIndex].name;
    projectPopups[popIndex].querySelector('.close-btn').src =
      mobilePopupsData[popIndex].closePopupSrc;
    projectPopups[popIndex].querySelector('.popup-img').src =
      mobilePopupsData[popIndex].projectImgSrc;
    projectPopups[popIndex].querySelector('.popup-description').innerText =
      mobilePopupsData[popIndex].description;
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

// projectBtns[0].addEventListener('click', popupProject);
// projectBtns[1].addEventListener('click', popupProject);
// projectBtns[2].addEventListener('click', popupProject);
// projectBtns[3].addEventListener('click', popupProject);
// projectBtns[4].addEventListener('click', popupProject);
// projectBtns[5].addEventListener('click', popupProject);
// projectBtns[6].addEventListener('click', popupProject);

const removePopup = (event) => {
  if (event.target && event.target.className === 'close-btn') {
    document.querySelector('.popup').classList.toggle('dn');
    document.querySelector('body').classList.toggle('no-scroll');
    document
      .querySelector('.works')
      .classList.toggle('w-100-no-padding-margin');
    document.querySelector('.headline').classList.toggle('blur-100vh');
    document.querySelector('header').classList.toggle('blur');
  }
};

/* email validation */
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

/* local storage */

const fullName = document.querySelector('#name');
const message = document.querySelector('#message');
const storeData = (input) => {
  if (!window.localStorage.storedFormData) {
    const data = { name: '', email: '', message: '' };
    window.localStorage.storedFormData = JSON.stringify(data);
    return;
  }
  const data = JSON.parse(window.localStorage.storedFormData);
  data[input.name] = input.value;
  window.localStorage.storedFormData = JSON.stringify(data);
};

const getStoredData = () => {
  const inputData = JSON.parse(window.localStorage.storedFormData);
  return [inputData.name, inputData.email, inputData.message];
};
const handleInput = (event) => {
  storeData(event.target);
};

email.addEventListener('input', handleInput);
fullName.addEventListener('input', handleInput);
message.addEventListener('input', handleInput);

const displayStoredData = () => {
  const inputsData = JSON.parse(window.localStorage.storedFormData);
  if (
    inputsData.name.length ||
    inputsData.email.length ||
    inputsData.message.length
  ) {
    const [nameValue, emailValue, messageValue] = getStoredData();
    email.value = emailValue;
    fullName.value = nameValue;
    message.value = messageValue;
  }
};
window.addEventListener('load', displayStoredData);

const worksContainer = document.querySelector('.works');

window.addEventListener('load', () => {
  const closePopUp = document.querySelector('.close-btn');
  closePopUp.src = './img/close-btn.png';
  closePopUp.addEventListener('click', removePopup);
  projectData.map((project) => {
    if (project.type === 'multi post') {
      const multiPostSection = document.createElement('section');
      const multiPostBtn = document.createElement('button');

      multiPostBtn.classList.add('see_project_multi_post', 'button');
      multiPostBtn.innerText = 'See Project';

      multiPostSection.classList.add('multi_post');
      multiPostSection.innerHTML = `
        <img
          class="multi_post_img_mobile"
          src=${project.img[0]}
          alt="place holder image"
        />

        <img
          class="multi_post_img_desktop"
          src=${project.img[1]}
          alt="place holder image"
        />
       
      `;
      const multiPostDescription = document.createElement('div');
      multiPostDescription.classList.add('multipost_descrption');
      multiPostDescription.innerHTML = `   <h3 class="multi_post_heading">${project.name}</h3>
          <p class="multi_postproject_description">
            ${project.description}
          </p>

          <ul class="used_technology_multi_post">
            <li>${project.used_technologies[0]}</li>
            <li>${project.used_technologies[1]}</li>
            <li>${project.used_technologies[2]}</li>
            <li>${project.used_technologies[3]}</li>
          </ul>
        `;

      multiPostBtn.addEventListener('click', () => {
        const headlineLink = document.querySelector('#headline');
        headlineLink.click();
        const projectPopup = document.querySelector('.popup-container');
        document.querySelector('body').classList.toggle('no-scroll');
        document
          .querySelector('.works')
          .classList.toggle('w-100-no-padding-margin');
        document.querySelector('.headline').classList.toggle('blur-100vh');
        document.querySelector('header').classList.toggle('blur');

        document.querySelector('.popup-heading').innerText = project.name;

        document.querySelector('.popup-img').src = project.img[1];

        document.querySelector('.popup-description').innerText =
          project.description;
        document.querySelector('.see-live').href = project.links.live;
        document.querySelector('.see-source').href = project.links.source;
        const ul = document.querySelector('.popup-list');
        project.used_technologies.map((item) => {
          const li = document.createElement('li');
          li.classList.add('popup-list-item');
          li.innerText = item;
          ul.appendChild(li);
        });

        document.querySelector('.popup').classList.toggle('dn');
      });

      multiPostDescription.append(multiPostBtn);
      multiPostSection.appendChild(multiPostDescription);
      return worksContainer.appendChild(multiPostSection);
    } else {
      const div = document.createElement('div');
      div.classList.add('hover-effect', 'work_card');

      const seeProjectBtn = document.createElement('button');
      seeProjectBtn.innerHTML = 'See Project';
      seeProjectBtn.classList.add('button', 'see_project');

      div.innerHTML = `
      <h3 class="project_heading">${project.name}</h3>
      <p class="project_description">
        ${project.description}
      </p>`;

      const ul = document.createElement('ul');
      ul.classList.add('used_technology');

      project.used_technologies.map((items) => {
        const li = document.createElement('li');
        li.innerText = items;
        ul.appendChild(li);
      });
      div.appendChild(ul);
      const imgUrl = project.img[0];
      div.style.backgroundImage = ` linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(20,20,20,0.6)),url(${imgUrl})`;

      seeProjectBtn.addEventListener('click', () => {
        const headlineLink = document.querySelector('#headline');
        headlineLink.click();
        const projectPopup = document.querySelector('.popup-container');
        projectPopup.classList.toggle('dn');
        document.querySelector('.popup').classList.toggle('dn');
        document.querySelector('body').classList.toggle('no-scroll');
        document
          .querySelector('.works')
          .classList.toggle('w-100-no-padding-margin');
        document.querySelector('.headline').classList.toggle('blur-100vh');
        document.querySelector('header').classList.toggle('blur');

        document.querySelector('.popup-heading').innerText = project.name;

        document.querySelector('.popup-img').src = project.img[1];
        document.querySelector('.popup-description').innerText =
          project.description;
        document.querySelector('.see-live').href = project.links.live;
        document.querySelector('.see-source').href = project.links.source;
        const ul = document.querySelector('.popup-list');
        project.used_technologies.map((item) => {
          const li = document.createElement('li');
          li.classList.add('popup-list-item');
          li.innerText = item;
          ul.appendChild(li);
        });
      });
      div.appendChild(seeProjectBtn);

      return worksContainer.appendChild(worksContainer.appendChild(div));
    }
  });
});
