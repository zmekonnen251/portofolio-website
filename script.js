const mobile_menu = document.querySelector('.nav img')
const header = document.querySelector('header')

const displayMenu = (event) => {
	 const nav = document.createElement('nav')
	 const xIcon = document.createElement('img')
	 xIcon.src= "./img/x-Icon.png"
	 xIcon.alt= "x icon"
     const ul = document.createElement('ul')
     for (let i =0 ; i<3;i++){
     	let element = document.createElement('li')
     	element.className = 'mobile-item-list'
        ul.appendChild(element)
     }
     nav.appendChild(ul)
     header.appendChild(nav)
}

mobile_menu.addEventListener('click', displayMenu )