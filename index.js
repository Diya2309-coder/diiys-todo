/* eslint-disable no-unused-vars */
const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

//create the todo
const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "second item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`created todo with id : ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

//count the todo items
const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Found ${totalCount} items in the table!`);
  } catch (error) {
    console.error(error);
  }
};

//get all todos
const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll();
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

//get the single todo
const getSingleTodos = async () => {
  try {
    const todos = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });
    // const todoList = todos.map(todo => todo.displayableString()).join("\n");
    console.log(todos.displayableString());
  } catch (error) {
    console.error(error);
  }
};

//for update the items
const updateItems = async (id) => {
  try {
    const todo = await Todo.update(
      { completed: true },
      {
        where: {
          id: id,
        },
      }
    );
    //console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (id) => {
  try {
    const deletedRowCount = await Todo.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Deleted ${deletedRowCount} rows!`);
  } catch (error) {
    console.error(error);
  }
};

// const run = (async () =>{
//     await getAllTodos();
// await countItems();
// })
// run();

(async () => {
  //await createTodo();
  //await countItems();
  await getAllTodos();
  //await getSingleTodos();
  //await updateItems(2);
  // await deleteItem(2);
  // await getAllTodos();
})();
