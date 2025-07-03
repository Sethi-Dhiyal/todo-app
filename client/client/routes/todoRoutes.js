const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
// const path = require("path");

// router.use(express.static(path.join(__dirname, '../../client/client/build')));

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create new todo
router.post("/", async (req, res) => {
  console.log("Creating todo:", req.body);
  console.log("Due date:", req.body.dueDate);

  const newTodo = new Todo({
    text: req.body.text,
    completed: false,
    dueDate: req.body.dueDate,
  });
  await newTodo.save();
  res.json(newTodo);
});

// Update todo by ID
router.put("/:id", async (req, res) => {
  console.log("completed:", req.body.completed);
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete todo by ID
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
