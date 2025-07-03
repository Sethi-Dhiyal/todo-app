// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const todoSchema = new mongoose.Schema({
//   text: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model("Todo", todoSchema);

// app.get("/todos", async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

// app.post("/todos", async (req, res) => {
//   const newTodo = new Todo({ text: req.body.text, completed: false });
//   await newTodo.save();
//   res.json(newTodo);
// });

// app.put("/todos/:id", async (req, res) => {
//   const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(updated);
// });

// app.delete("/todos/:id", async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// });

// app.listen(5000, () => console.log("Server started on port 5000"));
