import React, { Children, createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = () => {
  const [todos, setTodos] = useState([
    { text: "Plan the family trip", id: 1 },
    { text: "Go shopping for dinner", id: 2 },
    { text: "Go for a walk", id: 3 },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todos, id: Math.random() }]);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== Number(id);
      })
    );
  };
  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {Children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
