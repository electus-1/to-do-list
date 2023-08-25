export default function newTodo(
  title,
  desc,
  priority,
  dateRegistered,
  dueDate,
  group
) {
  return { title, desc, priority, dateRegistered, dueDate, group };
}
