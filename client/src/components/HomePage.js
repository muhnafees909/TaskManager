import React from "react";
import "../styles/HomePage.css";
import TaskForm from "./TaskForm";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [formButton, setFormButton] = useState(false);
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodoUpdate = (todo, index) => {
    const newInProgressTask = { id: Date.now(), todo };

    setInProgress((prevInProgress) => [...prevInProgress, newInProgressTask]);
    handleTodoDelete(index);
  };

  const handleTodoDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleTodoComplete = (todo, todoId) => {
    setCompleted((prevCompleted) => [
      ...prevCompleted,
      { id: Date.now(), task: todo },
    ]);
    handleTodoDelete(todoId);
  };

  const handleInProgressTodo = (todoId) => {
    const todoToComplete = inProgress.find((todo) => todo.id === todoId);

    if (todoToComplete) {
      setTodos((prevTodo) => [...prevTodo, todoToComplete.todo]);
      handleInProgressDelete(todoId);
    }
  };

  const handleInProgressComplete = (todoId) => {
    const todoToComplete = inProgress.find((todo) => todo.id === todoId);

    if (todoToComplete) {
      setCompleted((prevCompleted) => [
        ...prevCompleted,
        { id: Date.now(), task: todoToComplete.todo },
      ]);
      handleInProgressDelete(todoId);
    }
  };

  const handleInProgressDelete = (todoId) => {
    setInProgress((prevInProgress) =>
      prevInProgress.filter((todo) => todo.id !== todoId)
    );
  };

  const handleCompleteDelete = (todoId) => {
    setCompleted((prevCompleted) =>
      prevCompleted.filter((todo) => todo.id !== todoId)
    );
  };

  return (
    <div className="homepage-container">
      console.log("completed:", completed); console.log("todos:", todos);
      <div className="header">
        <h1 className="homepage-header">TaskMate</h1>
      </div>
      <button className="new-task-btn" onClick={() => setFormButton(true)}>
        New Task +
      </button>
      <div className="outer-flexbox">
        <div className="inner-flexbox">
          <div className="task-header">Todo</div>

          <div className="task-list">
            {todos.map((todo, index) => (
              <div key={index} className="flex-item">
                <div className="task-date">Today*</div>
                <div className="task-name">{todo}</div>
                <div className="task-time">9:00 AM - 12:00 PM</div>
                <button
                  className="update-task-btn"
                  onClick={() => handleTodoUpdate(todo, index)}
                >
                  Update
                </button>
                <button
                  className="delete-task-btn"
                  onClick={() => handleTodoDelete(index)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button
                  className="complete-task-btn"
                  onClick={() => handleTodoComplete(todo, index)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </button>
              </div>
            ))}
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
          </div>
        </div>
        <div className="inner-flexbox">
          <div className="task-header">In Progress</div>
          <div className="task-list">
            {inProgress.map((todo) => (
              <div key={todo.id} className="flex-item">
                <div className="task-date">Today*</div>
                <div className="task-name">{todo.todo}</div>
                <div className="task-time">9:00 AM - 12:00 PM</div>
                <button
                  className="delete-task-btn"
                  onClick={() => handleInProgressDelete(todo.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button
                  className="complete-task-btn"
                  onClick={() => handleInProgressComplete(todo.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </button>
                <button
                  className="update-task-btn"
                  onClick={() => handleInProgressTodo(todo.id)}
                >
                  Update
                </button>
              </div>
            ))}
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
          </div>
        </div>
        <div className="inner-flexbox">
          <div className="task-header">Completed</div>
          <div className="task-list">
            {completed.map((todo) => (
              <div key={todo.id} className="flex-item">
                <div className="task-date">Today*</div>
                <div className="task-name">{todo.task}</div>
                <div className="task-time">9:00 AM - 12:00 PM</div>
                <button
                  className="delete-task-btn"
                  onClick={() => handleCompleteDelete(todo.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            ))}
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
          </div>
        </div>
        <div className="inner-flexbox">
          <div className="task-header">Overdue</div>
          <div className="task-list">
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
            <div className="flex-item">
              <div className="task-date">Today*</div>
              <div className="task-name">Finish this project</div>
              <div className="task-time">9:00 AM - 12:00 PM</div>
            </div>
          </div>
        </div>
      </div>
      <TaskForm
        trigger={formButton}
        setTrigger={setFormButton}
        onAddTodo={handleAddTodo}
      >
        <h3>Form</h3>
      </TaskForm>
    </div>
  );
};

export default HomePage;
