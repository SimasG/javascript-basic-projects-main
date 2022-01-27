// 1. Declare buttons I'll be interacting with
// 2. Figure out how the buttons are connected to the content they represent (answer: data attributes)
// 3. Kill it with combo of toggles and if statements

const tabs = document.querySelectorAll('[data-id]');
const tabContents = document.getElementById('#id');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.id);

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tab.classList.add('active');
        target.classList.add('active');
    })
})