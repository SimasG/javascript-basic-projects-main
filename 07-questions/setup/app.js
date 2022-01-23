//using selectors inside the element
// traversing the dom

const faqs = document.querySelectorAll('[data-faq-target], [data-faq-icon-plus], [data-faq-icon-minus]');

const faqContents = document.querySelectorAll("[data-faq-content]");
const plusIcons = document.querySelectorAll("[data-faq-icon-plus-child]");
const minusIcons = document.querySelectorAll("[data-faq-icon-minus-child]");





faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        // Declaring the main variables

        // Why can't I just do "faqs.classList.toggle("active")"? Why do I have to declare faqTarget first?
        const faqTarget = document.querySelector(faq.dataset.faqTarget);
        const plusIcon = document.querySelector(faq.dataset.faqIconPlus);
        const minusIcon = document.querySelector(faq.dataset.faqIconMinus);

        // Making sure that all other icons & paragraphs are "closed" once we click on a new faq
        faqContents.forEach(faqContent => {
            faqContent.classList.remove("active");
        })

        plusIcons.forEach(iconPlus => {
            iconPlus.classList.remove("active");
        });

        minusIcons.forEach(iconMinus => {
            iconMinus.classList.remove("active");
        });
        
        // Adding the paragraph
        if (faqTarget.classList.contains("active")) {
            faqTarget.classList.remove("active");
        } else {
            faqTarget.classList.add("active");
        };

        // Addind the plus icon
        if (plusIcon.classList.contains("active")) {
            plusIcon.classList.remove("active");
        } else {
            plusIcon.classList.add("active");
        };

        // Adding the minus icon
        if (minusIcon.classList.contains("active")) {
            minusIcon.classList.remove("active");
        } else {
            minusIcon.classList.add("active");
        };




        // Adding the paragraph
        // faqTarget.classList.toggle("active")

        // Addind the plus icon
        // plusIcon.classList.toggle("active");

        // Adding the minus icon
        // minusIcon.classList.toggle("active");
    })
})

// Issue: once toggled, I cannot untoggle the icon by simply clicking on it.
// Reason: When I click on the icon for the second time, I should remove the "active" class.
// However, each time I click on the icon, all classes are removed before even reaching the "toggle" section.
// Hence, each time I'm clicking on the icon, I'm removing AND then adding the icon again via "toggle".
// That's why I can never remove it just by clicking on it.

// I probably need if statements