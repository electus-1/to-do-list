import notePage from "./img/notepage.png";

export default function todo(todoData) {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.style.backgroundImage = notePage;

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
  dateRegistered.classList.add("dueDate");
  dueDate.textContent = `Due Date: ${todoData.dueDate}`;
  todo.appendChild(dueDate);

  const group = document.createElement("p");
  group.classList.add("todo-group");
  group.textContent = `Group: ${todoData.group}`;
  todo.appendChild(group);

  return todo;
}
