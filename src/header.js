import "./header-style.css";
import img from "./img/nut.png";

export default function headerComp() {
  const header = document.createElement("div");
  header.id = "header";

  const headerImage = document.createElement("img");
  headerImage.id = "header-img";
  headerImage.src = img;
  header.appendChild(headerImage);

  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.textContent = "Nutcracker";
  header.appendChild(headerTitle);

  return header;
}
