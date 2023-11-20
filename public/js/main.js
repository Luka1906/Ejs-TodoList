const addButton = document.querySelector(".add-task-btn");
const addInput = document.querySelector(".new-task-input");
const taskLists = document.querySelectorAll(".task-container");
const deleteBtns = document.querySelectorAll(".delete-btn");

document.addEventListener("DOMContentLoaded", () => {

  taskLists.forEach((taskList, i) => {
    const dynamicID = i;
    taskList.setAttribute("data-list-id", dynamicID);
 
  });

  deleteBtns.forEach((button) => {
    button.addEventListener("click", async () => {
        const listId = button.closest(".task-container").dataset.listId;
        // console.log(taskLists.push("LUKA"));

    

     


    })
  })

  

  addButton.addEventListener("click", () => {
    setTimeout(() => {
      addInput.value = "";
    }, 500);
  });
});

taskLists.forEach((taskList) => {
  taskList.addEventListener("click", (e) => {});
});

// deleteAllButton.addEventListener("click", async () => {
//   const response =  await fetch("http://localhost:3000/delete", {
//     method: "DELETE"
//   });
//   const data = await response;
//   console.log(response)

// })
