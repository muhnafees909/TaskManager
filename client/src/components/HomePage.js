import React from "react";
import "../styles/HomePage.css";
import TaskForm from "./TaskForm";
import { useState } from "react";

const HomePage = () => {
  const [formButton, setFormButton] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="homepage-container">
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
        <div className="inner-flexbox">
          <div className="task-header">Completed</div>
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
