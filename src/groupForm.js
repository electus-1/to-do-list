import switchBetweenFormNButton from "./switchGroupFormButton";
export default function groupForm() {
  const form = document.createElement("form");
  form.id = "group-form";

  const groupInput = document.createElement("input");
  groupInput.type = "text";
  form.appendChild(groupInput);

  const confirmAddGroupButton = document.createElement("button");
  confirmAddGroupButton.textContent = "Add";
  form.appendChild(confirmAddGroupButton);

  const cancelAddGroupButton = document.createElement("button");
  cancelAddGroupButton.textContent = "Cancel";
  form.appendChild(cancelAddGroupButton);

  confirmAddGroupButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchBetweenFormNButton(form);
  });

  cancelAddGroupButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchBetweenFormNButton(form);
  });

  return form;
}
