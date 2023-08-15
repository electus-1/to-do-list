import headerComp from "./header";
import sidebarComp from "./sidebar";
import contentComp from "./content";
import "./style.css";
const body = document.querySelector("body");

body.appendChild(headerComp());
body.appendChild(sidebarComp());
body.appendChild(contentComp());
