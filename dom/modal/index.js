const button = document.querySelector(".open-button");
const overlay = document.querySelector(".overlay");

console.log(button);
console.log(overlay);

button.addEventListener("click", function (event) {
  overlay.style.display = "flex";

  const modal = document.createElement("div");
  modal.classList.add("modal");
  overlay.appendChild(modal);

  const modalClose = document.createElement("a");
  modalClose.classList.add("modal__close");
  modalClose.textContent = "x";
  modal.appendChild(modalClose);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content"); 
  
  modalContent.innerHTML = `Hello, ${"world".bold()}!`;
  modal.appendChild(modalContent);

  modal.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  
  modalClose.addEventListener("click", function (event) {
    overlay.style.display = "none";
    overlay.removeChild(modal);
  });
});

overlay.addEventListener("click", function (event) {
  overlay.style.display = "none";
  
  const modal = document.querySelector(".modal");
  overlay.removeChild(modal);
})

