import notePageTop from "./img/notepage-top.png";
import notePageBottom from "./img/notepage-bottom.png";
import editTodoWindow from "./editTodoWindow";

export default function generateTodo(todoData) {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const topImage = document.createElement("img");
  topImage.src = notePageTop;
  topImage.classList.add("todo-top-img");
  todoContainer.appendChild(topImage);

  const todo = document.createElement("div");
  todo.classList.add("todo");

  const bgImage = document.createElement("img");
  bgImage.src = notePageBottom;
  bgImage.classList.add("todo-bottom-img");
  todo.appendChild(bgImage);

  const title = document.createElement("h2");
  title.classList.add("todo-title");
  title.textContent = todoData.title;
  todo.appendChild(title);

  const desc = document.createElement("p");
  desc.classList.add("todo-desc");
  desc.textContent = todoData.desc;
  todo.appendChild(desc);

  const priority = document.createElement("p");
  priority.classList.add("priority");
  priority.textContent = `Priority: ${todoData.priority}`;
  todo.appendChild(priority);

  const dateRegistered = document.createElement("p");
  dateRegistered.classList.add("dateRegistered");
  dateRegistered.textContent = `Date Registered: ${todoData.dateRegistered}`;
  todo.appendChild(dateRegistered);

  const dueDate = document.createElement("p");
  dueDate.classList.add("dueDate");
  dueDate.textContent = `Due Date: ${todoData.dueDate}`;
  todo.appendChild(dueDate);

  const group = document.createElement("p");
  group.classList.add("todo-group");
  group.textContent = `Group: ${todoData.group}`;
  todo.appendChild(group);

  todoContainer.appendChild(todo);

  todoContainer.addEventListener("click", (e) => {
    const modal = document.querySelector("#modal");
    modal.style.display = "flex";
    modal.appendChild(editTodoWindow(modal, todoData));
  });

  return todoContainer;
}
