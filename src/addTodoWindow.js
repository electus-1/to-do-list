import baseTodoWindow from "./baseTodoWindow";
import { createTodo } from "./controller";

export default function addTodoWindow(modal) {
  const window = baseTodoWindow();
  window.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = window.querySelector("#title-input");
    const descInput = window.querySelector("#desc-input");
    const priorityContainer = window.querySelector("#priority-container");
    const datePicker = window.querySelector("#date");
    const groupSelector = window.querySelector("#group-select-input");

    const title = titleInput.value;
    const desc = descInput.value;
    let priority = null;
    priorityContainer
      .querySelectorAll('input[name="priority"]')
      .forEach((radioButton) => {
        if (radioButton.checked) {
          priority = radioButton.value;
        }
      });
    const dueDate = datePicker.value;
    const selectedGroup = groupSelector.value;

    const valid = createTodo(title, desc, priority, dueDate, selectedGroup);
    if (valid) {
      modal.style.display = "none";
      modal.removeChild(window);
    }
  });

  return window;
}
