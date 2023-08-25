import { getToday, isDatePassed } from "./date";
import newTodo from "./todoData";

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
  let groups = localStorage.getItem("groups");
  if (groups === null) {
    groups = [];
  } else {
    groups = JSON.parse(groups);
  }
  return groups;
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

function createTodo(title, desc, priority, dueDate, group) {
  if (title.length < 3 || title.length > 32) {
    return false;
  }
  if (desc === "") {
    desc = null;
  }
  const dateRegistered = getToday();
  if (isDatePassed(dateRegistered, dueDate)) {
    return false;
  }
  if (group.toLowerCase() == "none") {
    group = null;
  }
  const todo = newTodo(title, desc, priority, dateRegistered, dueDate, group);

  let todos = localStorage.getItem("todos");
  if (todos === null) {
    todos = [];
  } else {
    todos = JSON.parse(todos);
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  return true;
}
export { createGroup, getGroups, removeGroup, createTodo };
