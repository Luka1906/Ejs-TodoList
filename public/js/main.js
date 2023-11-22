const addButton = document.querySelector(".add-task-btn");
const addInput = document.querySelector(".new-task-input");

document.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("click", () => {
    setTimeout(() => {
      addInput.value = "";
    }, 500);
  });
});
