const taskInputEl = document.getElementById("task-input");
const addTaskEl = document.getElementById("button");
const todoListEl = document.getElementById("todo-list");
const itemsLeftEl = document.getElementById("items-left");
const clearEl = document.getElementById("clean");

// console.log("taskInputEl");
// console.log("addTaskEl");
// console.log("todoListEl");
// console.log("itemsLeftEl");
// console.log("clean");

const today = new Date();
const option = { weekday: "long", month: "short", day: "numeric" };
const dataString = today.toLocaleDateString("en-us", option);
document.getElementById("date").textContent = dataString;

const task = [];
addTaskEl.addEventListener("click", () => {
  const taskValue = taskInputEl.value;

  task.push(taskValue);

  if (taskValue === "" || taskValue === " ") {
    return;
  }

  todoListEl.innerHTML = "";

  for (let i = 0; i < task.length; i++) {
    todoListEl.innerHTML += `<li class="p-1"><input type="checkbox"><span> ${task[i]} </span></li>`;
  }
  taskInputEl.value = "";
  itemsLeftEl.innerText = `${task.length} items Left `;
});
clearEl.addEventListener("click", () => {
  task.length = 0;
  todoListEl.innerHTML = "";
});
