const sliderList = document.querySelector(".slider__list");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const items = document.querySelectorAll(".slider__item");

let slideIndex = 0;
const minSlideIdex = 0;
const itemWidth = getComputedStyle(items[0]).width;
const shift = parseInt(itemWidth);
const preShownItems = 300 / shift;
const maxSlideIdex = (items.length - preShownItems);

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