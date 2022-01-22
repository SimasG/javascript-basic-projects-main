// Things that I need to do:
// 1. When clicked "INCREASE", the number up top increases by 1 -> SOLVED
// 2. When clicked "DECREASE", the number up top decreases by 1 -> SOLVED
// 3. When clicked "RESET", the number up top gets reset to 0 -> SOLVED

// 4. If the number is positive, its color is green -> SOLVED
// 5. If the number is negative, its color is red -> SOLVED
// 6. If the number is 0, its color is black(ish) -> SOLVED

const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
let value = document.querySelector('.value');
let counter = 0;

function valueColor() {
    if (counter > 0) {
        value.style.color = "green";
    }   else if (counter < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#102A42";
    }
}

// "INCREASE" button
increaseBtn.addEventListener('click', () => {
    counter++;
    value.innerHTML = counter;
    valueColor();

    return counter;
})

// "DECREASE" button
decreaseBtn.addEventListener('click', () => {
    counter--;
    value.innerHTML = counter;
    valueColor();

    return counter;
})

// "RESET" button
resetBtn.addEventListener('click', () => {
    counter = 0;
    value.innerHTML = counter;
    valueColor();

    return counter;
})

