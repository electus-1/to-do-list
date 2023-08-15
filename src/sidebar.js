import "./sidebar-style.css";
import homeImg from "./img/home.png";
import todayImg from "./img/today.png";
import weekImg from "./img/week.png";
import completedImg from "./img/completed.png";
import failedImg from "./img/failed.png";

const navImages = [homeImg, todayImg, weekImg, completedImg, failedImg];
const navTexts = ["Home", "Today", "This Week", "Completed", "Failed"];

export default function sidebarComp() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.style.height = `${
    document.querySelector("html").scrollHeight -
    document.querySelector("#header").offsetHeight
  }px`;

  const navLinks = document.createElement("ul");
  navLinks.id = "nav-links";

  navImages.forEach((image, index) => {
    navLinks.appendChild(
      linkMaker(navTexts[index], iconMaker(image, listItemMaker()))
    );
  });

  sidebar.appendChild(navLinks);

  return sidebar;
}

function iconMaker(src, parent) {
  const icon = document.createElement("img");
  icon.src = src;
  icon.classList.add("nav-link-img");
  parent.appendChild(icon);
  return parent;
}

function linkMaker(text, parent) {
  const link = document.createElement("p");
  link.textContent = text;
  link.classList.add("nav-link-text");
  parent.appendChild(link);
  return parent;
}

function listItemMaker() {
  const listItem = document.createElement("li");
  listItem.classList.add("nav-link");
  return listItem;
}
