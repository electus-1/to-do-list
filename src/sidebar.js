import "./sidebar-style.css";
import homeImg from "./img/home.png";
import todayImg from "./img/today.png";
import weekImg from "./img/week.png";
import completedImg from "./img/completed.png";
import failedImg from "./img/failed.png";

import addButton from "./addButton";
import { groupSection, renderGroups } from "./groupSection";
import { navigateTo, nav } from "./navigator";

const navImages = [homeImg, todayImg, weekImg, completedImg, failedImg];
const navTexts = ["Home", "Today", "This Week", "Completed", "Failed"];

export default function sidebarComp() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  sidebar.style.maxHeight = `${
    document.querySelector("html").scrollHeight -
    document.querySelector("#header").offsetHeight
  }px`;
  sidebar.style.minHeight = sidebar.style.maxHeight;

  const add = addButton();
  sidebar.appendChild(add);

  const navLinks = document.createElement("ul");
  navLinks.id = "nav-links";

  navImages.forEach((image, index) => {
    navLinks.appendChild(
      listItemMaker(linkMaker(navTexts[index], iconMaker(image, linkWrapper())))
    );
  });

  sidebar.appendChild(navLinks);

  const group = groupSection();
  sidebar.appendChild(group);

  const keys = Object.keys(nav);
  let index = 0;
  navLinks.childNodes.forEach((_listItem) => {
    _listItem.setAttribute("data-nav", keys[index]);
    index = index + 1;
  });

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
  if (text === "Home") {
    parent.classList.add("selected");
    parent.style.borderBottom = "2px solid black";
  }
  link.textContent = text;
  link.classList.add("nav-link-text");
  parent.appendChild(link);
  return parent;
}

function linkWrapper() {
  const linkWrapper = document.createElement("div");
  linkWrapper.classList.add("nav-link-wrapper");
  return linkWrapper;
}

function listItemMaker(wrapper) {
  const listItem = document.createElement("li");
  listItem.classList.add("nav-link");
  listItem.appendChild(wrapper);

  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const selected = document.querySelector(".selected");
    if (selected === wrapper) {
      return;
    }
    selected.style.borderBottomWidth = "0px";
    selected.classList.remove("selected");
    wrapper.classList.add("selected");
    wrapper.style.borderBottom = "2px solid black";

    navigateTo(listItem.getAttribute("data-nav"));
  });

  listItem.addEventListener("mouseenter", (e) => {
    const previous = listItem.previousElementSibling;
    if (previous === null) {
      return;
    }
    if (previous.firstChild.classList.contains("selected")) {
      previous.firstChild.style.borderBottomWidth = "5px";
    }
  });

  listItem.addEventListener("mouseleave", (e) => {
    const previous = listItem.previousElementSibling;
    if (previous === null) {
      return;
    }
    if (previous.firstChild.classList.contains("selected")) {
      previous.firstChild.style.borderBottomWidth = "2px";
    }
  });
  return listItem;
}
