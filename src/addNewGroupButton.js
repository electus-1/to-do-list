import addGroupImg from "./img/addGroup.png";
import switchBetweenFormNButton from "./switchGroupFormButton";
export default function addNewGroup() {
  const addNewGroupButton = document.createElement("button");
  addNewGroupButton.id = "addNewGroup";

  const addGroupImage = document.createElement("img");
  addGroupImage.src = addGroupImg;
  addNewGroupButton.appendChild(addGroupImage);

  const addGroupText = document.createElement("p");
  addGroupText.textContent = "Add New Group";
  addNewGroupButton.appendChild(addGroupText);

  addNewGroupButton.addEventListener("click", (e) => {
    switchBetweenFormNButton(addNewGroupButton);
  });
  return addNewGroupButton;
}
