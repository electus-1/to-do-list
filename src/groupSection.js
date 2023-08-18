import addNewGroupButton from "./addNewGroupButton";

export default function groupSection() {
  const groupSection = document.createElement("div");
  groupSection.id = "groupSection";

  const groupSectionTitle = document.createElement("h2");
  groupSectionTitle.id = "groupSectionTitle";
  groupSectionTitle.textContent = "Groups";

  groupSection.appendChild(groupSectionTitle);

  const addNewGroupBtn = addNewGroupButton();
  groupSection.appendChild(addNewGroupBtn);

  const groups = document.createElement("div");
  groups.id = "groups";
  groupSection.appendChild(groups);

  return groupSection;
}
