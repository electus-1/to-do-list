import baseTodoWindow from "./baseTodoWindow";
import { editTodo, deleteTodo, toggleComplete } from "./controller";
import { isDatePassed, getToday } from "./date";
import confirmDialogue from "./confirmDialogue";

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
  const groupSelector = window.querySelector("#group-select-input");
  groupSelector.querySelectorAll("option").forEach((option) => {
    if (option.value === todoData.group) {
      groupSelector.value = option.value;
    }
  });
  window.querySelector("#submit-todo").textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("todo-button");
  deleteButton.id = "delete-todo";
  window.appendChild(deleteButton);

  const toggleCompleteButton = document.createElement("button");
  toggleCompleteButton.type = "button";
  const completed = todoData.completed;
  if (completed === "no") {
    toggleCompleteButton.textContent = "Mark Completed";
  } else {
    toggleCompleteButton.textContent = "Mark Uncompleted";
  }
  toggleCompleteButton.classList.add("todo-button");
  toggleCompleteButton.id = "toggle-complete-todo";
  window.appendChild(toggleCompleteButton);

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

  deleteButton.addEventListener("click", (e) => {
    confirmDialogue(modal, "delete the todo", window, deleteTodo, todoData.id);
  });

  toggleCompleteButton.addEventListener("click", (e) => {
    confirmDialogue(
      modal,
      "mark todo as complete",
      window,
      toggleComplete,
      todoData.id
    );
  });

  return window;
}
