import switchBetweenFormNButton from "./switchGroupFormButton";
import { createGroup } from "./controller";
import { renderGroups } from "./groupSection";
export default function groupForm() {
  const form = document.createElement("form");
  form.id = "group-form";

  const groupInput = document.createElement("input");
  groupInput.id = "group-input";
  groupInput.name = "group-input";
  groupInput.type = "text";
  groupInput.required = true;
  groupInput.minLength = 3;
  groupInput.maxLength = 16;
  groupInput.placeholder = "Group Name";
  form.autocomplete = false;
  form.appendChild(groupInput);

  const confirmAddGroupButton = document.createElement("button");
  confirmAddGroupButton.textContent = "Add";
  confirmAddGroupButton.type = "submit";

  form.appendChild(confirmAddGroupButton);

  const cancelAddGroupButton = document.createElement("button");
  cancelAddGroupButton.textContent = "Cancel";
  form.appendChild(cancelAddGroupButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = groupInput.value;
    value = value.toLowerCase();
    if (value === "none" || value === "null") {
      alert(
        `"${
          value.charAt(0).toUpperCase() + value.slice(1)
        }" is not a valid group name.`
      );
      return;
    }
    const valid = createGroup(value);
    if (valid) {
      renderGroups();
      switchBetweenFormNButton(form);
    }
  });

  cancelAddGroupButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchBetweenFormNButton(form);
  });

  return form;
}
