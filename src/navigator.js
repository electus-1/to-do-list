import {
  filterCompleted,
  filterFailed,
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
});
function navigateTo(navigateTo) {
  const content = document.querySelector("#content");
  if (content.firstChild !== null) {
    content.firstChild.remove();
  }
  content.appendChild(generateContent(nav[navigateTo]));
}

export { navigateTo, nav };
