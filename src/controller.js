function createGroup(groupName) {
  if (groupName.length < 3 || groupName.length > 16) {
    return false;
  }
  let groups = localStorage.getItem("groups");
  if (groups === null) {
    groups = [];
  } else {
    groups = JSON.parse(groups);
  }
  groups.push(groupName);
  localStorage.setItem("groups", JSON.stringify(groups));
  return true;
}

function getGroups() {
  return JSON.parse(localStorage.getItem("groups"));
}

function removeGroup(groupName) {
  let groups = localStorage.getItem("groups");
  if (groups !== null) {
    groups = JSON.parse(groups);
    const index = groups.indexOf(groupName);
    if (index > -1) {
      groups.splice(index, 1);
      localStorage.setItem("groups", JSON.stringify(groups));
      return true;
    }
    return false;
  }
  return false;
}
export { createGroup, getGroups, removeGroup };
