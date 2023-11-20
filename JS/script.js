/* Declares a constant variable named toggleButton and 
assigns it the value of the element with the id of 'toggle-button' from the HTML document */
const menuToggle = document.getElementById('menu-toggle');

/* Declares another constant variable named naviList and 
assigns it the value of the element with the id of 'navi-list2' from the HTML document */
const naviList = document.getElementById('navi-list2');

/* Adds an event listener to the toggleButton variable, 
which means that a function will be executed when the user clicks on the button */
menuToggle.addEventListener('click', () => {
    /* Toggles the class name of 'active' on the naviList variable, 
    which means that it will add or remove the class depending on its current state */
    naviList.classList.toggle('active'); 
}) // overrides display behaviour of the navigation list. adds active class upon first click

var footerToggle = document.getElementsByClassName('footer-toggle');
var footerList = document.getElementsByClassName('footer-list');
var footerHeader = document.getElementsByClassName('footerheader');

// Loops through each footer toggle button
for (let i = 0; i < footerToggle.length; i++) {
    // Adds a click event listener to the toggle button
    footerToggle[i].addEventListener("click", function() {
        // Toggles the active-footer class on the corresponding list element
        footerList[i].classList.toggle('active-footer');
        // Gets the next sibling element, which is the heading
        let footerHeader = this.nextElementSibling;
    });
}

/** Code developed from: https://alvarotrigo.com/blog/sticky-navbar/ **/
// Selects the .navbar element using a CSS selector
const navbar = document.querySelector(".navbar");

// Gets the viewport height (window.innerHeight) and the height of the navbar
const viewportHeight = window.innerHeight;
const navHeight = navbar.offsetHeight;

// Adds a scroll event listener to the window
window.addEventListener("scroll", () => {
    // Gets the current scroll position (vertical offset from the top)
    const scrollPos = window.scrollY;

    // Checks if the scroll position is below the threshold for sticky behavior
    if (scrollPos > viewportHeight - navHeight) {
        // If true, adds the "sticky" class to the navbar
        navbar.classList.add("sticky");
    } else {
        // Otherwise, removes the "sticky" class
        navbar.classList.remove("sticky");
    }
});