/* Declares a constant variable named toggleButton and 
assigns it the value of the element with the id of 'toggle-button' from the HTML document */
const menuToggle = document.getElementById('menu-toggle');

/* Declares another constant variable named naviList and 
assigns it the value of the element with the id of 'navi-list' from the HTML document */
const naviList = document.getElementById('navi-list');

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
        // Toggles the active class on the heading element
        footerHeader.classList.toggle('active-header');
    });
}