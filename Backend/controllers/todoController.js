import Todo from "../models/Todo.js";

// GET
export const getTodos = async (req, res) => {
  const todos = await Todo.find({
    user: req.user,
  });

  res.json(todos);
};

// CREATE
export const createTodo = async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    user: req.user,
  });

  res.json(todo);
};

// UPDATE
export const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.json(todo);
};

// DELETE
export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};