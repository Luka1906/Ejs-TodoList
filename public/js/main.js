const addButton = document.querySelector(".add-task-btn");
const addInput = document.querySelector(".new-task-input");
const form = document.querySelector("#new-task-form");
const tasks = document.querySelectorAll(".tasks")
 


addButton.addEventListener("click", () => {
    setTimeout(() => {
        addInput.value=""
    }, 500);
});




// addButton.addEventListener("click", async () => {
//   await fetch("http://localhost:3000/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: "LUKA CAR",
//   });
// });
