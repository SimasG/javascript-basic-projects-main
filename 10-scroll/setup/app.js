// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
    containerHeight = linksContainer.getBoundingClientRect();
    // console.log(containerHeight);

    linksHeight = links.getBoundingClientRect();
    console.log(linksHeight);

    // once the navbar is open (.show-links class is on), 
    // the container height has to be the same as linksHeight
})

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
