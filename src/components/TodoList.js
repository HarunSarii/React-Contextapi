import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const { todos, addTodo, removeTodo } = useContext(TodoListContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
  };
  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    removeTodo(id);
  };
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              key={todo.id}
              id={todo.id}
              onClick={handleRemoveTodo}
              className="item"
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">Add todo:</label>
        <input type="text" id="todo" onChange={handleChange} />
        <input
          type="submit"
          value="Add new todo"
          className="ui button primary"
          style={{ marginRight: "4px" }}
        />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change The Theme Button
      </button>
    </div>
  );
};

export default TodoList;
