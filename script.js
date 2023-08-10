const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-button">Delete</span>
        `;
        
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}
