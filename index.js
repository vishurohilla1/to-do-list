mainDiv = document.getElementById("main-div");
mainDiv.classList = "border w-80 m-3"

input = document.createElement("textarea");
input.classList = "border m-2 px-2 py-1.5 h-10";
input.placeholder = "enter your task";

addButton = document.createElement("button");
addButton.classList = "border h-10 w-20 m-2";
addButton.innerText = "add task";

tasksArea = document.createElement("div");

addButton.addEventListener("click", addTask);

function addTask() {
    task = input.value;
    if (task == "") {
        alert("enter task to add");
        return 0;
    }
    let taskDiv = document.createElement("div");
    taskDiv.classList = "flex items-center justify-between m-1 border";
    let tPara = document.createElement("p");
    tPara.innerText = task;

    doneBtn = document.createElement("button");
    doneBtn.innerText = "✅";
    doneBtn.addEventListener("click", () => {
        taskDiv.classList.toggle("bg-gray-400");
        tPara.classList.toggle("line-through");

    });

    let delBtn = document.createElement("button");
    delBtn.innerText = "🗑️";
    delBtn.addEventListener("click", () => {
        taskDiv.remove();

    });

    taskDiv.appendChild(tPara);
    taskDiv.appendChild(doneBtn);
    taskDiv.appendChild(delBtn);

    tasksArea.appendChild(taskDiv);

    input.value = "";

}







mainDiv.appendChild(input);
mainDiv.appendChild(addButton);
mainDiv.appendChild(tasksArea);
