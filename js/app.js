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

const navItems = document.querySelectorAll('main > section');
const nameOfItems = [];
navItems.forEach((value,key)=>nameOfItems[key]=value.getAttribute('data-nav'));
console.log(nameOfItems);

const ulNavbar = document.querySelector('#navbar__list')

nameOfItems.forEach(value => {
    const li = document.createElement('li');
    li.textContent = value;
    li.classList.add("menu__link");
    ulNavbar.appendChild(li);
})

//Identificação da seção que está no viewport e 
// configuração desta seção como a seção ativa



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


