import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, desc) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      desc,
    });
    const createdTask = [
      ...tasks,
      response.data,
      // {
      //   id: Math.round(Math.random() * 999999),
      //   title: title,
      //   desc: desc,
      // },
    ];

    setTasks(createdTask);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deletingTask = async (id) => {
    axios.delete(`http://localhost:3004/tasks/${id}`);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = (id, updatedTitle, updatedDesc) => {
    axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      desc: updatedDesc,
    });
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
