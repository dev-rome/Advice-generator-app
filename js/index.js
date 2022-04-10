"use strict";

const adviceNumber = document.querySelector(".advice__number");
const adviceQuote = document.querySelector(".advice__quote");
const adviceBtn = document.querySelector(".advice__btn");

adviceBtn.addEventListener("click", () => {
  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.innerHTML = data.slip.id;
      adviceQuote.innerHTML = `&#8220;${data.slip.advice}&#8221;`;
    });
});
