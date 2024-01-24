import React from "react";
import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm(props) {
  const [newTodo, setNewTodo] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
        props.onAddTodo(newTodo);
        setNewTodo('');
      }
  };
  return props.trigger ? (
    <div className="task-form-container">
      <div className="form-content">
        <h1 className="task-form-title">Add a New Task</h1>
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default TaskForm;
