import { getToday, getTomorrow } from "./date";
import { getGroups } from "./controller";
import notepage from "./img/notepage.png";

export default function baseTodoWindow(modal) {
  const window = document.createElement("form");
  window.id = "add-todo-window";
  window.autocomplete = false;

  const bgImage = document.createElement("img");
  bgImage.src = notepage;
  bgImage.id = "add-todo-bg";
  window.appendChild(bgImage);

  const close = document.createElement("span");
  close.classList.add("close");
  close.innerHTML = "&times;";
  close.addEventListener("click", (e) => {
    modal.style.display = "none";
    modal.removeChild(window);
  });
  window.appendChild(close);

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
  dateContainer.id = "date-container";

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

  const groupContainer = document.createElement("div");
  groupContainer.id = "group-container";
  const groupSelector = document.createElement("select");
  groupSelector.id = "group-select-input";
  groupSelector.name = "group-select-input";
  const groupLabel = document.createElement("label");
  groupLabel.textContent = "Group(optional)";
  groupLabel.htmlFor = groupSelector.id;
  let option = document.createElement("option");
  option.textContent = "None";
  option.value = null;
  groupSelector.appendChild(option);
  getGroups().forEach((group) => {
    option = document.createElement("option");
    option.textContent = group.charAt(0).toUpperCase() + group.slice(1);
    option.value = group;
    groupSelector.appendChild(option);
  });
  groupContainer.appendChild(groupLabel);
  groupContainer.appendChild(groupSelector);

  window.appendChild(groupContainer);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Create";
  submitButton.id = "submit-todo";

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
  radioInput.value = labelText.toLowerCase();

  const label = document.createElement("label");
  label.textContent = labelText;
  label.htmlFor = radioId;

  container.appendChild(label);
  container.appendChild(radioInput);

  return container;
}
