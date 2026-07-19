function addTask(){
    let taskInput = document.getElementByld("taskInput");
    let taskList = document.getElementByld("taskList");
    
    if(taskInput.value === ""){
      alert("Please enter a task!");
      return;
    }
    
    let li = document.createElement("li");
    li.textContent = taskInput.value + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}