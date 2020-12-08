let slideIndex = 0;
const minSlideIdex = 0;
const maxSlideIdex = 5;
const shift = 100;

const sliderList = document.querySelector(".slider__list");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");

leftArrow.addEventListener("click", function (event) {
  event.preventDefault();

  if (slideIndex > minSlideIdex) {
    slideIndex--;

    sliderList.style.right = `${shift * slideIndex}px`;
  }
});

rightArrow.addEventListener("click", function (event) {
  event.preventDefault();

  if (slideIndex < maxSlideIdex) {
    slideIndex++;

    sliderList.style.right = `${shift * slideIndex}px`;
  }
});