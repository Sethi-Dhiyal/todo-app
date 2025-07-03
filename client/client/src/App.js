import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState(""); // New state for due date
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!text.trim()) return;
    try {
      setLoading(true);
      await addTodo(text.trim(), dueDate); // Pass dueDate to API
      setText("");
      setDueDate("");
      fetchTodos();
    } catch (err) {
      console.error("Error adding todo:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (id, completed) => {
    try {
      await updateTodo(id, !completed);
      fetchTodos();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ✅ Todo App
          </h1>
          <p className="text-gray-600 text-lg">
            Stay organized and get things done!
          </p>
          {totalCount > 0 && (
            <div className="mt-4 text-sm text-gray-500">
              {completedCount} of {totalCount} tasks completed
            </div>
          )}
        </div>

        {/* Add Todo Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-lg"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                disabled={loading}
              />
              <input
                type="date"
                className="px-4 py-3 border-2 border-gray-200 rounded-lg"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                disabled={loading}
              />
              <button
                className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 hover:shadow-lg active:transform active:scale-95"
                }`}
                onClick={handleAdd}
                disabled={loading || !text.trim()}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Adding...
                  </div>
                ) : (
                  "Add Task"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && todos.length === 0 && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading todos...</p>
          </div>
        )}

        {/* Todo List */}
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>हर काम पूरा होगा, बस एक-एक करके।</p>
          <br />
          <p>Small steps every day lead to big changes.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
