import groupForm from "./groupForm";
import addNewGroupButton from "./addNewGroupButton";

export default function switchBetweenFormNButton(item) {
  if (item.id === "addNewGroup") {
    document.querySelector("#groupSection").replaceChild(groupForm(), item);
    return;
  }
  document
    .querySelector("#groupSection")
    .replaceChild(addNewGroupButton(), item);
}
