const db = require("./models/index");

const listTodos = async () => {
  try {
    await db.Todo.showList();
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await listTodos();
})();
