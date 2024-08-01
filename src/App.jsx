import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./features/todos/todosSlice";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
