import { getHome } from "./controller";
import generateTodo from "./todo";
export default function home() {
  const home = document.createElement("div");
  home.id = "home";
  const todos = getHome();
  if (todos === null) {
    return home;
  }
  todos.forEach((todo) => {
    home.appendChild(generateTodo(todo));
  });
  return home;
}
