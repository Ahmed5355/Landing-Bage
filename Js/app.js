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
 * Define Global Variables
 * 
*/
const mySection = document.querySelectorAll('section');
const myUl = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function to remove calss active
function removeClass(){
    for(let zz = 0;zz < mySection.length; zz++){
        myLinks[zz].classList.remove("active1");
        mySection[zz].classList.remove("active");

    };
}
// function to add calss active
function addClass(){
    const windowScroll = window.innerHeight - 400;
   
    for(let x = 0; x < mySection.length; x++){
        if(mySection[x].getBoundingClientRect().top < windowScroll){
            removeClass();
            myLinks[x].classList.add("active1");
            mySection[x].classList.add('active');
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let x = 0 ; x < mySection.length; x++){

    let myLi = document.createElement('li');
    let myDataNav = mySection[x].getAttribute('data-nav');
    myLi.innerHTML= myDataNav;

   
    myUl.appendChild(myLi);
}


// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", addClass);
window.onload = addClass;


// Scroll to anchor ID using scrollTO event
const myLinks = document.querySelectorAll("li");

for(let x = 0; x < myLinks.length; x++){
    myLinks[x].addEventListener('click',function(){
        //select section
        const section = document.getElementById(mySection[x].getAttribute('id'));

        section.scrollIntoView({behavior:"smooth"});
        // function for remove active class from links and sections
        removeClass();
        
        // add active class for links and sections
        myLinks[x].classList.add("active1");
        section.classList.add("active");

    })
}






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
//button for mobile to show menu and hide menu
const myButton = document.querySelector('.button-menu');

myButton.addEventListener('click',function(){
    myUl.classList.toggle("display-ul")
});
for(let x = 0; x < myLinks.length;x++){
    myLinks[x].addEventListener("click",function(){
        myUl.classList.toggle("display-ul")
    })
}


// Scroll to section on link click

// Set sections as active
