let blocksCount = 0;
let colorEven = false;

const inputNumber = document.querySelector(".controls__number");
const inputColor = document.querySelector(".controls__color");
const blocks = document.querySelector(".blocks");

const isEven = num => num % 2 === 0;

inputNumber.addEventListener("change", function (event) {
  let value = event.target.valueAsNumber;
  if (isNaN(value)) {
    value = 0;
  }

  const childNodes = blocks.childNodes;

  if (blocksCount < value) {
    for (let i = blocksCount + 1; i <= value; i++) {
      const item = document.createElement("li");
      item.classList.add("blocks__item");
      item.textContent = i;
      blocks.appendChild(item);
    }
  } else if (blocksCount > value) {
    for (let i = blocksCount - 1; i >= value; i--) {
      blocks.removeChild(childNodes[i]);
    }
  }

  for (let i = 0; i < blocks.childElementCount; i++) {
    childNodes[i].style.backgroundColor = "#fff";
  }

  blocksCount = value;
});

inputColor.addEventListener("change", function (event) {
  const color = event.target.value;
  const childNodes = blocks.childNodes;

  for (let i = 0; i < blocks.childElementCount; i++) {
    if (colorEven) {
      if (isEven(i)) {
        childNodes[i].style.backgroundColor = "#fff";
      } else {
        childNodes[i].style.backgroundColor = color;
      }
    } else {
      if (isEven(i)) {
        childNodes[i].style.backgroundColor = color;
      } else {
        childNodes[i].style.backgroundColor = "#fff";
      }
    }
  }

  colorEven = !colorEven;
});