import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <span
        onClick={() => onToggle(todo._id, todo.completed)}
        className={`flex-1 cursor-pointer text-lg transition-all duration-200 ${
          todo.completed
            ? "line-through text-gray-500"
            : "text-gray-800 hover:text-blue-600"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors duration-200"
        aria-label="Delete todo"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
