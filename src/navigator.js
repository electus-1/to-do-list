import {
  filterCompleted,
  filterFailed,
  filterGroup,
  filterToday,
  filterWeek,
  getHome,
} from "./controller";
import generateContent from "./generateTodo";

const nav = Object.freeze({
  HOME: getHome,
  TODAY: filterToday,
  WEEK: filterWeek,
  COMPLETED: filterCompleted,
  FAILED: filterFailed,
  GROUP: filterGroup,
});
function navigateTo(navigateTo, groupName) {
  const content = document.querySelector("#content");
  if (content.firstChild !== null) {
    content.firstChild.remove();
  }

  if (navigateTo === "GROUP") {
    content.appendChild(generateContent(nav[navigateTo], groupName));
    return;
  }
  content.appendChild(generateContent(nav[navigateTo]));
}

export { navigateTo, nav };
