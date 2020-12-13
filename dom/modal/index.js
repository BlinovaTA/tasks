const button = document.querySelector(".open-button");
const body = document.body;
const successModal = createModal(`${"All OK!".bold()}`)

button.addEventListener("click", function (event) {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  overlay.addEventListener("click", function (event) {
    if (!event.target.classList.contains("modal__content")) {
      modalClose.click();
    }
  });

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalClose = document.createElement("a");
  modalClose.classList.add("modal__close");
  modalClose.textContent = "x";
  modalClose.href = "#";

  modalClose.addEventListener("click", function (event) {
    event.preventDefault();
    body.removeChild(overlay);
  });

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");
  modalContent.innerHTML = content;

  modal.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  modal.appendChild(modalContent);
  modal.appendChild(modalClose);
  overlay.appendChild(modal);

  return overlay;
}



