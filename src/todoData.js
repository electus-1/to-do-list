export default function newTodo(
  title,
  desc,
  priority,
  dateRegistered,
  dueDate,
  group,
  id,
  completed
) {
  return {
    title,
    desc,
    priority,
    dateRegistered,
    dueDate,
    group,
    id,
    completed,
  };
}
