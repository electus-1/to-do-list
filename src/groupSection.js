import addNewGroupButton from "./addNewGroupButton";
import { getGroups } from "./controller";

function groupSection() {
  const groupSection = document.createElement("div");
  groupSection.id = "groupSection";

  const groupSectionTitle = document.createElement("h2");
  groupSectionTitle.id = "groupSectionTitle";
  groupSectionTitle.textContent = "Groups";

  groupSection.appendChild(groupSectionTitle);

  const addNewGroupBtn = addNewGroupButton();
  groupSection.appendChild(addNewGroupBtn);

  const groupsContainer = document.createElement("div");
  groupsContainer.id = "groups";
  groupSection.appendChild(groupsContainer);

  const groups = getGroups();
  if (groups !== null) {
    groups.forEach((groupName) =>
      groupsContainer.appendChild(group(groupName))
    );
  }

  return groupSection;
}

function renderGroups() {
  const groups = getGroups();
  if (groups !== null) {
    const groupContainer = document.querySelector("#groups");
    if (groupContainer !== null) {
      groupContainer.childNodes.forEach((child) => child.remove());
      groups.forEach((groupName) => {
        groupContainer.appendChild(group(groupName));
      });
    }
  }
}

function group(groupName) {
  const group = document.createElement("div");
  groupName = groupName.toLowerCase();
  group.textContent = `// ${
    groupName.charAt(0).toUpperCase() + groupName.slice(1)
  }`;
  group.classList.add("group");
  return group;
}

export { groupSection, renderGroups };
