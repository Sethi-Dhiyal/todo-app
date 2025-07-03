import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const getTodos = () => axios.get(`${API_URL}/todos`);

export const addTodo = (text, dueDate) =>
  axios.post(`${API_URL}/todos`, { text, dueDate });

export const updateTodo = (id, completed) =>
  axios.put(`${API_URL}/todos/${id}`, { completed });

export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`);
