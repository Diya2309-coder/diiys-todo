/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  let today = new Date().toISOString().split("T")[0];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((items) => items.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((items) => items.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((items) => items.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map(
        (items) =>
          `${items.completed ? "[x]" : "[ ]"} ${items.title} ${
            items.dueDate === today ? "" : items.dueDate
          }`
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
