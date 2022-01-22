const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector('.btn');
const colorText = document.querySelector('.color');

button.addEventListener('click', () => {

    const rand = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = rand;
    colorText.innerHTML = rand;

});

// Action -> button click
// Result -> 1. body {background: "one of colors array children"} 
// 2. H2 background color name changes (HTMLElement.innerText)