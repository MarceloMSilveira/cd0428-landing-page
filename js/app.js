/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Creating a new section (Section 4)

const fragment = document.createDocumentFragment();
const h2 = document.createElement("h2");
h2.textContent = "Section 4";
const div = document.createElement("div");
div.classList.add("landing__container");
div.appendChild(h2);
const p1 = document.createElement('p');
p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
div.appendChild(p1);
const p2 = document.createElement('p');
p2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
div.appendChild(p2);
const section = document.createElement('section');
section.setAttribute('id','section4');
section.setAttribute('data-nav','Section 4');
section.appendChild(div);
fragment.appendChild(section);
const main = document.querySelector('main');
main.appendChild(fragment);


//Create a nav bar with de section's text
//navItems === sections
const navItems = document.querySelectorAll('main > section');
const nameOfItems = [];
navItems.forEach((value,key)=>nameOfItems[key]=value.getAttribute('data-nav'));
//console.log(nameOfItems);

const ulNavbar = document.querySelector('#navbar__list')

nameOfItems.forEach(value => {
    const a = document.createElement('a');
    a.textContent = value;
    const li = document.createElement('li');
    li.classList.add("menu__link");
    li.appendChild(a)
    ulNavbar.appendChild(li);
})

//De acordo com a seção ativa, mudar a seção em destaque
//no nav bar:

const menuItems = document.querySelectorAll("li.menu__link");
//console.log(menuItems);

function ChangeSectionOnNavBar(section){

    menuItems.forEach((value)=>{
        const link = value.querySelector('a')
        if (section.getAttribute('data-nav')===value.textContent) {
            link.classList.add('showup-link');
        } else {
            link.classList.remove('showup-link')
        }
    })
}


//Identificação da seção que está no viewport e 
// configuração desta seção como a seção ativa

const sections = navItems;

function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        //console.log(box.top)
        //Find a value that works best, but 150 seems to be a good start.
        const VALUE = 150;
        if (box.top <= VALUE && box.bottom >= VALUE) {
        //apply active state on current section and corresponding Nav link
            section.classList.add('your-active-class');
            ChangeSectionOnNavBar(section);
        } else {
        //Remove active state from other section and corresponding Nav link
            section.classList.remove('your-active-class');
        }
     }
}

document.addEventListener('scroll',()=>makeActive());

//configuração dos links dentro dos li para conter as referências 
//aos id de cada seção

const links = document.querySelectorAll("li.menu__link a");

links.forEach(value=>{
    const link = value;
    navItems.forEach((value)=>{
        if(value.getAttribute('data-nav')===link.textContent){
            link.setAttribute('href',`#${value.getAttribute('id')}`)
        }
    })
})
    
//identificando um click no menu nav bar
// e navegando para a seção correspondente

ulNavbar.addEventListener('click',(e)=>{
    e.preventDefault();
    const target = e.target;
    //console.log(target);
    const href = target.getAttribute('href');
    //console.log(href);
    const section = document.querySelector(href);

    section.scrollIntoView({
        bahavior: "smooth"
    })

})

//hiding navbar

let lastScrollTop = 0;
const navbar = document.querySelector('.page__header');
console.log(navbar);
let scrollTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hide-navbar__menu'); // Adjust based on navbar height
    } else {
        navbar.classList.remove('hide-navbar__menu');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

    // Set a timeout to hide the navbar if scrolling stops
    scrollTimeout = setTimeout(() => {
        navbar.classList.add('hide-navbar__menu');
    }, 1000); // Adjust the delay as needed
});


//Fazer o menu aparecer em função da posição do mouse:

const detectionThreshold = 50; // Distance in pixels from the top to detect

document.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;

    if (mouseY <= detectionThreshold) {
        navbar.classList.remove('hide-navbar__menu');
    }
});


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


