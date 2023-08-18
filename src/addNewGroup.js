import addGroupImg from "./img/addGroup.png";
export default function addNewGroup() {
  const groupSection = document.createElement("div");
  groupSection.id = "groupSection";

  const groupSectionTitle = document.createElement("h2");
  groupSectionTitle.id = "groupSectionTitle";
  groupSectionTitle.textContent = "Groups";

  groupSection.appendChild(groupSectionTitle);

  const addNewGroup = document.createElement("button");
  addNewGroup.id = "addNewGroup";

  const addGroupImage = document.createElement("img");
  addGroupImage.src = addGroupImg;
  addNewGroup.appendChild(addGroupImage);

  const addGroupText = document.createElement("p");
  addGroupText.textContent = "Add New Group";
  addNewGroup.appendChild(addGroupText);

  groupSection.appendChild(addNewGroup);
  return groupSection;
}
