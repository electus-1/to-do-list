export default function confirmDialogue(
  modal,
  message,
  calledFrom,
  action,
  optData
) {
  modal.firstChild.remove();
  const window = document.createElement("div");
  modal.appendChild(window);
  window.id = "confirm-dialogue";

  const dialogue = document.createElement("p");
  dialogue.textContent = `Are you sure you want to ${message}?`;
  window.appendChild(dialogue);

  const yesButton = document.createElement("button");
  yesButton.textContent = "Yes";
  yesButton.type = "button";
  window.appendChild(yesButton);

  const noButton = document.createElement("button");
  noButton.textContent = "No";
  noButton.type = "button";
  window.appendChild(noButton);

  yesButton.addEventListener("click", (e) => {
    action(optData);
    modal.removeChild(window);
    modal.style.display = "none";
  });
  noButton.addEventListener("click", (e) => {
    modal.removeChild(window);
    modal.appendChild(calledFrom);
  });

  return window;
}
