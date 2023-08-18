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
export { createGroup, getGroups };
