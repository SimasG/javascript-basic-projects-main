// 1. Using selectors inside the element




// 2. Traversing the DOM
// How is .question class connected to the .question-text, .plus-icon and .plus-icon?
// How are all these 3 classes toggled once .question is toggled?


//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
//   const faqText = question.querySelector(".question-text");
//   const plusIcon = question.querySelector(".plus-icon");
//   const minusIcon = question.querySelector(".minus-icon");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
