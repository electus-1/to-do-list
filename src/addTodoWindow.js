import { getToday, getTomorrow } from "./getToday";

export default function addTodoWindow(modal) {
  const window = document.createElement("form");
  window.id = "add-todo-window";
  window.autocomplete = false;

  const titleInput = document.createElement("input");
  titleInput.id = "title-input";
  titleInput.name = "title-input";
  titleInput.type = "text";
  titleInput.required = true;
  titleInput.minLength = 3;
  titleInput.maxLength = 32;
  titleInput.placeholder = "Title*";
  window.appendChild(titleInput);

  const descInput = document.createElement("textarea");
  descInput.id = "desc-input";
  descInput.name = "desc-input";
  descInput.required = false;
  descInput.placeholder = "Description(optional)";
  window.appendChild(descInput);

  const priorityContainer = document.createElement("fieldset");
  priorityContainer.id = "priority-container";
  const priorityLegend = document.createElement("legend");
  priorityLegend.textContent = "Priority*";
  priorityContainer.appendChild(priorityLegend);
  priorityContainer.appendChild(radio("low-radio", "Low"));
  priorityContainer.appendChild(radio("medium-radio", "Medium"));
  priorityContainer.appendChild(radio("high-radio", "High"));
  window.appendChild(priorityContainer);

  const dateContainer = document.createElement("div");

  const datePicker = document.createElement("input");
  datePicker.type = "date";
  datePicker.id = "date";
  datePicker.name = "date";
  datePicker.min = getToday();
  datePicker.value = getTomorrow();
  datePicker.required = true;

  const dateLabel = document.createElement("label");
  dateLabel.htmlFor = datePicker.id;
  dateLabel.textContent = "Due Date*";

  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(datePicker);

  window.appendChild(dateContainer);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    modal.removeChild(window);
  });
  window.appendChild(submitButton);

  return window;
}

function radio(radioId, labelText) {
  const container = document.createElement("div");
  container.classList.add("priority");

  const radioInput = document.createElement("input");
  radioInput.id = radioId;
  radioInput.type = "radio";
  radioInput.name = "priority";
  radioInput.required = true;

  const label = document.createElement("label");
  label.textContent = labelText;
  label.htmlFor = radioId;

  container.appendChild(label);
  container.appendChild(radioInput);

  return container;
}
