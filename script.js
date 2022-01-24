const mobile_menu = document.querySelector(".nav img");
const header = document.querySelector("header");
const mobile_menu_list = ["Portfolio", "About", "Contact"];

const displayMenu = (event) => {
  document.querySelector('.nav').classList.add('dn')
  const nav = document.createElement("nav");
  nav.className = 'mobile-nav-container'
  const xIcon = document.createElement("img");
  xIcon.src = "./img/x-Icon.png";
  xIcon.alt = "x icon";
  const ul = document.createElement("ul");
  ul.className = "mobile_nav";
  for (let i = 0; i < 3; i++) {
    let element = document.createElement("li");
    element.className = "mobile-item-list";
    let anchor_tag = document.createElement("a");
    anchor_tag.innerText = mobile_menu_list[i];
    anchor_tag.href = "#" + mobile_menu_list[i].toLowerCase();
    anchor_tag.className = "mobile_menu_links";
    element.appendChild(anchor_tag);
    ul.appendChild(element);
  }
  nav.appendChild(xIcon);
  nav.appendChild(ul);
  header.appendChild(nav);
};

mobile_menu.addEventListener("click", displayMenu);
