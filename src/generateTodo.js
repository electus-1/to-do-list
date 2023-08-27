import generateTodo from "./todo";
export default function generateContent(filterFunction, optArg) {
  const content = document.createElement("div");
  const todos = filterFunction(optArg);
  if (todos === null) {
    return content;
  }
  todos.forEach((todo) => {
    content.appendChild(generateTodo(todo));
  });
  return content;
}
