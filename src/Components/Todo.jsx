import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../Redux/action";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    let newTodos = [...todos];
    newTodos.push({
      task: e.target.elements[0].value,
      status: false,
    });
    dispatch(addTodo(newTodos));
  };

  const toggleHandler = (e) => {
    let newTodos = [...todos];
    let id = +e.target.id;
    todos[id].status = !todos[id].status;
    dispatch(toggleTodo(newTodos));
  };

  return (
    <main>
      <h1>Todo List</h1>
      <form action="" onSubmit={formHandler}>
        <input
          type="text"
          placeholder="enter task"
          style={{ margin: "10px", padding: "4px" }}
        />
        <button>Add</button>
      </form>
      {todos.map((todo, index) => (
        <p style={{ textDecoration: todo.status && "line-through" }}>
          {todo.task}
          <button onClick={toggleHandler} id={index}>
            Toggle
          </button>
        </p>
      ))}
    </main>
  );
}
