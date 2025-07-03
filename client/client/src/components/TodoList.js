import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-500 text-lg">No todos yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="max-w-2xl mx-auto mt-8 space-y-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;