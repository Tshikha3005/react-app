import React, { useState } from "react";
import { TodoInput } from "./components/todo-input";
import { AddButton } from "./components/add-button";
import { TodoList } from "./components/todo-list";

function App() {
  const [todoText, setTodoText] = useState<string>("");
  const [todoError, setTodoError] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() === "") {
      setTodoError("Todo cannot be empty");
      return;
    }
    setTodos([...todos, todoText]);
    setTodoText("");
    setTodoError("");
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        textAlign: "center",
        height: "80vh",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        margin: "5rem auto",
        background: "#ffffff",
        borderRadius: "8px",
        padding: "2rem",
      }}
    >
      <div style={{ paddingTop: "1rem" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          What's your plan for today?
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          <TodoInput todoText={todoText} handleChange={handleChange} />
          <AddButton handleAddTodo={handleAddTodo} />
        </div>
      </div>
      {todoError && (
        <div style={{ color: "red", marginBottom: "1rem" }}>{todoError}</div>
      )}
      {todos.length === 0 ? (
        <span
          style={{
            color: "#888",
            fontStyle: "italic",
            background: "none",
          }}
        >
          List is empty
        </span>
      ) : (
        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
        </div>
      )}
    </div>
  );
}

export default App;
