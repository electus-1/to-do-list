import { convertToDateObject, getToday, isDatePassed } from "./date";
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
  const id = localStorage.getItem("id");
  if (id === null) {
    id = 0;
  } else {
    id = +id + 1;
  }
  const todo = newTodo(
    title,
    desc,
    priority,
    dateRegistered,
    dueDate,
    group,
    id,
    "no"
  );
  localStorage.setItem("id", id);

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

function getHome() {
  let todos = localStorage.getItem("todos");
  if (todos === null) {
    return null;
  }
  todos = JSON.parse(todos);

  return todos;
}

function filterToday() {
  const todos = getHome();
  if (todos === null) {
    return null;
  }
  return todos.filter((todo) => {
    return todo.dueDate === getToday();
  });
}

function filterWeek() {
  const todos = getHome();
  if (todos === null) {
    return null;
  }
  return todos.filter((todo) => {
    const dueDate = convertToDateObject(todo.dueDate).getTime();
    const today = new Date().getTime();
    const difference = (dueDate - today) / (1000 * 3600 * 24);
    console.log(difference);
    return difference > 0 && difference < 8;
  });
}

function filterCompleted() {
  const todos = getHome();
  if (todos === null) {
    return null;
  }
  return todos.filter((todo) => {
    return todo.completed === "yes";
  });
}

function filterFailed() {
  const todos = getHome();
  if (todos === null) {
    return null;
  }
  return todos.filter((todo) => {
    return todo.completed === "failed";
  });
}
export {
  createGroup,
  getGroups,
  removeGroup,
  createTodo,
  getHome,
  filterToday,
  filterWeek,
  filterCompleted,
  filterFailed,
};
