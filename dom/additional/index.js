let blocksCount = 0;
let colorEven = false;

const inputNumber = document.querySelector(".controls__number");
const inputColor = document.querySelector(".controls__color");
const blocks = document.querySelector(".blocks");

const isEven = num => num % 2 === 0;

inputNumber.addEventListener("change", function (event) {
  let value = event.target.value;
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

  blocksCount = parseInt(value);
});

inputColor.addEventListener("change", function (event) {
  const color = event.target.value;
  const childNodes = blocks.childNodes;
  let colorToApply = "";

  for (let i = 0; i < blocks.childElementCount; i++) {
    if (colorEven) {
      colorToApply = isEven(i) ? "#fff" : color;
    } else {
      colorToApply = isEven(i) ? color : "#fff";      
    }

    childNodes[i].style.backgroundColor = colorToApply;
  }

  colorEven = !colorEven;
});