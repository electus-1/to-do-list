import addImage from "./img/addTODO.png";

export default function addButton() {
  const addButton = document.createElement("button");
  addButton.id = "addButton";

  const addButtonImg = document.createElement("img");
  addButtonImg.src = addImage;
  addButton.appendChild(addButtonImg);
  const display = addButtonImg.style.display;

  addButton.addEventListener("mouseover", (e) => {
    addButton.firstChild.remove();
    addButton.textContent = "ADD NEW TODO";
  });

  addButton.addEventListener("mouseleave", (e) => {
    addButton.textContent = "";
    addButton.appendChild(addButtonImg);
  });
  return addButton;
}
