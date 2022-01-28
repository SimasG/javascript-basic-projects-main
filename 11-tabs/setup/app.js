// 1. Declare elements I'll be interacting with
// 2. Figure out how the buttons are connected to the content they represent (answer: data attributes)
// 3. Kill it with combo of toggles and if statements

// const tabs = document.querySelectorAll('[data-id]');
// // const tabContents = document.querySelectorAll('.content');
// const tabContents = document.querySelectorAll('[data-tab-content]');
// console.log(tabContents);

// tabs.forEach(tab => {
//     // Listening for a click event for every single tab
//     tab.addEventListener('click', () => {

//         // Connecting the tab buttons with their respective content
//         const target = document.querySelector(tab.dataset.id);
//         console.log(target);

//         tabs.forEach(tab => {
//             tab.classList.remove('active')
//         })

//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('active')
//         })

//         tab.classList.add('active');
//         target.classList.add('active');
//     })
// })



// declaring the relevant elements
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

// adding an event listener to the whole about section
about.addEventListener('click', (e) => {
    // connecting the tab btn & content + fetching the id name of content that's connected to a clicked btn

    // target -> fetches the element that has been clicked on, not necessarily the parent element where
    // the event listener has been attached

    // fetching the content id
    const id = e.target.dataset.id;

    // if clicked element has id
    if (id) {

        // remove active from each btn and only add it to the clicked btn
        btns.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        // remove active from each content piece
        contents.forEach(content => {
            content.classList.remove('active');
        })

        // fetch the clicked content element
        const element = document.getElementById(id);
        // add active to it
        element.classList.add('active');
    }
})