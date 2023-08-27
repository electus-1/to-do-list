import addNewGroupButton from "./addNewGroupButton";
import { getGroups, removeGroup } from "./controller";
import { navigateTo } from "./navigator";

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
    const groupContainer = clearGroups();
    if (groupContainer !== null) {
      groups.forEach((groupName) => {
        groupContainer.appendChild(group(groupName));
      });
    }
  }
}

function group(groupName) {
  const group = document.createElement("div");
  group.classList.add("group");

  const groupText = document.createElement("p");
  groupText.textContent = `// ${
    groupName.charAt(0).toUpperCase() + groupName.slice(1)
  }`;

  group.appendChild(groupText);

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  group.appendChild(closeButton);

  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (removeGroup(groupName)) {
      renderGroups();
    }
  });

  group.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const selected = document.querySelector(".selected");
    if (selected === group) {
      return;
    }
    selected.style.borderBottomWidth = "0px";
    selected.classList.remove("selected");
    group.classList.add("selected");
    group.style.borderBottom = "2px solid black";
    navigateTo("GROUP", groupName);
  });

  group.addEventListener("mouseover", (e) => {
    closeButton.style.visibility = "visible";
  });

  group.addEventListener("mouseenter", (e) => {
    const previous = group.previousElementSibling;
    if (previous === null) {
      return;
    }
    if (previous.firstChild.classList.contains("selected")) {
      previous.firstChild.style.borderBottomWidth = "5px";
    }
  });

  group.addEventListener("mouseleave", (e) => {
    closeButton.style.visibility = "hidden";
    const previous = group.previousElementSibling;
    if (previous === null) {
      return;
    }
    if (previous.firstChild.classList.contains("selected")) {
      previous.firstChild.style.borderBottomWidth = "2px";
    }
  });
  return group;
}

function clearGroups() {
  const groupContainer = document.querySelector("#groups");
  if (groupContainer !== null) {
    groupContainer.childNodes.forEach((child) => child.remove());
    return groupContainer;
  }
  return null;
}

export { groupSection, renderGroups };
