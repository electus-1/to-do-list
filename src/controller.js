function createGroup(groupName) {
  const groups = JSON.parse(localStorage.getItem("groups"));
  groups += { groupName };
  localStorage.setItem("groups", JSON.stringify(groups));
}

export { createGroup };
