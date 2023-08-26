import home from "./home";

const nav = Object.freeze({
  HOME: home,
  TODAY: null,
  WEEK: null,
  COMPLETED: null,
  FAILED: null,
});
function navigateTo(navigateTo) {
  const content = document.querySelector("#content");
  if (content.firstChild !== null) {
    content.firstChild.remove();
  }
  content.appendChild(nav[navigateTo]());
}

export { navigateTo, nav };
