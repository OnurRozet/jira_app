import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import hava from "./images/hava.jpg";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, desc) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        desc: desc,
      },
    ];

    setTasks(createdTask);
  };

  const deletingTask = (id) => {
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = (id, updatedTitle, updatedDesc) => {
    const afterUpdatingForm = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, title: updatedTitle, desc: updatedDesc };
      }
      return task;
    });
    setTasks(afterUpdatingForm);
  };

  return (
    <div className="background">
      <div className="App">
        <TaskCreate onCreate={createTask} />
        <h2>Görevler</h2>
        <TaskList
          tasks={tasks}
          onDelete={deletingTask}
          onUpdate={editTaskById}
        />
      </div>
    </div>
  );
}

export default App;
