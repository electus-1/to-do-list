import baseTodoWindow from "./baseTodoWindow";
import { editTodo } from "./controller";
import { isDatePassed, getToday } from "./date";

export default function editTodoWindow(modal, todoData) {
  const window = baseTodoWindow(modal);

  const titleInput = window.querySelector("#title-input");
  titleInput.value = todoData.title;
  const descInput = window.querySelector("#desc-input");
  descInput.value = todoData.desc ? todoData.desc : "";
  window.querySelector(
    `#${todoData.priority.toLowerCase()}-radio`
  ).checked = true;
  if (!isDatePassed(getToday(), todoData.dueDate)) {
    window.querySelector("#date").value = todoData.dueDate;
  }
  window.querySelector("#submit-todo").textContent = "Edit";

  const deleteButton = document.createElement("button");

  window.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const desc = descInput.value;
    let priority = null;

    document
      .querySelector("#priority-container")
      .querySelectorAll('input[name="priority"]')
      .forEach((radioButton) => {
        if (radioButton.checked) {
          priority = radioButton.value;
        }
      });
    const datePicker = document.querySelector("#date");
    const dueDate = datePicker.value;
    const groupSelector = document.querySelector("#group-select-input");
    const selectedGroup = groupSelector.value;

    const valid = editTodo(
      todoData.id,
      title,
      desc,
      priority,
      dueDate,
      selectedGroup,
      todoData.completed
    );
    if (valid) {
      modal.style.display = "none";
      modal.removeChild(window);
    }
  });

  return window;
}
