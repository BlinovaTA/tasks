const button = document.querySelector(".open-button");
const body = document.body;
const successModal = createModal(`${"All OK!".bold()}`)

button.addEventListener("click", function (event) {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const template = document.querySelector("#overlay-template");

  overlay.innerHTML = template.innerHTML;
  overlay.addEventListener("click", function (event) {
    if (!event.target.classList.contains("modal__content")) {
      modalClose.click();
    }
  });

  const modalClose = overlay.querySelector(".modal__close");
  modalClose.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlay);
  });

  const modalContent = overlay.querySelector(".modal__content");
  modalContent.innerHTML = content;

  return overlay;
}



